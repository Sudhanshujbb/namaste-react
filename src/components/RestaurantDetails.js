import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResInfo from "../../utils/useResInfo";
import Accordian from "./Accordian";
const RestaurantDetails = ()=>{

    const {resId} = useParams();
    const [exp, setExp] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

   
    const resInfo = useResInfo(resId);

    useEffect(()=>{

    }, [resInfo]);

    if(resInfo === null){
        return <Shimmer/>
    }
    // const {id} = useParams()
    // const name = resInfo?.cards[0]?.card?.card?.text;
    console.log(resInfo);
    console.log(resInfo?.cards[2]?.card?.card?.info, "FEDE")
    const {avgRating, cloudinaryImageId, costForTwoMessage, id, name, cuisines,  } = resInfo?.cards[2]?.card?.card?.info;
    const sections = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;
    console.log(name, "name");
    return (
        <div>
           <div className="flex flex-col justify-center items-center my-4">
            <h1 className="font-bold">{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h3>{avgRating}</h3>
            </div>
            {
                sections.map((item, index)=>{
                    return (
                        <div key={index}>
                            <div className="flex flex-col justify-center items-center my-4">
                                { item?.card?.card?.title && <Accordian tit={item?.card?.card?.title} list={item} exp={index === expandedIndex} setExp={()=>handleAccordionClick(index)}/> }
                            </div>
                            
                        </div>
                    )
                })
            }
            
           
        </div>
    );
}

export default RestaurantDetails;