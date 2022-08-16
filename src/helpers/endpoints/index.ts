import { auth } from "./auth";
import { favorite } from "./favorite";
import { users } from "./users";
import { game } from "./game";

export const endpoint = {
  baseUrl: "https://back-end-m4-production.up.railway.app",
  ...auth,
  ...favorite,
  ...game,
  ...users,
};
