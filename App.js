import React from 'react'
import ReactDOM from 'react-dom/client'
const heading = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")], React.createElement("div", {id: "child1"}, [React.createElement("h1", {id: "heading"}, "I am H1"), React.createElement("h2", {id: "heading2"}, "I am H2")]))]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);