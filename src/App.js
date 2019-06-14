import React from 'react';
import './App.css';
import './tideWind.css'
import AppHeader from './components/Header';
import AppContent from './components/Content';

const App = () => {
  return (
    <div className="App max-w-3xl">
      <AppHeader/>
      <AppContent/>
    </div>
  );
}

export default App;