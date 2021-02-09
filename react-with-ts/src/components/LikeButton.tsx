import React, { useState, FC } from 'react'

const LikeButton: FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
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
