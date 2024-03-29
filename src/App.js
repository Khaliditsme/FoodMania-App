import React from "react";
import ReactDOM  from "react-dom/client";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";

const root =  ReactDOM.createRoot(document.getElementById('root'));
const Applayout = ()=>{
  return(
    <div className="applayout">
        <Header/>
        <Outlet/>
    </div>
  )
}

const Approute = createBrowserRouter([{
  path:'/',
  element:<Applayout/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    
  ],
    errorElement:<Error/>
}])

root.render(<RouterProvider router={Approute}/>)