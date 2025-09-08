// import React from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css'
// import Header from "./components/Header";
// import Body from "./components/Body";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";



// De-strcturing the Props in the object
// const RestaurantCard =({ resName, cuisine}) => {
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
//             <img 
//             className="res-logo"
//             alt="res-logo"
//             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg" />
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 mins</h4>
//         </div>
//     )
// }





// const AppLayout = () => {
//     return (
//         <div className="app">
//             <Header/>
//             <Outlet />
//         </div>
//     )
// }

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout />,

//         children: [
//     {
//         path: '/',
//         element: <Body />
//     },
//     {
//         path: '/about',
//         element: <About />
//     },
//     {
//         path: '/contact',
//         element: <Contact />
//     },
//     {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />
//     }
//         ],

//         errorElement: <Error />
//     },
    
// ])



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);



// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"},
//     "Hello React!"
// )

// console.log(heading);

// JSX (Transpiled before it reaches the JS) - PARCEL - Babel

// JSX =>React.createElement => ReactElement-JS-Object => HTMLElement(render)

// const jsxHeading = <h1>Hello React!!..</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)


// const heading = (
//     <h1 className="head" tabIndex="5">Hello React</h1>
// )

// React Conponent

// 1. React Function component


// Component Composition

// const Title = () => (
//     <h1>Hello Title</h1>
// )

// const HeadingComponent = () => {
//     return (
//     <div id="container">
//         <Title />
//         {Title()}
//     <h1>Hello React Function Component</h1>;
//     </div>
//     )
// }


// const HeadingComponent1 = () =>  <h1>Hello React Function Component</h1>;



// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(<HeadingComponent/>);