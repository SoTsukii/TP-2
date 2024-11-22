fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => console.log('GET /comments:', data))
  .catch(error => console.error('Erreur GET /comments:', error));


fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    userId: '1',
    title: 'Ma tâche',
    completed: 'false',
  }),
})
  .then(response => response.json())
  .then(data => console.log('POST /todos:', data))
  .catch(error => console.error('Erreur POST /todos:', error));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Nouveau titre',
    body: 'Nouveau contenu',
  }),
})
  .then(response => response.json())
  .then(data => console.log('PATCH /posts/1:', data))
  .catch(error => console.error('Erreur PATCH /posts/1:', error));


fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(data => console.log('GET /posts/1/comments:', data))
  .catch(error => console.error('Erreur GET /posts/1/comments:', error));


fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
  .then(response => response.json())
  .then(data => console.log('GET /albums/2/photos:', data))
  .catch(error => console.error('Erreur GET /albums/2/photos:', error));