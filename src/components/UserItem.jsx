import { Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";

export default function UserItem({ user }) {
  const { deleteUser } = useUsers();

  return (
    <div className="user-item">
      <span>
        {user.name} – {user.email} – {user.city}
      </span>

      <div>
        <Link to={`/editar/${user.id}`}>
          <button>Editar</button>
        </Link>

        <button onClick={() => deleteUser(user.id)} style={{ marginLeft: 8 }}>
          Eliminar
        </button>
      </div>
    </div>
  );
}