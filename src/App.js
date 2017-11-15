import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        ENVS
        <pre>
        {JSON.stringify(process.env, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;
