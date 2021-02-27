import React, { useState } from 'react'

import Menu from '../components/Menu/menu'
import MenuItem from '../components/Menu/menuItem'
import SubMenu from '../components/Menu/subMenu'
import Transition from '../components/Transition'
import Button from '../components/Button'


function TransitionDemo() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button size='lg' onClick={() => { setShow(!show) }}>Toggle Show  </Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
      >
        <div>
          <p> edit name</p>
          <p> edit name</p>
          <p> edit name</p>
          <p> edit name</p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-top'
        wrapper
      >
        <Button btnType='primary' size='lg'>A Large Button</Button>
      </Transition>
      <hr/>
    </>
  )
}

export default TransitionDemo
