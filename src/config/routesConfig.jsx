import { ROUTE_PATHS } from "@/constants/routesConstant";

import AppLayout from "@/routes/AppLayout";
import BirthdayCal from "@BirthdayCal";
import CssBattle1 from "@CssBattles/cssBattle1";
import CssBattle2 from "@CssBattles/cssBattle2";

console.log(ROUTE_PATHS);
export const routesConfig = [
  {
    path: ROUTE_PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <BirthdayCal />,
      },
      {
        path: ROUTE_PATHS.CSS_BATTLES,
        children: [
          {
            path: "1",
            element: <CssBattle1 />,
          },
          {
            path: "2",
            element: <CssBattle2 />,
          },
        ],
      },
    ],
  },

  {
    path: ROUTE_PATHS.CATCH_ALL,
    element: <>{"404"}</>,
  },
];
