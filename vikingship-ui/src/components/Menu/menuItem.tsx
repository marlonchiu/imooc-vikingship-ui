import React, { FC } from 'react'
import classNames from 'classnames'

interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, index, style, children, disabled } = props

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
    // 'is-active': context.activeIndex === index
  })

  return (
    <li
      className={classes}
      style={style}
    >
      {children}
    </li>
  )
}

export default MenuItem
