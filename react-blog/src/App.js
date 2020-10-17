import React from 'react';
import './App.css';

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
    </div>
  );
}

export default App;
