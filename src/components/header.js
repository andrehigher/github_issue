import React  from 'react';
import { Table } from 'semantic-ui-react';

const Header = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Issue	Number</Table.HeaderCell>
      <Table.HeaderCell>Title</Table.HeaderCell>
      <Table.HeaderCell>Created	At</Table.HeaderCell>
      <Table.HeaderCell>Updated	At</Table.HeaderCell>
      <Table.HeaderCell>Labels</Table.HeaderCell>
      <Table.HeaderCell>State</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
);

export default Header;