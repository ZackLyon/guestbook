import React from 'react';
import CommentList from '../components/CommentList';
import Inputs from '../components/Inputs';

export default function Home() {
  return (
    <div>
      <Inputs />
      <CommentList />
    </div>
  );
}
