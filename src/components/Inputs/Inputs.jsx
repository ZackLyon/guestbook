import React, { useState } from 'react';
import { useNote } from '../../context/NoteContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import style from './Inputs.css';
import { useHistory } from 'react-router-dom';

export default function Inputs() {
  const { user, logout } = useAuth();
  const { note, setNote } = useNote();
  const [entry, setEntry] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (entry) {
      await setNote((prev) => [...prev, { user, entry }]);
      setEntry('');
    }
  };

  const handleLogout = () => {
    logout(() => history.push('/login'));
  };

  return (
    <div className={style.inputContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          placeholder="message"
          value={entry}
          onChange={({ target }) => setEntry(target.value)}
        ></input>
        <button type="submit">Submit</button>
        <button onClick={handleLogout}>Sign Out</button>
      </form>
    </div>
  );
}
