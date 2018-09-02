import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'open', text: 'Open', value: 'open' },
  { key: 'closed', text: 'Closed', value: 'closed' },
]

class Filter extends Component {
  render() {
    return (
      <Dropdown
        selection
        options={options}
        value={this.props.value}
        onChange={this.props.filter}
      />
    );
  }
}

export default Filter;