import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Tabs from './tabs'
import TabsItem from './tabsItem'
import Icon from '../Icon'

export const defaultTabs = () => (
  <Tabs
    onSelect={function noRefCheck(){}}
  >
    <TabsItem label="选项卡一">
      this is content one
    </TabsItem>
    <TabsItem label="选项卡二">
      this is content two
    </TabsItem>
    <TabsItem label="用户管理">
      this is content three
    </TabsItem>
  </Tabs>
)

export const tabsWithOutline = () => (
  <Tabs
    onSelect={function noRefCheck(){}}
    styleType="outline"
  >
    <TabsItem label="card1">
      this is card one
    </TabsItem>
    <TabsItem label="card2">
      this is content two
    </TabsItem>
    <TabsItem
      disabled
      label="disabled"
    >
      this is content three
    </TabsItem>
  </Tabs>
)

export const tabsWithCustom = () => (
  <Tabs
    onSelect={function noRefCheck(){}}
    styleType="outline"
  >
    <TabsItem label={<><Icon icon="exclamation-circle" />{'  '}自定义图标</>}>
      this is card one
    </TabsItem>
    <TabsItem label="tab2">
      this is content two
    </TabsItem>
  </Tabs>
)

storiesOf('Tabs Component', module)
  .add('Tabs', defaultTabs)
  .add('选项卡样式的 Tabs', tabsWithOutline)
  .add('自定义选项卡样式 Tabs', tabsWithCustom)
