import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import PulserFeed from "../pages/PulserFeed";

export const routesConfig = [
  {
    path: "/",
    element: <Main />,
  },

  {
    path: "/pulserfeed/messages",
    element: <PulserFeed />,
  },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
