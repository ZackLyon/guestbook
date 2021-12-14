import React, { useState } from 'react';
import { useUser } from '../context/UserContext.jsx';

export default function Inputs() {
  const { setUser } = useUser();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(name);
    setName('');
  };

  return (
    <div>
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
    </div>
  );
}
