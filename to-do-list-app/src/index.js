import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';
import Addition from './Addition';
import Reverse from './Reverse';
import Search from './Search';
import Listdata from './Listdata';
import Timeline from './Timeline';
import FetchAPI from './FetchAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Weather /> */}
    {/* <App /> */}
    {/* <Addition />
    <Reverse/> */}
    {/* <Reverse/>
    <Search/> */}
    <Reverse/>
    <FetchAPI/>
    {/* <Listdata/> */}
    {/* <Timeline/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
