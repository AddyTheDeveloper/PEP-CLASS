import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <div className="nav__left">
                    <img
                        className="nav__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                        alt="Netflix Logo"
                        onClick={() => window.location.reload()}
                    />
                    <ul className="nav__links">
                        <li className="nav__link active" onClick={() => window.location.reload()}>Home</li>
                        <li className="nav__link">TV Shows</li>
                        <li className="nav__link">Movies</li>
                        <li className="nav__link">New & Popular</li>
                        <li className="nav__link">My List</li>
                        <li className="nav__link">Browse by Languages</li>
                    </ul>
                </div>

                <div className="nav__right">
                    <div className="nav__icon-wrapper">
                        {/* Search Icon */}
                        <svg className="nav__icon" viewBox="0 0 24 24" fill="white" width="24" height="24">
                            <path d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.07 14.07L14.07 14.07C14.07 14.07 16.5 16.5 16.5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <span className="nav__text">Children</span>
                    <div className="nav__icon-wrapper">
                        {/* Bell Icon */}
                        <svg className="nav__icon" viewBox="0 0 24 24" fill="white" width="24" height="24">
                            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="white" />
                        </svg>
                    </div>

                    <div className="nav__profile">
                        <img
                            className="nav__avatar"
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                            alt="Netflix Avatar"
                        />
                        <span className="nav__caret"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
