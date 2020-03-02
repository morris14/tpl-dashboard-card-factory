/**
 * Class to build a formatted list of Cards to display on the Dashboard.
 *
 * @author Stuart Morris
 */
export default class CardFactory {
  /**
   * Construct CardFactory.
   * @param {array} cards - An array of Cards to format.
   */
  constructor(cards) {
    /**
     * We only consider the cards that 'self declare' whether they
     * should be rendered or not.
     */
    this.cards = cards.filter(card => card.shouldRender);
  }

  /**
   * Sort the Cards array by priority, highest to lowest.
   * @return class instance so we can chain methods
   */
  sortCards() {
    this.cards = this.cards.sort((a, b) => b.priority - a.priority);
    return this;
  }

  /**
   * Limit the Cards array to the 5 most important. The limit can be overridden.
   * @return class instance so we can chain methods
   */
  limit(limit = 5) {
    this.cards = this.cards.slice(0, limit);
    return this;
  }

  /**
   * @return {array} The final cards array.
   */
  build() {
    return this.cards;
  }
}
