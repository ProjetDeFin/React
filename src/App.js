import './App.css';
import Error from "./pages/Error";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Companies from "./pages/Companies";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Students from "./pages/Students";
import Register from "./pages/Register";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  }, {
    path: '/applications',
    element: <Applications />,
    errorElement: <Error />,
  }, {
    path: '/companies',
    element: <Companies />,
    errorElement: <Error />,
  }, {
    path: '/offers',
    element: <Offers />,
    errorElement: <Error />,
  }, {
    path: '/sign-in',
    element: <SignIn />,
    errorElement: <Error />,
  }, {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  }, {
    path: '/students',
    element: <Students />,
    errorElement: <Error />,
  }
]);

export default function App() {
  return (
    <div className="App">
      <Layout children={<RouterProvider router={router} />} />
    </div>
  );
}
