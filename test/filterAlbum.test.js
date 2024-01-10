import axios from "axios";
import sortByAsc from '../src/filterAlbum.js';

jest.mock('axios');

describe('Sort Albums by Title', () => {

   const mockData = {
      albums: [
         { album_id: 1, title: '1989', release_date: '2014-10-27' },
         { album_id: 9, title: 'Evermore', release_date: '2020-12-11' },
         { album_id: 3, title: 'Fearless', release_date: '2021-04-09' },
         { album_id: 8, title: 'Folklore', release_date: '2020-07-24' },
         { album_id: 7, title: 'Lover', release_date: '2019-08-23' },
         { album_id: 10, title: 'Midnights', release_date: '2022-10-21' },
         { album_id: 5, title: 'Red', release_date: '2021-11-12' },
         { album_id: 6, title: 'Reputation', release_date: '2017-11-10' },
         { album_id: 4, title: 'Speak Now', release_date: '2010-10-25' },
         { album_id: 2, title: 'Taylor Swift', release_date: '2006-10-24' }
      ]
   };

   const emptyData = {
      albums: []
   };

   const error = new Error('Erreur lors de la requête API');

   test('trier les albums par ordre alphabétique', async () => {
      axios.get.mockResolvedValue({ data: mockData });
      const sortedAlbums = await sortByAsc();
      expect(sortedAlbums).toEqual(mockData.albums);
   });

});