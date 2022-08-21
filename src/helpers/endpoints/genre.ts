import { endpoint } from "helpers/endpoints";

export const genre = {
    createGenre: () => `${endpoint.baseUrl}/genre`,
    listGenre: () => `${endpoint.baseUrl}/genre`,
    genreById: (id: string) => `${endpoint.baseUrl}/genre/${id}`,
};