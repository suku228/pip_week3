import { ROUTE_PERMISSIONS } from "../constant";
import { exportToCSV } from "../helpers/exportToCsv";
import type { IUser } from "../types/IUser";
import type { IWithAccess } from "../types/UserRoleAndPermission";
import { SecurityWrapper } from "./SecurityWrapper";
import "./styles/userData.css";

const UserData = (props: Partial<IWithAccess>) => {
  const { users, hasAdminAccess } = props;
  const mask = (value: string | number) => (hasAdminAccess ? value : "****");

  const onClickDownload = () => {
    exportToCSV(users as IUser[], "userlist");
  };
  return (
    <>
      {hasAdminAccess && (
        <button className="export-data" onClick={onClickDownload}>
          export data
        </button>
      )}
      <div className="user-table-wrapper">
        <h2 className="user-table__title">Users</h2>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{mask(user.salary)}</td>
                <td>{mask(user.contact)}</td>
                <td>{mask(user.email)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const SecurityWrapperForm = SecurityWrapper(
  UserData,
  ROUTE_PERMISSIONS.userData,
);
export default SecurityWrapperForm;
