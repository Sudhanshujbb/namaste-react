import { cdn_url } from "../../utils/constants";
const ResCard = ({resData})=>{
    console.log(resData?.info?.name, "resData");
    return (
        <div className='res-card'>
            <div className='res-img'>
                <img src={cdn_url+ resData?.info?.cloudinaryImageId}/>
            </div>
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.avgRating + " Stars"}</h4>
            <h5>{resData?.info?.cuisines.join(", ")}</h5>

        </div>
    );
}

export default ResCard;