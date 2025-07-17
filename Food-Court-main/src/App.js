import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx";
import {Footer} from "./components/Footer.jsx";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Contact from "./components/Contact.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import OfflinePage from "./components/OfflinePage.jsx";
import useOnlineStatus from './utils/useOnlineStatus.jsx';
import Shimmer from "./components/Shimmer.jsx";
const RestaurantMenuPage=lazy(()=>import("./components/RestrauntMenuPage.jsx"));
const About=lazy(()=>import("./components/About.jsx"));
import UserContext from "./utils/UserContext.jsx";
import { Provider } from "react-redux";
import CartPage from"./components/CartPage.jsx"
import appStore from "./store/appStore.jsx";


const AppLayout=()=>{
    const [userName,setUserName] =useState("");
    useEffect(()=>{
        const data={
            name:"Rajat Saini"
        };
        setUserName(data.name);
    },[])

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return(    
        <OfflinePage />
    )
    else
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
                <div className="app">
                    <Header/>
                    {/* here this outlet chooses children acc to the path */}
                    <Outlet />
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/> 
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contactus",
                element:<Contact/>
            },
            {
                path:"/restaurant/:resid",
                element:<Suspense fallback={<Shimmer/>}>
                        <RestaurantMenuPage/>
                    </Suspense>
            },
            {
                path:"/cart",
                element:<CartPage/>
            }
        ],
        errorElement:<ErrorElement/>
    }
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)