import Card, { CARD_TYPES } from './Card';
import { daysOfData, hasSolarOnboarded, hasTariffOnboarded } from './card-list';
import OnboardingCard from '../components/OnboardingCard';
import TariffWheelCard from '../components/TariffWheelCard';
import TariffSavingsCard from '../components/TariffSavingsCard';
import UsageCard from '../components/UsageCard';

describe('Card', () => {
  it('should self validate with 1 rule and set its shouldRender property', () => {
    const card = new Card(CARD_TYPES.action, 90, [
      {
        condition: daysOfData > 40,
        equals: true,
      },
    ]);

    const card2 = new Card(CARD_TYPES.action, 90, [
      {
        condition: hasSolarOnboarded,
        equals: false,
      },
    ]);

    expect(card.shouldRender).toEqual(false);
    expect(card2.shouldRender).toEqual(true);
  });

  it('should self validate with 0 rules and set its shouldRender property to true', () => {
    const card = new Card(CARD_TYPES.action, 90, []);

    expect(card.shouldRender).toEqual(true);
  });

  it('should set its shouldRender property to false if 1 of its rules fail', () => {
    const card = new Card(CARD_TYPES.action, 90, [
      {
        condition: daysOfData > 30,
        equals: true,
      },
      {
        condition: hasSolarOnboarded,
        equals: true,
      },
    ]);

    expect(card.shouldRender).toEqual(false);
  });

  it('should set its shouldRender property to true if all of its rules pass', () => {
    const card = new Card(CARD_TYPES.action, 90, [
      {
        condition: daysOfData > 30,
        equals: true,
      },
      {
        condition: hasTariffOnboarded,
        equals: true,
      },
    ]);

    expect(card.shouldRender).toEqual(true);
  });

  it('should construct and set the correct properties given a set of params', () => {
    const card = new Card(CARD_TYPES.onboarding, 90, [
      {
        condition: daysOfData > 30,
        equals: true,
      },
    ]);

    expect(card.type).toEqual(CARD_TYPES.onboarding);
    expect(card.priority).toEqual(90);
    expect(card.rules).toEqual([
      {
        condition: daysOfData > 30,
        equals: true,
      },
    ]);
    expect(card.shouldRender).toEqual(true);
  });

  it('should return a Card component', () => {
    const card = new Card(CARD_TYPES.onboarding, 90, []);
    const card2 = new Card(CARD_TYPES.tariff_wheel, 90, []);
    const card3 = new Card(CARD_TYPES.tariff_savings, 90, []);
    const card4 = new Card(CARD_TYPES.usage, 90, []);

    const renderedComponent = card.render();
    const renderedComponent2 = card2.render();
    const renderedComponent3 = card3.render();
    const renderedComponent4 = card4.render();

    expect(renderedComponent.type).toEqual(OnboardingCard);
    expect(renderedComponent2.type).toEqual(TariffWheelCard);
    expect(renderedComponent3.type).toEqual(TariffSavingsCard);
    expect(renderedComponent4.type).toEqual(UsageCard);
  });

  it('should pass the correct props to its rendered component', () => {
    const props = {
      title: 'This is the title',
      body: 'This is the body copy',
      backgroundColor: 'hotPink',
    };

    const card = new Card(CARD_TYPES.onboarding, 90, [], props);
    const card2 = new Card(CARD_TYPES.onboarding, 90, []);

    const renderedComponent = card.render();
    const renderedComponent2 = card2.render();

    expect(renderedComponent.props).toEqual(props);
    expect(renderedComponent2.props).toEqual({});
  });
});
