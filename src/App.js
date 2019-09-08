import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoHeader from "./components/layout/Header";
import './App.css';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => this.setState({todos: res.data})
    );
  }
  
  //toggle completed
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // delete todo
delTodo = (id) => {
  this.setState({
    todos: [...this.state.todos.filter((todo) => todo.id !== id)]
  });
}

// Add todo
addTodo = (title) => {
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  }).then(
    this.setState({
      todos: [...this.state.todos, res.data]
    })
  );
}

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <TodoHeader/>
          <Route exact path="/" render={props => (
            <Fragment>
              <AddTodos addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </Fragment>
            )}/>
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
