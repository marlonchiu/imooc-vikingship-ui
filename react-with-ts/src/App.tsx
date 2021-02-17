import React, { useState } from 'react'
import logo from './logo.svg'
import Hello from './components/Hello'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import withLoader from './components/withLoader'
import useURLLoader from './hooks/useURLLoader'
import './App.css'

interface ImageShowResult {
  message: string;
  status: string;
}

// const DogShow: React.FC<{ data: ImageShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog Show: {data.status}</h2>
//       <img src={data.message} alt=""/>
//     </>
//   )
// }

function App() {
  const [ show, setShow ] = useState(true)
  // const positions = useMousePosition()
  // const WrapperDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')

  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as ImageShowResult

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>X: {positions.x}, Y : {positions.y}</p> */}
        <p>
          <button onClick={() => {setShow(!show)}}>toggle show</button>
        </p>
        {/* {
          loading ? <p>狗狗数据读取中</p>
            : <img src={dogResult?.message} alt=""/>
        } */}
        {/* <WrapperDogShow /> */}
        {/* <Hello message="Hello World!" /> */}
        <LikeButton />
        { show && <MouseTracker /> }
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
