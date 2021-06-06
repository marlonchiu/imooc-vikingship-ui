import React  from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'

// 上传前检测文件大小  直接返回布尔值
// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024) > 50) {
//     alert('file too big')
//     return false
//   }
//   return true
// }

// 上传前 改变文件名 返回 promise
const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', {type: file.type})
  return Promise.resolve(newFile)
}

const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      beforeUpload={filePromise}
    >
    </Upload>
  )
}

storiesOf('Upload component', module)
  .add('Upload', SimpleUpload)
