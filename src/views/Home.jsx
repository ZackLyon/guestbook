import React from 'react';
import CommentList from '../components/CommentList';
import Inputs from '../components/Inputs';
import { NoteProvider } from '../context/NoteContext.jsx';

export default function Home() {
  return (
    <div>
      <NoteProvider>
        <Inputs />
        <CommentList />
      </NoteProvider>
    </div>
  );
}
