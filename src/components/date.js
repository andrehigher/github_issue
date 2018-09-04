import React from 'react';

const FormatDate = ({date}) => {
  const newDate = new Date(date);
  return <span>{newDate.toLocaleDateString()}</span>;
}

export default FormatDate;