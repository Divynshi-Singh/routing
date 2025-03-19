import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold">404 - Page Not Found 😒😒😒😒</h2>
                <p>The page you're looking for does not exist.</p>
                <Link to="/" className="text-blue-500 hover:text-[red]">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;