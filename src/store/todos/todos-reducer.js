import { ADD_TODO, ADD_TODOS, LOADING, SET_ERROR } from './todos-actions';

const initialState = {
  status: 'idle',
  list: [],
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case ADD_TODOS: {
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
