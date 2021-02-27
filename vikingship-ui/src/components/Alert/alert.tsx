import React, { useState } from 'react'
import classnames from 'classnames'
import Icon from '../Icon'
import Transition from '../Transition'

export type AlertType = 'success' | 'primary' | 'warning' | 'danger'

export interface AlertProps {
  /** the title */
  title?: string;
  /** whether this alert can close. */
  closable?: boolean;
  /** the close icon */
  customClose?: string;
  /** onClose action */
  onClose?: (() => void);
  /** the description of this alert */
  children?: React.ReactNode;
  /** alert type */
  type: AlertType;
}

/**
 * This is an alert component. It can have multiple props like title, type, closeable,customClose.
 */
const Alert: React.FC<AlertProps> = (props) => {
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
