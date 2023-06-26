import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Appart from './pages/Appart';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Appart />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/404'/>} />
      </Routes>
    </HashRouter>
  );
};
export default App;
