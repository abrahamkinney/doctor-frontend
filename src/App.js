import React, { Component } from 'react';
import './App.css';
import CommentsContainer from './CommentsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rate This Doc:</h1>
          <h2>Dr. Abe Kinney</h2>
          <h3 className="App-title">1521 N. Evergreen St., Burbank, CA 91505</h3>
          <hr/>
        </header>
        <CommentsContainer />
      </div>
    );
  }
}

export default App;
