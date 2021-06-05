import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/actions';
import '../css/Navbar.css';

function Navbar() {
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  const handleLogout = () => {
    dispatch(logoutUser(user.token));
  };
  return (
    <div>
      <div className='navbarComp'>
        <div className='nav__title'>
          <h3>TASKS</h3>
        </div>
        <div className='nav__options'>
          <h3 className='nav__option'>{user.name}</h3>
          <h3 className='nav__option' onClick={handleLogout}>
            Logout
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
