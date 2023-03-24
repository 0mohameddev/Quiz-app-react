import React from 'react';
//components

//pages
import Home from './pages/Home'

//react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Login/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'*',
    element:<NotFound/>
  },
])
const App = () => {
  return <>
   <RouterProvider router={router}/>
  </>
};

export default App;