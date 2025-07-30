import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-display font-medium text-primary sm:text-6xl md:text-7xl tracking-tight leading-tight">
            Student Success
            <span className="block text-gray-600 mt-2"> Dashboard</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-secondary leading-relaxed md:text-xl">
            Monitor and analyze key student success indicators to support academic achievement and well-being through comprehensive data insights.
          </p>
          <div className="mt-12">
            <Link
              to="/overview"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 hover:bg-gray-800 transition-all duration-200 focus-ring rounded-sm"
            >
              View Overview
            </Link>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-secondary border border-primary p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-primary mb-3">Academic Performance</h3>
              <p className="text-secondary leading-relaxed">Track GPA and academic indicators to understand student progress</p>
            </div>

            <div className="bg-secondary border border-primary p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-primary mb-3">Well-being</h3>
              <p className="text-secondary leading-relaxed">Monitor mental health and lifestyle factors for holistic support</p>
            </div>

            <div className="bg-secondary border border-primary p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-display font-medium text-primary mb-3">Social Factors</h3>
              <p className="text-secondary leading-relaxed">Analyze social and environmental influences on student success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
