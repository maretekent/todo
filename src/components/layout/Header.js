import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class TodoHeader extends Component {
  render() {
    return (
      <header style={HeaderStyle}>
          <h1>TodoList</h1>
          <Link style={linkStyle} to="/">Home</Link> | 
          <Link style={linkStyle} to="/about">About</Link>
      </header>
    )
  }
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle ={
  color: '#fff',
  textDecoration: 'none',

}

export default TodoHeader;
