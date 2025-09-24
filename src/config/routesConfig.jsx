import { ROUTE_PATHS } from "@/constants/routesConstant";

import AppLayout from "@/routes/AppLayout";
import BirthdayCal from "@/routes/BirthdayCal";

export const routesConfig = [
  {
    path: ROUTE_PATHS.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <BirthdayCal />,
      },
    ],
  },
  {
    path: ROUTE_PATHS.CATCH_ALL,
    element: <>{"404"}</>,
  },
];
