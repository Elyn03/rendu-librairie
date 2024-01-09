const { getAlbums, sortByName } = require('../src/filterAlbum.js');

describe('Tri des albums', () => {
   let albums;

   beforeAll(async () => {
      albums = await getAlbums();
   });

   test('Tri par nom', () => {
      const sortedAlbums = sortByName({...albums});
      const isSorted = isSortedByName(sortedAlbums);
      expect(isSorted).toBeTruthy();
   });
});

function isSortedByName(albums) {
   for (let i = 0; i < albums.length - 1; i++) {
      if (albums[i].name.localeCompare(albums[i + 1].name) > 0) {
         return false;
      }
   }
   return true;
}