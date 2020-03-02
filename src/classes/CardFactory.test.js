import CardFactory from './CardFactory';
import { cardsArray } from './card-list';

describe('CardFactory', () => {
  it('should crop the cards array down to 5 by default', () => {
    const factory1 = new CardFactory(cardsArray).build();
    const factory2 = new CardFactory(cardsArray).limit().build();

    expect(factory1.length).toBe(7);
    expect(factory2.length).toBe(5);
  });

  it('should allow the card count limit to be overridden', () => {
    const factory = new CardFactory(cardsArray)
      .sortCards()
      .limit(3)
      .build();

    expect(factory.length).toBe(3);
  });

  it('should sort the cards by priority', () => {
    const factory1 = new CardFactory(cardsArray).build();
    const factory2 = new CardFactory(cardsArray).sortCards().build();

    expect(factory1.map(card => card.priority)).toEqual([
      80,
      30,
      70,
      50,
      80,
      30,
      100,
    ]);
    expect(factory2.map(card => card.priority)).toEqual([
      100,
      80,
      80,
      70,
      50,
      30,
      30,
    ]);
  });

  it('should not render a card if its shouldRender property is false', () => {
    const factory = new CardFactory(cardsArray).build();

    expect(factory.map(card => card.shouldRender).includes(false)).toEqual(
      false
    );
  });
});
