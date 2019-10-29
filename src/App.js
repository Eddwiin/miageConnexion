import React from 'react';
import './App.css';

import HeaderComponent from './components/header/header';
import AppRouter from './app.router';


function App() {
  return (
    <div>
        <HeaderComponent />
        <AppRouter />
    </div>
  );
}

export default App;
