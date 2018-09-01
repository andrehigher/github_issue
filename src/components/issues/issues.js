import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import Header from '../header/header';
import Label from '../label/label';
import State from '../state/state';

import './issue.css';

const API = 'https://api.github.com/';
const QUERY = 'repos/facebook/react/issues';

class Issues extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + QUERY)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ issues: data, isLoading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { issues, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading issues...</p>;
    }

    return (
      <Table celled>
        <Header/>
        <Table.Body>
          {issues.map(issue => 
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.number}</Table.Cell>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>{issue.created_at}</Table.Cell>
              <Table.Cell>{issue.updated_at}</Table.Cell>
              <Table.Cell><Label labels={issue.labels}/></Table.Cell>
              <Table.Cell><State state={issue.state}/></Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default Issues;