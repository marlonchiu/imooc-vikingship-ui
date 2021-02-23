import React, { FC } from 'react'
import classNames from 'classnames'

export type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubs?: string[];
}


const Menu: FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal'
  })

  return (
    <ul
      className={classes}
      style={style}
    >
      {children}
    </ul>
  )
}


Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
