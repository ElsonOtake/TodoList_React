import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleChange = id => {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const delTodo = id => {
    setTodos([
        ...todos.filter(todo => todo.id !== id),
      ]
    );
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos({
      todos: [...todos, newTodo],
    });
  };

  // const componentDidMount = () => {
  //   // Way of picking data from jsonplaceholder
  //   // 
  //   // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  //   //   .then(response => response.json())
  //   //   .then(data => this.setTodos({ todos: data }));
  //   // 
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)
  //   if (loadedTodos) {
  //     setTodos({
  //       todos: loadedTodos
  //     })
  //   }
  // }

  // const componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState.todos !== todos) {
  //     const temp = JSON.stringify(todos)
  //     localStorage.setItem("todos", temp)
  //   }
  // }

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
