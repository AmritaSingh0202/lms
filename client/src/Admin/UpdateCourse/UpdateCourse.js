import React, { useState } from 'react';

function UpdateCourse() {
  const [courseName, setCourseName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [discount, setDiscount] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // For example, you might send this data to your backend server
    const updatedCourse = {
      courseName,
      startDate,
      discount,
      features,
    };
    console.log('Updated Course:', updatedCourse);
  };

  return (
    <div>
      <h2>Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>Discount (%):</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div>
          <label>Additional Features:</label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
        </div>
        <button type="submit">Update Course</button>
      </form>
    </div>
  );
}

export default UpdateCourse;
