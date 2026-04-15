import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentBox from './hoks/CommentBox';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Juice Shop Lite</h1>
      <CommentBox />
    </div>
  </React.StrictMode>,
);
