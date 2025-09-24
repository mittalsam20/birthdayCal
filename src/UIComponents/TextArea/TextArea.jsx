import React, { useEffect, useRef } from "react";
import classNames from "classnames";

import classes from "./TextArea.module.scss";

const autoPaste = async ({ onChange }) => {
  try {
    const text = await navigator.clipboard.readText();
    if (text && onChange) onChange(text);
  } catch (error) {
    console.error(error);
  }
};

const TextArea = props => {
  const {
    name,
    rows = 4,
    onChange,
    maxLength,
    value = "",
    placeholder = "",
    autoFocus = true,
    required = false,
    isDisabled = false,
    ...restProps
  } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef && inputRef.current) {
      inputRef.current.focus();
      autoPaste({ onChange });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus]);

  const onFocus = () => {
    if (onFocus) {
      autoPaste({ onChange });
    }
  };

  const handleChange = event => {
    if (onChange) onChange(event.target.value);
  };

  const className = classNames(classes.textArea, {
    [classes.textAreaDisabled]: isDisabled,
  });

  return (
    <textarea
      name={name}
      rows={rows}
      value={value}
      ref={inputRef}
      required={required}
      onFocus={onFocus}
      disabled={isDisabled}
      maxLength={maxLength}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default TextArea;
