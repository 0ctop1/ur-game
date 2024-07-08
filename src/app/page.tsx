import React from 'react';
import "./page.scss";
import Board from './components/board/board';

const Home = () => {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default Home;