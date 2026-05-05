import type { IUser } from "./IUser";

export interface UserRoleAndPermission{
    permissions: string[],
    role:string
}

export interface IPermissionProps{
    permissions: string[]
}

export interface IWithAccess {
  hasAdminAccess: boolean;
  hasEditAccess: boolean;
  users: IUser[];
}