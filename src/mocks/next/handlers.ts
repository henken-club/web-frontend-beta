import {
  mutationCreateHenkenFormCreateHenken,
  mutationRegisterUserFormRegisterUser,
  queryAllHenkenPages,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
  queryFetchViewer,
  queryGlobalNavNotifications,
  queryHenkenPage,
  queryRegisterUserFormIsAliasUnique,
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
];
