import React from 'react';

const TariffWheelCard = props => {
  return (
    <div>
      <p>I'm a TariffWheel card, here are my props:</p>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

export default TariffWheelCard;
