
![alt text](https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc_d1IBWl8gbEh-rornoIUCfsxlW9v01bGIFqESDqOjqhwPpMID-7dRW6Bntm-VzdTnzXGAZOI_CGRr48Eck4qbqqfndbxEwplkA6fPL9nvr.png?r=241 "Logo")
# Pirate Hunt

Welcome to **Pirate Hunt**, a fun roulette game where you earn points in Beris by aligning 3 characters from the anime One Piece. This project is a non-commercial game, made for entertainment purposes only.

## Demo

You can test the game demo at: [https://piratehunt.samuelrodrigues.dev](https://piratehunt.samuelrodrigues.dev)

## Project Overview

### Description

Pirate Hunt is a simple, yet engaging roulette game inspired by the popular anime One Piece. Players spin the reels and try to align three characters to win points in Beris. The game features sound effects and a dynamic interface to enhance the user experience.

### Features

- **Roulette Spin**: Spin the reels and try to align the characters.
- **Scoreboard**: Track your points in Beris.
- **Sound Control**: Mute and unmute the game sounds.

### Stacks Used

- **HTML**: Markup language used for structuring the game interface.
- **CSS**: Styling language used for designing the game interface.
- **JavaScript**: Programming language used for game logic and interactions.
- **Google Fonts**: Used for custom fonts.

## Project Structure

The project structure is as follows:
```
Pirate-Hunt/
├── css/
│ └── style.css
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── mute.png
│ │ │ ├── volume.png
│ │ │ ├── beri.png
│ │ │ ├── beri-dark.png
│ │ │ └── reel-img.png
│ │ └── sounds/
│ │ └── game-music.mp3
│ ├── modules/
│ │ ├── Sound.js
│ │ ├── Roulette.js
│ │ ├── Scoreboard.js
│ │ └── Storage.js
│ ├── utils/
│ │ └── format.js
│ └── main.js
├── index.html
└── README.md
```
## Logic Explanation

The game logic is implemented using JavaScript. Here is a brief overview of the main components:

- **Sound.js**: Handles the background music, allowing the player to mute and unmute.
- **Roulette.js**: Contains the logic for spinning the reels and determining the outcome.
- **Scoreboard.js**: Manages the player's score, storing and retrieving it from local storage.
- **Storage.js**: A utility for interacting with local storage.
- **format.js**: A utility for formatting the score display.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)

### Installation

1. **Clone the repository**

```bash
  git clone https://github.com/samucadev/Pirate-Hunt.git
```

2. **Navigate to the project directory**

```bash
cd Pirate-Hunt
```

### Running the Project

Open the index.html file in your preferred browser:

```bash
open index.html
```

Alternatively, you can use a live server extension in your code editor, such as the Live Server extension for Visual Studio Code, to serve the files locally.

### Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

### Disclaimer

© This is a non-commercial project. The images and characters of One Piece are properties of Toei Animation and Eiichiro Oda. No copyright infringement intended.

### Contact

[Github](https://github.com/samucadev)
