import './App.css';
import 'firebaseui/dist/firebaseui.css'
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet, } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthProvider from './Firebase/context';



const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])


function NavbarWrapper() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </div>
  );
}

export default App;
