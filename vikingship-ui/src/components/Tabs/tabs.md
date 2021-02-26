# tabs 说明

```jsx
<Tabs defaultIndex={0} onSelect={}>
  <TabItem label="card1">this is card one</TabItem>
  <TabItem label="card2">this is content two</TabItem>
  <TabItem label="disabled">this is content three</TabItem>
</Tabs>
```

```typescript
interface TabProps {
  defaultIndex: number
  styleType: string
  onSelect: (selectedIndex: number) => void
  className: string
}
```
