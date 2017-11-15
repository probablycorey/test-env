import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        ENVS
        {JSON.stringify(process.env)}
      </div>
    );
  }
}

export default App;
