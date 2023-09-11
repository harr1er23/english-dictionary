import React from "react";

import styles from "./ModalWithScroll.module.scss";

const ModalWithScroll = ({ wordPresets, headerText }) => {
  return (
    <div
      className="modal fade"
      id="modalwithscroll"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className={`modal-content${" " + styles.modalContent}`}>
          <div className={`modal-header${" " + styles.modalHeader}`}>
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {headerText}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className={styles.presetsBlockBackground}>
              {wordPresets.map((obj) => (
                <div key={obj.idPresets} className={styles.presetBackground}>
                  <h4>{obj.namePresets}</h4>
                  <p>Количество слов: {obj.words.length}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWithScroll;
