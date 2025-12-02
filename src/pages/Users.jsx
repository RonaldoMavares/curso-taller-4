import { useUsers } from "../context/UserContext";
import UserList from "../components/UserList";

export default function Users() {
  const { users, loading } = useUsers();

  return (
    <>
      <h2>Usuarios Registrados</h2>

      {loading && <p>Cargando información...</p>}

      <UserList users={users} />
    </>
  );
}