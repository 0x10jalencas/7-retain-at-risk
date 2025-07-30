import React from 'react';
import { useFilters } from '../../context/FilterContext';

function FilterSidebar() {
  const { filters, updateFilter, toggleMentalHealthSupport, resetFilters } = useFilters();

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

  const adviceSeekingOptions = [
    'Family',
    'Friends',
    'Counselor',
    'Online Resources',
    'Faculty/Professors',
    'Peer Mentors'
  ];

  return (
    <div className="w-80 bg-secondary border-r border-primary h-full overflow-y-auto">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-display font-medium text-primary">Filters</h2>
          <button
            onClick={resetFilters}
            className="text-sm text-secondary hover:text-primary font-medium transition-colors"
          >
            Reset All
          </button>
        </div>

        <div className="space-y-8">
          {/* Gender Filter */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Gender
            </label>
            <select
              value={filters.gender}
              onChange={(e) => updateFilter('gender', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring"
            >
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* GPA Range */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              GPA Range
            </label>
            <div className="flex space-x-3">
              <div>
                <label className="block text-xs text-secondary mb-1">Min</label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.1"
                  value={filters.gpaMin}
                  onChange={(e) => updateFilter('gpaMin', parseFloat(e.target.value) || 0)}
                  className="w-full border border-primary bg-secondary text-primary focus-ring"
                />
              </div>
              <div>
                <label className="block text-xs text-secondary mb-1">Max</label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.1"
                  value={filters.gpaMax}
                  onChange={(e) => updateFilter('gpaMax', parseFloat(e.target.value) || 4)}
                  className="w-full border border-primary bg-secondary text-primary focus-ring"
                />
              </div>
            </div>
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Residency Status
            </label>
            <select
              value={filters.state}
              onChange={(e) => updateFilter('state', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring"
            >
              <option value="">All</option>
              <option value="In-State">In-State</option>
              <option value="Out-of-State">Out-of-State</option>
            </select>
          </div>

          {/* Nutritional Health */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Nutritional Health
            </label>
            <select
              value={filters.nutritionalHealth}
              onChange={(e) => updateFilter('nutritionalHealth', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring"
            >
              <option value="">All</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          {/* Cleanliness of Space */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Cleanliness of Space
            </label>
            <select
              value={filters.cleanlinessRating}
              onChange={(e) => updateFilter('cleanlinessRating', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring mb-3"
            >
              <option value="">All</option>
              <option value="Satisfied">Satisfied</option>
              <option value="Neutral">Neutral</option>
              <option value="Unsatisfied">Unsatisfied</option>
            </select>
            <textarea
              placeholder="Comments about cleanliness..."
              value={filters.cleanlinessComments}
              onChange={(e) => updateFilter('cleanlinessComments', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring resize-none"
              rows="2"
            />
          </div>

          {/* Mental Health Support */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Mental Health Support Areas
            </label>
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {mentalHealthOptions.map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.mentalHealthSupport.includes(option)}
                    onChange={() => toggleMentalHealthSupport(option)}
                    className="text-gray-900 border-primary focus-ring"
                  />
                  <span className="ml-3 text-sm text-primary">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Advice-Seeking Behavior */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Advice-Seeking Behavior
            </label>
            <select
              value={filters.adviceSeekingBehavior}
              onChange={(e) => updateFilter('adviceSeekingBehavior', e.target.value)}
              className="w-full border border-primary bg-secondary text-primary focus-ring"
            >
              <option value="">All</option>
              {adviceSeekingOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Roommate Conflicts */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Roommate Conflicts
            </label>
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={filters.roommateConflicts}
                onChange={(e) => updateFilter('roommateConflicts', e.target.checked)}
                className="text-gray-900 border-primary focus-ring"
              />
              <span className="ml-3 text-sm text-primary">Has roommate conflicts</span>
            </div>
            {filters.roommateConflicts && (
              <textarea
                placeholder="Comments about roommate conflicts..."
                value={filters.roommateConflictsComments}
                onChange={(e) => updateFilter('roommateConflictsComments', e.target.value)}
                className="w-full border border-primary bg-secondary text-primary focus-ring resize-none"
                rows="2"
              />
            )}
          </div>

          {/* Employment & Financial */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Employment & Financial
            </label>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Job Title"
                value={filters.jobTitle}
                onChange={(e) => updateFilter('jobTitle', e.target.value)}
                className="w-full border border-primary bg-secondary text-primary focus-ring"
              />
              <input
                type="number"
                placeholder="Hours per week"
                value={filters.hoursPerWeek}
                onChange={(e) => updateFilter('hoursPerWeek', e.target.value)}
                className="w-full border border-primary bg-secondary text-primary focus-ring"
              />
              <input
                type="text"
                placeholder="Financial Aid Status"
                value={filters.financialAidStatus}
                onChange={(e) => updateFilter('financialAidStatus', e.target.value)}
                className="w-full border border-primary bg-secondary text-primary focus-ring"
              />
            </div>
          </div>

          {/* Internships */}
          <div>
            <label className="block text-sm font-medium text-primary mb-3">
              Internships
            </label>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.onCampusInternship}
                  onChange={(e) => updateFilter('onCampusInternship', e.target.checked)}
                  className="text-gray-900 border-primary focus-ring"
                />
                <span className="ml-3 text-sm text-primary">On-Campus Internship</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.offCampusInternship}
                  onChange={(e) => updateFilter('offCampusInternship', e.target.checked)}
                  className="text-gray-900 border-primary focus-ring"
                />
                <span className="ml-3 text-sm text-primary">Off-Campus Internship</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
