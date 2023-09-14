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
import MyQuestion from "../Pages/Shared/MyQuestion/MyQuestion";
import ContactUs from "../Pages/Shared/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/Shared/Dashboard/UserProfile/UserProfile";
import EditProfile from "../Pages/Shared/Dashboard/EditProfile/EditProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/questions",
        element: <Question></Question>,
        children: [
          {
            path: "myQuestion",
            element: (
              <PrivateRoute>
                <MyQuestion></MyQuestion>
              </PrivateRoute>
            ),
          },
        ],
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
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "userProfile/:email",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "editProfile",
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [],
  },
]);
