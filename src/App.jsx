import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

export default function App() {
  return (
    <>
      <header>
        <h1>CRUD de Usuarios</h1>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/usuarios">Usuarios</Link>
          <Link to="/crear">Crear Usuario</Link>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/crear" element={<CreateUser />} />
          <Route path="/editar/:id" element={<EditUser />} />
        </Routes>
      </div>

      <footer>© Taller React</footer>
    </>
  );
}