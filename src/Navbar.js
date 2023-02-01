import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>The Dojo Blog</h1>
            <div>
            <Link to="/">Home</Link>
            <Link to="/Create">New Blog</Link>
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
            </div>
        </nav>
    )
}

export default Navbar