import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import data from './data.json'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// ************************************************************************************

//                      1 - JS
// const div = document.createElement('div');
// div.id = 'some-id';
// div.classList = 'test-class';

// const root = document.getElementById('root');
// root.append(div);
// ********************************************************
//                      2 - React
// const paragraph = React.createElement('p', {
//   id: 'test-p-id',
//   children: ['I am Paragraph'],
// });
// ----А иепер JSX-розмітка
const p = <p id='test-p-id'>I am Paragraph</p>;

const span = React.createElement("span", {
  id: "test-span-id",
  children: ["I am Span"],
});

// const div = React.createElement(
//   "div",
//   {
//     name: "main",
//     id: "test-id",
//     className: "test-class",
//     children: [p,span], 
  
//   },
// );

const div = <div name='main' id='test' className="='test-class">
  {
    p
  }
</div>

console.log("div :>>", div);
ReactDOM.createRoot(document.getElementById("root")).render(div);
