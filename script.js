document.addEventListener('DOMContentLoaded', function() {
    const postContainer = document.getElementById('post-container');

    // Cria uma nova instância do objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configura a requisição
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Define o callback para quando a requisição estiver pronta
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const posts = JSON.parse(xhr.responseText);

                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    `;
                    postContainer.appendChild(postElement);
                });
            } else {
                console.error('Erro ao obter os posts:', xhr.statusText);
            }
        }
    };

    // Envia a requisição
    xhr.send();
});
