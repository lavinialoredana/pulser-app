import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error";
import Main from "../pages/Main";
import PulserFeed from "../pages/PulserFeed";

export const routesConfig = [
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/pulserfeed/messages",
    element: <PulserFeed />,
    errorElement: <ErrorPage />,
  },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
