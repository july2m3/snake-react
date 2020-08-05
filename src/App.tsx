import React, { useState, useEffect } from "react";

import "./main.scss";

import Map from "./components/map";

// import constants
const foodBlock = 1;
const playerBlock = 2;

const App: React.SFC = () => {
  const [grid, updateGrid] = useState<number[][] | null>();

  //setup
  useEffect(() => {
    // create 16 x 16 2d array filled with 0s
    const tempGrid = new Array(16).fill(0).map(() => new Array(16).fill(0));

    updateGrid(tempGrid);
  }, []);

  return (
    <>
      <Map grid={grid} />
    </>
  );
};

export default App;
