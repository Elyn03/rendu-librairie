import axios from "axios";
import search from "../src/search";

jest.mock('axios');

describe('Recherche', () => {
    describe('Recherche avec une API', () => {
        test('recherche avec le terme "1989"', async () => {
            const mockData = {
                albums: [
                    { title: '1989', artist: 'Taylor Swift' },
                    { title: 'Red', artist: 'Taylor Swift' },

                    // Ajoute d'autres albums si nécessaire
                ],
            };

            axios.get.mockResolvedValue({ data: mockData });

            const results = await search('1989' , 'Red');

            expect(results).toEqual([{ title: '1989', artist: 'Taylor Swift' } , { title: 'Red', artist: 'Taylor Swift' },]);
        });

        test('recherche avec un terme qui ne correspond à rien', async () => {
            axios.get.mockResolvedValue({ data: { albums: [] } });

            const emptyResults = await search('nonexistent');

            expect(emptyResults).toEqual([]);
        });
    });

    describe('Gestion des erreurs API', () => {
        test('gestion des erreurs lors de la recherche', async () => {
            axios.get.mockRejectedValue(new Error('Erreur lors de la requête API'));

            const results = await search('error');

            expect(results).toEqual([]);
        });
    });
});
