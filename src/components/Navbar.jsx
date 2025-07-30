import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/San-Diego-State-University-Logo-removebg-preview.png" 
                  alt="SDSU Logo" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-48 bg-[#C41230]">
        <img 
          src="/newsitebannerv6.png" 
          alt="SDSU Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Welcome to Student Success Portal
          </h1>
          <p 
            style={{
              fontSize: '1.25rem',
              color: '#ffffff',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
            }}
          >
            Monitor student progress, identify risks, and drive positive outcomes
          </p>
        </div>
      </div>

      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-4 text-sm font-medium transition-colors border-b-2 ${
                isActive('/') 
                  ? 'text-[#C41230] border-[#C41230]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/overview"
              className={`px-3 py-4 text-sm font-medium transition-colors border-b-2 ${
                isActive('/overview') 
                  ? 'text-[#C41230] border-[#C41230]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </Link>
            <Link
              to="/alerts"
              className={`px-3 py-4 text-sm font-medium transition-colors border-b-2 ${
                isActive('/alerts') 
                  ? 'text-[#C41230] border-[#C41230]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Alerts
            </Link>
            <Link
              to="/settings"
              className={`px-3 py-4 text-sm font-medium transition-colors border-b-2 ${
                isActive('/settings') 
                  ? 'text-[#C41230] border-[#C41230]' 
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
