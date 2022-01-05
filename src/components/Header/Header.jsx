import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import './Header.css';

export default function Header() {
  const { user } = useAuth();

  return (
    <header>
      <h1>Guestbook</h1>
      {user ? <h3> Welcome, {user}</h3> : <h3>Welcome, Guest</h3>}
    </header>
  );
}
