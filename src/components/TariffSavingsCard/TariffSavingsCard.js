import React from 'react';

const TariffSavingsCard = props => {
  return (
    <div>
      <p>I'm a TariffSavings card, here are my props:</p>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

export default TariffSavingsCard;
