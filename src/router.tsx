import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import PostDetails from "./pages/Home/PostDetails";
import Posts from "./pages/Home/Posts";

export const Router = createBrowserRouter([
  {
    path: "/auth/signin",
    element: <Login />,
  },
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/details/:id",
    element: <PostDetails />,
  },
]);
