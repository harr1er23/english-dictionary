import React from "react";
import styles from "./Button.module.scss";

const Button = ({ text, type, onClickFunction, toggle, target }) => {
  return (
    <div
      type={type}
      onClick={() => (onClickFunction ? onClickFunction() : null)}
      data-bs-toggle={toggle}
      data-bs-target={target}
      className={styles.button}
    >
      {text}
    </div>
  );
};

export default Button;
