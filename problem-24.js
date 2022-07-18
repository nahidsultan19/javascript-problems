const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts()

const displayPosts = (posts) => {

    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(div);

        div.style.backgroundColor = 'lightblue'
        div.style.margin = '10px';
        div.style.padding = '10px';
        div.style.border = '3px solid orange';
        div.style.borderRadius = '15px';

    });
}
