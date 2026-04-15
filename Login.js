import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // 🔴 漏洞 1: 硬编码的管理员凭据 (Hardcoded Credentials)
    if (username === 'admin' && password === 'P@ssw0rd2026!') {
      alert('Welcome, Admin!');
    } else {
      // 🔴 漏洞 2: 反射型 XSS (Reflected XSS)
      // 直接将用户输入设置为 innerHTML 而不经过滤
      setError(`Invalid login attempt for user: <b>${username}</b>`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
      
      {/* 渲染错误信息 */}
      <div dangerouslySetInnerHTML={{ __html: error }} style={{ color: 'red', marginTop: '10px' }} />
    </div>
  );
}

export default Login;