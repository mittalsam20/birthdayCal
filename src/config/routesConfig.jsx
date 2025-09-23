import BirthdayCal from "@/routes/BirthdayCal";

export const ROUTE_PATHS = {
  ROOT: "/",
  CATCH_ALL: "*",
};

export const routesConfig = [
  {
    path: ROUTE_PATHS.ROOT,
    element: <BirthdayCal />,
  },
  {
    path: ROUTE_PATHS.CATCH_ALL,
    element: <>{"404"}</>,
  },
];
