const article = document.createElement('article');
article.innerHTML = `
<h2>Learn JavaScript</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas quis suscipit ea dolores soluta, itaque odio ratione quo deleniti.</p>
`;
const blog = document.getElementById('blog');
blog.appendChild(article);

const blogs = document.getElementsByClassName('blogs');
for (const blog of blogs) {
    blog.style.border = '2px solid red';
    blog.style.padding = '20px';
    blog.style.borderRadius = '20px';
}

