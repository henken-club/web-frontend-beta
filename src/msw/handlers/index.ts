import {
  mutationCreateHenkenFormCreateHenken,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
} from "./CreateHenkenForm";
import { queryGlobalNavNotifications } from "./GlobalNav";
import { queryAllHenkenPages, queryHenkenPage } from "./HenkenPage";
import { mutationRegisterUser, queryIsAliasUnique } from "./RegisterUserForm";
import { queryAllUserPages, querySendHenkensUserPage, queryUserPage } from "./UserPage";

export const handlers = [
  // Henken Page
  queryAllHenkenPages,
  queryHenkenPage,

  // User Page
  queryAllUserPages,
  queryUserPage,
  querySendHenkensUserPage,

  // GlobalNav
  queryGlobalNavNotifications,

  // Register User
  mutationRegisterUser,
  queryIsAliasUnique,

  // CreateHenkenForm
  mutationCreateHenkenFormCreateHenken,
  queryCreateHenkenFormSearchContent,
  queryCreateHenkenFormSearchUser,
];
