// search.js
const axios = require('axios');

async function search(query) {
    try {
        const response = await axios.get(`https://taylor-swift-api.sarbo.workers.dev/albums?q=${query}`);
        return response.data.albums;
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = search;
