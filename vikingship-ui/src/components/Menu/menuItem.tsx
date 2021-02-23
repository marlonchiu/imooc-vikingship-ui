import React, { FC, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}


const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, index, style, children, disabled } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.activeIndex === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  return (
    <li
      className={classes}
      style={style}
      onClick={handleClick}
    >
      {children}
    </li>
  )
}

export default MenuItem
