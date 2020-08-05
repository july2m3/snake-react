import React from "react";
import { v4 as uuidV4 } from "uuid";

interface mapProps {
  grid: number[][];
}

const Map: React.SFC<mapProps> = (props: mapProps) => {
  const { grid } = props;

  const renderedGrid = new Array();

  const getClassName = (j: number, i: number) => {
    if (j % 2 === 0) {
      return i % 2 === 0 ? "box-one" : "box-two";
    } else {
      return i % 2 === 0 ? "box-two" : "box-one";
    }
  };

  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid.length; i++) {
      let className = getClassName(j, i);
      renderedGrid.push(<div className={className} key={uuidV4()}></div>);
    }
  }

  return <div className="map">{renderedGrid}</div>;
};

export default Map;
