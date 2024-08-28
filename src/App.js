import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import {Header} from './components/Header';
import Body from './components/Body';

// const ChildComp= ()=>{
//     return(
//         <div>
//             <h1>I am Child Component, Pranam 😊</h1>
//         </div>
//     );
// }
// const Comp = ()=>{
//     return (
//         <div>
//             <h1>I am an React component, Namaste Everyone ❤️</h1>
//             <ChildComp/>
//         </div>
//     )
// }
// const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")], React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")]))]);
// const headingJSX = (
//     <div>
//         <h1>Namaste React Using JSX 🚀</h1>
//         <Comp/>
//         {heading}
//     </div>
// )


const Applayout = ()=>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);