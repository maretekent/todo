import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoHeader from "./components/layout/Header";
import './App.css';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';
import About from './components/pages/About';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false

      },
      {
        id: 3,
        title: "Write code",
        completed: false
      }
    ]
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
  let ids = [];
  this.state.todos.map(todo => {
    ids.push(todo.id);
    return ids;
  })
  let max_id = Math.max.apply(Math,ids);
  const newTodo = {
    id: max_id + 1,
    title: title,
    completed: false
  }
  this.setState({
    todos: [...this.state.todos, newTodo]
  })
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
