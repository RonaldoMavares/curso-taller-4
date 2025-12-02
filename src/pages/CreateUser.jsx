import { useUsers } from "../context/UserContext";
import UserForm from "../components/UserForm";

export default function CreateUser() {
  const { createUser, loading } = useUsers();

  return (
    <>
      <h2>Crear Nuevo Usuario</h2>

      {loading ? <p>Creando usuario...</p> : <UserForm onSubmit={createUser} />}
    </>
  );
}