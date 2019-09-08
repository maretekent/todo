import React, {Component} from 'react'

class TodoHeader extends Component {
  render() {
    return (
      <div style={HeaderStyle}>
          <h1>TodoList</h1>
      </div>
    )
  }
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default TodoHeader;
