import React from 'react';

const UsageCard = props => {
  return (
    <div>
      <p>I'm a UsageCard card, here are my props:</p>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

export default UsageCard;
