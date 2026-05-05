import { ROUTE_PERMISSIONS } from "../constant";
import type { IWithAccess } from "../types/UserRoleAndPermission";
import { SecurityWrapper } from "./SecurityWrapper";
import "./styles/userForm.css";

const UserForm = (props: IWithAccess) => {
  const {hasEditAccess} = props;
  return (
    <>
      <div>UserForm</div>
       <div className="dashboard__grid_userform">
        <div className="dashboard__grid__item__userform">username: <input className="user_input" disabled={!hasEditAccess}/></div>
        <div className="dashboard__grid__item__userform">contact:  <input  className="user_input" disabled={!hasEditAccess}/></div>
        <div className="dashboard__grid__item__userform">Email:  <input  className="user_input" disabled={!hasEditAccess}/></div>
      </div>
    </>
  );
};

const SecurityWrapperForm = SecurityWrapper(UserForm, ROUTE_PERMISSIONS.userForm, "");
export default SecurityWrapperForm;
