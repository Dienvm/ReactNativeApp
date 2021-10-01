import { getUsers } from '../../../config/requestAPI';

export const getAllUsers = async () => {
  try {
    const response = await getUsers();

    return response.status === 200 && response.data;
  } catch (error) {
    console.log('error', error);
  }
};
