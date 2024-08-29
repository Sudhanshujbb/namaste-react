import { useState } from "react";

export const Header = ()=>{
    const [btnName, setBtnName] = useState("Login")
    return(
        <div className='header'>
            <div className='logo'>
                <img src='https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg'/>
            </div>
            
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{setBtnName(btnName==="Login"?"Logout":"Login")}}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
}

export default Header;