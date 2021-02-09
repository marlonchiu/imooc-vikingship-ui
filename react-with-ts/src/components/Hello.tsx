// import React, { FunctionComponent, FC } from 'react'
import React, { FC } from 'react'

interface IHelloProps {
  message?:string
}

const Hello: FC<IHelloProps> = (props) => {
  // props.children
  return <h2>{ props.message}</h2>
}

Hello.defaultProps = {
  message: 'Hello React~'
}

export default Hello
