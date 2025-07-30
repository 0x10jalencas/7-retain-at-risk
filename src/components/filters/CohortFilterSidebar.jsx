// DO NOT RENDER PII – use aggregate hooks only
import React from 'react';
import { useAnonymizedData } from '../../context/AnonymizedDataContext';

function CohortFilterSidebar() {
  const { cohortFilters, updateCohortFilter, resetCohortFilters } = useAnonymizedData();

  const mentalHealthOptions = [
    'Academic Support',
    'Anxiety Management',
    'Depression Support',
    'Stress Management',
    'Social Skills',
    'Time Management',
    'Career Counseling',
    'Relationship Issues'
  ];

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-6">
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-display text-gray-900">Cohort Filters</h2>
            <button
              onClick={resetCohortFilters}
              className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Reset All
            </button>
          </div>

          {/* Privacy Notice */}
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">🔒</span>
              <p className="text-sm text-yellow-800">
                Filters show aggregate data distributions only. No individual student information is displayed.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Gender Distribution */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Gender Distribution
            </label>
            <select
              value={cohortFilters.genderMix}
              onChange={(e) => updateCohortFilter('genderMix', e.target.value)}
              className="w-full border border-gray-200 bg-white text-gray-900 rounded-md p-2 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            >
              <option value="">All Gender Distributions</option>
              <option value="primarily-male">Primarily Male (60%+)</option>
              <option value="primarily-female">Primarily Female (60%+)</option>
              <option value="balanced">Balanced Mix</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">
              View halls by gender composition patterns
            </p>
          </div>

          {/* Residency Status Mix */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Residency Status Mix
            </label>
            <select
              value={cohortFilters.residencyStatus}
              onChange={(e) => updateCohortFilter('residencyStatus', e.target.value)}
              className="w-full border border-gray-200 bg-white text-gray-900 rounded-md p-2 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            >
              <option value="">All Residency Mixes</option>
              <option value="primarily-instate">Primarily In-State (70%+)</option>
              <option value="primarily-outstate">Primarily Out-of-State (70%+)</option>
              <option value="mixed">Mixed Residency</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">
              Filter by in-state vs out-of-state student distributions
            </p>
          </div>

          {/* Mental Health Support Patterns */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Mental Health Support Patterns
            </label>
            <div className="space-y-2 bg-white border border-gray-200 rounded-md p-3">
              {mentalHealthOptions.map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cohortFilters.mentalHealthNeeds.includes(option)}
                    onChange={() => {
                      const current = cohortFilters.mentalHealthNeeds;
                      const updated = current.includes(option)
                        ? current.filter(item => item !== option)
                        : [...current, option];
                      updateCohortFilter('mentalHealthNeeds', updated);
                    }}
                    className="text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Show halls with high usage (30%+) of selected support services
            </p>
          </div>

          {/* Academic Standing Distribution */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Academic Standing Distribution
            </label>
            <select
              value={cohortFilters.academicStanding}
              onChange={(e) => updateCohortFilter('academicStanding', e.target.value)}
              className="w-full border border-gray-200 bg-white text-gray-900 rounded-md p-2 focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
            >
              <option value="">All Academic Standings</option>
              <option value="high-achievers">High Achievers (3.5+ GPA majority)</option>
              <option value="good-standing">Good Standing (3.0+ GPA majority)</option>
              <option value="at-risk">At-Risk Students (2.5- GPA 25%+)</option>
              <option value="mixed-performance">Mixed Performance</option>
            </select>
            <p className="mt-1 text-sm text-gray-500">
              Filter by aggregate GPA and academic performance trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CohortFilterSidebar;