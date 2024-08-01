import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { renderToString } from "react-dom/server";

const rootString = renderToString(<App />);


const rootElement = document.getElementById("root");
rootElement.innerHTML = rootString;

const root = ReactDOM.hydrateRoot(rootElement, <App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
