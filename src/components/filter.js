import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'open', text: 'Open', value: 'open' },
  { key: 'closed', text: 'Closed', value: 'closed' },
]

const Filter = ({value, filter}) => (
  <Dropdown
    selection
    options={options}
    value={value}
    onChange={filter}
  />
);

export default Filter;