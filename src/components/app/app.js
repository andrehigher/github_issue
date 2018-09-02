import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './app.css';

import Issues from '../issues/issues';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header as='h1'>React issues</Header>
        <Issues/>
      </div>
    );
  }
}

export default App;
