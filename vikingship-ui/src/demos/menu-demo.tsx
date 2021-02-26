import React from 'react'
import Menu, { MenuMode } from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'

function MenuDemo() {
  return (
    <>
      <Menu defaultIndex={0} mode="vertical" onSelect={(index) => { alert(index) }}>
        <MenuItem>title one</MenuItem>
        <MenuItem index={1} disabled>disabled link</MenuItem>
        <MenuItem index={2}>
          <a href="http://www.baidu.com">Baidu!</a>
        </MenuItem>
        <MenuItem index={3}>
          cool
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuDemo
