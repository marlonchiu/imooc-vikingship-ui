import React from 'react'
import ButtonDemo from './demos/button-demo'
import AlertDemo from './demos/alert-demo'
import MenuDemo from './demos/menu-demo'
import TabsDemo from './demos/tabs-demo'
import IconDemo from './demos/icon-demo'
import TransitionDemo from './demos/transition-demo'

function App() {
  return (
    <div className="App">
      <TransitionDemo />
      <IconDemo />
      {/* <TabsDemo /> */}
      <MenuDemo />
      <ButtonDemo />
      <AlertDemo />
    </div>
  )
}

export default App
