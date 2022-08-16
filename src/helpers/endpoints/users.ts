import { endpoint } from 'helpers/endpoints';

export const users = {
    createUsers: () => `${endpoint.baseUrl}/users`,
    listUsers: () => `${endpoint.baseUrl}/users`,
    usersById: (id: string) => `${endpoint.baseUrl}/users/${id}`,
};