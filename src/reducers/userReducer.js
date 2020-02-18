import {
  GET_USERS,
  SET_LOADING,
  USERS_ERROR,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_USER,
  SEARCH_USERS
} from "../actions/types";

const initialState = {
  users: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case USERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
