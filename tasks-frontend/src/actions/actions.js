import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  UPDATE_TASKS,
  FETCH_TASKS,
  LOGGED_IN,
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signUpUser =
  (name, email, password, passwordConfirm) => async (dispatch) => {
    try {
      const res = await api.signup(name, email, password, passwordConfirm);
      const data = res.data.data.user;
      dispatch({ type: SIGNUP, user: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const res = await api.login(email, password);
    const data = res.data.data.user;
    dispatch({ type: LOGIN, user: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const logoutUser = (token) => async (dispatch) => {
  try {
    await api.logout();
    dispatch({ type: LOGOUT, user: {} });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTasks = (token, tasks) => async (dispatch) => {
  try {
    const res = await api.update_tasks(token, tasks);
    const data = res.data.data.user.tasks;
    dispatch({ type: UPDATE_TASKS, tasks: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getTasks = (token) => async (dispatch) => {
  try {
    const res = await api.fetch_tasks(token);
    const data = res.data.data.data.tasks;
    dispatch({ type: FETCH_TASKS, tasks: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const loggedIn = () => async (dispatch) => {
  try {
    const res = await api.fetch_tasks();
    let user;
    if (res === undefined) user = {};
    else user = res.data.data.user;
    dispatch({ type: LOGGED_IN, user: user });
  } catch (error) {
    console.log(error.message);
  }
};
