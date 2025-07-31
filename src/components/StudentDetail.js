import React from 'react';

function StudentDetail({ student }) {
    if (!student) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Student not found</h2>
            </div>
        );
    }

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

    const topSectionStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        marginBottom: '30px'
    };

    const cardStyle = {
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
    };

    const cardTitleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#333',
        fontFamily: 'Proxima Nova Regular'
    };

    const infoRowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        fontSize: '14px',
        fontFamily: 'Proxima Nova Light'
    };

    const labelStyle = {
        fontWeight: 'bold',
        color: '#666'
    };

    const valueStyle = {
        color: '#333'
    };

    const getRiskColor = (percentage) => {
        if (percentage >= 70) return '#dc3545';
        if (percentage >= 40) return '#ffc107';
        return '#28a745';
    };

    const predictionStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: getRiskColor(student.attritionPrediction.probability),
        textAlign: 'center',
        marginBottom: '15px'
    };

    const factorListStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0
    };

    const factorItemStyle = {
        background: '#fff',
        margin: '8px 0',
        padding: '8px 12px',
        borderRadius: '4px',
        borderLeft: `4px solid ${getRiskColor(student.attritionPrediction.probability)}`,
        fontSize: '14px',
        fontFamily: 'Proxima Nova Light'
    };

    const backButtonStyle = {
        background: '#f0f0f0',
        border: '1px solid #ccc',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        marginBottom: '20px',
        fontFamily: 'Proxima Nova Light',
        textDecoration: 'none',
        color: '#333',
        display: 'inline-block'
    };

    return (
        <div style={containerStyle}>
            <a href="/" style={backButtonStyle}>← Back to Dashboard</a>

            <h2 style={titleStyle}>Student Details - {student.name}</h2>

            <div style={topSectionStyle}>
                {/* Student Information Card */}
                <div style={cardStyle}>
                    <h3 style={cardTitleStyle}>Student Information</h3>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Student ID:</span>
                        <span style={valueStyle}>{student.id}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Name:</span>
                        <span style={valueStyle}>{student.name}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Email:</span>
                        <span style={valueStyle}>{student.email}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Year:</span>
                        <span style={valueStyle}>{student.year}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Major:</span>
                        <span style={valueStyle}>{student.major}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Residential Hall:</span>
                        <span style={valueStyle}>{student.hall}</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Social Score:</span>
                        <span style={valueStyle}>{student.socialScore}%</span>
                    </div>

                    <div style={infoRowStyle}>
                        <span style={labelStyle}>Attendance Rate:</span>
                        <span style={valueStyle}>{student.attendanceRate}%</span>
                    </div>
                </div>

                {/* Attrition Prediction Card */}
                <div style={cardStyle}>
                    <h3 style={cardTitleStyle}>Attrition Risk Assessment</h3>

                    <div style={predictionStyle}>
                        {student.attritionPrediction.probability}%
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                        Predicted Attrition Risk
                    </div>

                    <h4 style={{
                        fontSize: '16px',
                        marginBottom: '12px',
                        color: '#333',
                        fontFamily: 'Proxima Nova Regular'
                    }}>
                        Contributing Factors:
                    </h4>

                    <ul style={factorListStyle}>
                        {student.attritionPrediction.factors.map((factor, index) => (
                            <li key={index} style={factorItemStyle}>
                                {factor}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Additional sections can be added here */}
            <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <h3 style={cardTitleStyle}>Model Information</h3>
                <p style={{
                    fontSize: '14px',
                    color: '#666',
                    fontFamily: 'Proxima Nova Light',
                    margin: 0
                }}>
                    This prediction is generated using a machine learning model that analyzes student engagement patterns,
                    academic performance indicators, and social integration metrics. The model is updated regularly with
                    new data to maintain accuracy.
                </p>
            </div>
        </div>
    );
}

export default StudentDetail;