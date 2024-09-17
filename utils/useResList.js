import { useState, useEffect } from "react";
const useResList = ()=>{
    const [resList, setResList] = useState([]);
    
    const fetchData = async ()=>{
        const response = await fetch(`https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,{
            method: 'GET', 
            headers:{
                'x-cors-api-key': 'temp_a84931910bcff292fbac0c9e4f70b31a'
            }
        });
        const data = await response.json();
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(restaurants);
      
    }
    useEffect(()=>{
        fetchData();
    }, []);

    return resList;
}



export default useResList;