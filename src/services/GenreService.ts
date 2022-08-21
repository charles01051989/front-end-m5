import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Genre, GenreResponse, GenreUpdate } from "types/api/genre";

export const GenreService = {
  getLista: (): Promise<GenreResponse[]> =>
    Api(endpoint.listGenre(), {
      method: "GET",
    }).then((response) => response.json()),

  create: (game: Genre) =>
    Api(endpoint.createGenre(), {
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

  updateById: ({ genre, id }: GenreUpdate) =>
    Api(endpoint.gameById(id), {
      method: "PATCH",
      body: JSON.stringify(genre),
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