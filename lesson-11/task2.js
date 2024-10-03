function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            return response.json();
        }).catch((error) => {'Error on loading todo: ', error});
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            return response.json();
        }).catch((error) => {'Error on loading user: ', error});
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });

Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First resolved:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });