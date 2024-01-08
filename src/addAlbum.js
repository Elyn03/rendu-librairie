// addAlbum.js
const axios = require('axios');

async function addAlbum(title, artist) {
    try {
        const response = await axios.post('https://taylor-swift-api.sarbo.workers.dev/albums', {
            title,
            artist,
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout d\'un album', error);
        return null;
    }
}

module.exports = addAlbum;
