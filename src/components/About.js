import User from "./User";
import ClassyUser from "./ClassyUser";
import React from "react";
class About extends React.Component{
    constructor(){
        super()
        console.log("Parent Constructor");
    }
    componentDidMount(){
        console.log("Parent Commponent DidMount")
    }
    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About page</h1>
                {/* <User name="Sudhanshu"/> */}
                <ClassyUser name="Sudhanshujbb"/>
                {/* <ClassyUser name="Second"/> */}
                // <ClassyUser name="imayushshivam"/>
            </div>
        );
    }
}

// const About = ()=>{
//     return(
//         <div>
//             <h1>About page</h1>
//             <User name="Sudhanshu"/>
//             <ClassyUser name="Classy Sudhanshu"/>
//         </div>
//     );
// }

export default About;