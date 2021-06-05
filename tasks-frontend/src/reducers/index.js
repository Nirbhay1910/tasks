import { combineReducers } from 'redux';
import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  UPDATE_TASKS,
  FETCH_TASKS,
  LOGGED_IN,
} from '../constants/actionTypes';

export function tasks(tasks = [], action) {
  switch (action.type) {
    case UPDATE_TASKS:
      return action.tasks;
    case FETCH_TASKS:
      return action.tasks;
    default:
      return tasks;
  }
}

export function user(user = {}, action) {
  switch (action.type) {
    case SIGNUP:
      return action.user;
    case LOGIN:
      return action.user;
    case LOGOUT:
      return action.user;
    case LOGGED_IN:
      return action.user;
    default:
      return user;
  }
}

export default combineReducers({
  tasks,
  user,
});
