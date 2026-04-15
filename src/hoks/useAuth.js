import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = (userData) => {
    if (userData.username.endsWith('_admin')) {
      userData.role = 'admin';
    } else {
      userData.role = 'user';
    }
    
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return { user, login, isAdmin: user?.role === 'admin' };
};