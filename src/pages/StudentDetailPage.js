import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentView from '../components/StudentView';

function StudentDetailPage() {
    const { studentId } = useParams();

    // This is the same JSON data structure that would come from an API
    // In a real application, this would be fetched from an API endpoint
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

    // Find the student by ID
    const student = studentData.find(s => s.id === studentId);

    return <StudentDetail student={student} />;
}

export default StudentDetailPage;