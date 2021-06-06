import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File; // 源文件
  response?: any;
  error?: any;
}

/**
 * 通过点击或者拖拽上传文件
 * ### 引用方法
 *
 * ~~~js
 * import { Upload} from 'vikingship-ui'
 * ~~~
 */
export interface UploadProps {
  /** 发送请求地址 */
  action: string;
  /** 文件列表 */
  defaultFileList?: UploadFile[];
  /**
   * 上传文件之前验证或进行转换
   * @param file
   */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** 上传过程的事件 */
  onProgress?: (percentage: number, file: File) => void;
  /** 上传成功的事件 */
  onSuccess?: (data: any, file: File) => void;
  /** 上传失败的事件 */
  onError?: (err: any, file: File) => void;
  /** 上传行为改变 */
  onChange?: (file: File) => void;
  /** 移除上传的文件 */
  onRemove?: (file: UploadFile) => void;
  /** 添加自定义 header */
  headers?: { [key: string]: any };
  // 添加name 属性 - 代表发到后台的文件参数名称
  /** 文件名 */
  name?: string;
  // 添加data属性 - 上传所需的额外参数
  /** 添加data属性 - 上传所需的额外参数 */
  data?: { [key: string]: any };
  /** 是否携带请求参数 */
  withCredentials?: boolean;
  // 添加input本身的file约束属性 multiple accept等
  // accept 限定约束文件的类型
  /** 可接受上传文件的类型 */
  accept?: string;
  /** 允许上传多个文件 */
  multiple?: boolean;
  /** 是否拖动上传 */
  drag?: boolean;
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    headers,
    name,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }

  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + '_upload_file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // setFileList([_file, ...fileList]) // 这个方式返回是空的
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      // 上传进度计算
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading' })
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, {status: 'success', response: resp.data})
      if (onSuccess) {
        onSuccess(resp.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err})
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(file)
      }
    })
  }


  return (
    <div className="viking-upload-component">
      <div
        className="viking-upload-input"
        style={{display: 'inline-block'}}
        onClick={handleClick}
      >
          {drag ?
            <Dragger onFile={(files) => {uploadFiles(files)}}>
              {children}
            </Dragger> :
            children
          }
        <input
          className="viking-file-input"
          style={{display: 'none'}}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>

  )
}

// Upload.defaultProps = {
//   name: 'file'
// }
export default Upload
