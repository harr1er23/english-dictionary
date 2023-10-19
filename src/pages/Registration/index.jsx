import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import md5 from 'md5';

import styles from "./Registration.module.scss";

import {
  setEmail,
  setPass,
  setName,
  clearValues,
} from "../../store/auth/authSlice";
import Input from "../../components/Input";
// import { useAppDispatch } from "../../store/store";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nickName = useSelector((state) => state.authSlice.nickName);
  const email = useSelector((state) => state.authSlice.email);
  const pass = useSelector((state) => state.authSlice.pass);

  const onClickRegistration = async () => {
    if(pass.length === 0 || email.length === 0 || nickName.length === 0){
      toast.error("Заполните все поля!");
      return;
    }

    try {
      const hashPass = md5(pass);
      await axios
        .post(
          process.env.REACT_APP_REGISTER_KEY,
          { email: email, password: hashPass, nickName: nickName },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          toast.success("Вы успешно зарегистрировались");
          navigate("/login");
          dispatch(clearValues());
        });
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        toast.error("Такой пользователь уже зарегистрирован!");
      } else {
        toast.error("Что-то сломалось, попробуйте позже :(");
      }
    }
  };

  const changePassInput = (str) => {
    dispatch(setPass(str));
  };

  const changeEmailInput = (str) => {
    dispatch(setEmail(str));
  };

  const changeNameInput = (str) => {
    dispatch(setName(str));
  };

  return (
    <div className={styles.backgroundLogin}>
      <h4>Регистрация</h4>
      <div className="mb-3">
        <div>Nick</div>
        <Input
          type={"text"}
          value={nickName}
          onChangeFunction={changeNameInput}
        />
      </div>
      <div className="mb-3">
        <div>Email</div>
        <Input
          type={"email"}
          value={email}
          onChangeFunction={changeEmailInput}
        />
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input
          type={"password"}
          value={pass}
          onChangeFunction={changePassInput}
        />
      </div>
      <span className={styles.buttonToLogin} onClick={() => navigate("/login")}>
        Уже есть аккаунт?
      </span>
      <div className={styles.loginButtons}>
        <div onClick={() => onClickRegistration()} className="btn btn-primary">
          Зарегистрироваться
        </div>
      </div>
    </div>
  );
};

export default Registration;
