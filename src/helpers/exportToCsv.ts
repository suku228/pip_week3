import type { IUser } from "../types/IUser";

export const exportToCSV = (users: IUser[], fileName: string) => {
  if (users.length === 0) return;

  const headers = Object.keys(users[0]) as (keyof IUser)[];

  const csvRows = [
    headers.join(","),
    ...users.map((item) => {
      return headers
        .map((header) => {
          return item[header].toString() ?? "";
        })
        .join(",");
    }),
  ];

  console.log("csvRows", csvRows);

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileName}.csv`;
  link.click();

  URL.revokeObjectURL(url);
};
