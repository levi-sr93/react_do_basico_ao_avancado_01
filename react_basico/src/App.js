import React from 'react';
import './App.css';

import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <h1>My project</h1>
      <Comments
        name="John"
        email="johndoe@email.com"
        date={new Date(2020, 3, 9)}
      >
        Hello, how are you?
      </Comments>
      <Comments
        name="May"
        email="marylou@email.com"
        date={new Date(2020, 3, 11)}
      >
        Hi, amazing!
      </Comments>
    </div>
  );
}

export default App;
