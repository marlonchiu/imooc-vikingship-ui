import React from 'react'
import classNames from 'classnames'

export interface TabsItemProps {
  label: string;
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
}

const TabsItem: React.FC<TabsItemProps> = (props) => {
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
