import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: '#222',
            color: '#fff',
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
        }}>
            
            <p> <Link to='/privacy-policy' className='underline'>Privacy Policy</Link> &copy; {new Date().getFullYear()} Village Angel. All rights reserved.</p>
        </footer>
    );
};

export default Footer;