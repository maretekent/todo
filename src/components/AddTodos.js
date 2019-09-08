import React, { Component } from 'react'
import PropTypes from "prop-types";

class AddTodos extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="todo-form">
        <input type="text" name="title" placeholder="Add to do ..." 
        styles={{flex: '10', padding:'5px'}} value={this.state.title} 
        onChange={this.onChange}/>
        <input type="submit" value="submit" className="btn" styles={{flex: '1'}}/>
      </form>
    )
  }
}

AddTodos.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodos;
