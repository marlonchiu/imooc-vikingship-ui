import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

export const defaultMenu = () => (
  <Menu onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <SubMenu title="下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)

export const menuWithVertical = () => (
  <Menu mode="vertical" onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <SubMenu title="点击下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)

export const menuWithOpened = () => (
  <Menu mode="vertical" defaultOpenSubMenus={['2']} onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem>
      cool link 2
    </MenuItem>
    <SubMenu title="默认展开下拉选项">
      <MenuItem>
        下拉选项一
      </MenuItem>
      <MenuItem>
        下拉选项二
      </MenuItem>
    </SubMenu>
  </Menu>
)

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('纵向的 Menu', menuWithVertical)
  .add('默认展开的纵向 Menu', menuWithOpened)
