import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from "./pages/Error";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Companies from "./pages/Companies";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Students from "./pages/Students";
import Register from "./pages/Register";
import Layout from "./components/Layout";

=======
import Error from './pages/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Applications from './pages/Applications';
import Companies from './pages/Companies';
import Offers from './pages/Offers';
import SignIn from './pages/SignIn';
import Students from './pages/Students';
import Register from './pages/Register';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/applications',
    element: <Applications />,
    errorElement: <Error />,
  },
  {
    path: '/companies',
    element: <Companies />,
    errorElement: <Error />,
  },
  {
    path: '/offers',
    element: <Offers />,
    errorElement: <Error />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/students',
    element: <Students />,
    errorElement: <Error />,
  },
]);

>>>>>>> ba460a5 (prettier)
export default function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/students" element={<Students />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}