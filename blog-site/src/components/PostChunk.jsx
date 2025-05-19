import '../styles.css'

function PostChunk({date, author, title, body}) {

    return (
        <>
        <div className="postContainer">
            <div className="header">
                <h2 className="postTitle">{title}</h2>
                <h3 className="userName">{name}</h3>
                <p className="date">{date}</p>
                <p className="author">{author}</p>
            </div>
            <div>
                
                <p className="postBody">{body}</p>
            </div>
        </div>
        </>
    )
}

export default PostChunk
