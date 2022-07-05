import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './functionBased/components/Navbar';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
