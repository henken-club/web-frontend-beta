import {
  mutationCreateHenkenFormCreateHenken,
  mutationRegisterUserFormRegisterUser,
  queryAllHenkenPages,
  queryAllUserPages,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
  queryFetchViewer,
  queryGlobalNavNotifications,
  queryHenkenPage,
  queryRegisterUserFormIsAliasUnique,
  queryUserPage,
} from "../handlers";

export const handlers = [
  queryFetchViewer,
  queryRegisterUserFormIsAliasUnique,
  mutationRegisterUserFormRegisterUser,
  queryCreateHenkenFormSearchUser,
  queryCreateHenkenFormSearchContent,
  mutationCreateHenkenFormCreateHenken,
  queryGlobalNavNotifications,
  queryAllHenkenPages,
  queryHenkenPage,
  queryAllUserPages,
  queryUserPage,
];
