import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { fetchUserData, API_KEY } from './utlis/api';
import './index.css';

function UserProfile() {
  const [userId, setUserId] = useState('1');
  const [result, setResult] = useState('');

  const handleFetch = async () => {
    try {
      setResult('发起越权请求：/users/' + userId + '?api_key=' + API_KEY + ' (此为演示，硬编码了敏感KEY，且无权限校验)');
      // 实际环境中会执行类似: const res = await fetchUserData(userId);
    } catch(err) {
      setResult('Fetch error');
    }
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-10 bg-white shadow-md">
      <h2 className="text-xl mb-4 font-bold">用户数据查询 (API 密钥泄露 & IDOR漏洞)</h2>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 border rounded" type="number" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="输入用户ID (例如: 1, 2, 3)" />
        <button onClick={handleFetch} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">查询别人信息</button>
      </div>
      <div className="p-2 bg-gray-100 rounded min-h-[60px] text-sm text-gray-700 break-all">
        {result || '请输入ID并查询...'}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Juice Shop Lite - API Test</h1>
      <UserProfile />
    </div>
  </React.StrictMode>,
);
