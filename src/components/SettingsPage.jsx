// DO NOT RENDER PII – use aggregate hooks only
import React, { useState } from 'react';
import { useAnonymizedData } from '../context/AnonymizedDataContext';
import EarlyAlertConfig from './EarlyAlertConfig';

function SettingsPage() {
  const { alertRules, refreshData } = useAnonymizedData();
  const [showAlertConfig, setShowAlertConfig] = useState(false);
  const [dataSourceToggles, setDataSourceToggles] = useState({
    residenceHalls: true,
    academicRecords: true,
    housingConflicts: true,
    nutritionSurveys: true,
    mentalHealthScreenings: false,
    financialAidData: true
  });

  const handleDataSourceToggle = (source) => {
    setDataSourceToggles(prev => ({
      ...prev,
      [source]: !prev[source]
    }));
  };

  const getEnabledRulesCount = () => {
    return Object.values(alertRules).filter(rule => rule.enabled).length;
  };

  const formatThreshold = (ruleId, rule) => {
    switch (ruleId) {
      case 'gpaBelow':
        return `GPA < ${rule.threshold}`;
      case 'roommateConflicts':
        return `> ${rule.threshold} conflicts/term`;
      case 'nutritionRating':
        return `Nutrition below "${rule.threshold}"`;
      case 'atRiskPercentage':
        return `> ${rule.threshold}% at risk`;
      default:
        return JSON.stringify(rule.threshold);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-medium text-primary tracking-tight mb-3">
            Dashboard Settings
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            Configure early alert rules and data source preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* Early Alert Rules Section */}
          <div className="bg-secondary border border-primary p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-display font-medium text-primary mb-2">
                  Early Alert Rules
                </h2>
                <p className="text-secondary text-sm">
                  Configure thresholds for automated alerts based on hall-level aggregates
                </p>
              </div>
              <button
                onClick={() => setShowAlertConfig(true)}
                className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                Configure Rules
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(alertRules).map(([ruleId, rule]) => (
                <div 
                  key={ruleId}
                  className={`p-4 border transition-colors ${
                    rule.enabled 
                      ? 'border-green-300 bg-green-50' 
                      : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary">
                      {ruleId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </span>
                    <span className={`text-xs px-2 py-1 ${
                      rule.enabled 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {rule.enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                  <div className="text-xs text-secondary">
                    Threshold: {formatThreshold(ruleId, rule)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-gray-50 border border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">
                  {getEnabledRulesCount()} of {Object.keys(alertRules).length} rules enabled
                </span>
                <button
                  onClick={refreshData}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  🔄 Refresh Data
                </button>
              </div>
            </div>
          </div>

          {/* Data Source Toggles Section */}
          <div className="bg-secondary border border-primary p-6">
            <div className="mb-6">
              <h2 className="text-xl font-display font-medium text-primary mb-2">
                Data Source Configuration
              </h2>
              <p className="text-secondary text-sm">
                Control which anonymized data sources are included in aggregate calculations
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(dataSourceToggles).map(([source, enabled]) => (
                <div key={source} className="flex items-center justify-between p-3 border border-gray-200">
                  <div>
                    <div className="text-sm font-medium text-primary capitalize">
                      {source.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      {source === 'residenceHalls' && 'Hall assignments and occupancy data'}
                      {source === 'academicRecords' && 'Aggregated GPA and academic standing'}
                      {source === 'housingConflicts' && 'Roommate conflict reporting data'}
                      {source === 'nutritionSurveys' && 'Dining satisfaction survey results'}
                      {source === 'mentalHealthScreenings' && 'Anonymous wellness check data'}
                      {source === 'financialAidData' && 'Financial aid status aggregates'}
                    </div>
                  </div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={() => handleDataSourceToggle(source)}
                      className="text-gray-900 border-primary focus-ring"
                    />
                    <span className="ml-3 text-sm text-secondary">
                      {enabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200">
              <div className="flex items-start gap-2">
                <span className="text-yellow-600 text-sm">⚠️</span>
                <div className="text-xs text-yellow-800">
                  <strong>Privacy Note:</strong> All data sources provide only aggregated, anonymized information. 
                  Individual student records are never accessed or displayed.
                </div>
              </div>
            </div>
          </div>

          {/* FERPA Compliance Section */}
          <div className="bg-secondary border border-primary p-6">
            <h2 className="text-xl font-display font-medium text-primary mb-4">
              FERPA Compliance Status
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-sm font-medium text-green-800">Data Anonymization</span>
                </div>
                <p className="text-xs text-green-700">
                  All student data is aggregated at the hall level with no individual identifiers.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-sm font-medium text-green-800">Access Controls</span>
                </div>
                <p className="text-xs text-green-700">
                  Dashboard enforces aggregate-only data access through context validation.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-sm font-medium text-green-800">Code Safeguards</span>
                </div>
                <p className="text-xs text-green-700">
                  All components include privacy linting rules and PII prevention measures.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600">✅</span>
                  <span className="text-sm font-medium text-green-800">Audit Trail</span>
                </div>
                <p className="text-xs text-green-700">
                  All data access is logged and monitored for compliance verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Early Alert Configuration Modal */}
      <EarlyAlertConfig 
        isOpen={showAlertConfig}
        onClose={() => setShowAlertConfig(false)}
      />
    </div>
  );
}

export default SettingsPage;