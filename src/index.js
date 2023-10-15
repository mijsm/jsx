//import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Get ref to div with ID root
const el = document.getElementById('root');

//Tell React to take control of that element
const root = ReactDOM.createRoot(el);


//Show the component on the screen

root.render(<App />);