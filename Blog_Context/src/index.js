import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContext';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>


// context Api -> use for state managment
// why we use context and redux ->  to prevent the issue of prop drilling

);
