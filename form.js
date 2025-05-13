let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [] //storing blog posts in memory (this is supposed to be the number of posts when you scroll)

function newPost(postData){
    const {title, date, text, author } = postData;

    const newPost = {
        date,
        author,
        title,
        text
    };
    //add new post to array
    blogPosts.push(newPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    console.log("Post Created: ", newPost);
    return newPost;
}

const form = document.getElementById('postForm');
const message = document.getElementById('message')

//listens for submit event...when submitted this fucnt will be called
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // collect user input from the form!!!!!!!!!!!!
    const postData = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value,
        text: document.getElementById('text').value,
        author: document.getElementById('author').value
    };
    //make sure everything is filled out properly!!!!!!
    if (!postData.title || !postData.date || !postData.text || !postData.author) {
        message.textContent = "All fields are required!";
        return;
    }
    //call new post function to store the post data
    const savedPost = newPost(postData);

    //confirmation message
    message.textContent = "Post successfully created!";
    print(savedPost);
    // clear form
    form.reset();
});

