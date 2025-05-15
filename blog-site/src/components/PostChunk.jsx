import '../styles.css'

function PostChunk({title, body, date, name}) {

    return (
        <>
        <div className="postContainer">
            <div className="header">
                <h2 className="postTitle">{title}</h2>
                <h3 className="userName">{name}</h3>
                <p className="date">{date}</p>
            </div>
            <div>
                
                <p className="postBody">{body}</p>
            </div>
        </div>
        </>
    )
}

export default PostChunk
