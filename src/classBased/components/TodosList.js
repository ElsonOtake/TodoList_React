import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

TodosList.defaultProps = {
  todos: {},
  map: {},
  handleChangeProps: () => {},
  deleteTodoProps: () => {},
  setUpdate: () => {},
};

TodosList.propTypes = {
  todos: PropTypes.objectOf(PropTypes.todos),
  map: PropTypes.objectOf(PropTypes.todo),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
