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
}) => {
  return (
    <div className="mb-3">
      <input
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
        type={type}
        onKeyDown={onKeyDownFunction}
        className={styles.input}
        placeholder={textPlaceholder}
      />
      {svgSrc ? <div className={styles.soundImg}>{svgSrc}</div> : ''}
    </div>
  );
};

export default Input;
