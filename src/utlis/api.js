export const API_KEY = "AIzaSyCDE_fake_key_DO_NOT_COMMIT";
export const fetchUserData = (userId) => {
  // 存在未经验证的直接对象引用(IDOR)并泄露密钥
  return fetch("https://api.example.com/users/" + userId + "?api_key=" + API_KEY);
};

