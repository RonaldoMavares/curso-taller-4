import UserItem from "./UserItem";

export default function UserList({ users }) {
  return (
    <>
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </>
  );
}