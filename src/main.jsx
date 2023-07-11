import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Login from './pages/Login/Login.jsx';
import ChefRecipes from './pages/chefRecipes/chefRecipes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Register from './pages/Register/Register.jsx';
import ErrorPage from './pages/ErrorPage/ErroePage.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/recipes/:id",
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
