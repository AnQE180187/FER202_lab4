import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import axios from 'axios';

const StudentManagement = () => {
    const [students, setStudents] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);
    const [newStudent, setNewStudent] = useState({ name: '', code: '', isActive: false });

    const API_URL = 'https://student-api-nestjs.onrender.com/students';

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get(API_URL);
            console.log("API response:", response.data); // Xem dữ liệu trả về từ API
            if (response.data.success) {
                setStudents(response.data.data); // Lấy danh sách sinh viên từ trường `data`
            } else {
                console.error("Failed to fetch students:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching students:", error);
        }
    };

    const handleAddStudent = async () => {
        try {
            const response = await axios.post(API_URL, newStudent);
            setStudents([response.data, ...students]);
            setNewStudent({ name: '', code: '', isActive: false });
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`); // Gọi API xóa
            fetchStudents(); // Tải lại danh sách sinh viên
        } catch (error) {
            console.error("Error deleting student:", error);
        }
    };

    const handleSelect = (e) => {
        const updatedCount = e.target.checked ? selectedCount + 1 : selectedCount - 1;
        setSelectedCount(updatedCount);
    };

    const handleClear = () => {
        setStudents([]);
        setSelectedCount(0);
    };

    return (
        <div className="container mt-4">
            <h4>Total Selected Student: {selectedCount}</h4>
            <StudentForm newStudent={newStudent} setNewStudent={setNewStudent} onAdd={handleAddStudent} onClear={handleClear} />
            <StudentList students={students} onDelete={handleDelete} onSelect={handleSelect} />
        </div>
    );
};

export default StudentManagement;