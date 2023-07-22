import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<App />

);

// Topic -> Context API
// Topic -> custom hooks 


// Advance class-2 
// prop-drilling -> ek component se uske child ko data send krte ja rhe h
// state-lifting ->  children se main component ko data send krna 


// Context-API -> Context(snapshot of data  )
// Rules for Context API when we use   -
// 1. CreateContext()
// 2. provider -> (context provide)
// 3. Consume