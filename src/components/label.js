import React from 'react';
import { Label } from 'semantic-ui-react';

const LabelIssue = ({labels}) => (
  <div>
    {labels.map(label => 
      <Label key={label.id} style={{backgroundColor: '#' + label.color}}>
        {label.name}
      </Label>
    )}
  </div>
);

export default LabelIssue;