import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Suspense>
        </Router>
    </Suspense>
  )
}

export default AppRoutes;
