import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}>Default button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg">Large button</Button>
    <Button size="sm">Small button</Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary">Primary button</Button>
    <Button btnType="default">Default Button</Button>
    <Button btnType="danger">Danger button</Button>
    <Button btnType="link" href="https://google.com">Link button</Button>
  </>
)

storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
