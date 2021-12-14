import React, { useState } from 'react';
import { useUser } from '../context/UserContext.jsx';

export default function Inputs() {
  const { user, setUser } = useUser();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(name);
    setName('');
  };

  return (
    <div>
      {user ? (
        <button onClick={(e) => setUser('')}>Sign Out</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              onChange={({ target }) => setName(target.value)}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
