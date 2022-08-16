import { FavoriteItemType } from "types/FavoriteItemType";

export interface Favorite {
  userId: string;
  tableNumber: number;
  game: FavoriteItemType[];
}