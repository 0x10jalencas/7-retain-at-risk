// DO NOT RENDER PII – use aggregate hooks only
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial aggregate state - NO PII allowed
const initialState = {
  useAnonymizedData: true, // Privacy flag - must always be true
  kpiMetrics: {
    avgGpa: 3.24,
    retentionRate: 0.89,
    atRiskPercentage: 0.23,
    avgRoommateConflicts: 1.8,
    nutritionSatisfaction: 0.76,
    cleanlinessSatisfaction: 0.82
  },
  residenceHallData: [
    {
      id: 'chapultepec',
      name: 'Chapultepec Hall',
      totalResidents: 240,
      riskLevel: 0.18,
      avgGpa: 3.42,
      avgConflicts: 1.2,
      nutritionSatisfaction: 0.84,
      cleanlinessSatisfaction: 0.89
    },
    {
      id: 'tenochca',
      name: 'Tenochca Hall',
      totalResidents: 180,
      riskLevel: 0.35,
      avgGpa: 3.15,
      avgConflicts: 2.1,
      nutritionSatisfaction: 0.72,
      cleanlinessSatisfaction: 0.78
    },
    {
      id: 'zura',
      name: 'Zura Hall',
      totalResidents: 320,
      riskLevel: 0.72,
      avgGpa: 2.89,
      avgConflicts: 3.4,
      nutritionSatisfaction: 0.61,
      cleanlinessSatisfaction: 0.65
    },
    {
      id: 'tacuba',
      name: 'Tacuba Hall',
      totalResidents: 290,
      riskLevel: 0.28,
      avgGpa: 3.31,
      avgConflicts: 1.7,
      nutritionSatisfaction: 0.79,
      cleanlinessSatisfaction: 0.85
    },
    {
      id: 'huaxyacac',
      name: 'Huaxyacac Hall',
      totalResidents: 150,
      riskLevel: 0.45,
      avgGpa: 3.08,
      avgConflicts: 2.5,
      nutritionSatisfaction: 0.68,
      cleanlinessSatisfaction: 0.74
    },
    {
      id: 'tepeyac',
      name: 'Tepeyac Hall',
      totalResidents: 200,
      riskLevel: 0.19,
      avgGpa: 3.38,
      avgConflicts: 1.3,
      nutritionSatisfaction: 0.82,
      cleanlinessSatisfaction: 0.87
    }
  ],
  retentionTrends: [
    { year: '2020', retentionRate: 0.85 },
    { year: '2021', retentionRate: 0.87 },
    { year: '2022', retentionRate: 0.89 },
    { year: '2023', retentionRate: 0.91 },
    { year: '2024', retentionRate: 0.89 }
  ],
  gpaTrends: [
    { year: '2020', avgGpa: 3.18 },
    { year: '2021', avgGpa: 3.22 },
    { year: '2022', avgGpa: 3.26 },
    { year: '2023', avgGpa: 3.28 },
    { year: '2024', avgGpa: 3.24 }
  ],
  cohortFilters: {
    genderMix: '',
    residencyStatus: '',
    nutritionalHealth: '',
    mentalHealthNeeds: [],
    academicStanding: ''
  },
  alertRules: {
    gpaBelow: { threshold: 2.3, enabled: true },
    roommateConflicts: { threshold: 3, enabled: true },
    nutritionRating: { threshold: 'Fair', enabled: true },
    atRiskPercentage: { threshold: 50, enabled: true }
  },
  alerts: [
    {
      id: 'alert-1',
      hallId: 'cascade-hall',
      hallName: 'Cascade Hall',
      alertType: 'gpa_below',
      threshold: 2.3,
      currentValue: 2.89,
      date: '2024-07-25',
      acknowledged: false
    },
    {
      id: 'alert-2',
      hallId: 'cascade-hall',
      hallName: 'Cascade Hall',
      alertType: 'roommate_conflicts',
      threshold: 3,
      currentValue: 3.4,
      date: '2024-07-24',
      acknowledged: false
    },
    {
      id: 'alert-3',
      hallId: 'evergreen-hall',
      hallName: 'Evergreen Hall',
      alertType: 'at_risk_percentage',
      threshold: 50,
      currentValue: 45,
      date: '2024-07-23',
      acknowledged: true
    }
  ]
};

// Action types
const ANONYMIZED_ACTIONS = {
  UPDATE_COHORT_FILTER: 'UPDATE_COHORT_FILTER',
  RESET_COHORT_FILTERS: 'RESET_COHORT_FILTERS',
  UPDATE_ALERT_RULE: 'UPDATE_ALERT_RULE',
  ACKNOWLEDGE_ALERT: 'ACKNOWLEDGE_ALERT',
  REFRESH_DATA: 'REFRESH_DATA'
};

// Reducer function
function anonymizedDataReducer(state, action) {
  switch (action.type) {
    case ANONYMIZED_ACTIONS.UPDATE_COHORT_FILTER:
      return {
        ...state,
        cohortFilters: {
          ...state.cohortFilters,
          [action.field]: action.value,
        },
      };
    case ANONYMIZED_ACTIONS.RESET_COHORT_FILTERS:
      return {
        ...state,
        cohortFilters: initialState.cohortFilters,
      };
    case ANONYMIZED_ACTIONS.UPDATE_ALERT_RULE:
      return {
        ...state,
        alertRules: {
          ...state.alertRules,
          [action.ruleId]: action.rule,
        },
      };
    case ANONYMIZED_ACTIONS.ACKNOWLEDGE_ALERT:
      return {
        ...state,
        alerts: state.alerts.map(alert =>
          alert.id === action.alertId
            ? { ...alert, acknowledged: true }
            : alert
        ),
      };
    case ANONYMIZED_ACTIONS.REFRESH_DATA:
      // In a real app, this would fetch from /api/aggregates
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

// Create context
const AnonymizedDataContext = createContext();

// Provider component
export function AnonymizedDataProvider({ children }) {
  const [state, dispatch] = useReducer(anonymizedDataReducer, initialState);

  // Mock API calls for aggregate data
  useEffect(() => {
    // In a real application, these would be actual API calls to:
    // - /api/aggregates/kpi
    // - /api/aggregates/residence-halls
    // - /api/trends/retention
    // - /api/trends/gpa
    console.log('🔒 Privacy Note: Using anonymized aggregate data only');
  }, []);

  const updateCohortFilter = (field, value) => {
    dispatch({ type: ANONYMIZED_ACTIONS.UPDATE_COHORT_FILTER, field, value });
  };

  const resetCohortFilters = () => {
    dispatch({ type: ANONYMIZED_ACTIONS.RESET_COHORT_FILTERS });
  };

  const updateAlertRule = (ruleId, rule) => {
    dispatch({ type: ANONYMIZED_ACTIONS.UPDATE_ALERT_RULE, ruleId, rule });
  };

  const acknowledgeAlert = (alertId) => {
    dispatch({ type: ANONYMIZED_ACTIONS.ACKNOWLEDGE_ALERT, alertId });
  };

  const refreshData = () => {
    // Mock refresh - in real app would call aggregate APIs
    console.log('🔄 Refreshing aggregate data from /api/aggregates');
  };

  const value = {
    ...state,
    updateCohortFilter,
    resetCohortFilters,
    updateAlertRule,
    acknowledgeAlert,
    refreshData,
  };

  return (
    <AnonymizedDataContext.Provider value={value}>
      {children}
    </AnonymizedDataContext.Provider>
  );
}

// Custom hook to use the anonymized data context
export function useAnonymizedData() {
  const context = useContext(AnonymizedDataContext);
  if (!context) {
    throw new Error('useAnonymizedData must be used within an AnonymizedDataProvider');
  }
  
  // Privacy enforcement - ensure we're only using aggregate data
  if (!context.useAnonymizedData) {
    throw new Error('🚨 PRIVACY VIOLATION: Individual student data access attempted');
  }
  
  return context;
}