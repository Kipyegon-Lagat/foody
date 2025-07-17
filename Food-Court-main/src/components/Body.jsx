import {useEffect,useContext, useState} from "react";
import Card ,{withPromoLabel}from "./Card";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useGetResList from "../utils/useGetResList";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [tempRes,setTempRes]=useState([]);
    // temporary list of restaurant to modify
    
    const res=useGetResList();
    //Main list of restaurants
    
    useEffect(()=> {
        setTempRes(res);
    },[res]);

    const {loggedInUser,setUserName}=useContext(UserContext);
    
    //promoted card higherOrder Component 
    const RestaurantCardPromoted=withPromoLabel(Card);

    //sort the top restaurants based on rating in descending order
    const topRated=()=>{
        if(tempRes!==res){
            setTempRes(res);
        }
        else{
            const newRes=tempRes.filter(
                (element)=>element.info.avgRating>=4.5
            )
            newRes.sort(function (a,b){return b.info.avgRating-a.info.avgRating});
            //we only update tempRes 
            if(newRes.length!=0)
                setTempRes(newRes);
            else
            setTempRes(res);
        }
    }


    // search text and set search text
    const [srchTxt,setSrchTxt]=useState("");
    // we use this clog to confirm Reconciiliation
    //console.log("body");

    
    //search functionality
    const searchFunc=()=>{
        const filtRes=res.filter((rest)=>{
           return rest.info.name?.toLowerCase().includes(srchTxt.toLowerCase());
        });
        if(filtRes.length!=0)
        setTempRes(filtRes);
    else{
        alert("NO matching result found");
    }
       setSrchTxt("");
    }

    //console.log(res)
    //rendering the restaurant list
    if(res===undefined||res.length===0){
        return (
            <div>
                <Shimmer />
            </div>
        )
     }
     else
        return(
        <div className="body">
            <div className="filter flex items-center justify-center md:sm:flex-row flex-col "> 
                <div className="search m-3 p-3 flex items-center justify-center flex-wrap ">
                    <input type="text" 
                    data-testid="search-id"
                    value={srchTxt} 
                    onChange={(e)=>{setSrchTxt(e.target.value)}} 
                    className="searchBox border border-solid border-black h-[28px]"
                    />
                    <button type="submit" onClick={searchFunc} 
                    className=" px-4  m-4 border border-solid h-[28px] border-green-600 rounded-md bg-green-100"
                    >Search</button>
                </div>
                <div className="m-3 p-3 flex min-w-[220px] items-center">                    
                    <button className="filter-btn px-4   overflow-hidden  h-[28px] border border-solid border-green-600 rounded-md bg-green-100"
                     onClick={topRated}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-3 p-3 flex ">
                   User Name: <input type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}} 
                    className="searchBox border border-solid border-black h-[28px]"
                    />
                </div>
            </div>
            <div className="body-res mx-2 flex flex-wrap items-center justify-center">
            {tempRes?.map((restaurant)=>{
                return (
                    <Link 
                    to={"/restaurant/"+restaurant.info.id} 
                    key={restaurant.info.id}
                    >
                        {
                            restaurant.info.promoted?(
                                <RestaurantCardPromoted key={restaurant.info.id} {...restaurant.info}/>
                            ):
                            (
                                <Card key={restaurant.info.id} {...restaurant.info}/> 
                            )
                        }
                        
                    </Link>
                )
            })}
            </div>
        </div>
    )
};
export default Body;