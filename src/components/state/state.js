import React from 'react';
import { Label } from 'semantic-ui-react';

import './state.css';

export default function State(props) {
  const { state } = props;
  return <Label className={state}>{state}</Label>;
}
