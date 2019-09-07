import React from 'react'

export default function Header() {
  return (
    <Header style={HeaderStyle}>
        <h1>TodoList</h1>
    </Header>
  )
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
