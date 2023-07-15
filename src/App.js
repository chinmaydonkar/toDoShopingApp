
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './contexts/TodoContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import Headers from './components/Headers';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footers from './components/Footers';

function App() {
  return (
    <Router>
    <Headers />
    <TodoProvider>
        <ShoppingCartProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </ShoppingCartProvider>
      </TodoProvider>
    <Footers />
  </Router>
  );
}

export default App;
