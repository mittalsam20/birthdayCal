import React from "react";
import { Link } from "react-router";
import { ROUTE_PATHS } from "@/constants/routesConstant";

import classes from "./AppHeader.module.scss";

const LINKS = [
  {
    id: "BIRTHDAY_CAL",
    label: "Birthday Cal",
    path: ROUTE_PATHS.ROOT,
  },
  {
    id: "CSS_BATTLE_1",
    label: "CSS Battle 1",
    path: `/${ROUTE_PATHS.CSS_BATTLES}/1`,
  },
  {
    id: "CSS_BATTLE_2",
    label: "CSS Battle 2",
    path: `/${ROUTE_PATHS.CSS_BATTLES}/2`,
  },
];

const AppHeader = () => {
  return (
    <div className={classes.container}>
      {LINKS.map(({ id, label, path }) => (
        <Link key={id} to={path} className={classes.link}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default AppHeader;
