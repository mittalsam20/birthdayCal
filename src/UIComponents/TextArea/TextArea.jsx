import React, { forwardRef } from "react";
import classNames from "classnames";

import classes from "./TextArea.module.scss";

const TextArea = forwardRef((props, ref) => {
  const {
    name,
    rows = 4,
    onChange,
    maxLength,
    value = "",
    placeholder = "",
    required = false,
    isDisabled = false,
    ...restProps
  } = props;

  const handleChange = event => {
    if (onChange) onChange(event.target.value);
  };

  const className = classNames(classes.textArea, {
    [classes.textAreaDisabled]: isDisabled,
  });

  return (
    <textarea
      ref={ref}
      name={name}
      rows={rows}
      value={value}
      required={required}
      disabled={isDisabled}
      maxLength={maxLength}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      {...restProps}
    />
  );
});

TextArea.displayName = "TextArea";
export default TextArea;
