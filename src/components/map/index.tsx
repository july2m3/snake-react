/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import { FOOD, PLAYER } from '../constants';

interface mapProps {
  grid: number[][];
}

const Map: React.SFC<mapProps> = (props: mapProps) => {
  const { grid } = props;

  const renderedGrid = [];

  const getClassName = (j: number, i: number) => {
    // check for worm, or apple
    if (grid[i][j] === PLAYER) {
      return 'player';
    }
    if (grid[i][j] === FOOD) {
      return 'food';
    }
    if (j % 2 === 0) {
      return i % 2 === 0 ? 'box-one' : 'box-two';
    }
    return i % 2 === 0 ? 'box-two' : 'box-one';
  };

  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid.length; i++) {
      const className = getClassName(j, i);
      renderedGrid.push(<div className={className} key={uuidV4()} />);
    }
  }

  return <div className="map">{renderedGrid}</div>;
};

export default Map;
