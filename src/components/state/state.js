import React from 'react';
import { Button } from 'semantic-ui-react';

const OPEN_STATE = 'open';

export default function State(props) {
  const state = props.state;
  if (state === OPEN_STATE) {
    return <Button color='orange' compact>Open</Button>;
  }
  return <Button color='green' compact>Closed</Button>;
}
