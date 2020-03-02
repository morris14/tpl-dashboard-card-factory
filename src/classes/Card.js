import React from 'react';
import OnboardingCard from '../components/OnboardingCard';
import TariffWheelCard from '../components/TariffWheelCard';
import TariffSavingsCard from '../components/TariffSavingsCard';
import UsageCard from '../components/UsageCard';

/**
 * The allowed card types for a Dashboard Card.
 
 * @author Stuart Morris
 */
export const CARD_TYPES = {
  tariff_wheel: 'TARIFF_WHEEL',
  tariff_savings: 'TARIFF_SAVINGS',
  usage: 'USAGE',
  onboarding: 'ONBOARDING',
};

/**
 * Class to represent the priority value for a Dashboard Card.
 *
 * @author Stuart Morris
 */
export default class Card {
  /**
   * A flag which is used by CardFactory to determine whether the card should
   * be considered for render.
   */
  shouldRender = true;

  /**
   * Construct Card.
   * @param {string} type     - The card type.
   * @param {number} priority - The card priority.
   * @param {array}  rules    - An array of objects which outline the rules
   *                            for if the card should be shown.
   * @param {object} props    - Props to pass to the rendered cards.
   */
  constructor(type, priority, rules, props) {
    this.type = type;
    this.priority = priority;
    this.rules = rules;
    this.props = props;

    /** Validate the card on initialise. */
    this.validate();
  }

  /**
   * Iterate over the given rules to determine whether the card should
   * be considered for render.
   */
  validate() {
    this.rules.some(rule => {
      if (rule.condition !== rule.equals) {
        this.shouldRender = false;
        return true;
      }
      return false;
    });
  }

  /**
   * Return the card component that we want to render
   * @return {object} The card component/JSX to render.
   */
  render() {
    if (!this.shouldRender) {
      return false;
    }
    switch (this.type) {
      case CARD_TYPES.onboarding:
        return <OnboardingCard {...this.props} />;
      case CARD_TYPES.tariff_wheel:
        return <TariffWheelCard {...this.props} />;
      case CARD_TYPES.tariff_savings:
        return <TariffSavingsCard {...this.props} />;
      case CARD_TYPES.usage:
        return <UsageCard {...this.props} />;
      default:
        return false;
    }
  }
}
