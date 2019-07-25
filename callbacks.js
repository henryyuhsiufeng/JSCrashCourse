// This example simulates a basic blog and fetching data from the server

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    // takes in a callback function. Function will be called after some time.
    setTimeout(() => {
        let output = '';
        // Can also pass in an index if you want
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

getPosts();