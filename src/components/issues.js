import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';

import Header from './header';
import Footer from './footer';
import Filter from './filter';
import Content from './content';

import GITHUB from '../config/github.json';

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
          <Content issues={issues} />
        </Table>
        <Footer 
          activePage={activePage}
          totalPages={parseInt(openIssues/GITHUB.issues_per_page, 10)} 
          onPageChange={this.handlePaginationChange}/>
      </div>
    );
  }
}

export default Issues;