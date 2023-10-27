import { UserList } from "../../components/UserList/UserList";

const UsersManagement = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Administración de usuarios</h2>
      <UserList/>
    </div>
  )
}

export default UsersManagement;