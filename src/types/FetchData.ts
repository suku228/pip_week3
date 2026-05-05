import type { UserRoleAndPermission } from "./UserRoleAndPermission";

export interface FetchData{
    data: UserRoleAndPermission;
    isLoading: boolean;
    error: Error |null;
}