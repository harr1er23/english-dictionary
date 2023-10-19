import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import ModalAddWord from "../../components/ModalAddWord";
import ModalWithScroll from "../../components/ModalWithScroll";

import styles from "./Dictionary.module.scss";
import Word from "../../components/Word";

import { toggleModal } from "../../store/sessionModal/sessionModalSlice";
import { fetchDictionaryWords } from "../../store/dictionaryWords/dictionaryWordsSlice";
import { setUser } from "../../store/user/userSlice";

const Dictionary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchDictionaryWords());
  }, [])

  const {show} = useSelector(state => state.sessionModalSlice);
  const {dictionaryWords, status} = useSelector(state => state.dictionaryWordSlice)

  const [wordPresets, setWordPresets] = React.useState([
    {
      idPresets: 1,
      namePresets: "Проффесии",
      words: [
        {
          word: "doctor",
          transcription: "[wɜːd]",
          translate: ["слово", "словечко", "известие"],
          tags: [{ tagId: 1 }, { tagId: 2 }],
        },
        {
          word: "pilot",
          transcription: "[test]",
          translate: ["тест", "испытание", "проверка"],
          tags: [{ tagId: 2 }],
        },
      ],
    },
    {
      idPresets: 2,
      namePresets: "Фрукты",
      words: [
        {
          word: "apple",
          transcription: "[wɜːd]",
          translate: ["слово", "словечко", "известие"],
          tags: [{ tagId: 1 }, { tagId: 2 }],
        },
        {
          word: "carrot",
          transcription: "[test]",
          translate: ["тест", "испытание", "проверка"],
          tags: [{ tagId: 2 }],
        },
        {
          word: "lemon",
          transcription: "[wɜːd]",
          translate: ["слово", "словечко", "известие"],
          tags: [{ tagId: 1 }, { tagId: 2 }],
        },
      ],
    },
    {
      idPresets: 3,
      namePresets: "Фрукты",
      words: [
        {
          word: "apple",
          transcription: "[wɜːd]",
          translate: ["слово", "словечко", "известие"],
          tags: [{ tagId: 1 }, { tagId: 2 }],
        },
        {
          word: "carrot",
          transcription: "[test]",
          translate: ["тест", "испытание", "проверка"],
          tags: [{ tagId: 2 }],
        },
        {
          word: "lemon",
          transcription: "[wɜːd]",
          translate: ["слово", "словечко", "известие"],
          tags: [{ tagId: 1 }, { tagId: 2 }],
        },
      ],
    },
  ]);

    const handleClose = () => {
    localStorage.clear();
    dispatch(setUser(null));
    navigate("/login");
    dispatch(toggleModal(false));
  };

  return status === "error" ? (<Modal
    show={show}
    onHide={() => dispatch(toggleModal(false))}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Предупреждение</Modal.Title>
    </Modal.Header>
    <Modal.Body>Сессия истекла. Авторизируйтесь снова!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Авторизироваться
      </Button>
    </Modal.Footer>
  </Modal>) :(
    <div className={styles.background}>
      <h2>Dictionary</h2>

      <div className={styles.backgroundWords}>
        {status === "loading" ? <div>Loading...</div> : status === "success" ? (dictionaryWords.length === 0 ? (dictionaryWords.map((obj) => <Word key={obj.id} {...obj} />)) : (<div><div>Вы еще не добавляли слов</div><p>чтобы добавить слово нажмите кнопку в низу экрана</p></div>)) : status === "error" && (<div>Error</div>)}
      </div>

      {/* модальное окно добавления нового слова в словарь */}
      <ModalAddWord />

      {/* модальное окно выбора пресетов */}
      <ModalWithScroll
        wordPresets={wordPresets}
        headerText={"Загрузить пресет"}
      />

      <div
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
