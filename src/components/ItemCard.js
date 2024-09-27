import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ItemCard = ({info})=>{
    const dispatch = useDispatch();
    const handleAdd = ()=>{
        // console.log("ADD Clicked")
        dispatch(addItem(info));
    }

    return (
        <div className="flex justify-between w-11/12  p-6 m-2 text-left shadow-lg"  data-testid="item-card">

            <div className="w-9/12">
                <div className="">{info?.name} | ₹{info?.defaultPrice/100 || info?.finalPrice/100 || info?.price/100}</div>
                <div className="text-xs">{info?.description}</div>
            </div>
            <div className="relative w-3/12">
                <img className="rounded-md w-full" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+info?.imageId}/>
                <div className="absolute left-1/3 -bottom-2 bg-green-200 p-2 rounded-md cursor-pointer" onClick={handleAdd}>ADD +</div>
            </div>

        </div>
    );
}

export default ItemCard;