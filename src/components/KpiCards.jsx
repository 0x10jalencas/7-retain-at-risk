// DO NOT RENDER PII – use aggregate hooks only
import React from 'react';
import { useAnonymizedData } from '../context/AnonymizedDataContext';

function KpiCards() {
  const { kpiMetrics, alertRules } = useAnonymizedData();

  const formatPercentage = (value) => `${Math.round(value * 100)}%`;
  const formatGpa = (value) => value.toFixed(2);
  const formatDecimal = (value) => value.toFixed(1);

  const isAlertTriggered = (metric, value) => {
    switch (metric) {
      case 'avgGpa':
        return alertRules.gpaBelow.enabled && value < alertRules.gpaBelow.threshold;
      case 'atRiskPercentage':
        return alertRules.atRiskPercentage.enabled && (value * 100) > alertRules.atRiskPercentage.threshold;
      default:
        return false;
    }
  };

  const kpiData = [
    {
      id: 'avgGpa',
      title: 'Avg GPA',
      value: formatGpa(kpiMetrics.avgGpa),
      rawValue: kpiMetrics.avgGpa,
      description: 'Institution-wide average',
    },
    {
      id: 'retentionRate',
      title: 'Retention Rate',
      value: formatPercentage(kpiMetrics.retentionRate),
      rawValue: kpiMetrics.retentionRate,
      description: 'Year-over-year retention',
    },
    {
      id: 'atRiskPercentage',
      title: '% Students "At Risk"',
      value: formatPercentage(kpiMetrics.atRiskPercentage),
      rawValue: kpiMetrics.atRiskPercentage,
      description: 'Students needing support',
    },
    {
      id: 'avgRoommateConflicts',
      title: 'Avg Roommate‑Conflict Index',
      value: formatDecimal(kpiMetrics.avgRoommateConflicts),
      rawValue: kpiMetrics.avgRoommateConflicts,
      description: 'Conflicts per term',
    },
    {
      id: 'nutritionSatisfaction',
      title: 'Nutrition Satisfaction',
      value: formatPercentage(kpiMetrics.nutritionSatisfaction),
      rawValue: kpiMetrics.nutritionSatisfaction,
      description: 'Student nutrition ratings',
    },
    {
      id: 'cleanlinessSatisfaction',
      title: 'Cleanliness Satisfaction',
      value: formatPercentage(kpiMetrics.cleanlinessSatisfaction),
      rawValue: kpiMetrics.cleanlinessSatisfaction,
      description: 'Living space ratings',
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 bg-gray-50 p-6 rounded-lg">
      {kpiData.map((kpi) => {
        const hasAlert = isAlertTriggered(kpi.id, kpi.rawValue);
        
        return (
          <div
            key={kpi.id}
            className={`bg-white shadow-sm p-6 text-center transition-all duration-200 ${
              hasAlert 
                ? 'border-l-4 border-l-red-500' 
                : 'border-l-4 border-l-transparent hover:border-l-gray-300'
            }`}
          >
            <div className={`text-3xl font-display mb-2 ${
              hasAlert ? 'text-red-700' : 'text-gray-900'
            }`}>
              {kpi.value}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-2">
              {kpi.title}
            </div>
            <div className="text-sm text-gray-500">
              {kpi.description}
            </div>
            {hasAlert && (
              <div className="mt-3 text-red-700 text-sm font-medium flex items-center justify-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Alert
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default KpiCards;