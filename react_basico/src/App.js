import React from 'react';
import './App.css';

import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <h1>My project</h1>
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
}

export default App;
