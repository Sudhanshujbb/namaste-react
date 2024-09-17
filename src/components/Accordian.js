import { useState } from "react";
import ItemCard from "./ItemCard";
import ItemList from "./ItemList";

const Accordian = ({tit, list, exp, setExp})=>{
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return(
        <div className="border-b-2 border-blue-600 w-3/4 bg-slate-100 shadow-lg p-4">
            <div className="flex justify-between" onClick={setExp}>
                <div className="font-bold">{tit} ({list?.card?.card?.itemCards?.length || list?.card?.card?.categories?.length })</div>
                <div >{ exp?'🔽':'▶️'}</div>
            </div>
          
            {        
            (exp ) && 
                <div>                        
                    <div>
                        {console.log(list?.card?.card?.itemCards, "REC")}
                        { list?.card?.card?.itemCards &&  list?.card?.card?.itemCards?.map( (item, index)=>{ console.log(item); return <ItemCard key={item?.card?.info?.id} info={item?.card?.info}/> })  }
                    </div>
                    <div>
                        { list?.card?.card?.categories &&  list?.card?.card?.categories.map( (item, index)=>{ return <ItemList key={index} tit={item?.title} list={item} exp={index === expandedIndex} setExp={()=>handleAccordionClick(index)}/> })  }
                    </div>  
                </div>
            }   
        </div>
    );
}

export default Accordian;