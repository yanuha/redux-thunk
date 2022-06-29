import { ADD_TODOS } from './todos-actions';

export const todosReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_TODOS: {
      return action.payload;
    }
    default:
      return store;
  }
};
