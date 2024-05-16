async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
    }
    
    async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        return data;
    }
    
    Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
    console.log(todo);
    console.log(user);
    })
    .catch(error => console.log(error));

  
      