import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    const linkStyle = {
        color: '#000',
        textDecoration: 'none',
        marginRight: '20px',
        fontSize: '16px',
        fontFamily: 'Proxima Nova Light'
    };

    const activeLinkStyle = {
        ...linkStyle,
        color: '#C41230'
    };

    const logoContainerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'grid',
        gridTemplateColumns: 'auto',
        justifyItems: 'start',
        alignItems: 'start',
        margin: 0,
        padding: 0,
        zIndex: 1000,
        transform: 'translate(0, 0)',
        width: 'auto',
        height: '50px',
        lineHeight: 0,
        fontSize: 0,
        overflow: 'visible',
        background: 'transparent'
    };

    const logoLinkStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
        position: 'relative',
        lineHeight: 0,
        background: 'transparent'
    };

    const logoStyle = {
        height: '50px',
        width: 'auto',
        display: 'block',
        margin: 0,
        padding: 0,
        objectFit: 'contain',
        background: 'transparent',
        mixBlendMode: 'multiply'
    };

    const bannerContentStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        paddingLeft: '160px',  // Added offset to match official image
    };

    return (
        <>
            <div style={{ height: '50px', background: 'transparent' }}>
                <div style={logoContainerStyle}>
                    <Link to="/" style={logoLinkStyle}>
                        <img
                            src="/San-Diego-State-University-Logo-removebg-preview.png"
                            alt="SDSU Logo"
                            style={logoStyle}
                        />
                    </Link>
                </div>
            </div>

            <div style={{
                backgroundImage: 'url("/newsitebannerv6.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '40px 0',
                position: 'relative',
                marginTop: '20px'
            }}>
                <div style={bannerContentStyle}>
                    <h1 style={{
                        fontSize: '48px',
                        marginBottom: '10px',
                        fontWeight: 'normal',  // Changed from bold to normal
                        fontFamily: 'Proxima Nova Regular'  // Updated font
                    }}>
                        Welcome to Student Success Portal
                    </h1>
                    <p style={{
                        fontSize: '24px',
                        fontFamily: 'Proxima Nova Light'  // Updated font
                    }}>
                        Monitor student progress, identify risks, and drive positive outcomes
                    </p>
                </div>
            </div>

            <div style={{
                background: '#fff',
                borderBottom: '1px solid #eee',
                marginBottom: '20px'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    <Link
                        to="/"
                        style={isActive('/') ? activeLinkStyle : linkStyle}
                    >
                        Home
                    </Link>
                    <Link
                        to="/overview"
                        style={isActive('/overview') ? activeLinkStyle : linkStyle}
                    >
                        Overview
                    </Link>
                    <Link
                        to="/assessment"
                        style={isActive('/assessment') ? activeLinkStyle : linkStyle}
                    >
                        Assessment
                    </Link>
                    <Link
                        to="/settings"
                        style={isActive('/settings') ? activeLinkStyle : linkStyle}
                    >
                        Settings
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;