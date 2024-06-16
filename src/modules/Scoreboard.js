class Scoreboard {
  /**
   * Creates a new instance of Scoreboard.
   * @param {LocalStorageManager} storageInstance - An instance of LocalStorageManager for storing points.
   */
  constructor(storageInstance) {
    this.storageInstance = storageInstance;
    this.scorePerCharacter = {
      0: 1500000, // Luffy
      1: 120000, // Zoro
      2: 50, // Chopper
      3: 6000, // Nami
      4: 77000, // Sanji
    };
  }

  /**
   * Retrieves the current score from storage.
   * @returns {number} The current score.
   */
  get() {
    return this.storageInstance.getItem("points") || 0;
  }

  /**
   * Adds points to the current score and updates the storage.
   * @param {number} points - The points to be added.
   */
  add(character) {
    const points = this.scorePerCharacter[character];
    const pontuation = this.get() + points;
    this.storageInstance.setItem("points", pontuation);
    return {pontuation, points};
  }
}

export default Scoreboard;
