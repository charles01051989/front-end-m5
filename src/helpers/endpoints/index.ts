import { auth } from "./auth";
import { favorite } from "./favorite";
import { users } from "./users";
import { game } from "./game";
import { genre } from "./genre";

export const endpoint = {
  baseUrl: "https://back-end-m4-production.up.railway.app",
  ...auth,
  ...favorite,
  ...game,
  ...users,
  ...genre,

};
