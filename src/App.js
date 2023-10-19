import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import LoadingBar from "./components/LoadingBar";

import Dictionary from "./pages/Dictionary";
import Profile from "./pages/Profile";
import Training from "./pages/Training";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";
import Grammar from "./pages/Grammar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AppLayout from "./pages/AppLayout";

import { setUser } from "./store/user/userSlice";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);

  React.useEffect(() => {
    const value = localStorage.getItem("user");
    if (typeof value === "string") {
      const user = JSON.parse(value);
      dispatch(setUser(user));
    }
    setLoading(false);
  }, []);

  return loading ? (
    <LoadingBar loading={loading} />
  ) : (
    <>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "var(--success-toast)",
              color: "white",
            },
          },
          error: {
            style: {
              background: "var(--error-toast)",
              color: "white",
            },
          },
        }}
      />
      <div className="background">
        <Routes>
          <Route path="*" element={<NotFound/>}></Route>
          <Route
            path="/"
            element={<Navigate replace to="/app/dictionary" />}
          ></Route>
          <Route
            path="/login"
            element={
              user === null ? (
                <Login />
              ) : (
                <Navigate replace to="/app/dictionary" />
              )
            }
          ></Route>
          <Route
            path="/registration"
            element={
              user === null ? (
                <Registration />
              ) : (
                <Navigate replace to="/app/dictionary" />
              )
            }
          ></Route>

          <Route
            path="/app/*"
            element={
              user !== null ? <AppLayout /> : <Navigate replace to="/login" />
            }
          >
            <Route path="dictionary" element={<Dictionary />}></Route>
            <Route path="training" element={<Training />}></Route>
            <Route path="grammar" element={<Grammar />}></Route>
            <Route path="statistics" element={<Statistics />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
