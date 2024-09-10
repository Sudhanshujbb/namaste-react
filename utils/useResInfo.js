import { useState, useEffect } from "react";
const useResInfo = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    
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

    return resInfo;
}

export default useResInfo;