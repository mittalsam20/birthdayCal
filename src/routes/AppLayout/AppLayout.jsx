import React from "react";
import classes from "./AppLayout.module.scss";
import AppHeader from "./partials/AppHeader";
import { Outlet } from "react-router";

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
