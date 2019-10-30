import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './header.scss';

const HeaderComponent = () => {
    return (
        <Router>
            <div className="header-container">
                <header className="header">
                    <div className="logo"><Link className="navbar-brand">Bouesso</Link></div>
                    <div className="spacer"></div>
                </header>
            </div>
        </Router>
    )
}

export default HeaderComponent;