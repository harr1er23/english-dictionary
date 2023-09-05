import React from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./index.scss";

import SideBar from "./components/Sidebar";
import Dictionary from "./pages/Dictionary";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Training from "./pages/Training";
import Settings from "./pages/Settings";
import Statisctics from "./pages/Statistics";
import Grammar from "./pages/Grammar";

let isAuth = true;

function App() {
  return (
    <>
      {isAuth ? (
        <>
          <SideBar />
          <div className='background'>
            <Routes>
              <Route path="/dictionary" element={<Dictionary />}></Route>
              <Route path="/training" element={<Training />}></Route>
              <Route path="/grammar" element={<Grammar/>}></Route>
              <Route path="/statistics" element={<Statisctics/>}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
