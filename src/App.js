import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentsContainer from './CommentsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rate This Doctor</h1>
        </header>
        <CommentsContainer />
      </div>
    );
  }
}

export default App;
