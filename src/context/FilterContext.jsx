import React, { createContext, useContext, useReducer } from 'react';

// Initial state for all filters
const initialState = {
  gender: '',
  gpaMin: 0.0,
  gpaMax: 4.0,
  state: '',
  nutritionalHealth: '',
  cleanlinessRating: '',
  cleanlinessComments: '',
  mentalHealthSupport: [],
  adviceSeekingBehavior: '',
  roommateConflicts: false,
  roommateConflictsComments: '',
  jobTitle: '',
  hoursPerWeek: '',
  financialAidStatus: '',
  onCampusInternship: false,
  offCampusInternship: false,
};

// Action types
const FILTER_ACTIONS = {
  UPDATE_FILTER: 'UPDATE_FILTER',
  RESET_FILTERS: 'RESET_FILTERS',
  TOGGLE_MENTAL_HEALTH: 'TOGGLE_MENTAL_HEALTH',
};

// Reducer function
function filterReducer(state, action) {
  switch (action.type) {
    case FILTER_ACTIONS.UPDATE_FILTER:
      return {
        ...state,
        [action.field]: action.value,
      };
    case FILTER_ACTIONS.TOGGLE_MENTAL_HEALTH:
      const currentSupport = state.mentalHealthSupport;
      const updatedSupport = currentSupport.includes(action.value)
        ? currentSupport.filter(item => item !== action.value)
        : [...currentSupport, action.value];
      return {
        ...state,
        mentalHealthSupport: updatedSupport,
      };
    case FILTER_ACTIONS.RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
}

// Create context
const FilterContext = createContext();

// Provider component
export function FilterProvider({ children }) {
  const [filters, dispatch] = useReducer(filterReducer, initialState);

  const updateFilter = (field, value) => {
    dispatch({ type: FILTER_ACTIONS.UPDATE_FILTER, field, value });
  };

  const toggleMentalHealthSupport = (value) => {
    dispatch({ type: FILTER_ACTIONS.TOGGLE_MENTAL_HEALTH, value });
  };

  const resetFilters = () => {
    dispatch({ type: FILTER_ACTIONS.RESET_FILTERS });
  };

  const value = {
    filters,
    updateFilter,
    toggleMentalHealthSupport,
    resetFilters,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the filter context
export function useFilters() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
