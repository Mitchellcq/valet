import axios from 'axios';

export const postSpace = (spaceData) => {
    return axios.post('/api/post-space', {
        userID: spaceData.userID,
        address: spaceData.address,
        cost: spaceData.cost,
        image: spaceData.image,
    });
};