import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import your main App component
import './global.css'; // Import your CSS file
const container = document.getElementById('root'); // Assuming 'root' is your container ID
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
