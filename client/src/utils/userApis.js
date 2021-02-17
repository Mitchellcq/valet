import axios from 'axios';

export const registerUser = (userData) => {
    // console.log(userData);
    return axios.post('/api/register', {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
    });
};

export const loginUser = (userData) => {
    // console.log(userData);
    return axios.post('/api/login', {
        email: userData.email,
        password: userData.password,
    });
};

export const getUser = () => {
    return axios.get('/api/profile');
};

export const getUsers = () => {
    return axios.get('/api/displayusers')
};

export const postSpace = (spaceData) => {
    console.log('Posting your parking space:' + spaceData)
    return axios.post('/api/postSpace', {
        id: spaceData.id,
        formatted_address: spaceData.address,
        types: spaceData.types,
        cost: spaceData.cost,
        geometry: spaceData.geometry,
        price_level: spaceData.price_level,
    });
};

export const getSpace = () => {
    return axios.get('/api/getSpace');
};