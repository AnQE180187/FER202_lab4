import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import StudentForm from './component/StudentForm';
import StudentTable from './component/StudentTable';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Hoàng Lê Quý An', code: 'QE180187', status: 'Active' },
    { id: 2, name: 'Nguyễn Trần Quang Nhật', code: 'QE100465', status: 'In-active' },
    { id: 3, name: 'Lương Gia Khánh', code: 'QE180101', status: 'Active'}
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
