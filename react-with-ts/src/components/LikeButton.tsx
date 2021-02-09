import React, { FC, useState, useEffect } from 'react'

const LikeButton: FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${like}次`
  }, [like])

  return (
    <>
      <button onClick={() => { setLike(like + 1) }}>
        { like } 赞
      </button>
      <button onClick={() => { setOn(!on) }}>
        { on ? 'ON' : 'OFF' }
      </button>
    </>
  )

}

export default LikeButton
