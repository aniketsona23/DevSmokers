import React from 'react';

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Project Details</h2>
        <form>
          <label htmlFor="project-title">Project Title:</label>
          <input type="text" id="project-title" name="project-title" />
          <label htmlFor="project-desc">Project Description:</label>
          <textarea id="project-desc" name="project-desc"></textarea>
          <label htmlFor="gpsrn">GPSRN:</label>
          <input type="text" id="gpsrn" name="gpsrn" />
          <label htmlFor="date-started">Date Started:</label>
          <input type="date" id="date-started" name="date-started" />
          <label htmlFor="project-id">Project ID:</label>
          <input type="text" id="project-id" name="project-id" />
          <label htmlFor="student-alloted">Student Alloted:</label>
          <input type="text" id="student-alloted" name="student-alloted" />
          <label htmlFor="student-1">Student 1:</label>
          <input type="text" id="student-1" name="student-1" />
          <label htmlFor="student-2">Student 2:</label>
          <input type="text" id="student-2" name="student-2" />
          <label htmlFor="student-3">Student 3:</label>
          <input type="text" id="student-3" name="student-3" />
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment"></textarea>
          <label htmlFor="faculty">Faculty:</label>
          <input type="text" id="faculty" name="faculty" />
          <button type="submit">Save</button>
          <button type="button" >Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;