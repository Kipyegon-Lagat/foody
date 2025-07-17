import {useEffect, useState} from "react";
import { APIswiggy } from "./constants";

const useGetRestaurant = () => {
    const [res,setRes]=useState([]);
    
    
    useEffect(()=> {
        fetchData();
    },[]);


    //fetch data from API and set it to res and tempRes respectively
    const fetchData = async()=>{
        const data=await fetch(APIswiggy); 
        const jsonn=await data?.json();
        // in api they keep changing the position of the data so if it doesn't work check jsonn data
        //cards[3] or cards[4] or cards[2] contains the restaurant cards
        const finalData=jsonn?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
        //console.log(finalData);
        
       setRes(finalData);
       
       //console.log(jsonn?.data?.success);
    };
    return res;
}

export default useGetRestaurant;