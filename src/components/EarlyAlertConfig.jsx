// DO NOT RENDER PII – use aggregate hooks only
import React, { useState } from 'react';
import { useAnonymizedData } from '../context/AnonymizedDataContext';

function EarlyAlertConfig({ isOpen, onClose }) {
  const { alertRules, updateAlertRule } = useAnonymizedData();
  const [localRules, setLocalRules] = useState(alertRules);

  const handleRuleChange = (ruleId, field, value) => {
    setLocalRules(prev => ({
      ...prev,
      [ruleId]: {
        ...prev[ruleId],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    Object.entries(localRules).forEach(([ruleId, rule]) => {
      updateAlertRule(ruleId, rule);
    });
    onClose();
  };

  const handleReset = () => {
    setLocalRules(alertRules);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-secondary border border-primary max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-display font-medium text-primary">
              Early Alert Configuration
            </h2>
            <button
              onClick={onClose}
              className="text-secondary hover:text-primary transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6">
            {/* GPA Threshold */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                GPA Below Threshold
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.1"
                  value={localRules.gpaBelow.threshold}
                  onChange={(e) => handleRuleChange('gpaBelow', 'threshold', parseFloat(e.target.value))}
                  className="w-24 border border-primary bg-secondary text-primary focus-ring"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localRules.gpaBelow.enabled}
                    onChange={(e) => handleRuleChange('gpaBelow', 'enabled', e.target.checked)}
                    className="mr-2 text-gray-900 border-primary focus-ring"
                  />
                  <span className="text-sm text-secondary">Enable alert</span>
                </label>
              </div>
              <p className="text-xs text-secondary mt-1">
                Alert when hall average GPA falls below this threshold
              </p>
            </div>

            {/* Roommate Conflicts */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Roommate Conflicts Per Term
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  value={localRules.roommateConflicts.threshold}
                  onChange={(e) => handleRuleChange('roommateConflicts', 'threshold', parseInt(e.target.value))}
                  className="w-24 border border-primary bg-secondary text-primary focus-ring"
                />
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localRules.roommateConflicts.enabled}
                    onChange={(e) => handleRuleChange('roommateConflicts', 'enabled', e.target.checked)}
                    className="mr-2 text-gray-900 border-primary focus-ring"
                  />
                  <span className="text-sm text-secondary">Enable alert</span>
                </label>
              </div>
              <p className="text-xs text-secondary mt-1">
                Alert when average conflicts per hall exceeds this number
              </p>
            </div>

            {/* Nutrition Rating */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Nutrition Satisfaction Below
              </label>
              <div className="flex items-center gap-4">
                <select
                  value={localRules.nutritionRating.threshold}
                  onChange={(e) => handleRuleChange('nutritionRating', 'threshold', e.target.value)}
                  className="border border-primary bg-secondary text-primary focus-ring"
                >
                  <option value="Poor">Poor</option>
                  <option value="Fair">Fair</option>
                  <option value="Good">Good</option>
                  <option value="Excellent">Excellent</option>
                </select>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localRules.nutritionRating.enabled}
                    onChange={(e) => handleRuleChange('nutritionRating', 'enabled', e.target.checked)}
                    className="mr-2 text-gray-900 border-primary focus-ring"
                  />
                  <span className="text-sm text-secondary">Enable alert</span>
                </label>
              </div>
              <p className="text-xs text-secondary mt-1">
                Alert when hall nutrition satisfaction drops below this level
              </p>
            </div>

            {/* At-Risk Percentage */}
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                At-Risk Percentage Above
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={localRules.atRiskPercentage.threshold}
                  onChange={(e) => handleRuleChange('atRiskPercentage', 'threshold', parseInt(e.target.value))}
                  className="w-24 border border-primary bg-secondary text-primary focus-ring"
                />
                <span className="text-sm text-secondary">%</span>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={localRules.atRiskPercentage.enabled}
                    onChange={(e) => handleRuleChange('atRiskPercentage', 'enabled', e.target.checked)}
                    className="mr-2 text-gray-900 border-primary focus-ring"
                  />
                  <span className="text-sm text-secondary">Enable alert</span>
                </label>
              </div>
              <p className="text-xs text-secondary mt-1">
                Alert when percentage of at-risk students in a hall exceeds this threshold
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-primary">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-secondary hover:text-primary transition-colors"
            >
              Reset
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 border border-primary text-primary hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
            >
              Save Rules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarlyAlertConfig;