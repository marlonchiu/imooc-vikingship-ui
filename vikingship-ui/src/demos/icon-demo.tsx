import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import Icon from '../components/Icon/icon'
// library.add(faCoffee, faArrowDown)
// library.add(fas)


function IconDemo() {
  return (
    <>
      <Icon theme="primary" icon="coffee" size="6x"/>
      <Icon theme="danger" icon="arrow-down" size="2x"/>
      <Icon theme="success" icon="angle-down" size="lg"/>
      <Icon theme="success" pulse icon="spinner" size="3x"/>
    </>
  )
}

export default IconDemo
