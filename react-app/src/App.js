import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 
// in jsx, all names that start with lowercase characters
// are reserved for native html elements

class App extends Component {
  state = {
    persons: [
      { name : 'Max', age: 28 },
      { name : 'Maxi', age: 28 },
      { name : 'Maxd', age: 28 }
    ]
  }
  
  switchNameHandler = () => {
    console.log('Was clicked!');
    this.setState( {
      persons: [
        { name : 'Maximilian', age: 27 },
      { name : 'Max', age: 33 },
      { name : 'Max', age: 34 }
      ]
    }

    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
