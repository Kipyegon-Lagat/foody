import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import {useParams} from "react-router-dom"
import { DeliveryLogo } from "../utils/constants";
import DishCard from "./DishCard";
import Category from "./Category";
import { useState } from "react";

const RestaurantMenuPage=()=>{
    //for the collabsable and expandeable category menu
    const [showIndex,setShowIndex] =useState(-1);

    const params=useParams();
    //console.log(params);
    const resMenu=useResMenu(params.resid);
    //console.log(resMenu);
    const info=resMenu?.cards[2]?.card?.card?.info;    
    const tempTopPicks=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const category=resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
                    filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    const topPicks=tempTopPicks?.title==="Top Picks"?tempTopPicks:undefined;
   // console.log(category);
    //console.log(resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
    return(
    resMenu===null?
        (<Shimmer/>):
        (
        <div className="menu">
                <div className="res-head w-[70vw] m-auto pt-5">
                    <h1>{info?.name}</h1>
                    <div className="res-div">
                        <h3>⭐{info?.avgRating} ({info?.totalRatingsString})</h3>
                        <h3>{info?.costForTwoMessage}</h3>
                    </div>
                    <div className="res-div">
                        <h3>OutLet: {info?.locality}</h3>
                        <div>
                        <img src={DeliveryLogo}/>
                        <h3> Deliver in {info?.sla.deliveryTime} min</h3>
                        </div>
                        <h3>{info?.cuisines.join(", ")}</h3>
                    </div>
                </div>
                <div className="topPicks w-[70vw] m-auto pt-5">
                    <h1 
                    className=' px-[10px] pt-2 pb-3 font-bold'>
                        {topPicks?.title}</h1>
                    {topPicks?.itemCards?
                        (topPicks?.itemCards?.map((cas)=>{
                            return(
                             <DishCard key={cas?.card?.info?.id} {...cas?.card?.info}/>
                        )
                        })):
                        ( topPicks?.carousel?.map((cas)=>{
                            return(
                             <DishCard key={cas?.bannerId} {...cas?.dish?.info}/>
                        )
                        }))
                    }
                </div>
                <div className="category">
                    {category.map((cat,index)=>{
                        return(
                            <div className="w-[70vw] m-auto pt-5">
                                <Category 
                                 key={cat?.card?.card?.title}
                                 data={cat?.card?.card} 
                                 showItem={showIndex===index}
                                 setShowIndexFunc={(index)=>setShowIndex(index)
                                 }
                                 index={index}
                                  />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
        
    );
    }  
export default RestaurantMenuPage;