import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentManagement from './component/StudenManagement';
import StudentDetail from './component/StudentDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentManagement />} />
                <Route path="/student/:id" element={<StudentDetail />} />
            </Routes>
        </Router>
    );
}

export default App;