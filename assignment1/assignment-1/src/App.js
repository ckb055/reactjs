import React, {Component} from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'kaibin'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  toggleNameHandler = () => {
    if (this.state.username === 'kaibin') {
      this.setState({
        username: 'changedName'
      })
    } else {
      this.setState({
        username: 'kaibin'
      })
    }
  } 

  render() {
    return(
      <div>
        <UserInput 
        changed={this.usernameChangedHandler}
        currentName={this.state.username}
        />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Max"/>
        <UserOutput userName="Max"/>
        <button onClick={this.toggleNameHandler}>
          Toggle Name
        </button>
      </div>
    );
  }
}

export default App;
