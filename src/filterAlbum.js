const axios = require('axios');

async function getAlbums(query) {
   try {
      const response = await axios.get(`https://taylor-swift-api.sarbo.workers.dev/albums?q=${query}`);
      return response.data.albums;
   } catch (error) {
      return error;
   }
}

async function sortByAsc() {
   try {
      const data = await getAlbums();

      if (data) {
         const sortedAlbums = data.sort((a, b) => a.title.localeCompare(b.title));
         return sortedAlbums;
      } else {
         throw new Error('Structure de la data invalide');
      }
   } catch (error) {
      return error;
   }
}

// Appel à la fonction et afficher la réponse
// sortByAsc()
//    .then(result => console.log(result))
//    .catch(error => console.error(error));

module.exports = sortByAsc;