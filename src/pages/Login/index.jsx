import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import md5 from 'md5';

import styles from "./Login.module.scss";

import { setEmail, setPass } from "../../store/auth/authSlice";
import { setUser } from "../../store/user/userSlice";
import Input from "../../components/Input";
// import { useAppDispatch } from "../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pass = useSelector(state => state.authSlice.pass);
  const  email = useSelector(state => state.authSlice.email);

  const onClickLogin = async () => {
    try{
      const hashPass = md5(pass);
      await axios.post(
        process.env.REACT_APP_AUTH_KEY,
        { email: email, password: hashPass},
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }
      ).then((resp) => {
        toast.success("Авторизация прошла успешно!");
        dispatch(setUser(resp.data));
        navigate("/app/dictionary");
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(resp.data));
      })
    }catch(err){
      console.log(err);
      if(err.response.status === 401){
        toast.error("Данного пользователя не существует!");
      }else if(err.response.status === 404){
        toast.error("Написать");
      }else if(err.response.status === 400){
        toast.error("Заполните все поля!");
      }
      else{
        toast.error("Что-то сломалось, попробуйте позже :(");
      }
    }
  };

  const changePassInput = (str) => {
    dispatch(setPass(str))
  }

  const changeEmailInput = (str) => {
    dispatch(setEmail(str))
  }

  return (
    <div className={styles.backgroundLogin}>
      <h4>Вход</h4>
      <div className="mb-3">
        <div>Email</div>
        <Input type={"email"} value={email} onChangeFunction={changeEmailInput}/>
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input type={"password"} value={pass} onChangeFunction={changePassInput}/>
      </div>
      <div className={styles.loginButtons}>
      <div
        onClick={() => navigate("/registration")}
        data-type="submit"
        className="btn btn-primary"
      >
        Регистрация
      </div>
      <div
        onClick={() => onClickLogin()}
        data-type="submit"
        className="btn btn-primary"
      >
        Войти
      </div>
      </div>
    </div>
  );
};

export default Login;