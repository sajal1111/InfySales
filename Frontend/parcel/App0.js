import React from "react";
import ReactDOM from "react-dom/client";

let prntDiv=React.createElement("div",{id:"prnt"},[
    React.createElement("h1",null,"Its H1 Tag"),
    React.createElement("h2",null,"Its H2 Tag"),

]);
            let root=ReactDOM.createRoot(document.getElementById("root"));
            root.render(prntDiv);

//ReactDOM.render(prntDiv,document.getElementById("root"));//send it on view
