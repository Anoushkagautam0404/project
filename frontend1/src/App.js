import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route from 'react-router-dom'
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';
import TeamLeaderDashboard from './components/TeamLeaderDashboard';
import TeamMemberDashboard from './components/TeamMemberDashboard';

const App = () => (
  <Router>
    <NavBar />
    <Routes>  {/* Wrap your routes inside Routes component */}
      <Route path="/" element={<HomePage />} />  {/* Use element prop instead of component */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/team-leader" element={<TeamLeaderDashboard />} />
      <Route path="/dashboard/team-member" element={<TeamMemberDashboard />} />
    </Routes>
  </Router>
);

export default App;
