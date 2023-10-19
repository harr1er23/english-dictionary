import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";

import styles from "./Login.module.scss";

import { setEmail, setPass } from "../../store/auth/authSlice";
import { setUser } from "../../store/user/userSlice";
import Input from "../../components/Input";
// import { useAppDispatch } from "../../store/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pass, email } = useSelector(state => state.authSlice);

  const onClickLogin = async () => {
    await axios
      .post("/api/v1/admin/login", {
        email: email,
        password: pass,
      })
      .then((resp) => {
        // toast.success("Вы вошли в систему");
        // dispatch(setUser(resp.data));
        // navigate("/adminPanel/users");
        // localStorage.clear();
        // localStorage.setItem("adminUser", JSON.stringify(resp.data));
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
        {/* <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        /> */}
      </div>
      <div className="mb-3">
        <div>Password</div>
        <Input type={"password"} value={pass} onChangeFunction={changePassInput}/>
        {/* <input
          type="password"
          className="form-control"
          value={pass}
          onChange={(e) => dispatch(setPass(e.target.value))}
        /> */}
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