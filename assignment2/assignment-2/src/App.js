import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }
  
  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <hr />
        <input 
        type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}/>
        <p>The current input is {this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
