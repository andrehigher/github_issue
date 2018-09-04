import React from 'react';
import { Table } from 'semantic-ui-react';

import Label from './label';
import State from './state';
import FormatDate from './date';

const Content = ({issues}) => (
  <Table.Body>
    {issues.map(issue => 
      <Table.Row key={issue.id}>
        <Table.Cell>{issue.number}</Table.Cell>
        <Table.Cell>{issue.title}</Table.Cell>
        <Table.Cell><FormatDate date={issue.created_at}/></Table.Cell>
        <Table.Cell><FormatDate date={issue.updated_at}/></Table.Cell>
        <Table.Cell><Label labels={issue.labels}/></Table.Cell>
        <Table.Cell><State state={issue.state}/></Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
);

export default Content;