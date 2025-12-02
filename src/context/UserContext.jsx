import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([
    { id: 1, name: "Ronaldo", email: "ronaldo@example.com", city: "Bogotá" },
    { id: 2, name: "Ana", email: "ana@example.com", city: "Medellín" },
  ]);

  const fakeDelay = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 4000));
    setLoading(false);
  };

  const createUser = async (user) => {
    await fakeDelay();
    setUsers([...users, { ...user, id: Date.now() }]);
    alert("Usuario creado con éxito");
  };

  const updateUser = async (id, updatedUser) => {
    const confirmEdit = confirm("¿Deseas guardar los cambios?");
    if (!confirmEdit) return;

    await fakeDelay();
    setUsers(users.map((u) => (u.id === id ? updatedUser : u)));
    alert("Usuario editado correctamente");
  };

  const deleteUser = async (id) => {
    const confirmDelete = confirm("¿Realmente deseas eliminar este usuario?");
    if (!confirmDelete) return;

    await fakeDelay();
    setUsers(users.filter((u) => u.id !== id));
    alert("Usuario eliminado");
  };

  return (
    <UserContext.Provider value={{ users, createUser, updateUser, deleteUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useUsers() {
  return useContext(UserContext);
}