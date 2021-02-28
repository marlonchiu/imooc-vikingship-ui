import React, { useState } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'
import Transition from '../Transition'

export type AlertType = 'success' | 'primary' | 'warning' | 'danger' | 'default'

export interface AlertProps {
  /** 标题 */
  title?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
  /** the close icon */
  customClose?: string;
  /** 关闭alert时触发的事件 */
  onClose?: (() => void);
  /** 描述 */
  children?: React.ReactNode;
  /** 	类型 四种可选 针对四种不同的场景 */
  type: AlertType;
}

/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'vikingship'
 * ~~~
 */
export const Alert: React.FC<AlertProps> = (props) => {
  const { title, closable, type, customClose, onClose, children } = props

  const customCloseP = customClose || <Icon icon="times" className="window-close" size='lg'/>
  const classes = classnames('alert', {
    [`alert-${type}`]: type
  })

  const handleClick = () => {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }

  const [visible, setVisible] = useState(true)

  return (
    <Transition
      in={visible}
      timeout={300}
      animation="zoom-in-left"
      wrapper
    >
      <div className={classes}>
        {title ? <h4 className="alert-title">{title}</h4> : null}
        <p className="alert-message">{children}</p>
        {closable ? <i onClick={handleClick}>{customCloseP}</i> : null}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  closable: true,
  type: 'primary'
}
export default Alert
