import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadUsers } from './store/users/users-actions';
import { loadTodos } from './store/todos/todos-actions';

import UserList from './components/UserList';
import TodoList from './components/TodoList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos());
  }, []);

  return (
    <div className='App'>
      <h1>Redux thunk</h1>
      <TodoList />
      <UserList />
    </div>
  );
}

export default App;
