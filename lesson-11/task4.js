class DataFetcher {
    async fetchTodo() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        return await response.json();
    }

    async fetchUser() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
    }
}

const dataFetcher = new DataFetcher();
const [todo, user] = await Promise.all([dataFetcher.fetchTodo(), dataFetcher.fetchUser()]);
console.log('Todo:', todo);
console.log('User:', user);