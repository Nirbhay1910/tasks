import axios from 'axios';

const url = 'http://localhost:5000/api/v1/users';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${url}/signup`,
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    return res;
  } catch (err) {
    alert('error', err.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `${url}/login`,
      data: {
        email,
        password,
      },
    });
    return res;
  } catch (err) {
    alert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    await axios({
      method: 'GET',
      url: `${url}/logout`,
    });
  } catch (err) {
    console.log(err.response);
    alert('error', 'Error logging out! Try again.');
  }
};

export const fetch_tasks = async (token) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${url}/me`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res;
  } catch (err) {
    alert('error', err.response.data.message);
  }
};

export const update_tasks = async (token, tasks) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `${url}/updateMyTasks`,
      data: {
        tasks,
      },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return res;
  } catch (err) {
    alert('error', err.response.data.message);
  }
};
