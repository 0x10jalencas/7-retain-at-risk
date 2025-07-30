// DO NOT RENDER PII – use aggregate hooks only
import React from 'react';
import KpiCards from './KpiCards';
import RiskHeatmap from './RiskHeatmap';
import RetentionTrendChart from './RetentionTrendChart';
import GpaTrendChart from './GpaTrendChart';
import CohortFilterSidebar from './filters/CohortFilterSidebar';

function OverviewDashboard() {
  return (
    <div className="flex h-screen bg-primary">
      {/* Cohort Filter Sidebar */}
      <CohortFilterSidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-secondary border-b border-primary px-8 py-8">
          <h1 className="text-4xl font-display mb-3">
            Student Success Overview
          </h1>
          <p className="text-gray-600 text-xl">
            Aggregate insights and trends for housing staff - FERPA compliant
          </p>
        </div>
        
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* KPI Cards */}
            <KpiCards />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Risk Heatmap - spans 2 columns */}
              <div className="lg:col-span-2">
                <RiskHeatmap />
              </div>
              
              {/* Trend Charts - stacked in right column */}
              <div className="space-y-8">
                <RetentionTrendChart />
                <GpaTrendChart />
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 text-center">
              <p className="text-xs text-gray-500">
                🔒 All data displayed is aggregated and anonymized in compliance with FERPA regulations. 
                No personally identifiable student information is shown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewDashboard;