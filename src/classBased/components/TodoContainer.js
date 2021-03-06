import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    // Way of picking data from jsonplaceholder
    //
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ todos: data }));
    //
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  delTodo = (id) => this.setState(
    (prevState) => [...prevState.todos.filter((todo) => todo.id !== id)],
  );

  setUpdate = (updatedTitle, id) => {
    this.setState((prevState) => prevState.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = updatedTitle;
      }
      return todo;
    }));
  }

  addTodoItem = (title) => {
    const newTodo = {
      userId: 1,
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => [...prevState.todos, newTodo]);
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
