import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = () => {
    console.log("clicked");
  };

  render() {
    return (
      <>
        <Header />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
      </>
    );
  }
};

export default TodoContainer;
