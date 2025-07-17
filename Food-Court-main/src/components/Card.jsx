import { CDN_URL } from "../utils/constants";
const Card=(props)=>{
    //  console.log(props);
    function truncateString(str, num) {
        if (str?.length <= num) {
            return str;
        }
        return str?.substring(0, num) + '...';
    }

    // Truncate cuisines and join into a string
    const truncatedCuisines = truncateString(props?.cuisines?.join(", "), 30); 
    const Time=props?.sla?.deliveryTime;

   //console.log(props.id);
    return(
        <div data-testid="resCard"
         className="res-card m-[10px] p-[5px] w-[200px] h-[330px] rounded-lg bg-gray-100
         hover:bg-gray-200 hover:scale-[101%] overflow-hidden shadow-md hover:shadow-lg"  >
            <img src={CDN_URL+props?.cloudinaryImageId} 
             className="rounded-lg mb-3 h-[160px] w-[100%]"
            />
            <h3 className="font-bold p[1%] m-[10px] ">{props?.name}</h3>
            <span className="p[1%] mx-[10px] flex justify-between text-sm">
                <p className="mt-0">{props?.avgRating}⭐</p>
                <p>Get in {Time} Minutes</p>
            </span>
            <p className=" text-sm py-[1%] mx-[10px]  flex justify-between">{truncatedCuisines}</p>
            
        </div>
    );
};

//higher order component
export const withPromoLabel=(Card)=>{
    return (props)=>{
        return(
            <div>
                <label
                 className=" absolute  bg-green-600 opacity-70 text-white ml-[15px] mt-1 w-[190px] p-2 rounded-lg z-10 flex justify-center items-center h-[24px] "
                >Promoted</label>
                <Card {...props}/>
            </div>
        );
    };
};
//higher order component
export default Card;