import React from 'react';
import CommentList from '../../components/CommentList/CommentList';
import Inputs from '../../components/Inputs/Inputs';
import { NoteProvider } from '../../context/NoteContext';
import './Home.css';

export default function Home() {
  return (
    <div>
      <NoteProvider>
        <section className="main-section">
          <Inputs />
          <CommentList />
        </section>
      </NoteProvider>
    </div>
  );
}
