import React from 'react'
import ReactDOM from 'react-dom/client'
const ChildComp= ()=>{
    return(
        <div>
            <h1>I am Child Component, Pranam 😊</h1>
        </div>
    );
}
const Comp = ()=>{
    return (
        <div>
            <h1>I am an React component, Namaste Everyone ❤️</h1>
            <ChildComp/>
        </div>
    )
}
const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")], React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")]))]);
const headingJSX = (
    <div>
        <h1>Namaste React Using JSX 🚀</h1>
        <Comp/>
        {heading}
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingJSX);