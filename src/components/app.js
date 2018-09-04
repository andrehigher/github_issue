import React from 'react';
import { Header } from 'semantic-ui-react';

import Issues from './issues';

const App = () => (
  <div className="app">
    <Header as='h1'>React issues</Header>
    <Issues/>
  </div>
);

export default App;
