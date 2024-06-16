class LocalStorageManager {
  /**
   * Saves an item in localStorage.
   * @param {string} key - The key of the item to be stored.
   * @param {*} value - The value to be stored.
   */
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Retrieves an item from localStorage.
   * @param {string} key - The key of the item to be retrieved.
   * @returns {*} The value of the item, or null if not found.
   */
  getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /**
   * Removes an item from localStorage.
   * @param {string} key - The key of the item to be removed.
   */
  static removeItem(key) {
    localStorage.removeItem(key);
  }

  /**
   * Clears all items from localStorage.
   */
  clear() {
    localStorage.clear();
  }
}

export default LocalStorageManager;
