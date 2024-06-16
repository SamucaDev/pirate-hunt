class Roulette {
  /**
   * Creates a new instance of Roulette.
   * @param {NodeList} rollElements - The elements representing the reels.
   */
  constructor(rollElements) {
    this.rollElements = rollElements;
    this.mapRolls = [0, 0, 0];
    this.iconHeight = 169.8;
    this.numIcons = 5;
    this.timeIcon = 100;

  }

  /**
   * Resets the background position of a reel after rolling.
   * @param {HTMLElement} reel - The reel element.
   * @param {number} delta - The delta value.
   * @param {number} offset - The offset value.
   * @param {string} nextPosition - The next position value.
   * @returns {Promise} A promise that resolves after resetting the background position.
   */
  resetBackgroundPosition(reel, delta, offset, nextPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        reel.style.transition = `none`;
        reel.style.backgroundPositionY = `${
          parseFloat(nextPosition) % (this.numIcons * this.iconHeight)
        }px`;
        resolve();
      }, (8 + 1 * delta) * this.timeIcon + offset * 150);
    });
  }

  /**
   * Sets the transition for rolling.
   * @param {HTMLElement} rollElement - The roll element.
   * @param {number} delta - The delta value.
   */
  transitionRoll(rollElement, delta) {
    rollElement.style.transition = `background-position-y ${
      delta * this.timeIcon
    }ms cubic-bezier(.41,-0.01,.63,1.09)`;
  }

  /**
   * Calculates the scroll value for rolling.
   * @param {number} offset - The offset value.
   * @returns {number} The calculated scroll value.
   */
  calculateScroll(offset) {
    return (
      (offset + 2) * this.numIcons + Math.round(Math.random() * this.numIcons)
    );
  }

  /**
   * Rolls the reel.
   * @param {HTMLElement} reel - The reel element.
   * @param {number} [offset=0] - The offset value.
   * @param {number} [position] - The position value.
   * @returns {Promise} A promise that resolves after rolling the reel.
   */
  async roll(reel, offset = 0) {
    const delta = this.calculateScroll(offset)
    return new Promise((resolve) => {
      const style = getComputedStyle(reel);
      const backgroundPosition = parseFloat(style["background-position-y"]);
      const nextPosition = `${backgroundPosition + delta * this.iconHeight}px`;

      setTimeout(async () => {
        this.transitionRoll(reel, delta);

        reel.style.backgroundPositionY = nextPosition;

        this.resetBackgroundPosition(reel, delta, offset, nextPosition).then(
          () => {
            resolve(delta % this.numIcons);
          }
        );
      }, offset * 150);
    });
  }

  /**
   * Updates the map of rolls with the results.
   * @param {number[]} results - The array of results.
   */
  moduleResults(results) {
    results.forEach(
      (delta, i) =>
        (this.mapRolls[i] = (this.mapRolls[i] + delta) % this.numIcons)
    );
  }

  /**
   * Checks if there is a win.
   * @returns {boolean} True if there is a win, false otherwise.
   */
  isWin() {
    console.log(this.mapRolls[0]);
    if (
      this.mapRolls[0] == this.mapRolls[1] &&
      this.mapRolls[1] == this.mapRolls[2]
    ) {
      return true;
    }

    return false;
  }

  /**
   * Spins the reels.
   * @returns {Promise<{win: boolean, idCharacter: number}>} A promise that resolves with an object indicating if there is a win and the total score.
   */
  spin() {
    return Promise.all(
      [...this.rollElements].map((reel, i) => this.roll(reel, i))
    ).then((results) => {
      this.moduleResults(results);

      return { isWin: this.isWin(), idCharacter: this.mapRolls[0] };
    });
  }
}

export default Roulette;
