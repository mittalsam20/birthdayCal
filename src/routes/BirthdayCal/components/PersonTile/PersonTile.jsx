import React from "react";
import classes from "./PersonTile.module.scss";
import { getNameInitials, getColorFromName } from "@utils/HelperFunctions";

const PersonTile = props => {
  const { name = "", birthday } = props;

  const initials = getNameInitials({ fullName: name });
  const backgroundColor = getColorFromName({ name });

  return (
    <div className={classes.personTile} style={{ backgroundColor }}>
      {initials}
    </div>
  );
};

export default PersonTile;
