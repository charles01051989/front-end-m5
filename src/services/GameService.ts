import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Game, GameResponse, GameUpdate } from "types/api/game";

export const GameService = {
  getLista: (): Promise<GameResponse[]> =>
    Api(endpoint.listGame(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (game: Game) =>
    Api(endpoint.createGame(), {
      method: "POST",
      body: JSON.stringify(game),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  getById: (id: string) =>
    Api(endpoint.gameById(id), {
      method: "GET",
    }).then((response) => response.json()),

  updateById: ({ game, id }: GameUpdate) =>
    Api(endpoint.gameById(id), {
      method: "PATCH",
      body: JSON.stringify(game),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api(endpoint.gameById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};