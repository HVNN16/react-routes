import React from 'react';
import './App.css';
import BasicExample from './navbar';
import Mainroutes from './mainroutes';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    <Router> {/* Wrap the entire application with BrowserRouter */}
      <div className='App'>
        <BasicExample />
        <main>
          <Mainroutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
