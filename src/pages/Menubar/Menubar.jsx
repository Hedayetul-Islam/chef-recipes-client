import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveRoute from '../ActiveRoute/ActiveRoute';

const Menubar = () => {
    return (
        <div className="navbar bg-primary text-primary-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <a className="btn btn-ghost normal-case text-2xl">Best Chef Healthy Food</a>
           <div>
           <ActiveRoute className="btn btn-ghost normal-case text-xl" to="/">Home</ActiveRoute>
            <ActiveRoute className="btn btn-ghost normal-case text-xl" to="/blog">Blog</ActiveRoute>
            <ActiveRoute className="btn btn-ghost normal-case text-xl" to="/login">Login</ActiveRoute>
           </div>
        </div>
    );
};

export default Menubar;