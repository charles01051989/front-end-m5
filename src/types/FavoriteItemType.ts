import { GameResponse } from "./Game";


export interface FavoriteItemType {
  game: GameResponse;
  quantity: number;
  observation?: string;
}