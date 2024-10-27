import React from 'react';
import { Table, Form, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const StudentList = ({ students, onDelete, onSelect }) => {
    if (!Array.isArray(students) || students.length === 0) {
        return <p>No students available.</p>;
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Student Name</th>
                    <th>Student Code</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student._id}> {/* Sử dụng _id làm key */}
                        <td>
                            <Form.Check type="checkbox" onChange={(e) => onSelect(e, student)} />
                        </td>
                        <td>
                            <Link to={`/student/${student._id}`}>{student.name}</Link> {/* Sử dụng _id làm tham số */}
                        </td>
                        <td>{student.studentCode}</td> {/* Sử dụng studentCode từ API */}
                        <td>
                            <Badge bg={student.isActive ? 'success' : 'danger'}>
                                {student.isActive ? 'Active' : 'In-active'}
                            </Badge>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => onDelete(student._id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};


export default StudentList;