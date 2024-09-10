import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResInfo from "../../utils/useResInfo";
const RestaurantDetails = ()=>{

    const {resId} = useParams();
    const resInfo = useResInfo(resId);
    if(resInfo === null){
        return <Shimmer/>
    }
    // const {id} = useParams()
    // const name = resInfo?.cards[0]?.card?.card?.text;
    console.log(resInfo);
    console.log(resInfo?.cards[2]?.card?.card?.info, "FEDE")
    const {avgRating, cloudinaryImageId, costForTwoMessage, id, name, cuisines,  } = resInfo?.cards[2]?.card?.card?.info;
    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;

    console.log(name, "name");
    return (
        <div>
           <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>{avgRating}</h3>
            <h1>Menu Items </h1>
            {
                menuItems.map((item, index)=>{
                    { console.log(item?.card?.info?.name, item?.card?.info?.id);}
                    return <div key={item?.card?.info?.id}> {item?.card?.info?.name}</div>
                })
            }
           </div>
        </div>
    );
}

export default RestaurantDetails;