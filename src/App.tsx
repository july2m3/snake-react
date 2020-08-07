import React, { useState, useEffect } from 'react';

import './main.scss';

import Map from './components/map';

// import constants
import { FOOD, PLAYER } from './components/constants';

const App: React.SFC = () => {
  const [grid, updateGrid] = useState<number[][] | null | undefined>();
  const [player, updatePlayer] = useState<Object | null>();

  const putPlayerInGrid = () => {
    const tempGrid = [grid];
    console.log(tempGrid);
  };

  // setup
  useEffect(() => {
    //  create 16 x 16 2d array filled with 0s
    const tempGrid = new Array(16).fill(0).map(() => new Array(16).fill(0));

    const tempPlayer = {
      positionRow: 8,
      positionColumn: 8,
      size: 1,
    };

    tempGrid[8][8] = PLAYER;

    updatePlayer(tempPlayer);
    updateGrid(tempGrid);
  }, []);

  return <>{grid && <Map grid={grid} />}</>;
};

export default App;
