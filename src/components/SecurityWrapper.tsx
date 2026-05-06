import React, { type ComponentType } from "react";
import { useAppSelector } from "../store/redux-hooks";
import "./styles/securityWrapper.css";
import { ADMIN_PERMISSIONS, USER_EDIT_PERMISSIONS } from "../constant";
import type { IWithAccess } from "../types/UserRoleAndPermission";

export const SecurityWrapper = <P extends object>(
  OriginalComponent: ComponentType<P & Partial<IWithAccess>>,
  requiredPermissions: string[] = [],
//   requiredRole: string = "",
) => {
  const WrappedComponent = (props: P) => {
    const { permissions } = useAppSelector((state) => state.user);
    const { users } = useAppSelector((state) => state.userList);

    const hasAccess = requiredPermissions.every((perm) =>
      permissions.includes(perm),
    );

    const hasAdminAccess = ADMIN_PERMISSIONS.every((perm) =>
      permissions.includes(perm),
    );

    // const masekdUsers: IUser[] = useMemo(() => {
    //   return getMaskedData(users, !hasAdminAccess);
    // }, [users, hasAdminAccess]);

    const hasEditAccess = USER_EDIT_PERMISSIONS.every((perm) =>
      permissions.includes(perm),
    );

    if (!hasAccess) {
      return <div className="access-denied">🔒 access denied</div>;
    }

    const injectedProps: IWithAccess = {
       hasAdminAccess,
        hasEditAccess,
        users
    }

    return (
      <div
        className={`security-wrapper ${hasEditAccess ? "" : "edit-access-denied"}`}
      >
        <OriginalComponent
          {...(props as P)}
          {...injectedProps}
        />
      </div>
    );
  };
  return WrappedComponent;
};
