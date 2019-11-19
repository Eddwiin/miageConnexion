import React from 'react';
import './App.css';
import AppRouter from './app.router';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
