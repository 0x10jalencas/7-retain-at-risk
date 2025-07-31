import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000,
                background: '#fff',
                padding: 0,
                margin: 0,
            }}>
                <Link to="/">
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
            </div>
            {/* Rest of your navbar code */}
        </>
    );
}