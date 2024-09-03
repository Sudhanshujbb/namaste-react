import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = ()=>{
    const [btnName, setBtnName] = useState("Login")
    return(
        <div className='header'>
            <div className='logo'>
                <img src='https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg'/>
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/cart">Cart</Link></li>
                    <button className="login-btn" onClick={()=>{setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
}

export default Header;