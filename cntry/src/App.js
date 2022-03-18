import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Country from './components/Country';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/countries/:name" element={<Country />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
