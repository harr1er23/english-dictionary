import React from "react";

import styles from "./Input.module.scss";

const Input = ({
  value,
  onChangeFunction,
  textPlaceholder,
  type,
  onKeyDownFunction,
  svgSrc,
  onClickFunction,
  disabled=false
}) => {
  return (
    <div className={styles.inputBlock}>
      <input
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
        type={type}
        onKeyDown={onKeyDownFunction}
        className={styles.input}
        placeholder={textPlaceholder}
        styles={{pointerEvents: disabled ? 'none' : ''}}
      />
      {svgSrc ? <div className={styles.soundImg}>{svgSrc}</div> : ''}
    </div>
  );
};

export default Input;
