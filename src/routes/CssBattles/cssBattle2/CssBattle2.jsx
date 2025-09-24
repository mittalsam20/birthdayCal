import React from "react";
import classes from "./CssBattle2.module.scss";

const CssBattle2 = () => {
  return (
    <div className={classes.stage}>
      <div className={`${classes.half} ${classes.y} ${classes.top}`} />
      <div className={`${classes.half} ${classes.r} ${classes.top} ${classes.onTop}`} />
      <div className={`${classes.half} ${classes.y} ${classes.bot} ${classes.onTop}`} />
      <div className={`${classes.half} ${classes.r} ${classes.bot}`} />
    </div>
  );
};

export default CssBattle2;
