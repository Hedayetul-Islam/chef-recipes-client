import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <div className="navbar bg-primary text-primary-content grid grid-cols-2">
            <a className="btn btn-ghost normal-case text-2xl">Best Chef Healthy Food</a>
           <div>
           <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
           </div>
        </div>
    );
};

export default Menubar;