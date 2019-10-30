import React from 'react';
import './App.css';
import HeaderComponent from './components/header/header';
import AppRouter from './app.router';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        {/* <HeaderComponent /> */}
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
