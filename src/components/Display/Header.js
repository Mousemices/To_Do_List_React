import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style={linkColor} to="/">Home</Link> | <Link style={linkColor} to="/about">About</Link>

        </header>
    )
}

const headerStyle = {
    background:'black',
    textAlign:'center',
    padding:'0.5rem',
    color:'white',
};
const linkColor = {
    color:'white',
    padding: '0.5rem',
};
export default Header;
