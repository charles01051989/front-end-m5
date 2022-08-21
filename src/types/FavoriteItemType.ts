import { GameResponse } from "types/api/game";

export interface FavoriteItemType {
  game: GameResponse;
  observation?: string;
}