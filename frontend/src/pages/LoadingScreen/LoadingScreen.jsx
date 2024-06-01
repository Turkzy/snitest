import React, { useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = '/Dashboard';
        }, 1500);

        return () => clearTimeout(timeout); // Cleanup function to clear timeout on unmount
    }, []);

    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingScreen;
