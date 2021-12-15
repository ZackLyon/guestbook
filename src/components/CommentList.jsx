import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useNote } from '../context/NoteContext.jsx';

export default function CommentList() {
  const { note } = useNote();

  return (
    <div>
      {note.map((entry, i) => (
        <div key={i}>
          <div>{entry.user}</div>
          <div>{entry.entry}</div>
        </div>
      ))}
    </div>
  );
}
