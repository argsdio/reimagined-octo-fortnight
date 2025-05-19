import { useState } from 'react'
import PostChunk from './components/PostChunk.jsx'
import Popup from './components/Popup.jsx'
import './App.css'

function App() {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    const examplePost = ["05/18/2025", "@arianne", "its 1:09 am rn.", "pleaseeee please work! this is more text so i can see how long it can be"]
    const examplePost2 = ["05/18/2025", "@arianne", "more text to test styling", lorem]

    // CHANGE THE INSIDE OF THE useState() HERE TO THE VARIABLE YOU SAVE THE POSTS TO
    const [posts, setPosts] = useState([examplePost, examplePost2]);
    
    const [count, setCount] = useState(0);
    const [popupStatus, setPopupStatus] = useState(false);
    const [postDate, setPostDate] = useState("");
    const [postAuthor, setPostAuthor] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

    

    function submitForm() {
        setPopupStatus(false);
        // takes all the current content in the form and stores it in a new list object that contains all the info for a post
        setPosts(prevItems => [...prevItems, [postDate, postAuthor, postTitle, postBody]])
    }

    function savePosts() {
        // bunch of backend-y stuff that i do not know how to do.
    }
    return (
    <>
      <div className="card">

        <button onClick={() => setPopupStatus(true)}>+ create a post...</button>

        <Popup trigger={popupStatus} setTrigger={setPopupStatus}>
            <h2>make a post!</h2>
            <div className="post-form">
                <input type="text" placeholder="date (MM/DD/YYYY)" onChange={(e) => setPostDate(e.target.value)}></input>
                <input type="text" placeholder="author name" onChange={(e) => setPostAuthor(e.target.value)}></input>
                <input type="text" placeholder="title" onChange={(e) => setPostTitle(e.target.value)}></input>
                <input className="post-input"type="text" placeholder="write your post here..." onChange={(e) => setPostBody(e.target.value)}></input>
                <button onClick={submitForm}>create post</button>
            </div>
            
        </Popup>

        <div className='post-feed'>
            {posts.map((post, index) => (
            <PostChunk key={index}date={post[0]} author={post[1]} title={post[2]} body={post[3]}></PostChunk>
        ))}
        </div>

        <button onClick={savePosts}>save posts</button>
        {/*
        ermm basically the idea is that everytime a new submission is made to the form function, it will create a new PostChunk object and add it to an array of PostChunk objects. then from there I can do array.map() or something to render them all on the homepage...!!??? and then i'll wrap them in a div so that they're evenly spaced no matter how many you put... T_T
        */}



        
      </div>
      
    </>
  )
}

export default App
