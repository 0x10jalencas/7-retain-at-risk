import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{
            width: '100vw',
            height: '50px',
            position: 'relative',
            margin: 0,
            padding: 0,
            overflow: 'hidden'
        }}>
            <Link
                to="/"
                style={{
                    position: 'absolute',
                    transform: 'translate(0, 0)',
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    lineHeight: 0,
                    fontSize: 0,
                    background: '#fff'
                }}
            >
                <img
                    src="/San-Diego-State-University-Logo-removebg-preview.png"
                    alt="SDSU Logo"
                    style={{
                        height: '50px',
                        width: 'auto',
                        display: 'block',
                        margin: 0,
                        padding: 0,
                        objectFit: 'contain'
                    }}
                />
            </Link>
            {/* Rest of your navbar code */}
        </div>
    );
}