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
  LEFT_KEY,
  RIGHT_KEY,
  UP_KEY,
  DOWN_KEY,
} from './components/constants';

const App: React.SFC = () => {
  const [grid, updateGrid] = useState<number[][] | null | undefined>();
  const [emptyGrid, updateEmptyGrid] = useState<
    number[][] | null | undefined
  >();
  const [player, updatePlayer] = useState<Object | null>();
  const [apple, updateApple] = useState<Object | null>();

  function putPlayerInGrid() {
    const tempGrid = [grid];
    console.log({ tempGrid });
  }

  function movePlayer(upOrDown = 0, leftOrRight = 0) {
    // const tempGrid = [grid];
    console.log('moving snake', { upOrDown, leftOrRight });
  }

  function getNewApplePosition() {}

  function updateApplePosition() {}

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

  // setup grid, player and apple, and keyboard
  useEffect(() => {
    const tempGrid = new Array(16).fill(0).map(() => new Array(16).fill(0));

    const tempPlayer = {
      coorindates: [{ row: 8, col: 8 }],
      head: { row: 8, col: 8 },
    };

    updateEmptyGrid(tempGrid);
    updateGrid(tempGrid);
    updatePlayer(tempPlayer);
    document.addEventListener('keydown', handleKeyDownEvent);

    //  wait for stuff to load a lil
    setTimeout(() => {
      putPlayerInGrid();
    }, 100);
  }, []);

  return <>{grid && <Map grid={grid} />}</>;
};

export default App;
