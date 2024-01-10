const axios = require('axios');

async function getAlbums(query) {
   try {
      const response = await axios.get(`https://taylor-swift-api.sarbo.workers.dev/albums?q=${query}`);
      return response.data;
   } catch (error) {
      return error;
   }
}

async function sortByAsc() {
   try {
      const data = await getAlbums();

      if (data) {
         const sortedAlbums = data.sort((a, b) => a.title.localeCompare(b.title)); // Sort albums by title
         return sortedAlbums;
      } else {
         throw new Error('Invalid data structure');
      }
   } catch (error) {
      return error;
   }
}

// Call the async function and log the result
// sortByAsc()
//    .then(result => console.log(result))
//    .catch(error => console.error(error));

module.exports = sortByAsc;
