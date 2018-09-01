import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

import './label.css';

class LabelIssue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: props.labels,
    };
  }

  render() {
    const { labels } = this.state;

    return (
      <div>
        {labels.map(label => 
          <Label key={label.id} style={{backgroundColor: '#' + label.color}}>
            {label.name}
          </Label>
        )}
      </div>
    );
  }
}

export default LabelIssue;