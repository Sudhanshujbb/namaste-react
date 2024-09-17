//Higher Order  Component
const isOpendResCard = (ResCard)=>{
    return ({resData})=>{
        return(
            <div className="relative">
                <div className="absolute top-1 left-1 bg-green-400 rounded-md p-2" >Open</div>
                <ResCard resData={resData}/>
            </div>
        )
    }
}

export default isOpendResCard;