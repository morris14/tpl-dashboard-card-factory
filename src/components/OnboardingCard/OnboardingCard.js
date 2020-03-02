import React from 'react';

const OnboardingCard = props => {
  return (
    <div>
      <p>I'm an OnboardingCard, here are my props:</p>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
};

export default OnboardingCard;
