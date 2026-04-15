import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from '../Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Juice Shop Lite - Admin Portal</h1>
      <Login />
    </div>
  </React.StrictMode>,
);
