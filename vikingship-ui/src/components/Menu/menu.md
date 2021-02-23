# 组件说明

1. 顶部导航
   提供全局性的类目和功能
2. 侧边导航
   提供多级结构，来收纳和排列网站的架构

```jsx
<Menu defaultIndex={0} onSelect={} mode="vertical">
  <Menu.Item>title one</MenuItem>
  <Menu.Item disabled>disabled link</MenuItem>
  <Menu.SubMenu title={'test'}>
    <Menu.Item>cool link</Menu.Item>
    <Menu.Item>cool link</Menu.Item>
  </MenuItem>
  <Menu.Item>
    <a href="http://www.baidu.com">Baidu!</a>
  </MenuItem>
</Menu>
```

```typescript
interface MenuProps {
  activeIndex: number
  mode: string
  onSelect: (selectedIndex: number) => void
  className: string
}

interface MenuItemProps {
  index: number
  disabled: boolean
  className: string
}
```
