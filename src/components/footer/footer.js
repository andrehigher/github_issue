import React, { Component } from 'react';
import { Grid, Pagination } from 'semantic-ui-react'

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: props.activePage,
      totalPages: parseInt(props.issues/props.itemsPerPage, 10), 
    };
  }

  render() {
    const { activePage, totalPages } = this.state;

    return (
      <Grid verticalAlign='middle'>
        <Grid.Column>
          <Pagination
            activePage={activePage}
            onPageChange={this.props.onPageChange}
            totalPages={totalPages}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Footer;

       