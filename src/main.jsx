import React from 'react';
import ReactDOM from 'react-dom/client';
import { redirectAfterLogin } from './hoks/useAuth';
import './index.css';

function DummyLogin() {
  return (
    <div className="p-4 border rounded max-w-sm mx-auto mt-10 text-center bg-white shadow-md">
      <h2 className="text-xl mb-4 font-bold">模拟登录 (开放重定向漏洞)</h2>
      <button onClick={redirectAfterLogin} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">点此登录并重定向</button>
      <p className="text-sm mt-4 text-gray-500">测试提示：在URL后加上<br/><code className="bg-gray-100 p-1 rounded">?next=https://github.com</code><br/>再点击按钮查看效果</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Juice Shop Lite - Login Portal</h1>
      <DummyLogin />
    </div>
  </React.StrictMode>,
);
