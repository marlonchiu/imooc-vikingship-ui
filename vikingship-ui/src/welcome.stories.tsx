import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 vikingship 组件库</h1>
        <h3>vikingship 是为慕课网课程打造的一套教学组件库，从零到一让大家去学习</h3>
        <p>vikingship 是为慕课网打造的一套教学组件库，使用 React Hooks 和 typescript</p>
        <p>意在让大家从零到一，由浅入深的提高自己的 React 和 typescript 水平</p>
        <h3>安装试试</h3>
        <code>
          npm install vikingship --save
        </code>
      </>
    )
  }, { info : { disable: true }})
