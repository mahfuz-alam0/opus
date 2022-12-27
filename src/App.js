import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Emails from './Components/Emails/Emails';
import Login from './Components/Login/Login';
import Main from './Layout/Main/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/emails',
        element: <Emails/>,
    },
    {
        path: '/admin',
        element: <Admin/>,
    }
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
        </div>
    );
}

export default App;
