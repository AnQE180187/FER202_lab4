import React, { useState } from 'react';
import { Button, Form, Badge } from 'react-bootstrap';

const StudentRow = ({ student, onDelete, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectChange = (e) => {
    const checked = e.target.checked;
    setIsSelected(checked);
    onSelect(checked);
  };

  return (
    <tr>
      <td>
        <Form.Check
          type="checkbox"
          checked={isSelected}
          onChange={handleSelectChange}
        />
      </td>
      <td>{student.name}</td>
      <td>{student.code}</td>
      <td>
        <Badge bg={student.status === 'Active' ? 'success' : 'danger'}>
          {student.status}
        </Badge>
      </td>
      <td>
        <Button variant="danger" onClick={onDelete}>Delete</Button>
      </td>
    </tr>
  );
};

export default StudentRow;