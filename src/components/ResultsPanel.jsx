import React, { useMemo } from 'react';
import { useFilters } from '../context/FilterContext';

// Stubbed student data
const stubbedStudents = [
  {
    id: 1,
    name: 'Alice Johnson',
    gender: 'Female',
    gpa: 3.8,
    state: 'In-State',
    nutritionalHealth: 'Good',
    cleanlinessRating: 'Satisfied',
    cleanlinessComments: 'Room is always tidy',
    mentalHealthSupport: ['Academic Support', 'Stress Management'],
    adviceSeekingBehavior: 'Counselor',
    roommateConflicts: false,
    roommateConflictsComments: '',
    jobTitle: 'Research Assistant',
    hoursPerWeek: '15',
    financialAidStatus: 'Partial Aid',
    onCampusInternship: true,
    offCampusInternship: false,
  },
  {
    id: 2,
    name: 'Bob Smith',
    gender: 'Male',
    gpa: 3.2,
    state: 'Out-of-State',
    nutritionalHealth: 'Fair',
    cleanlinessRating: 'Neutral',
    cleanlinessComments: 'Could be better organized',
    mentalHealthSupport: ['Anxiety Management', 'Time Management'],
    adviceSeekingBehavior: 'Friends',
    roommateConflicts: true,
    roommateConflictsComments: 'Occasional disagreements about noise',
    jobTitle: 'Tutor',
    hoursPerWeek: '10',
    financialAidStatus: 'Full Aid',
    onCampusInternship: false,
    offCampusInternship: true,
  },
  {
    id: 3,
    name: 'Carol Davis',
    gender: 'Female',
    gpa: 3.9,
    state: 'In-State',
    nutritionalHealth: 'Excellent',
    cleanlinessRating: 'Satisfied',
    cleanlinessComments: 'Very organized and clean',
    mentalHealthSupport: ['Career Counseling'],
    adviceSeekingBehavior: 'Faculty/Professors',
    roommateConflicts: false,
    roommateConflictsComments: '',
    jobTitle: '',
    hoursPerWeek: '',
    financialAidStatus: 'No Aid',
    onCampusInternship: true,
    offCampusInternship: true,
  },
  {
    id: 4,
    name: 'David Wilson',
    gender: 'Male',
    gpa: 2.8,
    state: 'Out-of-State',
    nutritionalHealth: 'Poor',
    cleanlinessRating: 'Unsatisfied',
    cleanlinessComments: 'Struggling to maintain clean space',
    mentalHealthSupport: ['Depression Support', 'Academic Support', 'Social Skills'],
    adviceSeekingBehavior: 'Online Resources',
    roommateConflicts: true,
    roommateConflictsComments: 'Major conflicts over cleanliness',
    jobTitle: 'Food Service',
    hoursPerWeek: '25',
    financialAidStatus: 'Full Aid',
    onCampusInternship: false,
    offCampusInternship: false,
  },
  {
    id: 5,
    name: 'Eva Martinez',
    gender: 'Other',
    gpa: 3.5,
    state: 'In-State',
    nutritionalHealth: 'Good',
    cleanlinessRating: 'Satisfied',
    cleanlinessComments: 'Well-maintained living space',
    mentalHealthSupport: ['Relationship Issues', 'Stress Management'],
    adviceSeekingBehavior: 'Peer Mentors',
    roommateConflicts: false,
    roommateConflictsComments: '',
    jobTitle: 'Library Assistant',
    hoursPerWeek: '12',
    financialAidStatus: 'Partial Aid',
    onCampusInternship: true,
    offCampusInternship: false,
  },
];

function ResultsPanel() {
  const { filters } = useFilters();

  // Filter students based on current filters
  const filteredStudents = useMemo(() => {
    return stubbedStudents.filter(student => {
      // Gender filter
      if (filters.gender && student.gender !== filters.gender) return false;
      
      // GPA range filter
      if (student.gpa < filters.gpaMin || student.gpa > filters.gpaMax) return false;
      
      // State filter
      if (filters.state && student.state !== filters.state) return false;
      
      // Nutritional health filter
      if (filters.nutritionalHealth && student.nutritionalHealth !== filters.nutritionalHealth) return false;
      
      // Cleanliness rating filter
      if (filters.cleanlinessRating && student.cleanlinessRating !== filters.cleanlinessRating) return false;
      
      // Cleanliness comments filter (simple text search)
      if (filters.cleanlinessComments && 
          !student.cleanlinessComments.toLowerCase().includes(filters.cleanlinessComments.toLowerCase())) return false;
      
      // Mental health support filter (must include all selected options)
      if (filters.mentalHealthSupport.length > 0) {
        const hasAllSupport = filters.mentalHealthSupport.every(support => 
          student.mentalHealthSupport.includes(support)
        );
        if (!hasAllSupport) return false;
      }
      
      // Advice seeking behavior filter
      if (filters.adviceSeekingBehavior && student.adviceSeekingBehavior !== filters.adviceSeekingBehavior) return false;
      
      // Roommate conflicts filter
      if (filters.roommateConflicts && !student.roommateConflicts) return false;
      
      // Job title filter (simple text search)
      if (filters.jobTitle && 
          !student.jobTitle.toLowerCase().includes(filters.jobTitle.toLowerCase())) return false;
      
      // Hours per week filter
      if (filters.hoursPerWeek && student.hoursPerWeek !== filters.hoursPerWeek) return false;
      
      // Financial aid status filter (simple text search)
      if (filters.financialAidStatus && 
          !student.financialAidStatus.toLowerCase().includes(filters.financialAidStatus.toLowerCase())) return false;
      
      // Internship filters
      if (filters.onCampusInternship && !student.onCampusInternship) return false;
      if (filters.offCampusInternship && !student.offCampusInternship) return false;
      
      return true;
    });
  }, [filters]);

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-display font-medium text-primary tracking-tight">Student Records</h2>
        <p className="text-secondary mt-2 text-lg">
          Showing {filteredStudents.length} of {stubbedStudents.length} students
        </p>
      </div>

      {filteredStudents.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-secondary text-xl font-display">No students match the current filters</div>
          <p className="text-secondary mt-3 text-lg">Try adjusting your filter criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {filteredStudents.map(student => (
            <div key={student.id} className="bg-secondary border border-primary p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-display font-medium text-primary">{student.name}</h3>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700">
                  GPA {student.gpa}
                </span>
              </div>
              
              <div className="space-y-3 text-sm leading-relaxed">
                <div className="flex justify-between">
                  <span className="text-secondary">Gender:</span>
                  <span className="text-primary font-medium">{student.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">State:</span>
                  <span className="text-primary font-medium">{student.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Nutrition:</span>
                  <span className="text-primary font-medium">{student.nutritionalHealth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Cleanliness:</span>
                  <span className="text-primary font-medium">{student.cleanlinessRating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary">Advice Source:</span>
                  <span className="text-primary font-medium">{student.adviceSeekingBehavior}</span>
                </div>
                {student.jobTitle && (
                  <div className="flex justify-between">
                    <span className="text-secondary">Job:</span>
                    <span className="text-primary font-medium">{student.jobTitle} ({student.hoursPerWeek}h/week)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-secondary">Financial Aid:</span>
                  <span className="text-primary font-medium">{student.financialAidStatus}</span>
                </div>
              </div>

              {student.mentalHealthSupport.length > 0 && (
                <div className="mt-6">
                  <span className="text-xs font-medium text-secondary uppercase tracking-wide">Mental Health Support</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {student.mentalHealthSupport.map(support => (
                      <span key={support} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                        {support}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {student.onCampusInternship && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                      On-Campus Internship
                    </span>
                  )}
                  {student.offCampusInternship && (
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700">
                      Off-Campus Internship
                    </span>
                  )}
                </div>
                {student.roommateConflicts && (
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800">
                    Roommate Issues
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultsPanel;
