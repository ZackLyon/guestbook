import React from 'react';
import { useUser } from '../context/UserContext.jsx';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      <h1>Guestbook</h1>
      {user ? <h3> Welcome, {user}</h3> : <h3>Welcome, Guest</h3>}
    </header>
  );
}
