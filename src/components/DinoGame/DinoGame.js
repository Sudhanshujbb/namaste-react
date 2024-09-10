import "./dinostyle.css"
import ground from "../../assets/ground.png"
import dino_stat from "../../assets/dino-stationary.png"
const DinoGame= ()=>{
    return(
        <div className="world">
            <div className="score">0</div>
            <div className="start-screen">Press Any Key to  start</div>
            <img className="ground" src= {ground}/>
            <img className="ground" src= {ground}/>
            <img className="dino" src={dino_stat}/>

        </div>
    );
}

export default DinoGame;