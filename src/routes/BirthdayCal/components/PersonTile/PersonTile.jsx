import React, { useMemo } from "react";
import classes from "./PersonTile.module.scss";
import { getNameInitials, getColorFromName } from "@utils/HelperFunctions";

const PersonTile = React.memo(props => {
  const { name = "" } = props;

  const initials = useMemo(() => getNameInitials({ fullName: name }), [name]);
  const backgroundColor = useMemo(() => getColorFromName({ name }), [name]);

  return (
    <div className={classes.personTile} style={{ backgroundColor }}>
      {initials}
    </div>
  );
});

PersonTile.displayName = "PersonTile";
export default PersonTile;
