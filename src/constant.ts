export const navItems = [
  { route: "dashboard", permissions: ["view_reports"] },
  { route: "userForm", permissions: ["edit_prices"] },
  { route: "userData", permissions: ["export_data"] },
  { route: "superAdmin", permissions: ["super_admin"] },
];

export const ROUTE_PERMISSIONS = {
  dashboard: ["view_reports"],
  userForm: ["view_reports"],
  userData: ["view_reports"],
  superAdmin: ["super_admin"],
};

export const USER_EDIT_PERMISSIONS = ["edit_prices"];

export const ADMIN_PERMISSIONS = ["view_reports", "edit_prices", "export_data" ];

export const SENSITIVE_DATA_FIELDS = ["salary", "email", "contact"];
