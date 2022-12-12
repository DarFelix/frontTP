import { axiosInstance } from '../helpers/axios-config';
import { headers } from '../helpers/Helpers'

export const getUsersInCompetition = (id) => {
    return axiosInstance.get(`score/confirmCompetition/${id}`, { headers });
}

export const createScore = (score) => {
    return axiosInstance.post('score', score, { headers });
}