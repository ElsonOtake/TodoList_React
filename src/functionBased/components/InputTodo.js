import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title.trim());
      setInputText({
        title: '',
      });
    } else {
      setAlertMessage('Please write item');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <p className="input-alert">{alertMessage}</p>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={inputText.title}
          name="title"
          onChange={onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle
            style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </form>
    </>

  );
};

InputTodo.defaultProps = {
  addTodoProps: () => {},
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
