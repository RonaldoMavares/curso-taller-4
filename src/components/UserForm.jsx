import { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", city: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", city: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="city" placeholder="Ciudad" value={form.city} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
}