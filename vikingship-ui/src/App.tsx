import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">BaiDu Link</Button>
        <Button disabled>不可点击</Button>
      </header>
    </div>
  )
}

export default App
