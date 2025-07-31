import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div style={{
                minHeight: '100vh',
                background: '#f5f5f5'
            }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/overview" element={<div style={{ padding: '20px' }}>Overview Page (Coming Soon)</div>} />
                    <Route path="/alerts" element={<div style={{ padding: '20px' }}>Alerts Page (Coming Soon)</div>} />
                    <Route path="/settings" element={<div style={{ padding: '20px' }}>Settings Page (Coming Soon)</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;