import Sound from "./modules/Sound.js";
import Roulette from "./modules/Roulette.js";
import Scoreboard from "./modules/Scoreboard.js";
import LocalStorageManager from "./modules/Storage.js";
import { formatCurrency } from "./utils/format.js";

const localStorageManager = new LocalStorageManager();
const scoreboard = new Scoreboard(localStorageManager);

const sound = new Sound("/src/assets/sounds/game-music.mp3");

const handleSound = (soundInstance) => {
  soundInstance.toggleMute();
  const iconMute = document.getElementById("icon-mute");
  const iconUnmute = document.getElementById("icon-unmute");

  if (soundInstance.isMute) {
    iconMute.style.display = "none";
    iconUnmute.style.display = "block";
    return;
  }

  iconMute.style.display = "block";
  iconUnmute.style.display = "none";
};

const updateScore = () => {
  const points = document.getElementById("score");
  const pointsFormatted = formatCurrency(scoreboard.get())
  points.innerHTML = pointsFormatted;

  return pointsFormatted;
};

const handleSpin = async (rouletteInstance, simulateWin = false) => {
  const buttonSpin = document.getElementById("spin");
  const pointValue = document.getElementsByClassName("value-reward")[0];
  const pointsContainer = document.getElementById("points");

  buttonSpin.disabled = true;

  const { isWin, idCharacter } = await rouletteInstance.spin(simulateWin);

  let beri;

  if (isWin) {
    beri = scoreboard.add(idCharacter);
    updateScore()
  }

  buttonSpin.disabled = false;
  pointValue.innerHTML = beri?.points ? formatCurrency(beri.points) : 0;
  pointsContainer.style.opacity = 1;

  setTimeout(() => {
    pointsContainer.style.opacity = 0;
  }, 2500);
};

const handleModalStartGame = () => {
  const modal = document.getElementById("gameModal");
  const span = document.getElementsByClassName("close")[0];
  const button = document.getElementById("startGame")

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      sound.play();
    }
  };

  button.addEventListener("click", () => {
    modal.style.display = "none";
    sound.play();
  })
}

window.onload = () => {
  handleModalStartGame()

  const reelsList = document.getElementsByClassName("reel");
  const roulette = new Roulette(reelsList);

  const buttonSilentMusic = document.getElementById("silent-music");
  const buttonSpin = document.getElementById("spin");

  buttonSilentMusic.addEventListener("click", () => handleSound(sound));
  buttonSpin.addEventListener("click", () => handleSpin(roulette));

  updateScore();
};
