export const ADD_TODO = '@@todos/ADD_TODO';
export const ADD_TODOS = '@@todos/ADD_TODOS';
export const LOADING = '@@todos/LOADING';
export const SET_ERROR = '@@todos/SET_ERROR';

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const addTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
});

const setLoading = () => ({
  type: LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadTodos = () => (dispatch, _, client) => {
  dispatch(setLoading());
  client
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((data) => dispatch(addTodos(data)))
    .catch((err) => dispatch(setError(err)));
};

export const createTodo = (title) => (dispatch, _, client) => {
  dispatch(setLoading());
  client
    .post('https://jsonplaceholder.typicode.com/todos', {
      userId: 1,
      title,
      completed: false,
    })
    .then((newTodo) => dispatch(addTodo(newTodo)))
    .catch((err) => dispatch(setError(err)));
};
