import React from 'react'
import Tabs, { TabProps } from './tabs'
import TabsItem, { TabsItemProps } from './tabsItem'

type TabsComponent = React.FC<TabProps> & {
    Item?: React.FC<TabsItemProps>
}

let TransTab: TabsComponent = Tabs
TransTab.Item = TabsItem

// export type {TabProps, TabsItemProps}
export default TransTab
