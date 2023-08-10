document.addEventListener('DOMContentLoaded', function() {
    // Cria uma instância do objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Define a função de tratamento do evento de carregamento
    xhr.onload = function() {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
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
        } else {
            console.error('Erro ao obter os posts:', xhr.statusText);
        }
    };

    // Define a função de tratamento do evento de erro
    xhr.onerror = function() {
        console.error('Erro de conexão');
    };

    // Configura a solicitação
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    // Envia a solicitação
    xhr.send();
});
