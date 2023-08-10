document.addEventListener('DOMContentLoaded', function() {
    // Faz uma chamada assíncrona para obter os posts
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById('post-container');

            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Erro ao obter os posts:', error);
        });
});
