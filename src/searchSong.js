const axios = require('axios');

async function searchSong(query) {
    try {
        const response = await axios.get(`https://taylor-swift-api.sarbo.workers.dev/songs?q=${query}`);
        return response.data.songs;
    } catch (error) {
        return error
    }
}

module.exports = searchSong;