import React from 'react';

// StudentView Props Interface (for future TypeScript conversion)
// interface StudentViewProps {
//   student: {
//     id: string;
//     name: string;
//     email: string;
//     year: string;
//     major: string;
//     hall: string;
//     socialScore: number;
//     attendanceRate: number;
//     riskPercentage: number;
//     attritionPrediction: {
//       probability: number;
//       factors: string[];
//     };
//   };
// }

export default function StudentView({ student }) {
    if (!student) {
        return (
            <div style={notFoundStyle}>
                <h2>Student Not Found</h2>
                <p>No student data available for display.</p>
            </div>
        );
    }

    const containerStyle = {
        display: 'flex',
        gap: '30px',
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '30px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Proxima Nova Light'
    };

    const panelStyle = {
        flex: 1,
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px',
        background: '#f8f9fa'
    };

    const titleStyle = {
        fontSize: '22px',
        color: '#333',
        marginBottom: '20px',
        fontFamily: 'Proxima Nova Regular',
        borderBottom: '2px solid #C41230',
        paddingBottom: '10px'
    };

    const detailItemStyle = {
        marginBottom: '12px',
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.4'
    };

    const riskBadgeStyle = {
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: 'inline-block',
        marginTop: '10px'
    };

    const notFoundStyle = {
        padding: '60px 20px',
        textAlign: 'center',
        background: '#f8f9fa',
        borderRadius: '12px',
        margin: '40px auto',
        maxWidth: '600px'
    };

    const getRiskColor = (percentage) => {
        if (percentage >= 70) return { background: '#dc3545', color: 'white' };
        if (percentage >= 40) return { background: '#ffc107', color: 'black' };
        return { background: '#28a745', color: 'white' };
    };

    const formatPercentage = (value) => `${value}%`;

    return (
        <div style={containerStyle}>
            {/* Left Panel - Student Information */}
            <div style={panelStyle}>
                <h3 style={titleStyle}>Student Information</h3>
                <p style={detailItemStyle}>
                    <strong>Row ID:</strong> {student.id}
                </p>
                <p style={detailItemStyle}>
                    <strong>Name:</strong> {student.name}
                </p>
                <p style={detailItemStyle}>
                    <strong>Email:</strong> {student.email}
                </p>
                <p style={detailItemStyle}>
                    <strong>Year:</strong> {student.year}
                </p>
                <p style={detailItemStyle}>
                    <strong>Major:</strong> {student.major}
                </p>
                <p style={detailItemStyle}>
                    <strong>Residential Hall:</strong> {student.hall}
                </p>
                <p style={detailItemStyle}>
                    <strong>Social Score:</strong> {formatPercentage(student.socialScore)}
                </p>
                <p style={detailItemStyle}>
                    <strong>Attendance Rate:</strong> {formatPercentage(student.attendanceRate)}
                </p>
            </div>

            {/* Right Panel - Risk Prediction */}
            <div style={panelStyle}>
                <h3 style={titleStyle}>Predicted Attrition Risk</h3>
                <p style={{ ...detailItemStyle, fontSize: '18px', fontWeight: 'bold' }}>
                    Risk Level:
                    <span style={{ ...riskBadgeStyle, ...getRiskColor(student.riskPercentage) }}>
                        {formatPercentage(student.riskPercentage)}
                    </span>
                </p>

                <p style={{ ...detailItemStyle, fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
                    Attrition Probability:
                    <span style={{
                        ...riskBadgeStyle,
                        ...getRiskColor(student.attritionPrediction.probability),
                        marginLeft: '10px'
                    }}>
                        {formatPercentage(student.attritionPrediction.probability)}
                    </span>
                </p>

                <div style={{ marginTop: '25px' }}>
                    <p style={{ ...detailItemStyle, fontWeight: 'bold', fontSize: '17px' }}>
                        Contributing Risk Factors:
                    </p>
                    <ul style={{
                        listStyleType: 'disc',
                        marginLeft: '20px',
                        marginTop: '10px'
                    }}>
                        {student.attritionPrediction.factors.map((factor, index) => (
                            <li key={index} style={{
                                ...detailItemStyle,
                                marginBottom: '8px',
                                color: '#666'
                            }}>
                                {factor}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}