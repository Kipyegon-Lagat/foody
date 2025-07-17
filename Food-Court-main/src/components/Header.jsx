import { useState,useEffect, useContext } from "react";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [btn,setBtn]=useState("LOGIN");

    const {loggedInUser}=useContext(UserContext);
    //console.log(loggedInUser);
    
    //subscribing to the store using a selector
    const cartItems=useSelector((store)=>store.cart.items)
    //console.log(cartItems)
    return (
        <div className="flex sm:justify-between sm:flex-row flex-col items-center
         sm:items-center bg-yellow-100 shadow-lg mb-2 h-[fit-content] flex-wrap  ">
            {/* logo */}
            <div  >
                <img className=" bg-green-100 w-[100px] h-[100px] border border-black rounded-full "
                 src={logo}/>
            </div>

            {/*nav items*/}
            
                <ul className="nav-items  flex flex-row p-4 m-4 gap-5 flex-wrap justify-around ">
                    <li className="cursor-pointer"> 
                        <Link to="/">Home</Link></li>
                    <li className="cursor-pointer"> 
                        <Link to="/about"> About Us</Link></li>
                    <li className="cursor-pointer"> 
                        <Link to="/contactus"> Contact</Link></li>
                    <li className="cursor-pointer font-bold"> 
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                    <button  onClick={()=>{
                        if(btn=="LOGIN")
                        setBtn("LOGOUT")
                        else setBtn("LOGIN");
                        //console.log(btn);
                    }} 
                    className=" w-[80px] h-[28px] border border-solid border-green-600 rounded-md bg-green-100"
                    >{btn}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            
        </div>
    )
};
export default Header;