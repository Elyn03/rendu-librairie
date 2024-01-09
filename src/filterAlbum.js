const axios = require('axios');

async function getAlbums(query) {
   try {
      const response = await axios.get(`https://taylor-swift-api.sarbo.workers.dev/albums?q=${query}`);
      return [response.data]
   } catch (error) {
      return error
   }
}

function sortByAsc() {
   getAlbums().then(data => {
      return data.albums
   })
}
console.log (sortByAsc())