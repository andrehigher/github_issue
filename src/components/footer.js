import React from 'react';
import { Grid, Pagination } from 'semantic-ui-react';

const Footer = ({activePage, totalPages, onPageChange}) => (
  <Grid verticalAlign='middle'>
    <Grid.Column>
      <Pagination
        activePage={activePage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    </Grid.Column>
  </Grid>
);

// export default Footer;
export default Footer;

       