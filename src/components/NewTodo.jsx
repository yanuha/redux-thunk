import { useDispatch } from 'react-redux';
import { createTodo } from '../store/todos/todos-actions';

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(createTodo(form.title.value));
    e.target.reset();
  };

  return (
    <>
      <h1>Add todo </h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='New todo' />
        <button type='submit'>Add item</button>
      </form>
    </>
  );
};

export default NewTodo;
