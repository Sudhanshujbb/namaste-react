import React from "react";

const User = ({name})=>{
    const [count, setCount] = React.useState(0);
    return (
        <div className="user-card">
            <div>Count: {count}</div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <div>Name: {name}</div>
            <div>Contact: sudhanshujbb@gmail.com</div>
            <div>Location: Lucknow</div>
        </div>
    );
}

export default User;