import { api } from './api';

export const getUsers = () => {
  return api
    .get(`/users`)
    .then((response) => response)
    .catch((error) => error);
};
