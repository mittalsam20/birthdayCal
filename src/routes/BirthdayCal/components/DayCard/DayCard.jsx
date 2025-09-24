import React from "react";

import classes from "./DayCard.module.scss";
import PersonTile from "@BirthdayCal/components/PersonTile";

const getGridDimensions = ({ numberOfTiles }) => {
  if (numberOfTiles === 0 || numberOfTiles === 1) return { rows: 1, cols: 1 };
  const gridSize = Math.ceil(Math.sqrt(numberOfTiles));
  return { rows: gridSize, cols: gridSize };
};

const getContainerStyle = ({ numberOfTiles }) => {
  const { rows, cols } = getGridDimensions({ numberOfTiles });
  return {
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };
};

const DayCard = props => {
  const { title = "", persons = [] } = props;
  const numberOfTiles = persons.length;
  const containerStyle = getContainerStyle({ numberOfTiles });

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div style={containerStyle} className={classes.cardBodyContainer}>
        {persons.map(({ name, birthday }, index) => {
          const key = `${name}-${birthday}-${index}`;
          return <PersonTile key={key} name={name} birthday={birthday} />;
        })}
      </div>
    </div>
  );
};

export default DayCard;
