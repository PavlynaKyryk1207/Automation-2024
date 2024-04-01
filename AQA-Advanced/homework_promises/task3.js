async function fetchData() {
    try {
    const [todoResponse, userResponse] = await Promise.all([fetchTodo(), fetchUser()]);
    const todo = await todoResponse;
    console.log(todo);
    const user = await userResponse;
    console.log(user);
    } catch (error) {
    console.log(error);
    }
    }

    fetchTodo('https://jsonplaceholder.typicode.com/todos/1');
    fetchUser('https://jsonplaceholder.typicode.com/users/1');
    
    fetchData();