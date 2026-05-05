import React, { useMemo, type ComponentType } from "react";
import { useAppSelector } from "../store/redux-hooks";
import "./styles/securityWrapper.css";
import { ADMIN_PERMISSIONS, USER_EDIT_PERMISSIONS } from "../constant";
import type { IWithAccess } from "../types/UserRoleAndPermission";
import { getMaskedData } from "../helpers/maskedData";
import type { IUser } from "../types/IUser";

export const SecurityWrapper = <P extends object>(
  OriginalComponent: ComponentType<P & IWithAccess>,
  requiredPermissions: string[] = [],
  requiredRole: string = "",
) => {
  const WrappedComponent = (props: P) => {
    const { permissions, users } = useAppSelector((state) => state.user);

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

    return (
      <div
        className={`security-wrapper ${hasEditAccess ? "" : "edit-access-denied"}`}
      >
        <OriginalComponent
          {...props}
          hasAdminAccess={hasAdminAccess}
          hasEditAccess={hasEditAccess}
          users={users}
        />
      </div>
    );
  };
  return WrappedComponent;
};
