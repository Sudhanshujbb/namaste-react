import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../store/cartSlice";

const Cart = ()=>{
    const items = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

   
    return(
        <div className="flex flex-col items-center justify-center m-4 p-4 w-full">
            <h1 className="text-3xl text-black font-bold">Cart</h1>
            <button className="bg-black text-white p-4 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            {items?.length >0 ? 
            <div className="w-6/12">
                {items.map((item, index)=>{
                    return <ItemCard key={index} info={item}/>
                })}
            </div> : <div> Cart is Empty </div>}
        </div>
    );
}

export default Cart;