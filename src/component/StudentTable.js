import React from 'react';
import { Table } from 'react-bootstrap';
import StudentRow from './StudentRow';

const StudentTable = ({ students, onDeleteStudent, onSelect }) => {
  return (
    <Table striped bordered hover className="mt-4">
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
        {students.map(student => (
          <StudentRow
            key={student.id}
            student={student}
            onDelete={() => onDeleteStudent(student.id)}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;