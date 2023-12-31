import React, { useState, useEffect } from 'react';
import './NotFoundPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { errorPage } from '../Content';

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Hide the navbar
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.style.display = 'none';

        // Reset the navbar style when component unmounts
        return () => {
            if (navbar) navbar.style.display = '';
        };
    }, []);

    const goToPage = () => {
        navigate(errorPage.button.link);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeOut(true); // Start fade out
            setTimeout(() => {
                setCurrentQuoteIndex(prevIndex =>
                    (prevIndex + 1) % errorPage.quotes.length
                );
                setFadeOut(false); // Reset for fade in
            }, 1000); // Change quote after fade out (1s duration)
        }, 4000); // Change quote every 4 seconds (includes 1s for fade out)

        return () => clearInterval(interval);
    }, []);

    const currentQuote = errorPage.quotes[currentQuoteIndex];

    return (
        <div className="page">
            <h1 className="page__title">{errorPage.title}</h1>
            <p className="page__subtitle">{errorPage.subtitle}</p>
            <button className="page__button" onClick={goToPage}>
                <FontAwesomeIcon icon={faArrowCircleLeft} /> {errorPage.button.text}
            </button>
            <div className={`quote-container ${fadeOut ? 'fade-out' : ''}`}>
                <p className="page__text">{currentQuote.text}</p>
                <p className="page__text__writer">~ {currentQuote.writer}</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
