import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Favorite } from "types/api/favorite";

export const FavoriteService = {
  create: (favorite: Favorite) => {
    const game = favorite.game.map(({ game, ...rest }) => ({
      ...rest,
      gameId: game.id,
    }));

    return Api(endpoint.createFavorite(), {
      method: "POST",
      body: JSON.stringify({ ...favorite, game }),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  },
};