import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import Apropos from './components/A-propos';
import Contact from './components/Contact';

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    this.getTodos()
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: data
      })
    });
  }
  getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Link to='/todos'>A faire</Link>
            <Link to='/a-propos'>A propos</Link>
            <Link to='/contact'>Contact</Link>
          </header>
            <Route path="/a-propos" component={Apropos} />
            <Route path="/contact" component={Contact} />
            <Route path="/todos" render={() => (
            <Todos todos={this.state.todos}/> 
            )}/>
        </Router>
      </div>
    );
  }
}

export default App;
