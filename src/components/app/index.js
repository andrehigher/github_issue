import React, { Component } from 'react';

import './app.css';
import 'semantic-ui-css/semantic.min.css';

import Issue from '../issue';

class App extends Component {
  render() {
    return (
      <div className="app">
        GitHub issues!

        <Issue/>
      </div>
    );
  }
}

export default App;
