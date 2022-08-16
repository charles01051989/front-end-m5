import { endpoint } from "helpers/endpoints";

export const favorite = {
    createFavorite: () => `${endpoint.baseUrl}/favorite`,
};