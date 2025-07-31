import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            width: '100%',
            background: '#fff',
            alignItems: 'start',
            margin: 0,
            padding: 0
        }}>
            <Link to="/" style={{
                gridColumn: '1',
                justifySelf: 'start',
                margin: 0,
                padding: 0,
                lineHeight: 0
            }}>
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