import { cdn_url } from "../../utils/constants";
const ResCard = ({resData})=>{
// console.log({resData});  
    return (
        <div data-testid="res-card" className='border-2 border-gray-600 p-4 my-2 w-64 min-h-[30rem] bg-slate-200 rounded-md hover:border-4 hover:border-black hover:bg-red-100' >
            <div className='mb-2'>
                <img className="w-53 h-43 rounded-md" src={cdn_url+ resData?.info?.cloudinaryImageId}/>
            </div>
            <h3 className="font-bold">{resData?.info?.name}</h3>
            <h4>{resData?.info?.costForTwo}</h4>
            <h4>{resData?.info?.avgRating + " Stars"}</h4>
            <h5>{resData?.info?.cuisines.join(", ")}</h5>

        </div>
    );
}

export default ResCard;