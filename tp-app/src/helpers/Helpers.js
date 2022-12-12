const cities = [
    {
        id: 'BOGOTA',
        name: 'Bogotá D.C.'
    },
    {
        id: 'MEDELLIN',
        name: 'Medellín'
    }
]; 

const genres = [
    {
        id: 'MALE',
        name: 'Masculino'
    },
    {
        id: 'FEMALE',
        name: 'Femenino'
    }
]; 

export {
    cities, genres
}

export const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
}