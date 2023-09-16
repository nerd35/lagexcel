import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import HomePage from './pages';
import Services from './pages/services';
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
