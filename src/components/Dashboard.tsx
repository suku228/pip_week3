import { ROUTE_PERMISSIONS } from "../constant";
import { SecurityWrapper } from "./SecurityWrapper";
import "./styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__grid">
        <div className="dashboard__grid__item">Total Users: "1,34"</div>
        <div className="dashboard__grid__item">Revenue: "1,3400000"</div>
        <div className="dashboard__grid__item">Active Sessions: "1,340"</div>
        <div className="dashboard__grid__item">Pending Orders: "1,340"</div>
      </div>
    </>
  );
};

const SecurityWrapperForm = SecurityWrapper(
  Dashboard,
  ROUTE_PERMISSIONS.dashboard,
);
export default SecurityWrapperForm;
