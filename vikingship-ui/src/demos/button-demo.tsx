import React from 'react'
import Button, { ButtonType, ButtonSize } from '../components/Button/button'

function ButtonDemo() {
  return (
    <>
      <Button >hello</Button>
      <Button autoFocus>autoFocus</Button>
      <Button onClick={(e) => {e.preventDefault(); alert(123)}}>onClick</Button>
      <Button className="custom">ClassName Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger</Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" target="_blank">BaiDu Link</Button>
      <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">Disabled Link</Button>
    </>
  )
}

export default ButtonDemo
