import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantDetails = ()=>{

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const fetchData = async ()=>{
        const response = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,{
            method: 'GET', 
            headers:{
                'x-cors-api-key': 'temp_a84931910bcff292fbac0c9e4f70b31a'
            }
        });
        const data = await response.json();
        setResInfo(data.data);
        console.log(data.data, "data");
    }
    useEffect(()=>{
        fetchData();
    }, []);

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