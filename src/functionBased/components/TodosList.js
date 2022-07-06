import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

TodosList.defaultProps = {
  todos: [{}],
  map: [{}],
  handleChangeProps: () => {},
  deleteTodoProps: () => {},
  setUpdate: () => {},
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.objectOf),
  map: PropTypes.arrayOf(PropTypes.objectOf),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

export default TodosList;
