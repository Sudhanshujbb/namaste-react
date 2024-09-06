import React from "react";
class ClassyUser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count1: 0,
            count2: 0,
            name: "Dummy",
            location: "NoWhere",
            img_url: ""
        }
        console.log(props.name, "Child Constructor");
    }

   async componentDidMount(){
        const {name } = this.props;
        const res = await fetch('https://api.github.com/users/'+name);
        const data = await res.json();
        console.log(this.props.name,"Commponent DidMount")
        this.setState({
            name : data.name,
            location: data.location,
            img_url:data.avatar_url
        })
    }
    componentDidUpdate(){
        console.log(this.props.name, "On Component Update");
    }
    render(){
        const {name, location, img_url} = this.state
        const {count1, count2 } = this.state;
        console.log(this.props.name,"Child Render")
        return (
            <div className="user-card">
                <div>Count: {count1}   {count2}</div>
                <button onClick={()=>{this.setState({ count1:this.state.count1+1, count2: this.state.count2+1})}} >Click</button>
                <img src={img_url} alt="GG"  style={{width: "1rem", height:"1rem"}}/>
                <div>Name: {name}</div>
                <div>Contact: sudhanshujbb@gmail.com</div>
                <div>Location: {location}</div>
            </div>
        );
    }

    componentWillUnmount(){
        console.log(this.props.name, " On Component Unmount");
    }
}

export default ClassyUser;