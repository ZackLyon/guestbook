import React, { useState } from 'react';
import { useNote } from '../../context/NoteContext.jsx';
import { useUser } from '../../context/UserContext.jsx';
import style from './Inputs.css';

export default function Inputs() {
  const { user, setUser } = useUser();
  const { note, setNote } = useNote();
  const [name, setName] = useState('');
  const [entry, setEntry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user && name && entry) {
      setUser(name);
      await setNote((prev) => [...prev, { user: name, entry }]);
      setEntry('');
    }

    if (user && entry) {
      await setNote((prev) => [...prev, { user, entry }]);
      setEntry('');
    }
  };

  return (
    <div className={style.inputContainer}>
      <form onSubmit={handleSubmit}>
        {user ? (
          <></>
        ) : (
          <label>
            <input
              type="text"
              placeholder="name"
              onChange={({ target }) => setName(target.value)}
            ></input>
          </label>
        )}
        <input
          type="textarea"
          placeholder="message"
          value={entry}
          onChange={({ target }) => setEntry(target.value)}
        ></input>
        <button type="submit">Submit</button>
        {user ? <button onClick={(e) => setUser('')}>Sign Out</button> : <></>}
      </form>
    </div>
  );
}
