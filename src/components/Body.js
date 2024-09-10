import { useState, useEffect, lazy, Suspense } from "react";
import ResCard from "./ResCard";
import { resList } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useResList from "../../utils/useResList";

const DinoGame = lazy(()=>import('./DinoGame/DinoGame'))



const Body = ()=>{
    const restaurantList = useResList(); 
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList)
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const filterTopRatedRestaurant = ()=>{
            setFilteredRestaurant( restaurantList.filter((res)=>res?.info?.avgRating>=4.5));
    }
    const handleSearch = (e)=>{
        const searchRestaurantList = restaurantList.filter((item)=>item?.info?.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredRestaurant(searchRestaurantList);
        
    }
    useEffect(()=>{
        setFilteredRestaurant(restaurantList)
    }, [restaurantList])

  

    

  
    // const fetchD = async ()=>{
    //     const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',{
    //         method: 'GET', 
    //         headers:{
    //             'x-cors-api-key': 'temp_a84931910bcff292fbac0c9e4f70b31a'
    //         }
    //     });
    //     const jsson = await data.json();
    //     const restaurants = jsson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     setRestaurantList(restaurants);
    //     setFilteredRestaurant(restaurants)
    // }
    // const refetch = async ()=>{
    //     setLoading(true);
    //     console.log("IN REFETCH")
    //     const proxyUrl = 'https://proxy.cors.sh/';
    //     const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/update';

    //     try {
    //         const response = await fetch(proxyUrl + targetUrl, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             'Access-Control-Allow-Credentials': true,
    //             'Access-Control-Request-Method': 'POST',
    //             'Access-Control-Allow-Origin': 'http://localhost:1234',
    //             'x-cors-api-key': 'temp_a84931910bcff292fbac0c9e4f70b31a'
    //         },
    //         mode: 'cors',
    //         filter:{},
    //         lat:"26.87560",
    //         lng:"80.91150",
    //         nextOffset:"CJhlELQ4KIDItd69wq/5RTCnEzgE",
    //         page_type:"DESKTOP_WEB_LISTING",       
    //         seoParams:{
    //             seoUrl: "https://www.swiggy.com/", 
    //             pageType: "FOOD_HOMEPAGE", 
    //             apiName: "FoodHomePage"
    //         },
    //         widgetOffset:{
    //             NewListingView_category_bar_chicletranking_TwoRows: "",
    //             NewListingView_category_bar_chicletranking_TwoRows_Rendition:"",
    //             Restaurant_Group_WebView_SEO_PB_Theme:"",
    //             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:"9",
    //             inlineFacetFilter:"",
    //             restaurantCountWidget:""
    //         },
    //         _csrf:"4yZEZzZKY31s-oNcSOdTnyh6k-VL26ffoEOkok4k",
    //         body: JSON.stringify({ filter:{},
    //             lat:"26.87560",
    //             lng:"80.91150",
    //             nextOffset:"CJhlELQ4KIDItd69wq/5RTCnEzgE",
    //             page_type:"DESKTOP_WEB_LISTING",       
    //             seoParams:{
    //                 seoUrl: "https://www.swiggy.com/", 
    //                 pageType: "FOOD_HOMEPAGE", 
    //                 apiName: "FoodHomePage"
    //             },
    //             widgetOffset:{
    //                 NewListingView_category_bar_chicletranking_TwoRows: "",
    //                 NewListingView_category_bar_chicletranking_TwoRows_Rendition:"",
    //                 Restaurant_Group_WebView_SEO_PB_Theme:"",
    //                 collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:"9",
    //                 inlineFacetFilter:"",
    //                 restaurantCountWidget:""
    //             },
    //             _csrf:"4yZEZzZKY31s-oNcSOdTnyh6k-VL26ffoEOkok4k", }), // Send the current page in the request body
    //     });
        
    //         // console.log(response, "data");
    //         const data = await response.json();
    //         if (data.length === 0) {
    //         setHasMore(false); // No more data to fetch
    //         } else {
    //         setRestaurantList(prev => [...prev, ...data]);
    //         setPage(prev => prev + 1);
            
    //         }
    //     } catch (error) {
    //         console.error('Error fetching restaurants:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    // useEffect(  ()=>{
    //     fetchD();
    //     const handleScroll = () => {
    //         console.log("IN Hanfle Scrol mnmbjmnml", "bbvv")
    //         console.log( "Gas More")
    //         const scrollTop = window.innerHeight + document.documentElement.scrollTop;
    //         const scrollHeight = document.documentElement.scrollHeight;
    //         const buffer = 100; // Buffer to trigger fetch before reaching the bottom
    //         if (
    //             scrollTop + buffer >= scrollHeight
    //             && !loading
    //             && hasMore
    //         ) {
    //             console.log("NOW REFETCh");
    //             refetch();
    //         }
    //       };
      
    //       window.addEventListener('scroll', handleScroll);
    //       return () => window.removeEventListener('scroll', handleScroll);
      
    //     console.log(jsson, "data");
    // },[loading, hasMore, page])

    const onlinestatus = useOnlineStatus();
    if(!onlinestatus){ return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Looks like you are Offline !! Check you Internet Connection</h1>
             <Suspense fallback={<Shimmer/>}><DinoGame /></Suspense>
        </div>
    );}

    if(filteredRestaurant?.length===0){
        return <Shimmer/>
    }

    return (
        <div className='body'>
            <div className='filter'> 
                <input value={search} onChange={(e)=>{setSearch(e.target.value); handleSearch(e)  }}/>
                <button onClick={handleSearch}>Search</button>
                <button className="filter-btn" onClick={filterTopRatedRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                
                {filteredRestaurant?.map((res)=>{
           
                    return (
                        
                        <Link to={"/restaurants/"+res.info.id}  ><ResCard resData={res} key={res.info.id} /></Link>
                    );
                })}
                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Body;