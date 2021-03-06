import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      alertMessage: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title.trim());
      this.setState({
        title: '',
      });
    } else {
      this.setState({
        alertMessage: 'Please write item',
      });
      setTimeout(() => {
        this.setState({
          alertMessage: '',
        });
      }, 3000);
    }
  };

  render() {
    return (
      <>
        <p className="input-alert">{this.state.alertMessage}</p>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Add Todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button type="submit" className="input-submit">Submit</button>
        </form>
      </>
    );
  }
}

InputTodo.defaultProps = {
  addTodoProps: () => {},
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func,
};

export default InputTodo;
