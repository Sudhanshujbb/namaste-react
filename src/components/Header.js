import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import User from "./User";

export const Header = ()=>{
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();
    const data =  useContext(UserContext);
    return(
        <div className='flex justify-between items-center border-2 border-gray-600 bg-green-50' >
            <div className='w-32'>
                <img src='https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg'/>
            </div>
            
            <div className='nav-items m-2'>
                <ul className="flex items-center"  >
                    <li className="mx-1 px-4">{onlineStatus?"✅Online":"🔴Offline" }</li>
                    <li className="mx-1 px-4"><Link to ="/">Home</Link></li>
                    <li className="mx-1 px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="mx-1 px-4"><Link to ="/about">About Us</Link></li>
                    <li className="mx-1 px-4"><Link to ="/cart">Cart</Link></li>
                    <button className="m-1 px-4" onClick={()=>{setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
                    <li>{data.loggedInUser}</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;