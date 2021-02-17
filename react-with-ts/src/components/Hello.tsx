// import React, { FunctionComponent, FC } from 'react'
import React, { FC, useContext } from 'react'
import { ThemeContext } from '../App'

interface IHelloProps {
  message?:string
}

const Hello: FC<IHelloProps> = (props) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color,
  }

  // props.children
  return <h2 style={style}>{ props.message}</h2>
}

Hello.defaultProps = {
  message: 'Hello React~'
}

export default Hello
