import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loggedIn } from './actions/actions';
import './App.css';
import LoginComp from './components/LoginComp';
import TasksBody from './components/TasksBody';

function App() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  useEffect(() => {}, [user, dispatch]);
  return (
    <div className='App'>
      {!user.name && <LoginComp />}
      {user.name && <TasksBody />}
    </div>
  );
}

export default App;
