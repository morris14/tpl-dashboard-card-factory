import Card, { CARD_TYPES } from './Card';

export const daysOfData = 34;
export const hasSolarOnboarded = false;
export const hasGasOnboarded = false;
export const hasTariffOnboarded = true;

export const cardsArray = [
  new Card(CARD_TYPES.tariff_wheel, 90, [
    {
      condition: hasSolarOnboarded,
      equals: true,
    },
  ]),
  new Card(
    CARD_TYPES.usage,
    80,
    [
      {
        condition: daysOfData > 30,
        equals: true,
      },
    ],
    {
      title: 'This is the title',
      body: 'This is the body copy',
      backgroundColor: 'hotPink',
    }
  ),
  new Card(CARD_TYPES.tariff_wheel, 30, [
    {
      condition: hasGasOnboarded,
      equals: false,
    },
  ]),
  new Card(
    CARD_TYPES.usage,
    70,
    [
      {
        condition: hasSolarOnboarded,
        equals: true,
      },
    ],
    {
      title: 'This is the title',
      body: 'This is the body copy',
      backgroundColor: 'hotPink',
    }
  ),
  new Card(
    CARD_TYPES.tariff_wheel,
    70,
    [
      {
        condition: daysOfData > 40,
        equals: false,
      },
    ],
    {
      title: 'This is the title',
      body: 'This is the body copy',
      backgroundColor: 'hotPink',
    }
  ),
  new Card(CARD_TYPES.usage, 50, [
    {
      condition: daysOfData > 30,
      equals: true,
    },
  ]),
  new Card(CARD_TYPES.tariff_savings, 80, [
    {
      condition: daysOfData > 20,
      equals: true,
    },
  ]),
  new Card(CARD_TYPES.onboarding, 30, [
    {
      condition: daysOfData > 10,
      equals: true,
    },
  ]),
  new Card(
    CARD_TYPES.onboarding,
    100,
    [
      {
        condition: hasTariffOnboarded,
        equals: true,
      },
    ],
    {
      title: 'This is the title',
      body: 'This is the body copy',
      backgroundColor: 'hotPink',
    }
  ),
];
