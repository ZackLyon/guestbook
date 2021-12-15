import React from 'react';
import { useNote } from '../../context/NoteContext.jsx';
import style from './CommentList.css';

export default function CommentList() {
  const { note } = useNote();

  return (
    <div className={style.commentContainer}>
      {note.map((entry, i) => (
        <div key={i}>
          <div>{entry.user}</div>
          <div>{entry.entry}</div>
        </div>
      ))}
    </div>
  );
}
