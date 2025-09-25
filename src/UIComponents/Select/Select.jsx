import React from "react";
import classNames from "classnames";

import classes from "./Select.module.scss";

const Select = React.memo(props => {
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
    [className]: !!className,
    [classes.selectDisabled]: isDisabled,
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
});

Select.displayName = "Select";
export default Select;
