
import React, { Component } from 'react';
import axios from 'axios';

const TITLE = 'My first react with GraphQL Application';

class App extends Component {
  render() {
    return (
      <div>
        <h2>{TITLE}</h2>
      </div>
    )
  }
}

export default App;