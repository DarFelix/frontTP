import { axiosInstance } from '../helpers/axios-config';
import { headers } from '../helpers/Helpers'

export const createUser = (user) => {
    return axiosInstance.post('user', user, { headers });
}

export const getUserByIdEmploy = (id) => {
    return axiosInstance.get(`user/${id}`, { headers });
}

export const deletePreInscript = (id) => {
    return axiosInstance.delete(`user/${id}`, { headers });
}

export const getUsers = () => {
    return axiosInstance.get('user', { headers });
}