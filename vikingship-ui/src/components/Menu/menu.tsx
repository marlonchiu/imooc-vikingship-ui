import React, { FC, useState, createContext } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './menuItem'

export type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubs?: string[];
}

interface IMenuContext {
  activeIndex: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({ activeIndex: 0 })

const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal'
  })

  const handleSelect = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContent: IMenuContext = {
    activeIndex: currentActive ? currentActive : 0,
    onSelect: handleSelect
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return (
    <ul
      className={classes}
      style={style}
      data-testid="test-menu"
    >
      <MenuContext.Provider value={passedContent}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}


Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
