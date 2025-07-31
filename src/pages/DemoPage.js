import React from 'react';
import StudentView from '../components/StudentView';

export default function DemoPage() {
    // Mock JSON data structure for testing StudentView component
    // This simulates what would come from DynamoDB or API
    const mockStudentData = {
        id: 'ST001',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@sdsu.edu',
        year: 'Sophomore',
        major: 'Psychology',
        hall: 'Maya Hall',
        socialScore: 25,
        attendanceRate: 45,
        riskPercentage: 87,
        attritionPrediction: {
            probability: 87,
            factors: [
                'Low social engagement',
                'Poor attendance record',
                'Academic performance concerns',
                'Financial stress indicators',
                'Limited campus involvement'
            ]
        }
    };

    // Alternative mock data for testing different scenarios
    const lowRiskStudent = {
        id: 'ST004',
        name: 'David Kim',
        email: 'david.kim@sdsu.edu',
        year: 'Sophomore',
        major: 'Engineering',
        hall: 'Tenochca Hall',
        socialScore: 85,
        attendanceRate: 92,
        riskPercentage: 15,
        attritionPrediction: {
            probability: 15,
            factors: [
                'Strong academic performance',
                'Active campus involvement',
                'Good social connections',
                'Consistent attendance'
            ]
        }
    };

    const containerStyle = {
        padding: '20px',
        background: '#f5f5f5',
        minHeight: '100vh'
    };

    const headerStyle = {
        textAlign: 'center',
        color: '#C41230',
        fontFamily: 'Proxima Nova Regular',
        fontSize: '28px',
        marginBottom: '10px'
    };

    const subHeaderStyle = {
        textAlign: 'center',
        color: '#666',
        fontFamily: 'Proxima Nova Light',
        fontSize: '16px',
        marginBottom: '30px'
    };

    const buttonStyle = {
        background: '#C41230',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0 10px',
        fontFamily: 'Proxima Nova Regular'
    };

    const buttonContainerStyle = {
        textAlign: 'center',
        marginBottom: '30px'
    };

    const [currentStudent, setCurrentStudent] = React.useState(mockStudentData);

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>StudentView Component Demo</h1>
            <p style={subHeaderStyle}>
                Testing the StudentView component with mock JSON data
            </p>

            <div style={buttonContainerStyle}>
                <button
                    style={buttonStyle}
                    onClick={() => setCurrentStudent(mockStudentData)}
                >
                    High Risk Student
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => setCurrentStudent(lowRiskStudent)}
                >
                    Low Risk Student
                </button>
                <button
                    style={buttonStyle}
                    onClick={() => setCurrentStudent(null)}
                >
                    No Data (Error State)
                </button>
            </div>

            {/* The main StudentView component being tested */}
            <StudentView student={currentStudent} />

            {/* Data Structure Preview */}
            <div style={{
                background: '#fff',
                padding: '20px',
                margin: '30px auto',
                maxWidth: '1200px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h3 style={{
                    color: '#333',
                    fontFamily: 'Proxima Nova Regular',
                    borderBottom: '2px solid #C41230',
                    paddingBottom: '10px'
                }}>
                    Current JSON Data Structure:
                </h3>
                <pre style={{
                    background: '#f8f9fa',
                    padding: '15px',
                    borderRadius: '5px',
                    overflow: 'auto',
                    fontSize: '14px',
                    fontFamily: 'monospace'
                }}>
                    {JSON.stringify(currentStudent, null, 2)}
                </pre>
            </div>
        </div>
    );
}