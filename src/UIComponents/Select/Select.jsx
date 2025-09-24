import React from "react";
import classNames from "classnames";

import classes from "./Select.module.scss";

const Select = props => {
  const {
    value = "",
    options = [],
    className = "",
    isDisabled = false,
    onChange = () => {},
    ...restProps
  } = props;

  const handleChange = event => {
    const value = event.target.value;
    if (onChange) onChange(value);
  };

  const selectClasses = classNames(classes.select, {
    [classes.selectDisabled]: isDisabled,
    [className]: !!className,
  });

  return (
    <select
      value={value}
      disabled={isDisabled}
      onChange={handleChange}
      className={selectClasses}
      {...restProps}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
