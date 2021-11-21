import { queryAllHenkenPages, queryHenkenPage } from "./HenkenPage";
import { queryAllUserPages, querySendHenkensUserPage, queryUserPage } from "./UserPage";

export const handlers = [
  queryAllHenkenPages,
  queryHenkenPage,
  queryAllUserPages,
  querySendHenkensUserPage,
  queryUserPage,
];
