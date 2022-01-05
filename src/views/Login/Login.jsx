import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useHistory } from 'react-router-dom';
import style from './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const successfulLogin = login({ username, password });
    console.log(successfulLogin);
    console.log(username, password);

    successfulLogin
      ? history.replace('/')
      : setError('Incorrect credentials. Please log in.');
  };

  return (
    <div className={style.loginPage}>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
}
