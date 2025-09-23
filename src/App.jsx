import React from "react";
import "@styles/globalStyles.scss";
import { useRoutes } from "react-router";
import { routesConfig } from "@/config/routesConfig";

const App = () => {
  const routes = useRoutes(routesConfig);
  return <>{routes}</>;
};

export default App;
