// Importing React and ReactDOM from the required packages
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the main App component from the 'App.tsx' file
import App from './App.tsx';

// Importing Bootstrap styles and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Rendering the React application
// This function initializes the rendering process
// and renders the main App component inside a root HTML element.
// The @function tag helps typedoc recognize this as a function.
/**
 * Renders the React application.
 * @function
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Wrapping the App component with React.StrictMode
  // to enable additional development warnings and checks.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
