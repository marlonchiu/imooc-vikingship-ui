import React, { useState } from 'react'
import classnames from 'classnames'

export enum AlertType {
  Success = 'success',
  Primary = 'primary',
  Warning = 'warning',
  Danger = 'danger'
}

export interface BaseAlertProps {
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
const Alert: React.FC<BaseAlertProps> = (
  {
    title,
    closable = true,
    type = AlertType.Primary,
    customClose,
    onClose,
    children
  }) => {

  const customCloseP = customClose
  const classes = classnames('alert', {
    [`alert-${type}`]: type
  });

  const handleClick = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  const [visible, setVisible] = useState(true);
  return (
    <div className={classes}>
      {title ? <h4 className="alert-title">{title}</h4> : null}
      <p className="alert-message">{children}</p>
      {closable ? <i onClick={handleClick}>{customCloseP}</i> : null}
    </div>
  );
}

export default Alert
