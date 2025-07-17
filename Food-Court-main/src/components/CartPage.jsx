import { useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
const CartPage=()=>{
    const dispatch=useDispatch();
    const handleRemove=()=>{
        dispatch(clearCart());
    }
    const cartItems=useSelector((store)=>store.cart.items);
    //console.log(cartItems);
    return(
        <div className="w-[70vw] m-auto pt-5 ">
            <h1 className=" font-extrabold text-xl flex items-center justify-center pb-2 mb-2">
                Cart Page</h1>
            {
                cartItems.length===0 ? 
               <Link to="/"> <h2 data-tesid='emptyCart'
                                className="font-bold text-l flex items-center justify-center pb-2 mb-2">
                    Cart is empty Go add some Items</h2>
                </Link>:
                <div>
                    <div className=" w-full mx-auto my-4  p-4 flex flex-wrap
                    justify-around items-center h-[20x] cursor-pointer ">
                        {
                            cartItems.map((items)=>(
                                <CartCard {...items}/>
                            ))
                        }
                    </div>
                    <div className="bg-red-500 max-h-fit max-w-fit rounded-lg mx-auto my-4  p-1 shadow-2xl font-bold">
                        <button  >
                            Buy Now
                        </button>
                    </div>
                    <div className="bg-red-500 max-h-fit max-w-fit rounded-lg mx-auto my-4  p-1 shadow-2xl font-bold">
                        <button onClick={handleRemove} >
                            Clear Cart
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
export default CartPage;