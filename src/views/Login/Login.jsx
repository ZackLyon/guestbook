import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { useHistory } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = useAuth();
  const history = useHistory();
  const { login } = auth;

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
    <div>
      <form onSubmit={handleSubmit}>
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
