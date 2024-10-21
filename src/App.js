import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import StudentForm from './component/StudentForm';
import StudentTable from './component/StudentTable';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nguyen Van A', code: 'CODE12345', status: 'Active' },
    { id: 2, name: 'Tran Van B', code: 'CODE67890', status: 'In-active' }
  ]);
  const [selectedCount, setSelectedCount] = useState(0);

  // Q6: Add a new student at the top of the list
  const handleAddStudent = (newStudent) => {
    setStudents([newStudent, ...students]);
  };

  // Q7: Delete a student from the list
  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Q8: Update the count of selected students
  const handleSelect = (isSelected) => {
    setSelectedCount(isSelected ? selectedCount + 1 : selectedCount - 1);
  };

  // Q9: Clear all students and reset the selected count
  const handleClearAll = () => {
    setStudents([]);
    setSelectedCount(0);
  };

  return (
    <Container>
      <h4>Total Selected Student: {selectedCount}</h4>
      <StudentForm onAddStudent={handleAddStudent} onClear={handleClearAll} />
      <StudentTable 
        students={students} 
        onDeleteStudent={handleDeleteStudent} 
        onSelect={handleSelect}
      />
    </Container>
  );
};

export default App;
