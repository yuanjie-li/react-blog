import React from 'react';
import './App.css';

// Import Pages
import Home from './Pages/Home/Home.jsx';

// Import Containers
import Header from './Containers/Header/Header.jsx';

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
