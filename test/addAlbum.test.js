import axios from "axios";
import addAlbum from '../src/addAlbum';

jest.mock('axios');
describe('Ajout d\'un album', () => {

    test('ajout d\'un nouvel album', async () => {
        const mockAlbum = {
            title: 'New Album',
            artist: 'Test Artist',
        };

        axios.post.mockResolvedValue({ data: mockAlbum });

        const result = await addAlbum('New Album', 'Test Artist');

        expect(result).toEqual(mockAlbum);
        expect(axios.post).toHaveBeenCalledWith('https://taylor-swift-api.sarbo.workers.dev/albums', {

            title: 'New Album',
            artist: 'Test Artist',

        });
    });

    test('gestion des erreurs lors de l\'ajout d\'un album', async () => {
        axios.post.mockRejectedValue(new Error('Erreur lors de la requête API'));

        const result = await addAlbum('Error Album', 'Error Artist');

        expect(result).toEqual(new Error('Erreur lors de la requête API'));

    });

});

