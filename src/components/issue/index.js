import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

import './issue.css';

const API = 'https://api.github.com/';
const QUERY = 'repos/facebook/react/issues';

class Issue extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null,
    }
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
      return (
        <p>{error.message}</p>
      );
    }

    if (isLoading) {
      return (
        <p>Loading ...</p>
      );
    }

    return (
      <Table celled>
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

        <Table.Body>
          {issues.map(issue => 
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.number}</Table.Cell>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>{issue.created_at}</Table.Cell>
              <Table.Cell>{issue.updated_at}</Table.Cell>
              <Table.Cell>{issue.label}</Table.Cell>
              <Table.Cell>{issue.state}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default Issue;