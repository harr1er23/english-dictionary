import React from "react";
import axios from "axios";

import ModalAddWord from "../../components/ModalAddWord";
import ModalWithScroll from "../../components/ModalWithScroll";

import styles from "./Dictionary.module.scss";
import Word from "../../components/Word";

const Dictionary = () => {
  //слова словаря
  const [words, setWords] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(process.env.REACT_APP_DICTIONARY_KEY)
      .then((resp) => setWords(resp.data))
      .catch((error) => console.log(error));
  }, []);
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

  return (
    <div className={styles.background}>
      <h2>Dictionary</h2>

      <div className={styles.backgroundWords}>
        {words ? (
          words.map((obj) => <Word key={obj.id} {...obj} />)
        ) : (
          <div>
            <div>Вы еще не добавляли слов</div>
            <p>чтобы добавить слово нажмите кнопку в низу экрана</p>
          </div>
        )}
      </div>

      {/* модальное окно добавления нового слова в словарь */}
      <ModalAddWord words={words} setWords={setWords} />

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
