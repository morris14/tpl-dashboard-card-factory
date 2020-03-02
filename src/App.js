import React from 'react';
import CardFactory from './classes/CardFactory';
import { cardsArray } from './classes/card-list';

const App = () => {
  const factory = new CardFactory(cardsArray)
    .sortCards() // this will be moved into the constructor
    .limit() // this will be moved into the constructor
    .build();

  return (
    <div>
      {factory.map((card, index) => (
        <div key={index}>{card.render()}</div>
      ))}
    </div>
  );
};

export default App;
