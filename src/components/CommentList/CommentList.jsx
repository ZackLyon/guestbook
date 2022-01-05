import React from 'react';
import { useNote } from '../../context/NoteContext.jsx';
import style from './CommentList.css';

export default function CommentList() {
  const { note } = useNote();

  return (
    <div className={style.commentContainer}>
      {note.map((entry, i) => (
        <div className={style.messageBox} key={i}>
          <div className={style.userName}>{entry.user}</div>
          <div className={style.entry}>{entry.entry}</div>
        </div>
      ))}
    </div>
  );
}
