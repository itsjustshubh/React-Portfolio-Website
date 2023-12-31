import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../Content'; // Update the path if necessary
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

function Projects() {
    const navigate = useNavigate();

    const isSvgIcon = (icon) => {
        // Check if the icon is not a FontAwesome object
        return !(icon && icon.prefix && icon.iconName);
    };


    const handleBackClick = () => {
        navigate('/');
    };

    const renderDescription = (description) => {
        return description.split('\n').map((line, index) => (
            <React.Fragment key={index}>{line}<br /></React.Fragment>
        ));
    };

    useEffect(() => {
    // Masonry setup for project cards
        const msnry = new Masonry('.projects-container', {
            itemSelector: '.project-card',
            columnWidth: '.project-card',
            percentPosition: true
        });

        imagesLoaded('.projects-container', () => {
            msnry.layout();
        });

        // Masonry setup for each button container
        document.querySelectorAll('.project-button-container').forEach(container => {
            const buttonMsnry = new Masonry(container, {
                itemSelector: '.ac_btn',
                columnWidth: 1 // Assuming the width of each button is the same
            });

            imagesLoaded(container, () => {
                buttonMsnry.layout();
            });
        });
    }, []);

    const renderIcon = (icon) => {
        return isSvgIcon(icon) ? (
            <img src={icon} className="icon" alt="Icon" />
        ) : (
            <FontAwesomeIcon icon={icon} />
        );
    };

    const renderButton = (button, key) => {
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
                    {button.buttonIcon && renderIcon(button.buttonIcon)}
                    {button.buttonText}
                </a>
            </div>
        );
    };

    // Sorting projects in descending order based on hours
    const sortedProjects = [...projects].sort((a, b) => {
        const hoursA = a.hours || 0; // Default to 0 if hours is not given
        const hoursB = b.hours || 0; // Default to 0 if hours is not given
        return hoursB - hoursA; // Descending order
    });

    return (
        <div className="projects-page">
            <div className="projects-container">
                {sortedProjects.map((project, index) => (
                    <div key={index} className="project-card"
                         style={{backgroundColor: project.backgroundColor, color: project.textColor}}>
                        <div className="project-top">
                            <div className="project-image-container">
                                {isSvgIcon(project.image) ? (
                                    <img src={project.image} className="project-image" alt={project.name}/>
                                ) : (
                                    <FontAwesomeIcon icon={project.image} size="6x" className="project-image"/>
                                )}
                            </div>

                            <div className="project-header">
                                <h2 className="project-title">{project.name}</h2>
                                <p className="project-timeline">{project.timeline}</p>
                            </div>
                        </div>
                        <p className="project-description">{renderDescription(project.description)}</p>
                        <div className="project-button-container">
                            {project.buttons && project.buttons.map((button, idx) => renderButton(button, idx))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
