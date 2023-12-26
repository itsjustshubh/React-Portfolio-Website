import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Allows navigation between routes
import './Education.css'; // Importing CSS for styling
import { education } from '../Content'; // Importing education data

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(0); // State to track the selected education item
  const [hoveredButton, setHoveredButton] = useState(null); // State to track the hovered education item
  const navigate = useNavigate(); // Hook for programmatic navigation

  // New state to track the max height of the slider
  const [sliderHeight, setSliderHeight] = useState('auto');

  // Function to get the specific color for each education item
  const getEducationColor = (index) => {
    return education[index].color || 'white'; // Returns specific color or defaults to white
  };

  // Function to handle rendering description with line breaks
  const renderDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  // Function to handle the back button click, navigates to the home page
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="education-page">
      {/* Back Button */}
      <button onClick={handleBackClick} className="back-button">
        <span className="back-button-icon">←</span> {/* Unicode arrow for visual representation */}
        Back
      </button>

      <div className="education-container">
        {/* Education Slider */}
        <div className="education-slider">
          {education.map((edu, index) => (
            <button
              key={index}
              className={`slider-button ${index === selectedEducation ? 'active' : ''}`}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => setSelectedEducation(index)}
            >
              {edu.degree || edu.program || edu.course || edu.board}
            </button>
          ))}
        </div>

        {/* Education Details */}
        <div className="education-content" style={{color: getEducationColor(selectedEducation)}}>
          <img
            src={education[selectedEducation].image}
            alt={`${education[selectedEducation].institution} logo`}
            className="institution-image"
          />
          <div className="text-content">
            <h2 className="education-institution">{education[selectedEducation].institution}</h2>
            <p className="education-period">{education[selectedEducation].period}</p>
            <p className="education-degree">{education[selectedEducation].degree || education[selectedEducation].program || education[selectedEducation].course || education[selectedEducation].board}</p>
            <p className="education-description">{renderDescription(education[selectedEducation].description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
