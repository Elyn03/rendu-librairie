import axios from "axios";
import searchSong from "../src/searchSong";

jest.mock('axios');

describe('Recherche', () => {

    const mockData = {
        songs: [
            {
                title: 'The Archer',
                artist: 'Taylor Swift'
            }
        ]
    };

    const emptyData = {
        songs: []
    };

    const error = new Error('Erreur lors de la requête API');

    test('recherche du titre "The Archer"', async () => {
        axios.get.mockResolvedValue({ data: mockData });
        const results = await searchSong('The Archer');
        expect(results).toEqual(mockData.songs);
    });

    test('recherche avec un terme qui ne correspond à rien', async () => {
        axios.get.mockResolvedValue({ data: emptyData });
        const emptyResults = await searchSong('nonexistent');
        expect(emptyResults).toEqual(emptyData.songs);
    });

    test('gestion des erreurs lors de la recherche', async () => {
        axios.get.mockRejectedValue(error);
        const results = await searchSong('error');
        expect(results).toEqual(error);
    });
});