import { axiosInstance } from '../helpers/axios-config';
import { headers } from '../helpers/Helpers'

export const updateAttempts = (id) => {
    return axiosInstance.put(`employee/attempts/${id}`, { headers });
}