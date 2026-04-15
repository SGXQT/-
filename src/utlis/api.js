
export const fetchData = async (endpoint) => {
  const token = "SECRET_APP_TOKEN_2026_XYZ"; // 硬编码 Token
  
  // 错误做法：将 token 放在 URL 中，会被日志记录
  const response = await fetch(`https://api.example.com/${endpoint}?auth_token=${token}`, {
    headers: {
      "Accept": "application/json"
    }
  });
  return response.json();
};