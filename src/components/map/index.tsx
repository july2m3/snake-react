import React from "react";

interface mapProps {
  grid: number[][] | undefined | null;
}

const Map: React.SFC<mapProps> = (props: mapProps) => {
  const { grid } = props;
  console.log(grid);
  return (
    <>
      <h1>hello from map</h1>
    </>
  );
};

export default Map;
