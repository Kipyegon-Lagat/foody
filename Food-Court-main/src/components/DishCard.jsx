import { useDispatch } from 'react-redux';
import { CDN_URL ,Unavail_URL } from '../utils/constants';
import { addItems } from '../store/cartSlice';
function DishCard(props) {
  //console.log(props);
  const disptch=useDispatch();
  const handleAddItem = (data) => {
    disptch(addItems(data))
  }
  const img=props?.imageId?CDN_URL+props?.imageId:Unavail_URL
    const price = props.price===undefined ? props.defaultPrice:props.price;
  return (
    <div 
    data-testid="FoodItems"
    className='dishCard  shadow-lg bg-gray-200'>
        <img src={img}/>
        <h3 className='font-semibold'>
          {props.name}</h3>
        <div className='addToCart'>
            <p>₹ {price/100}</p>
            <button onClick={()=>handleAddItem(props)}>ADD</button>
        </div>
        <p>Is Veg: {props.isVeg==true?"🟢":"🔴"}</p>
        <p>{props?.description}</p>
    </div>
  )
}

export default DishCard;
