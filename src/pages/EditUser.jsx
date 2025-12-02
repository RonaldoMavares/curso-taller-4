import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import { useState } from "react";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser, loading } = useUsers();

  const user = users.find((u) => u.id == id);

  const [form, setForm] = useState(() => ({
    name: user?.name || "",
    email: user?.email || "",
    city: user?.city || "",
  }));

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(user.id, { ...form, id: user.id });

    navigate("/usuarios");
  };

  if (!user) {
    return <p>Usuario no encontrado</p>;
  }

  return (
    <>
      <h2>Editar Usuario</h2>

      {loading ? (
        <p>Guardando cambios...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Ciudad"
            required
          />

          <button type="submit">Guardar cambios</button>
        </form>
      )}
    </>
  );
}