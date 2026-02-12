import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>NETFLIX</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Subscription</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
