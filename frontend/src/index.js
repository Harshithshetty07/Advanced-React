import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import User from "./components/User";
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";


const Contact = lazy(() => import( "./components/Contact"))

const AppLayout = () => {

  const [UserName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: 'Rakshith'
    };
    setUserName(data.name)
  },  [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: UserName, setUserName}}>

    <div className="app">
      <Header />
      <Outlet />
    </div>
        </UserContext.Provider>

    </Provider>
    
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Suspense 
        fallback={<h1>Loading...</h1>} >
          <Contact /> 
          </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
