import { type IUser } from "./../types/IUser";
import { SENSITIVE_DATA_FIELDS } from "../constant";

export const getMaskedData: (
  users: IUser[],
  maskSensitiveDataFields: boolean,
) => IUser[] = (users: IUser[], maskSensitiveDataFields: boolean) => {
  if (!maskSensitiveDataFields) return users;
  return users.map((item) => {
    const user = item as IUser;
    return Object.keys(user).reduce((acc, key) => {
      const temp = SENSITIVE_DATA_FIELDS.includes(key)
        ? { [key]: "******" }
        : { [key]: item[key as keyof IUser] };
      return { ...acc, ...temp };
    }, {}) as IUser;
  });
};
