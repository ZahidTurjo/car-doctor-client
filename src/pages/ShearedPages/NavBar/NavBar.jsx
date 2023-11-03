import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvides';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      })
  }
  const navItems = <>

    <NavLink to="/">  <li className='btn'>Home</li></NavLink>
    <NavLink to='/about'>  <li className='btn'>About</li></NavLink>
    <NavLink to='/services'>  <li className='btn'>Services</li></NavLink>

    {
      user?.email ?
        <>
          <NavLink to='/bookings'>  <li className='btn'>Bookings</li></NavLink>
          <li>
            <button onClick={handleLogout} className='btn'>Logout</button>
          </li>
        </>
        :
        <NavLink to='/login'>  <li className='btn'>LOgin</li></NavLink>

    }



  </>
  return (
    <div className="navbar bg-base-100 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn  lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">

          <img src={logo} alt="" />
          I
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a >
          <button className="btn btn-outline btn-warning">Appointment</button>

        </a>
      </div>
    </div>
  );
};

export default NavBar;