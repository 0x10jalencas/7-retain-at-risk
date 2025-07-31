import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  // Mock student data with JSON structure for API integration
  const studentData = [
    {
      id: 'ST001',
      name: 'Sarah Johnson',
      hall: 'Maya Hall',
      year: 'Sophomore',
      riskPercentage: 87,
      socialScore: 25,
      attendanceRate: 45,
      email: 'sarah.johnson@sdsu.edu',
      major: 'Psychology',
      attritionPrediction: {
        probability: 87,
        factors: ['Low social engagement', 'Poor attendance', 'Academic struggles', 'Financial stress']
      }
    },
    {
      id: 'ST002',
      name: 'Marcus Chen',
      hall: 'Cuicacalli Hall',
      year: 'Freshman',
      riskPercentage: 82,
      socialScore: 30,
      attendanceRate: 52,
      email: 'marcus.chen@sdsu.edu',
      major: 'Computer Science',
      attritionPrediction: {
        probability: 82,
        factors: ['Adjustment issues', 'Limited campus involvement', 'Course difficulty', 'Homesickness']
      }
    },
    {
      id: 'ST003',
      name: 'Emily Rodriguez',
      hall: 'Tacuba Hall',
      year: 'Junior',
      riskPercentage: 45,
      socialScore: 65,
      attendanceRate: 78,
      email: 'emily.rodriguez@sdsu.edu',
      major: 'Business Administration',
      attritionPrediction: {
        probability: 45,
        factors: ['Moderate engagement', 'Work-life balance challenges', 'Course load concerns']
      }
    },
    {
      id: 'ST004',
      name: 'David Kim',
      hall: 'Tenochca Hall',
      year: 'Sophomore',
      riskPercentage: 15,
      socialScore: 85,
      attendanceRate: 92,
      email: 'david.kim@sdsu.edu',
      major: 'Engineering',
      attritionPrediction: {
        probability: 15,
        factors: ['Strong academic performance', 'Good social connections', 'High engagement']
      }
    },
    {
      id: 'ST005',
      name: 'Ashley Williams',
      hall: 'Maya Hall',
      year: 'Freshman',
      riskPercentage: 55,
      socialScore: 58,
      attendanceRate: 73,
      email: 'ashley.williams@sdsu.edu',
      major: 'Liberal Arts',
      attritionPrediction: {
        probability: 55,
        factors: ['Undecided major', 'Average engagement', 'Social adjustment period']
      }
    },
    {
      id: 'ST006',
      name: 'James Thompson',
      hall: 'Cuicacalli Hall',
      year: 'Senior',
      riskPercentage: 8,
      socialScore: 90,
      attendanceRate: 95,
      email: 'james.thompson@sdsu.edu',
      major: 'Biology',
      attritionPrediction: {
        probability: 8,
        factors: ['Excellent academic standing', 'Strong leadership involvement', 'Near graduation']
      }
    },
    {
      id: 'ST007',
      name: 'Maria Garcia',
      hall: 'Tacuba Hall',
      year: 'Junior',
      riskPercentage: 75,
      socialScore: 35,
      attendanceRate: 58,
      email: 'maria.garcia@sdsu.edu',
      major: 'Art',
      attritionPrediction: {
        probability: 75,
        factors: ['Career uncertainty', 'Financial pressures', 'Low campus engagement', 'Family obligations']
      }
    },
    {
      id: 'ST008',
      name: 'Ryan Park',
      hall: 'Tenochca Hall',
      year: 'Sophomore',
      riskPercentage: 20,
      socialScore: 82,
      attendanceRate: 89,
      email: 'ryan.park@sdsu.edu',
      major: 'Mathematics',
      attritionPrediction: {
        probability: 20,
        factors: ['Strong academic foundation', 'Active in study groups', 'Good time management']
      }
    }
  ];

  // Sort students by risk percentage (high risk first)
  const sortedStudents = [...studentData].sort((a, b) => b.riskPercentage - a.riskPercentage);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '24px',
    color: '#333',
    marginBottom: '25px',
    fontFamily: 'Proxima Nova Regular',
    borderBottom: '2px solid #C41230',
    paddingBottom: '10px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'Proxima Nova Light',
    fontSize: '14px'
  };

  const headerStyle = {
    background: '#f8f9fa',
    padding: '12px',
    textAlign: 'left',
    borderBottom: '2px solid #dee2e6',
    fontFamily: 'Proxima Nova Regular',
    fontSize: '14px',
    color: '#333'
  };

  const getRowStyle = (riskPercentage) => {
    const baseStyle = {
      padding: '12px',
      borderBottom: '1px solid #dee2e6',
      transition: 'background-color 0.2s ease',
      cursor: 'pointer'
    };

    if (riskPercentage >= 70) {
      return {
        ...baseStyle,
        background: '#fee',
        borderLeft: '4px solid #dc3545'
      };
    } else if (riskPercentage >= 40) {
      return {
        ...baseStyle,
        background: '#fff8e1',
        borderLeft: '4px solid #ffc107'
      };
    } else {
      return {
        ...baseStyle,
        background: '#f0fff0',
        borderLeft: '4px solid #28a745'
      };
    }
  };

  const getRiskBadgeStyle = (riskPercentage) => {
    const baseStyle = {
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: 'bold'
    };

    if (riskPercentage >= 70) {
      return {
        ...baseStyle,
        background: '#dc3545',
        color: 'white'
      };
    } else if (riskPercentage >= 40) {
      return {
        ...baseStyle,
        background: '#ffc107',
        color: 'black'
      };
    } else {
      return {
        ...baseStyle,
        background: '#28a745',
        color: 'white'
      };
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Student Risk Assessment Dashboard</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Row ID</th>
            <th style={headerStyle}>Student Name</th>
            <th style={headerStyle}>Residential Hall</th>
            <th style={headerStyle}>Year</th>
            <th style={headerStyle}>Risk Percentage</th>
            <th style={headerStyle}>Social Score</th>
            <th style={headerStyle}>Attendance Rate</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student, index) => (
            <tr
              key={student.id}
              style={getRowStyle(student.riskPercentage)}
              onClick={() => navigate(`/student/${student.id}`)}
            >
              <td style={{ padding: '12px', fontWeight: 'bold' }}>{student.id}</td>
              <td style={{ padding: '12px' }}>{student.name}</td>
              <td style={{ padding: '12px' }}>{student.hall}</td>
              <td style={{ padding: '12px' }}>{student.year}</td>
              <td style={{ padding: '12px' }}>
                <span style={getRiskBadgeStyle(student.riskPercentage)}>
                  {student.riskPercentage}%
                </span>
              </td>
              <td style={{ padding: '12px' }}>{student.socialScore}%</td>
              <td style={{ padding: '12px' }}>{student.attendanceRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{
        marginTop: '20px',
        padding: '15px',
        background: '#f8f9fa',
        borderRadius: '6px',
        fontFamily: 'Proxima Nova Light',
        fontSize: '14px'
      }}>
        <strong>Legend:</strong>
        <div style={{ display: 'flex', gap: '15px', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', background: '#dc3545', borderRadius: '2px' }}></div>
            High Risk
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', background: '#ffc107', borderRadius: '2px' }}></div>
            Medium Risk
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{ width: '12px', height: '12px', background: '#28a745', borderRadius: '2px' }}></div>
            Low Risk
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;