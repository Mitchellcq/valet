import axios from 'axios';

export const postSpace = (spaceData) => {
    return axios.post('/api/postSpace', {
        userID: spaceData.userID,
        address: spaceData.address,
        cost: spaceData.cost,
        image: spaceData.image,
    });
};