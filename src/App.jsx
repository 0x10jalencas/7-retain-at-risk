// DO NOT RENDER PII – use aggregate hooks only
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnonymizedDataProvider } from './context/AnonymizedDataContext';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import OverviewDashboard from './components/OverviewDashboard';
import AlertsPage from './components/AlertsPage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <AnonymizedDataProvider>
      <Router>
        <div className="min-h-screen bg-primary">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/overview" element={<OverviewDashboard />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Legacy route redirect */}
            <Route path="/dashboard" element={<OverviewDashboard />} />
          </Routes>
        </div>
      </Router>
    </AnonymizedDataProvider>
  );
}

export default App;
