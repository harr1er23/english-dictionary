import React from "react";
import { useSpeechSynthesis } from "react-speech-kit"
import toast, { Toaster } from 'react-hot-toast';

import sound from "../../assets/ico/sound.png"

import styles from "./Dictionary.module.scss";

const Dictionary = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const [word, setWord] = React.useState('');
  const [transcription, setTranscription] = React.useState('');

  const {speak, voices} = useSpeechSynthesis();
  let voice = voices[104];

  const addWordToDictionary = () => {
    toast.success("Слово добавлено в словарь!")
    setWord('');
    setTranscription('')
  }

  return (
    <div className={styles.background}>
      <Toaster />
      <h2>Мой словарь</h2>

      <div>Вы еще не добавляли слов</div>
      <p>чтобы добавить слово нажмите кнопку в низу экрана</p>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className={`modal-content${" "+ styles.modalContent}`}>
            <div className={`modal-header${" " + styles.modalHeader}`}>
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Добавить слово
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input value={word} onChange={(e) => setWord(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" required placeholder="Слово"/>
                <img className={styles.soundImg} onClick={() => word ? speak({text:word, voice}) : toast.error("Вы не ввели слово")} src={sound} alt="Воспроизвести" />
              </div>
              <div className="mb-3">
                <input value={transcription} onChange={(e) => setTranscription(e.target.value)} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Транскрипция"/>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" required placeholder="Основной перевод"/>
              </div>
            </div>
            <div className={`modal-footer${" " + styles.modalFooter}`}>
              <div onClick={() => addWordToDictionary()} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Understood
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setIsModalOpen(true)}
        className={styles.addWordButton}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div>+</div>
      </div>
    </div>
  );
};

export default Dictionary;
