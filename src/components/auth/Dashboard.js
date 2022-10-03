import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export const Dashboard = () => {
    return (
        <div className="dashboard">

            <h1>Dashboard</h1>
        </div>
    );
};

    
export const Admin = () => {
  return (
    <div className="dashboard">
      <h1>Admin</h1>
      <div className="admin__container">
        <h4>Welcome! You must have been assigned an Admin Role</h4>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};



export const Lounge = () => {
    return (
        <div className="dashboard">
            <h1>Link Page</h1>
        </div>
    );
};


