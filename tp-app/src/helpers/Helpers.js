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

const competitions = [
    {
        id: '1',
        name: 'EJERCICIOS MENTALES'
    },
    {
        id: '2',
        name: 'ACTIVIDADES FISICAS'
    },
    {
        id: '3',
        name: 'ACTIVIDADES GRUPALES'
    },
]; 

export {
    cities, genres, competitions
}

export const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
}