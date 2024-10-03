async function fetchTodoAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

async function fetchUserAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return await response.json();
}


const [todo, user] = await Promise.all([fetchTodoAsync(), fetchUserAsync()]);
console.log('Todo:', todo);
console.log('User:', user);

const firstResolve = await Promise.race([fetchTodoAsync(), fetchUserAsync()]);
console.log('First resolve:', firstResolve);
