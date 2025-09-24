import React from "react";

import classNames from "classnames";
import classes from "./Box.module.scss";

const Box = props => {
  const { children, className, containerStyle, isRowAligned = false } = props;

  const containerClass = classNames({
    [className]: !!className,
    [classes.container]: true,
    [classes.rowAligned]: isRowAligned,
  });

  return (
    <div className={containerClass} style={containerStyle}>
      {children}
    </div>
  );
};

export default Box;
