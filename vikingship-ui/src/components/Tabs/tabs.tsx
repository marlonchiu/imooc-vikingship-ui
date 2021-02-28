import React, {useState} from 'react'
import classNames from 'classnames'
import { TabsItemProps } from './tabsItem'


type TabStyle = "underline" | "outline"

export interface TabProps {
  /** 当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /** Tabs的样式，两种可选，默认为 underline */
  styleType?: TabStyle;
  /** 点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /** 可以扩展的 className */
  className?: string;
}
/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'vikingship-ui'
 * ~~~
 */
export const Tabs: React.FC<TabProps> = (props) => {
  const { className, styleType, children, onSelect } = props

  const classes = classNames('tabs-nav', className, {
    'tabs-underline': styleType === 'underline',
    'tabs-outline': styleType === 'outline'
  })

  const [activeIndex, setActiveIndex] = useState(0)

  function handleClick(index: number, disabled: boolean): void {
    if (disabled) {
      return
    }
    setActiveIndex(index)
    if (typeof onSelect === 'function') {
      onSelect(index)
    }
  }

  const childrenComponent = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabsItemProps>
      const isLabelDisabled = childElement.props.disabled ? childElement.props.disabled : false
      const tabsLabelClasses = classNames('tabs-label', {
        'tabs-label-active': activeIndex === index,
        'tabs-label-disabled': childElement.props.disabled
      })
      const handleChildClick = () => {
        handleClick(index, isLabelDisabled)
      }
      return (
        <li
          key={index}
          className={tabsLabelClasses}
          onClick={handleChildClick}
        >
          {childElement.props.label}
        </li>
      )
    })
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabsItemProps>
      const { displayName } = childElement.type
      if (displayName === 'TabsItem') {
        return React.cloneElement(childElement, {
          isActive: activeIndex === index
        })
      } else {
        console.error("Warning: Tabs has a child which is not a TabsItem component")
      }
    })
  }

  return (
    <div>
      <nav className={classes}>
        <ul className="tabs-ul">
          {childrenComponent()}
        </ul>
      </nav>
      {renderChildren()}
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  styleType: 'underline'
}

export default Tabs
