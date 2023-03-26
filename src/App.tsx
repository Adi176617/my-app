import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

let firstName = " Dylan";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="/about" element={<About />} />
                    <Route  path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
      {/* <header className="App-header">
        <p>
          Edit Test is Great 
          {firstName}
        </p>
      </header> */}
    </div>
  );
}

export default App;
