import axios from "axios";
import search from "../src/search";

jest.mock('axios');

describe('Recherche', () => {

    const mockData = {
        albums: [
            { title: '1989', artist: 'Taylor Swift' },
            { title: 'Red', artist: 'Taylor Swift' }
        ]
    };

    const emptyData = {
        albums: []
    };

    const error = new Error('Erreur lors de la requête API');

    test('recherche avec le terme "1989"', async () => {
        axios.get.mockResolvedValue({ data: mockData });

        const results = await search('1989', 'Red');

        expect(results).toEqual(mockData.albums);
    });

    test('recherche avec un terme qui ne correspond à rien', async () => {
        axios.get.mockResolvedValue({ data: emptyData });

        const emptyResults = await search('nonexistent');

        expect(emptyResults).toEqual(emptyData.albums);
    });

    test('gestion des erreurs lors de la recherche', async () => {
        axios.get.mockRejectedValue(error);

        const results = await search('error');

        expect(results).toEqual(error);
    });
});