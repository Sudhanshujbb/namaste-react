import React, { lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';

import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';
import Shimmer from './components/Shimmer';
import UserContext from '../utils/UserContext';
import appStore from './store/appStore';
import { Provider } from 'react-redux';
import Cart from './components/Cart';

const About = lazy(()=>import('./components/About'))

// const ChildComp= ()=>{
//     return(
//         <div>
//             <h1>I am Child Component, Pranam 😊</h1>
//         </div>
//     );
// }
// const Comp = ()=>{
//     return (
//         <div>
//             <h1>I am an React component, Namaste Everyone ❤️</h1>
//             <ChildComp/>
//         </div>
//     )
// }
// const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")], React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")]))]);
// const headingJSX = (
//     <div>
//         <h1>Namaste React Using JSX 🚀</h1>
//         <Comp/>
//         {heading}
//     </div>
// )

const Applayout = ()=>{
    const [userName, setUserName] = useState('Amit');
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className='app'>
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
}
const appRouter = createBrowserRouter([
    {
        path:"/",
       element: <Applayout/>,
       children: [
        {
            path: '/',
            element: <Body/>
        },
        {
            path: "/about",
            element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantDetails />
        },
        {
            path: "/cart",
            element: <Cart/>
        }
       ],
       errorElement: <Error/>

    },
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);