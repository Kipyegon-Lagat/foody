import React, { useState } from 'react'
import DishCard from "./DishCard.jsx";

const Category = ({data,showItem,setShowIndexFunc,index}) => {
    const toMap = data?.itemCards;
    //console.log(toMap);
    const clickHandler=()=>{
        setShowIndexFunc(showItem ? -1 : index);
    }
    
  return (
    <div>
    <div className='mx-2 flex flex-wrap items-center justify-around '>
        <div onClick={clickHandler}
            className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4 flex 
             justify-between items-center h-[20x] cursor-pointer">
            <span 
            className=" font-bold"
            >{data?.title} ({data?.itemCards.length})
            </span>
            <span>{showItem===true?"🔼":"🔽"}</span>
        </div>
        { 
           showItem&& toMap.map((element)=>{
                return(
                    <DishCard key={element?.card?.info?.id}
                     {...element?.card?.info}/>
                )
            })
        }
    </div>
    </div>
  )
}

export default Category;