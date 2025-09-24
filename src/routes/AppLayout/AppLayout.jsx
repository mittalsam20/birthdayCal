import React from "react";
import { Outlet } from "react-router";

import classes from "./AppLayout.module.scss";
import AppHeader from "./partials/AppHeader";

const AppLayout = () => {
  return (
    <div className={classes.container}>
      <AppHeader />
      <div className={classes.appOutletContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
