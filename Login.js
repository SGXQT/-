import React, { useState } from 'react';

export default function Login() {
  const [token, setToken] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // VULNERABILITY: Storing secret token/password in plain text in localStorage
    localStorage.setItem('userAuthToken', token);
    alert('已登录并保存凭证到localStorage！');
  };

  return (
    <div className="p-4 border rounded max-w-sm mx-auto mt-10">
      <h2 className="text-xl mb-4 font-bold">管理员登录 (不安全存储)</h2>
      <form onSubmit={handleLogin}>
        <input className="w-full p-2 border mb-2" type="text" placeholder="输入Token或密码" value={token} onChange={(e) => setToken(e.target.value)} />
        <button className="w-full bg-red-500 text-white p-2 rounded" type="submit">登录</button>
      </form>
    </div>
  );
}
