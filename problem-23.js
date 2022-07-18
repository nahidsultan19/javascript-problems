const loadData = () => {

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data) => {
    const comments = document.getElementById('comments');
    comments.style.display = 'grid';
    comments.style.gridTemplateColumns = '2fr 2fr 2fr';

    for (const comment of data) {

        const com = document.createElement('article');
        com.innerHTML = `
            <h2>${comment.name}</h2>
            <h3>${comment.email}</h3>
        `;

        comments.appendChild(com);

        com.style.border = '2px solid orange';
        com.style.margin = '10px';
        com.style.padding = '10px';
        com.style.borderRadius = '10px';
        com.style.backgroundColor = 'lightblue';

    }
}

