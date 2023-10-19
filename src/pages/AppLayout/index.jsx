import React from 'react';
import { Outlet } from "react-router-dom";

import Sidebar from '../../components/Sidebar';

import styles from "./AppLayout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.adminBackground}>
    <Sidebar />
    <div className={styles.adminPanelContent}>
      <Outlet/>
    </div>
  </div>
  )
}

export default AppLayout