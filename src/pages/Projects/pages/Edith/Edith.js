import React, { useState } from 'react';
import './Edith.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Edith() {
    const navigate = useNavigate();

    // Handle the back navigation
    const handleBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/'); // Navigates to the home page
        }
    };

    const [formData, setFormData] = useState({
        firstName: 'Michael',
        lastName: 'Brown',
        dateOfBirth: '1984-06-17',
        gender: 'Male',
        nationality: 'British',
        ethnicity: 'Black',
        languagesSpoken: 'English, French',
        exerciseFrequency: 'High',
        diet: 'Balanced',
        sleepPatterns: 'Regular',
        alcoholConsumption: 'Low',
        smokingHabits: 'Non-smoker',
        knownConditions: 'None',
        allergies: 'None',
        medications: 'None',
        vaccinationStatus: 'Up-to-date',
        workStressLevel: 'Low',
        personalStressLevel: 'Low',
        financialStressLevel: 'High',
        familyStructure: 'Married',
        workEnvironment: 'Hybrid',
        relationshipStatus: 'Married',
        socialSupport: 'Strong',
        communityEngagement: 'Active',
        therapyHistory: 'No',
        majorLifeEvents: 'Recently became a parent, Bought a house',
        emotionalWellBeing: 'Stable',
        // ... Add other fields as needed
    });

    // State for loading and response data
    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponseData] = useState(null);

    // Handle form data changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit handler for physiological data collection form
    const handleDataCollectionSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Here you can handle the submission of physiological data collection
        // For example, sending this data to a server
        // const response = await fetch('/api/data-collection', { ... });

        setIsLoading(false);
    };

    // Submit handler for physiological data input form
    const handleDataInputSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Here you can handle the submission of physiological data input
        // For example, processing this data to make predictions
        // const response = await fetch('/api/data-input', { ... });

        setIsLoading(false);
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Construct data for submission
        const data = { ...formData };

        try {
            const response = await fetch('http://127.0.0.1:5000/your-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setResponseData(result);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const [tableData, setTableData] = useState([
        { heartRate: 86.5437, breathingRate: 23.9660, hrv: 39.3282, skinTemp: 34.9861, emg: 0.5844, bvp: 1.2679, emotion: 'Confused' },
        { heartRate: 81.4825, breathingRate: 18.3551, hrv: 55.8029, skinTemp: 32.8615, emg: 0.2250, bvp: 0.8866, emotion: 'Exhausted' },
        { heartRate: 69.8547, breathingRate: 22.6405, hrv: 50.5585, skinTemp: 35.1633, emg: 0.5573, bvp: 1.2237, emotion: 'Happy' }
    ]);

    const [newRow, setNewRow] = useState({ heartRate: '', breathingRate: '', hrv: '', skinTemp: '', emg: '', bvp: '', emotion: '' });

    // Function to handle changes in new row inputs
    const handleNewRowChange = (e) => {
        setNewRow({ ...newRow, [e.target.name]: e.target.value });
    };

    // Function to add the new row to the table
    const addNewRow = (event) => {
        event.preventDefault();
        setTableData([...tableData, newRow]);
        setNewRow({ heartRate: '', breathingRate: '', hrv: '', skinTemp: '', emg: '', bvp: '', emotion: '' }); // Reset new row
    };

    // Function to remove a row from the table
    const removeRow = (index) => {
        setTableData(tableData.filter((_, i) => i !== index));
    };

    const renderButton = (button, key) => {
        const handleButtonClick = (e) => {
        e.preventDefault();
        if (button.buttonLink.startsWith('/')) {
            navigate(button.buttonLink);
        } else {
            window.open(button.buttonLink, '_blank');
        }
    };

        return (
            <div className="ac_btn" key={key}
                 style={{
                     backgroundColor: button.buttonColor || 'transparent',
                     color: button.buttonTextColor || 'navajowhite'
                 }}
                 onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `inset 0 10vh 0 0 ${button.buttonHoverColor || 'navajowhite'}, 0.8vh 0.8vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}, -0.8vh -0.8vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}`;
                     e.currentTarget.style.color = button.buttonTextHoverColor || 'black';
                 }}
                 onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `inset 0 0 0 0 ${button.buttonColor || 'transparent'}, 0vh 0vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}, 0vh 0vh 0 ${button.buttonBackgroundEffectColor || 'antiquewhite'}`;
                     e.currentTarget.style.color = button.buttonTextHoverColor || 'black';
                     e.currentTarget.style.color = button.buttonTextColor || 'navajowhite';
                 }}>
                <a href={button.buttonLink} style={{color: 'inherit'}}>
                    {button.buttonIcon && <FontAwesomeIcon icon={button.buttonIcon}/>}
                    {button.buttonText}
                </a>
            </div>
        );
    };

    const EditableCell = ({ value, name, rowIndex }) => {
    const handleCellChange = (e) => {
        const updatedRows = [...tableData];
        updatedRows[rowIndex] = { ...updatedRows[rowIndex], [name]: e.target.value };
        setTableData(updatedRows);
    };

    return (
        <td>
            {rowIndex === 0 ? value : <input type="text" value={value} onChange={handleCellChange} />}
        </td>
    );
    };

    const addEmptyRow = () => {
    setTableData([
        ...tableData,
        { heartRate: '', breathingRate: '', hrv: '', skinTemp: '', emg: '', bvp: '', emotion: '' }
    ]);
    };

    return (
        <div className="projects-page">
            <div className="header-container">
                <h1>Project: Edith - Phase 1</h1>
                <div className="button-container">
                    {/* Replace these with actual buttons and their functionality */}
                    <button className="ac_btn left-btn">Button 1</button>
                    <button className="ac_btn">Button 2</button>
                    <button className="ac_btn right-btn">Button 3</button>
                </div>
            </div>

            <div className="form-container">
                <div className="physiological-data-collection">
                    <h2>Physiological Data Collection</h2>
                    <form onSubmit={handleDataCollectionSubmit}>
                        <div className="form-field">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" name="firstName" id="firstName" value={formData.firstName}
                                   onChange={handleChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" name="lastName" id="lastName" value={formData.lastName}
                                   onChange={handleChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="dateOfBirth">Date of Birth:</label>
                            <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth}
                                   onChange={handleChange}/>
                        </div>
                        <div className="form-field">
                            <label htmlFor="gender">Gender:</label>
                            <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {/* Add more fields as required */}
                        <button type="submit">Submit Data</button>
                    </form>
                </div>

                <div className="physiological-data-input">
                    <h2>Physiological Data Input</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Heart Rate (bpm)</th>
                            <th>Breathing Rate (breaths/min)</th>
                            <th>HRV (ms)</th>
                            <th>Skin Temp (°C)</th>
                            <th>EMG (mV)</th>
                            <th>BVP (unit)</th>
                            <th>Predicted Emotion</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <EditableCell value={row.heartRate} name="heartRate" rowIndex={rowIndex}/>
                                <EditableCell value={row.breathingRate} name="breathingRate" rowIndex={rowIndex}/>
                                <EditableCell value={row.hrv} name="hrv" rowIndex={rowIndex}/>
                                <EditableCell value={row.skinTemp} name="skinTemp" rowIndex={rowIndex}/>
                                <EditableCell value={row.emg} name="emg" rowIndex={rowIndex}/>
                                <EditableCell value={row.bvp} name="bvp" rowIndex={rowIndex}/>
                                <EditableCell value={row.emotion} name="emotion" rowIndex={rowIndex}/>
                                {/* ... other editable cells ... */}
                                <td>
                                    {rowIndex !== 0 && (
                                        <span style={{cursor: 'pointer'}} onClick={() => removeRow(rowIndex)}>X</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button onClick={addEmptyRow}>Add New Row</button>
                </div>
            </div>

            <div className="results-container">
                <h2>Results</h2>

                {isLoading && <p>Loading results...</p>}

                {responseData && (
                    <>
                        <div className="results-matched-features">
                            <h3>Matched Features</h3>
                            <table>
                                <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Value</th>
                                </tr>
                        </thead>
                        <tbody>
                        {Object.entries(responseData[0]['Matched Features']).map(([feature, value], index) => (
                            <tr key={index}>
                                <td>{feature}</td>
                                <td>{value}</td>
                            </tr>
                        ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="results-predictions">
                            <h3>Predictions</h3>
                            {responseData[0]['Predictions'].map((prediction, index) => (
                                <div key={index} className="prediction">
                                    <h4>Prediction {index + 1}</h4>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Metric</th>
                                            <th>Value</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {Object.entries(prediction).map(([metric, value], subIndex) => (
                                            <tr key={subIndex}>
                                                <td>{metric}</td>
                                                <td>{value}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Edith;