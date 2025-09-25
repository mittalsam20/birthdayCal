import React, { useEffect, useRef } from "react";
import classNames from "classnames";

import classes from "./TextArea.module.scss";

const autoPaste = async ({ onChange }) => {
  try {
    const text = await navigator.clipboard.readText();
    if (text && onChange) onChange(text);
  } catch (error) {
    console.warn(error);
  }
};

const TextArea = React.memo(props => {
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
  const className = classNames(classes.textArea, { [classes.textAreaDisabled]: isDisabled });

  useEffect(() => {
    if (autoFocus && inputRef && inputRef.current) {
      inputRef.current.focus();
      autoPaste({ onChange });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFocus]);

  const onFocus = () => {
    if (onFocus) autoPaste({ onChange });
  };

  const handleChange = event => {
    if (onChange) onChange(event.target.value);
  };

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
});

TextArea.displayName = "TextArea";
export default TextArea;
