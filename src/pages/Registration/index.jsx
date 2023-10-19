import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";

import styles from "./Registration.module.scss";

import { setEmail, setPass, setName } from "../../store/auth/authSlice";
import Input from "../../components/Input";
// import { useAppDispatch } from "../../store/store";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pass, email, nickName } = useSelector(state => state.authSlice);

  const onClickRegistration = async () => {
    await axios
      .post("/api/v1/admin/login", {
        email: email,
        password: pass,
      })
      .then((resp) => {
        // toast.success("Вы успешно зарегистрировались");
        // navigate("app/login");
      })
      // .catch((err) => {
      //   if (err.response.status === 422) {
      //     toast.error("Пароль должен соответсвовать требованиям!");
      //   } else if (err.response.status === 401) {
      //     toast.error("Не верный пароль!");
      //   } else {
      //     toast.error("Что-то сломалось, попробуйте позже :(");
      //   }
      //   console.log(err);
      // });
  };

  const changePassInput = (str) => {
    dispatch(setPass(str));
  }

  const changeEmailInput = (str) => {
    dispatch(setEmail(str));
  }

  const changeNameInput = (str) => {
    dispatch(setName(str));
  }

  return (
    <div className={styles.backgroundLogin}>
      <h4>Регистрация</h4>
      <div className="mb-3">
        <div>Nick</div>
        <Input type={"text"} value={nickName} onChangeFunction={changeNameInput}/>
      </div>
      <div className="mb-3">
        <div>Email</div>
        <Input type={"email"} value={email} onChangeFunction={changeEmailInput}/>
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input type={"password"} value={pass} onChangeFunction={changePassInput}/>
      </div>
      <span
        className={styles.buttonToLogin}
        onClick={() => navigate("/login")}
      >
        Уже есть аккаунт?
      </span>
      <div className={styles.loginButtons}>
      <div
        onClick={() => onClickRegistration()}
        className="btn btn-primary"
      >
        Зарегистрироваться
      </div>
      </div>
    </div>
  );
};

export default Registration;