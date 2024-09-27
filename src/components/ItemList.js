import ItemCard from "./ItemCard";
const ItemList = ({tit, list, exp, setExp})=>{
    

    return (
        <div>
            <div className="border-b-2 border-blue-600 w-11/12 bg-slate-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={setExp}>
                    <div>{tit}</div>
                    <div >{ exp?'🔽':'▶️'}</div>
                </div>
                {        
                (exp ) && 
                    <div>                        
                        <div>
                            { list?.itemCards &&  list?.itemCards.map( (item, index)=>{return <ItemCard key={item?.card?.info?.id} info={item?.card?.info}/> })  }
                        </div>
                        
                    </div>
                }   
            </div>
        </div>
    );
}

export default ItemList