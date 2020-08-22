// import React from 'react';
// import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import { baseUse } from "./demo-js";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("redux 原生 基础方式：");
baseUse();
