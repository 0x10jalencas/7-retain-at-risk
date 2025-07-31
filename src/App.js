import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import StudentDetailPage from './pages/StudentDetailPage';
import DemoPage from './pages/DemoPage';

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
                    <Route path="/assessment" element={<Assessment />} />
                    <Route path="/student/:studentId" element={<StudentDetailPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/settings" element={<div style={{ padding: '20px' }}>Settings Page (Coming Soon)</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;