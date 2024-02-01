import React from 'react'

import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';


const App: React.FC = () => {
  return (
    <div id="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
