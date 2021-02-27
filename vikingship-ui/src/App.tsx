import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ButtonDemo from './demos/button-demo'
import AlertDemo from './demos/alert-demo'
import MenuDemo from './demos/menu-demo'
import TabsDemo from './demos/tabs-demo'

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCoffee} size="10x"/>
      <TabsDemo />
      <MenuDemo />
      {/* <ButtonDemo /> */}
      {/* <AlertDemo /> */}
    </div>
  )
}

export default App
