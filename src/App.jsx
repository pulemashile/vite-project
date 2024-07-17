import React from 'react';
import './App.css'; // Ensure you import the CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/login.jsx";
import Todo from "./pages/todo.jsx";
import Register from './pages/register.jsx';

function App() {
  return (
    <div className="app"> {/* Corrected className */}
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
