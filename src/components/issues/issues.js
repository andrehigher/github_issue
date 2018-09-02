import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';

import Header from '../header/header';
import Footer from '../footer/footer';
import Label from '../label/label';
import State from '../state/state';
import Filter from '../filter/filter';
import FormatDate from '../date/date';

import './issue.css';

import GITHUB from '../../config/github.json';

class Issues extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null,
      activePage: 1,
      openIssues: 0,
      state: GITHUB.state,
    };

    this.handlePaginationChange = (e, { activePage }) => {
      this.setState({ isLoading: true, activePage });
      this.fetchIssues();
    };

    this.filterStatus = (e, {value}) => {
      this.setState({ isLoading: true, state: value });
      this.fetchIssues();
    };
  }

  fetchIssues() {
    fetch(`${GITHUB.api}/repos/${GITHUB.owner}/${GITHUB.repo}`)
      .then(response => response.json())
      .then(data => this.fetchData(data))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  fetchData(repoData) {
    const { activePage, state } = this.state;
    this.setState({ openIssues: repoData.open_issues });
    fetch(`${GITHUB.api}/repos/${GITHUB.owner}/${GITHUB.repo}/issues?state=${state}&page=${activePage}`)
      .then(response => response.json())
      .then(data => this.setState({ issues: data, isLoading: false}))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchIssues();
  }

  render() {
    const { issues, isLoading, error, openIssues, activePage, state } = this.state;

    if (error) {
      return <p>Something went wrong... Please retry later.</p>;
    }

    if (isLoading) {
      return <Icon loading name='spinner' />;
    }

    return (
      <div>
        <Filter filter={this.filterStatus} value={state}/>
        <Table celled>
          <Header/>
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
        </Table>
        <Footer 
          activePage={activePage}
          issues={openIssues} 
          itemsPerPage={GITHUB.issues_per_page} 
          onPageChange={this.handlePaginationChange}/>
      </div>
    );
  }
}

export default Issues;