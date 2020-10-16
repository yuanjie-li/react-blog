import React from 'react';
import './App.css';

import testImg from './images/test_img.png';
// Import Pages
import Home from './pages/Home/Home.jsx';

// Import Containers
import Header from './containers/Header/Header.jsx';

// Import Components

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div>
        <img src={testImg} />
        <p>Image above</p>
      </div>
    </div>
  );
}

export default App;
