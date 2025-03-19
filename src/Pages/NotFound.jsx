import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h2 className="notfound-title">404 - Page Not Found 😒😒😒😒</h2>
                <p>The page you're looking for does not exist.</p>
                <Link to="/" className="notfound-link">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
