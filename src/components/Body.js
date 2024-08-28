import { useState } from "react";
import ResCard from "./ResCard";
import { resList } from "../../utils/constants";




const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState(resList);
    const filterTopRatedRestaurant = ()=>{
            setRestaurantList( restaurantList.filter((res)=>res?.info?.avgRating>=4.5));
    }
    return (
        <div className='body'>
            <div className='filter'> Search 
                <button className="filter-btn" onClick={filterTopRatedRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                
                {restaurantList.map((res)=>{
                    console.log(res);
                    return (
                        
                        <ResCard resData={res} key={res.info.id}/>
                    );
                })}
                
            </div>
        </div>
    );
}

export default Body;