import React from 'react';
import { Form, Button } from 'react-bootstrap';

const StudentForm = ({ newStudent, setNewStudent, onAdd, onClear }) => {
    return (
        <Form className="mb-3">
            <Form.Group controlId="studentName">
                <Form.Control
                    type="text"
                    placeholder="Student Name"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                />
            </Form.Group>
            <Form.Group controlId="studentCode" className="mt-2">
                <Form.Control
                    type="text"
                    placeholder="Student Code"
                    value={newStudent.code}
                    onChange={(e) => setNewStudent({ ...newStudent, code: e.target.value })}
                />
            </Form.Group>
            <Form.Check
                type="checkbox"
                label="Still Active"
                checked={newStudent.isActive}
                onChange={(e) => setNewStudent({ ...newStudent, isActive: e.target.checked })}
                className="mt-2"
            />
            <Button className="mt-2" onClick={onAdd}>Add</Button>
            <Button variant="secondary" className="mt-2 ms-2" onClick={onClear}>Clear</Button>
        </Form>
    );
};

export default StudentForm;