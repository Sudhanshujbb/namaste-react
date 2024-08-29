import { useState, useEffect } from "react";
import ResCard from "./ResCard";
import { resList } from "../../utils/constants";
import Shimmer from "./Shimmer";




const Body = ()=>{
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [search, setSearch] = useState("");
    const filterTopRatedRestaurant = ()=>{
            setFilteredRestaurant( restaurantList.filter((res)=>res?.info?.avgRating>=4.5));
    }
    const handleSearch = (e)=>{
        
        const searchRestaurantList = restaurantList.filter((item)=>item?.info?.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredRestaurant(searchRestaurantList);
    }
    useEffect( async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsson = await data.json();
        const restaurants = jsson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurants);
        setFilteredRestaurant(restaurants)
        console.log(jsson, "data");
    },[])
    return (
        <div className='body'>
            <div className='filter'> 
                <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button onClick={handleSearch}>Search</button>
                <button className="filter-btn" onClick={filterTopRatedRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                
                {filteredRestaurant.length>0?filteredRestaurant.map((res)=>{
                    console.log(res);
                    return (
                        
                        <ResCard resData={res} key={res.info.id}/>
                    );
                }):<Shimmer/>}
                
            </div>
        </div>
    );
}

export default Body;