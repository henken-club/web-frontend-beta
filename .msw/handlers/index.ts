import { mutationCreateHenken, querySearchContent, querySearchUser } from "./CreateHenkenForm";
import { queryNotifications } from "./GlobalNav";
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
  queryNotifications,

  // Register User
  mutationRegisterUser,
  queryIsAliasUnique,

  // CreateHenkenForm
  mutationCreateHenken,
  querySearchContent,
  querySearchUser,
];
