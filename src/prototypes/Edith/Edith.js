import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { edith } from '../Content';
import './Edith.css'; // Make sure your CSS file is correctly linked

function Edith() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(edith);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (formData[name]?.options) {
            setFormData({ ...formData, [name]: { ...formData[name], defaultOption: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    const renderInputField = (field) => {
        const fieldType = formData[field].text ? 'text' : 'date';
        return (
            <div key={field}>
                <label htmlFor={field}>{formData[field].text || formData[field].title}</label>
                <input
                    className="input-field"
                    type={fieldType}
                    name={field}
                    value={formData[field].defaultOption}
                    onChange={handleChange}
                    placeholder={formData[field].title}
                />
            </div>
        );
    };

    const renderSelectField = (field, isMultiple = false) => (
        <div key={field}>
            <label htmlFor={field}>{formData[field].text}</label>
            <select
                className="select-field"
                name={field}
                value={formData[field].defaultOption}
                onChange={handleChange}
                multiple={isMultiple}
            >
                {formData[field].options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="edith-prototype-page">
            <div className="edith-prototype-container">
                <div className="edith-prototype-form-container">
                    <form onSubmit={handleSubmit}>
                        {Object.keys(edith).map(field =>
                            edith[field].options ? renderSelectField(field, field === 'languagesSpoken') : renderInputField(field)
                        )}
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edith;
