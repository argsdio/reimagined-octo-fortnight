import { useState } from 'react'
import PostChunk from './components/PostChunk.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>



        {/*
        ermm basically the idea is that everytime a new submission is made to the form function, it will create a new PostChunk object and add it to an array of PostChunk objects. then from there I can do array.map() or something to render them all on the homepage...!!??? and then i'll wrap them in a div so that they're evenly spaced no matter how many you put... T_T
        */}
        <PostChunk title="these won't vertically align properly :(" body={lorem} date="5/13/25" name="@arianne"/>


        
      </div>
      
    </>
  )
}

export default App
