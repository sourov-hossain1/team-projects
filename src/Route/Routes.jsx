import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Home from "../Pages/Home/Home/Home";
import Question from "../Pages/Shared/Question/Question";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AskQuestion from "../Pages/AskQuestion/AskQuestion";
import AddAnswer from "../Pages/Shared/Answer/AddAnswer";
import QuestionAnswer from "../Pages/Shared/Answer/QuestionAnswer";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/question",
        element: <Question></Question>,
      },
      {
        path: "/questionAnswer/:id",
        element: <QuestionAnswer />,
      },
      {
        path: "/addAnswer/:id",
        element: <AddAnswer />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "askquestion",
        element: <AskQuestion></AskQuestion>,
      },
    ],
  },
]);
