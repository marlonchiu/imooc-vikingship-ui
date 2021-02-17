import React, { FC, useState, useEffect, useRef } from 'react'
import useMousePosition from '../hooks/useMousePosition'

const LikeButton: FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const positions = useMousePosition()
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + like  + ';' + likeRef.current)
    }, 3000)
  }

  return (
    <>
      <input type="text" ref={domRef} />
      <h2>X: {positions.x}, Y : {positions.y}</h2>
      <button onClick={() => { setLike(like + 1); likeRef.current ++ }}>
        { like } 赞
      </button>
      <button onClick={() => { setOn(!on) }}>
        { on ? 'ON' : 'OFF' }
      </button>
      <button onClick={handleAlertClick}> Alert!</button>
    </>
  )

}

export default LikeButton
