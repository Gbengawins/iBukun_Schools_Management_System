import React from 'react';
import { FaUserPlus } from 'react-icons/fa';
// import Phoenix from ".../../assets/Phoenix-logo.png";

function AddTeacher() {
  return (
    <div className="teacher">
      <h1>
        <FaUserPlus /> Add Teacher
      </h1>
      {/* <img src={Phoenix.images} alt="phoenix" /> */}
    </div>
  );
}

export default AddTeacher;