import React, { useState } from 'react';

function Assessment() {
    const [formData, setFormData] = useState({
        oncampus: '',
        withfriends: '',
        alone: '',
        selfmade: ''
    });

    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState({
        socialScore: 0,
        independenceScore: 0,
        campusScore: 0,
        totalMeals: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const oncampus = parseInt(formData.oncampus) || 0;
        const withfriends = parseInt(formData.withfriends) || 0;
        const alone = parseInt(formData.alone) || 0;
        const selfmade = parseInt(formData.selfmade) || 0;

        setShowResults(true);
        setLoading(true);

        setTimeout(() => {
            const totalMeals = oncampus + withfriends + alone + selfmade;
            const socialScore = Math.round(((withfriends + oncampus) / Math.max(totalMeals, 1)) * 100);
            const independenceScore = Math.round((selfmade / Math.max(totalMeals, 1)) * 100);
            const campusScore = Math.round((oncampus / Math.max(totalMeals, 1)) * 100);

            setResults({
                socialScore,
                independenceScore,
                campusScore,
                totalMeals
            });

            setLoading(false);
        }, 1500);
    };

    const titleStyle = {
        fontSize: '24px',
        color: '#333',
        marginBottom: '25px',
        fontFamily: 'Proxima Nova Regular',
        borderBottom: '2px solid #C41230',
        paddingBottom: '10px'
    };

    const inputStyle = {
        width: '120px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginLeft: '10px',
        background: '#fff',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Proxima Nova Light'
    };

    const labelStyle = {
        fontSize: '16px',
        color: '#333',
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Proxima Nova Light'
    };

    const formStyle = {
        maxWidth: '800px',
        margin: '40px auto',
        padding: '30px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const buttonStyle = {
        background: '#f0f0f0',
        border: '1px solid #ccc',
        padding: '12px 24px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '30px',
        display: 'block',
        width: 'auto',
        transition: 'all 0.3s ease',
        fontFamily: 'Proxima Nova Light',
        ':hover': {
            background: '#e0e0e0',
            transform: 'translateY(-1px)'
        }
    };

    return (
        <div style={formStyle}>
            <h2 style={titleStyle}>Student Nutritional Health Assessment</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>
                        Eat at an on-campus eatery (Food trucks, restaurants, food court)
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <input
                                type="number"
                                id="oncampus"
                                name="oncampus"
                                value={formData.oncampus}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                            <div style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                fontSize: '12px',
                                color: '#666',
                                fontFamily: 'Proxima Nova Light'
                            }}>
                                Time ⌃⌄
                            </div>
                        </div>
                    </label>
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>
                        Eat with friends
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <input
                                type="number"
                                id="withfriends"
                                name="withfriends"
                                value={formData.withfriends}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                            <div style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                fontSize: '12px',
                                color: '#666',
                                fontFamily: 'Proxima Nova Light'
                            }}>
                                Time ⌃⌄
                            </div>
                        </div>
                    </label>
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>
                        Eat alone
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <input
                                type="number"
                                id="alone"
                                name="alone"
                                value={formData.alone}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                            <div style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                fontSize: '12px',
                                color: '#666',
                                fontFamily: 'Proxima Nova Light'
                            }}>
                                Time ⌃⌄
                            </div>
                        </div>
                    </label>
                </div>

                <div style={{ marginBottom: '25px' }}>
                    <label style={labelStyle}>
                        Prepared a meal on my own
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <input
                                type="number"
                                id="selfmade"
                                name="selfmade"
                                value={formData.selfmade}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                            <div style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                pointerEvents: 'none',
                                fontSize: '12px',
                                color: '#666',
                                fontFamily: 'Proxima Nova Light'
                            }}>
                                Time ⌃⌄
                            </div>
                        </div>
                    </label>
                </div>

                <button type="submit" style={buttonStyle}>
                    Analyze Nutritional Patterns
                </button>
            </form>

            {showResults && (
                <div style={{
                    marginTop: '30px',
                    padding: '25px',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    fontFamily: 'Proxima Nova Light'
                }}>
                    <h3 style={{
                        marginBottom: '20px',
                        color: '#333',
                        fontFamily: 'Proxima Nova Regular'
                    }}>Results</h3>
                    {loading ? (
                        <div>Processing...</div>
                    ) : (
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', borderRadius: '6px' }}>
                                <span>Social Score:</span>
                                <span style={{ color: '#C41230', fontWeight: 'normal' }}>{results.socialScore}%</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', borderRadius: '6px' }}>
                                <span>Independence:</span>
                                <span style={{ color: '#C41230', fontWeight: 'normal' }}>{results.independenceScore}%</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', borderRadius: '6px' }}>
                                <span>Campus Engagement:</span>
                                <span style={{ color: '#C41230', fontWeight: 'normal' }}>{results.campusScore}%</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#fff', borderRadius: '6px' }}>
                                <span>Total Meals:</span>
                                <span style={{ color: '#C41230', fontWeight: 'normal' }}>{results.totalMeals}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Assessment;