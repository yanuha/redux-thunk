import { ADD_USERS, LOADING, SET_ERROR } from './users-actions';

const initialState = {
  status: 'idle',
  list: [],
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS: {
      return {
        ...state,
        list: action.payload,
        status: 'fulfilled',
      };
    }
    case LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
