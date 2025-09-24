import React, { useMemo } from "react";
import classNames from "classnames";

import classes from "./DayCard.module.scss";
import { PokerFaceIcon } from "@/svgComponents";
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

const getSortedPersons = ({ persons }) => {
  return persons.sort((a, b) => {
    const dateA = new Date(a.birthday);
    const dateB = new Date(b.birthday);
    return dateA - dateB;
  });
};

const DayCard = props => {
  const { title = "", persons = [] } = props;
  const numberOfTiles = persons.length;
  const isEmpty = numberOfTiles === 0;
  const sortedPersons = useMemo(() => getSortedPersons({ persons }), [persons]);
  const containerStyle = useMemo(() => getContainerStyle({ numberOfTiles }), [numberOfTiles]);

  const bodyContainerClass = classNames({
    [classes.cardBodyContainer]: true,
    [classes.cardBodyContainerEmpty]: isEmpty,
  });

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div style={containerStyle} className={bodyContainerClass}>
        {isEmpty ? (
          <PokerFaceIcon />
        ) : (
          sortedPersons.map(({ name, birthday }, index) => {
            const key = `${name}-${birthday}-${index}`;
            return <PersonTile key={key} name={name} />;
          })
        )}
      </div>
    </div>
  );
};

export default DayCard;
