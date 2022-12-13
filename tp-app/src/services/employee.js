import { axiosInstance } from '../helpers/axios-config';
import { headers } from '../helpers/Helpers'

export const updateAttempts = (id) => {
    return axiosInstance.put(`employee/attempts/${id}`, { headers });
}

export const getEmployee = (id) => {
    return axiosInstance.get(`employee/${id}`, { headers });
}