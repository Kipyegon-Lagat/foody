import { useDispatch } from 'react-redux';
import { CDN_URL ,Unavail_URL } from '../utils/constants';
import { removeItems } from '../store/cartSlice';
function CartCard(props) {
  //console.log(props);
  const disptch=useDispatch();
  const handleRemovedItem = (data) => {
    disptch(removeItems(data))
  }
  const img=props?.imageId?CDN_URL+props?.imageId:Unavail_URL
    const price = props.price===undefined ? props.defaultPrice:props.price;
  return (
    <div className='dishCard  shadow-lg bg-gray-200' data-testid="cartItem">
        <img src={img}/>
        <h3 className='font-semibold'>
          {props.name}</h3>
        <div className='removeFromCart'>
            <p>₹ {price/100}</p>
            <button onClick={()=>handleRemovedItem(props)}>Remove</button>
        </div>
        <p>Is Veg: {props.isVeg==true?"🟢":"🔴"}</p>
        <p>{props?.description}</p>
    </div>
  )
}

export default CartCard;
