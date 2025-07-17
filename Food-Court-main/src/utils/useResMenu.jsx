import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";
const useResMenu=(resId)=>{
    const[resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])
    //console.log(params?.resid);
    const fetchMenu=async()=>{
        const response=await fetch(RES_URL+resId);
        const jsonn=await response.json();
        
       // console.log(jsonn);
        setResMenu(jsonn.data);
    }
    return resMenu;
}
export default useResMenu;