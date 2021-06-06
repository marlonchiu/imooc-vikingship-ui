import React, { FC } from 'react'
import { UploadFile } from './upload'
import Icon from '../Icon/icon'
import Progress from '../Progress/progress'

interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const UploadList: FC<UploadListProps> = (props) => {
  const {
    fileList,
    onRemove,
  } = props

  return (
    <ul className="viking-upload-list">
      {fileList.map(item => {
        return (
          <li className="viking-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
              {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => { onRemove(item)}}/>
            </span>
            {item.status === 'uploading' &&
              <Progress
                percent={item.percent || 0}
              />
            }
          </li>
        )
      })}
    </ul>
  )
}

export default UploadList
