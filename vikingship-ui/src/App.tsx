import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ButtonDemo from './demos/button-demo'
import AlertDemo from './demos/alert-demo'
import MenuDemo from './demos/menu-demo'
import TabsDemo from './demos/tabs-demo'
import IconDemo from './demos/icon-demo'
import TransitionDemo from './demos/transition-demo'
import InputDemo from './demos/input-demo'

function App() {
  const [title, setTitle] = useState('')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => {
      console.log(response);
      setTitle(response.data.title)
    })
  })
  return (
    <div className="App">
      {title}
      <InputDemo />
      {/* <TransitionDemo /> */}
      {/* <IconDemo /> */}
      {/* <TabsDemo /> */}
      {/* <MenuDemo /> */}
      {/* <ButtonDemo /> */}
      {/* <AlertDemo /> */}
    </div>
  )
}

export default App
