import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialprofils } from '../Content'; // Ensure this path is correct
import './Contact.css'; // Ensure you have a Contact.css for styling
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    const isSvgIcon = (icon) => {
        // Check if the icon is an SVG (imported as a module, not a FontAwesome object)
        return typeof icon === 'string';
    };

    return (
        <div className="contact-page">
            <div className="education-container">
                <div className="social-links">
                    {socialprofils.map((profile, index) => (
                        <a key={index}
                           href={profile.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="social-link"
                           style={{ backgroundColor: profile.color }}>
                            {isSvgIcon(profile.icon) ?
                                <img src={profile.icon} className="icon" alt={profile.name} /> :
                                <FontAwesomeIcon icon={profile.icon} className="icon" />
                            }
                            {profile.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
