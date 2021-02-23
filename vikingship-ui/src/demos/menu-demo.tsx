import React from 'react'
import Menu, { MenuMode } from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'

function MenuDemo() {
  return (
    <>
      <Menu defaultIndex={0} mode="vertical">
        <MenuItem>title one</MenuItem>
        <MenuItem disabled>disabled link</MenuItem>
        <MenuItem>
          <a href="http://www.baidu.com">Baidu!</a>
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuDemo
