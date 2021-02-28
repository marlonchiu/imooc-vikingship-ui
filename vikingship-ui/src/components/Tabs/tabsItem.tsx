import React from 'react'
import classNames from 'classnames'

export interface TabsItemProps {
  /** Tab选项上面的文字 */
  label: any;
  /** 可以扩展的 className */
  className?: string;
  /** Tab选项是否被激活 */
  isActive?: boolean;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
}

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const classes = classNames('tabs-content', props.className, {
    'tabs-content-active': props.isActive
  })

  return (
    <div
      key={props.label}
      className={classes}
    >
      {props.children}
    </div>
  )
}

TabsItem.defaultProps = {
  disabled: false,
  isActive: false
}

TabsItem.displayName = 'TabsItem'
export default TabsItem
