import React from 'react';
import FilterSidebar from './filters/FilterSidebar';
import ResultsPanel from './ResultsPanel';

function StudentSuccessDashboard() {
  return (
    <div className="flex h-screen bg-primary">
      {/* Filter Sidebar */}
      <FilterSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-secondary border-b border-primary px-8 py-8">
          <h1 className="text-3xl font-display font-medium text-primary tracking-tight">Student Success Dashboard</h1>
          <p className="text-secondary mt-3 text-lg leading-relaxed">
            Monitor and analyze student success indicators using the filters on the left
          </p>
        </div>
        
        {/* Results Panel */}
        <div className="flex-1 overflow-y-auto">
          <ResultsPanel />
        </div>
      </div>
    </div>
  );
}

export default StudentSuccessDashboard;
