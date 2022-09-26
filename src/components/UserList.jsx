import { useSelector } from 'react-redux';

const UserList = () => {
  const { list: users, error, status } = useSelector((state) => state.users);

  return (
    <div>
      Users: {users.length}. Satus: {status}
      {error && <h4>{error}</h4>}
    </div>
  );
};

export default UserList;
