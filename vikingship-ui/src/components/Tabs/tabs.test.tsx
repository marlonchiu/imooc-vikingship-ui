import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Tabs, { TabProps } from './tabs'
import TabsItem, { TabsItemProps } from './tabsItem'

const testProps: TabProps = {
  defaultIndex: 0,
  styleType: 'underline',
  onSelect: jest.fn()
}

const generateTabs = (props: TabProps) => {
  return (
    <Tabs {...props}>
      <TabsItem label="card1">this is card one</TabsItem>
      <TabsItem label="card2">this is content two</TabsItem>
      <TabsItem label="disabled" disabled={true}>this is content three</TabsItem>
    </Tabs>
  )
}

const createStyleFile = () => {
  const css = `
  .tabs-content {
    display: none;
  }
  .tabs-content.tabs-content-active{
    display: block;
  }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = css
  return style
}

let wrapper: RenderResult, activeLabel: HTMLElement, activeContent: HTMLElement

describe('test Tabs and TabsItem component in default(underline) mode', () => {
  beforeEach(() => {
    wrapper = render(generateTabs(testProps))
    wrapper.container.appendChild(createStyleFile())
    activeLabel = wrapper.getByText('card1')
    activeContent = wrapper.getByText('this is card one')
  })

  it('should render correct Tabs and TabsItem based on default props', () => {
    expect(activeLabel).toHaveClass('tabs-label tabs-label-active')
    expect(activeContent).toBeVisible()
    const label2 = wrapper.getByText('card2')
    fireEvent.click(label2)
    const content2 = wrapper.getByText('this is content two')
    expect(activeContent).not.toBeVisible()
    expect(content2).toBeVisible()
    const label3 = wrapper.getByText('disabled')
    fireEvent.click(label3)
    const content3 = wrapper.getByText('this is content three')
    expect(content3).not.toBeVisible()
  })
})
