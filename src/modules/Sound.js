class Sound {
  /**
   * Creates a new instance of Sound.
   * @constructor
   * @param {string} source - The URL of the audio file.
   */
  constructor(source) {
    /**
     * The HTML audio element.
     * @type {HTMLAudioElement}
     */
    this.audioElement = new Audio();
    /**
     * Indicates whether the sound is muted.
     * @type {boolean} 
     */
    this.isMute = false;
    this.audioElement.src = source;
  }

  /**
   * Starts playing the audio with loop and volume settings.
   */
  play() {
    this.audioElement.loop = true;
    this.setVolume(0.6);
    this.audioElement.play();
  }

  /**
   * Toggles between mute and unmute.
   * @returns {boolean} - The updated mute status.
   */
  toggleMute() {
    this.isMute = !this.isMute;
    this.audioElement.muted = this.isMute;
    return this.isMute;
  }

  /**
   * Sets the volume level of the audio.
   * @param {number} volume - The volume level between 0 and 1.
   */
  setVolume(volume) {
    this.audioElement.volume = volume;
  }
}

export default Sound;
