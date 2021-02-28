import React, { FC, useState, useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'
import Icon from '../Icon'
import Transition from '../Transition'

export interface SubMenuProps {
  /**  */
  index?: string;
  /** 	下拉菜单选项的文字 */
  title: string;
  /** 下拉菜单选型的扩展类名 */
  className?: string;
}

export const SubMenu: FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext)
  const { index, title, children, className } = props
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [ menuOpen, setOpen ] = useState(isOpened)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}


  const renderChildren = () => {
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error("Warning: SubMenu has a child which is not a MenuItem component")
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation="zoom-in-top"
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>

    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title"  {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
