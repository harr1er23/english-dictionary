import React from "react";
import styles from "./SmallTag.module.scss";

const SmallTag = ({tagName, onClickFunction}) => {
  return (
    <div className={styles.tagBackground}>
      {tagName}
    </div>
  );
};

export default SmallTag;
