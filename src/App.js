import React from 'react';
import './App.css';
import AppRouter from './app.router';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
