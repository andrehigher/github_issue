import React from 'react';
import { Label } from 'semantic-ui-react';

const State = ({state}) => (
  <Label className={state}>{state}</Label>
);

export default State;
