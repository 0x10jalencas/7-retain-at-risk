import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '50px',
            margin: 0,
            padding: 0,
            overflow: 'visible'
        }}>
            <Link
                to="/"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    alignItems: 'flex-start',
                    margin: 0,
                    padding: 0,
                    background: '#fff'
                }}
            >
                <img
                    src="/San-Diego-State-University-Logo-removebg-preview.png"
                    alt="SDSU Logo"
                    style={{
                        height: '50px',
                        display: 'block',
                        margin: 0,
                        padding: 0
                    }}
                />
            </Link>
            {/* Rest of your navbar code */}
        </div>
    );
}