import { axiosInstance } from '../helpers/axios-config';
import { headers } from '../helpers/Helpers'

export const createUser = (user) => {
    return axiosInstance.post('user', user, { headers });
}

export const getUser = (id) => {
    return axiosInstance.get(`user/${id}`, { headers });
}