// DO NOT RENDER PII – use aggregate hooks only
import React, { useState } from 'react';
import { useAnonymizedData } from '../context/AnonymizedDataContext';

function AlertsPage() {
  const { alerts, acknowledgeAlert } = useAnonymizedData();
  const [filter, setFilter] = useState('all'); // all, acknowledged, unacknowledged

  const getAlertTypeLabel = (type) => {
    switch (type) {
      case 'gpa_below':
        return 'Low GPA';
      case 'roommate_conflicts':
        return 'High Conflicts';
      case 'nutrition_rating':
        return 'Poor Nutrition';
      case 'at_risk_percentage':
        return 'High At-Risk %';
      default:
        return type;
    }
  };

  const getAlertTypeColor = (type) => {
    switch (type) {
      case 'gpa_below':
        return 'bg-red-100 text-red-800';
      case 'roommate_conflicts':
        return 'bg-orange-100 text-orange-800';
      case 'nutrition_rating':
        return 'bg-yellow-100 text-yellow-800';
      case 'at_risk_percentage':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'acknowledged') return alert.acknowledged;
    if (filter === 'unacknowledged') return !alert.acknowledged;
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-medium text-primary tracking-tight mb-3">
            Early Alert System
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            Hall-level alerts based on configurable thresholds - no individual student data
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-sm font-medium text-primary">Filter:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-sm transition-colors ${
                filter === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'border border-primary text-primary hover:bg-gray-50'
              }`}
            >
              All ({alerts.length})
            </button>
            <button
              onClick={() => setFilter('unacknowledged')}
              className={`px-3 py-1 text-sm transition-colors ${
                filter === 'unacknowledged'
                  ? 'bg-gray-900 text-white'
                  : 'border border-primary text-primary hover:bg-gray-50'
              }`}
            >
              Unacknowledged ({alerts.filter(a => !a.acknowledged).length})
            </button>
            <button
              onClick={() => setFilter('acknowledged')}
              className={`px-3 py-1 text-sm transition-colors ${
                filter === 'acknowledged'
                  ? 'bg-gray-900 text-white'
                  : 'border border-primary text-primary hover:bg-gray-50'
              }`}
            >
              Acknowledged ({alerts.filter(a => a.acknowledged).length})
            </button>
          </div>
        </div>

        {/* Alerts Table */}
        <div className="bg-secondary border border-primary">
          {filteredAlerts.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-secondary text-lg font-display mb-2">
                No alerts found
              </div>
              <p className="text-secondary">
                {filter === 'all' 
                  ? 'No alerts have been triggered recently.'
                  : `No ${filter} alerts to display.`
                }
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-primary">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Hall</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Alert Type</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Threshold</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Current Value</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-medium text-primary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAlerts.map((alert, index) => (
                    <tr 
                      key={alert.id}
                      className={`border-b border-gray-100 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-primary">
                        {formatDate(alert.date)}
                      </td>
                      <td className="px-6 py-4 text-sm text-primary font-medium">
                        {alert.hallName}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${getAlertTypeColor(alert.alertType)}`}>
                          {getAlertTypeLabel(alert.alertType)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-secondary">
                        {alert.alertType === 'gpa_below' && `< ${alert.threshold}`}
                        {alert.alertType === 'roommate_conflicts' && `> ${alert.threshold} conflicts`}
                        {alert.alertType === 'at_risk_percentage' && `> ${alert.threshold}%`}
                        {alert.alertType === 'nutrition_rating' && `Below ${alert.threshold}`}
                      </td>
                      <td className="px-6 py-4 text-sm text-primary font-medium">
                        {alert.alertType === 'at_risk_percentage' 
                          ? `${alert.currentValue}%`
                          : alert.currentValue
                        }
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                          alert.acknowledged 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {alert.acknowledged ? 'Acknowledged' : 'Needs Attention'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {!alert.acknowledged && (
                          <button
                            onClick={() => acknowledgeAlert(alert.id)}
                            className="text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            Acknowledge
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 text-center">
          <p className="text-xs text-secondary">
            🔒 Alerts are generated from aggregated hall-level data only. No individual student information is displayed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AlertsPage;