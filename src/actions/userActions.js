import {
  GET_USERS,
  SET_LOADING,
  USERS_ERROR,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_USER,
  SEARCH_USERS,
  GET_LOCATIONS
} from "./types";

import api from '../utils/api';

// GET USERS
export const getUsers = () => async dispatch => {
  try {
    setLoading();
    const res = await api.get('/users');
    console.log(res);
    
    var data = [];

    if (res && res.data && res.data.data) 
      data = res.data.data;

    dispatch({ type: GET_USERS, payload: data });

  } catch (error) {
    console.log(error);
    dispatch({ type: USERS_ERROR, payload: error.response.statusText });
  }
};

// ADD NEW USER
export const addUser = user => async dispatch => {
  try { 

    //setLoading();
    dispatch({ type: SET_LOADING })

    const res = await api.post("/users", user);
    console.log('@todo: sacar data de res', res);
    
    // const data = res.data
    // dispatch({ type: ADD_USER, payload: data })

  } catch (error) {
    console.log(error)
    //dispatch({ type: USERS_ERROR, payload: error.response.data });
  }
};

// DELETE USER
export const deleteUser = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/users/${id}`, {
      method: "DELETE"
    });

    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    dispatch({ type: USERS_ERROR, payload: error.response.data });
  }
};

// UPDATE USER ON SERVER
export const updateUser = user => async dispatch => {
  try {
    const res = await fetch(`/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    dispatch({ type: USERS_ERROR, payload: error.response.data });
  }
};

// SEARCH USERS
export const searchUsers = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/users?q=${text}`);
    const data = await res.json();
    dispatch({ type: SEARCH_USERS, payload: data });
  } catch (error) {
    dispatch({ type: USERS_ERROR, payload: error.response.data });
  }
};

// SET CURRENT USER
export const setCurrent = user => {
  return {
    type: SET_CURRENT,
    payload: user
  };
};

// CLEAR CURRENT USER
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const usersError = () => {};

// HELPER
// GET USERS
export const getLocations = () => async dispatch => {
  try {
    setLoading();
    const res = await api.get('/locations');
    console.log('locationsss')
    console.log(res);

    dispatch({ type: GET_LOCATIONS, payload: res.data });

  } catch (error) {
    console.log(error);
    //dispatch({ type: USERS_ERROR, payload: error.response.statusText });
  }
};
