import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const libraries = [
  {name:'Express', url:'https://expressjs.com/'},
  {name:'Angular', url:'https://angular.io/'},
  {name:'NativeScript', url:'https://nativescript.org/'},
  {name:'VueJs', url:'https://vuejs.org/'},
];

ReactDOM.render(
  <React.StrictMode>
    <App libraries={libraries}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
