import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Importing the global styles
import App from './App'; // Importing the main App component

// Getting the root element in the public/index.html where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
