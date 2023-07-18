import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import { AuthContext } from '../../provider/AuthProvider';

const Menubar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-primary text-primary-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <Link to="/" className="btn btn-ghost normal-case text-2xl">Best Chef Healthy Food</Link>
            <div>
                <ActiveRoute className="btn btn-ghost normal-case text-xl" to="/">Home</ActiveRoute>
                <ActiveRoute className="btn btn-ghost normal-case text-xl" to="/blog">Blog</ActiveRoute>
                <ActiveRoute className="btn btn-ghost normal-case text-xl">
                    {
                        user && <img title={user?.displayName} className='h-8 mr-2 w-8 inline' src={user?.photoURL} alt="" />  
                    }

                    {user ?
                        <button onClick={handleLogOut}>Logout</button> :
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    }
                </ActiveRoute>
            </div>
        </div>
    );
};

export default Menubar;