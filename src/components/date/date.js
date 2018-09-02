import React from 'react';

export default function FormatDate(props) {
  const { date } = props;
  const newDate = new Date(date);
  return <span>{newDate.toLocaleDateString()}</span>;
}
