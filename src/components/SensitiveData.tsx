import { ROUTE_PERMISSIONS } from "../constant";
import { SecurityWrapper } from "./SecurityWrapper";

const SensitiveData = () => {
  return (
    <>
      <div>Sensitive data component</div>
    </>
  );
};

const SecurityWrapperForm = SecurityWrapper(SensitiveData, ROUTE_PERMISSIONS.superAdmin);
export default SecurityWrapperForm;
