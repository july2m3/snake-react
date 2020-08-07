/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

import './main.scss';

import Map from './components/map';

// import constants
import {
  PLAYER,
  FOOD,
  LEFT_KEY,
  RIGHT_KEY,
  UP_KEY,
  DOWN_KEY,
} from './components/constants';

interface Apple {
  column: number;
  row: number;
}
interface Player {
  coordinates: [{ row: number; col: number }];
  head: {
    row: number;
    col: number;
  };
}

const App: React.SFC = () => {
  const [grid, updateGrid] = useState<number[][] | null | undefined>();
  const [player, updatePlayer] = useState<Player | null>();
  const [apple, updateApple] = useState<Apple | null>();

  function movePlayer(upOrDown = 0, leftOrRight = 0) {
    // const tempGrid = [grid];
    console.log('moving snake', { upOrDown, leftOrRight });
  }

  function getNewApplePosition() {
    const row = Math.floor(Math.random() * 16);
    const column = Math.floor(Math.random() * 16);
    return { row, column };
  }

  function updateApplePosition() {
    updateApple(getNewApplePosition());
  }

  function handleKeyDownEvent(event: any) {
    switch (event.keyCode) {
      case UP_KEY:
        movePlayer(-1, 0);
        break;
      case RIGHT_KEY:
        movePlayer(0, 1);
        break;
      case DOWN_KEY:
        movePlayer(1, 0);
        break;
      case LEFT_KEY:
        movePlayer(0, -1);
        break;
      default:
        break;
    }
  }

  // update Grid by putting in current player position and apple position
  function updateGameBoard() {
    if (grid === undefined || player === undefined || apple === undefined) {
      return;
    }

    const tempGrid = new Array(16).fill(0).map(() => new Array(16).fill(0));
    tempGrid![player!.head.row][player!.head.col] = PLAYER;
    tempGrid![apple!.row][apple!.column] = FOOD;
    updateGrid(tempGrid);
  }

  // setup grid, player and apple, and keyboard
  useEffect(() => {
    const tempGrid = new Array(16).fill(0).map(() => new Array(16).fill(0));

    const tempPlayer: Player = {
      coordinates: [{ row: 8, col: 8 }],
      head: { row: 8, col: 8 },
    };

    updateGrid(tempGrid);
    updatePlayer(tempPlayer);
    updateApplePosition();
    document.addEventListener('keydown', handleKeyDownEvent);
  }, []);

  useEffect(() => {
    updateGameBoard();
  }, [player, apple]);

  return <>{grid && <Map grid={grid} />}</>;
};

export default App;
