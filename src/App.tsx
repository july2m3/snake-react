import React, { useState, useEffect } from "react";
// import constants

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
      <h1>Hello world</h1>
    </>
  );
};

export default App;
