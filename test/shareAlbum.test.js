import ShareLinkAlbum from '../src/shareAlbum';
import axios from "axios";
import addAlbum from "../src/addAlbum";

jest.mock('axios');
describe('createShareLink', () => {

    it('should return the correct share link', () => {
        const shareData = {
            albumId: 4
        };

        const apiUrl = 'https://taylor-swift-api.sarbo.workers.dev/albums';
        const expectedShareLink = 'https://taylor-swift-api.sarbo.workers.dev/albums?albumId=4';
        const shareLink = ShareLinkAlbum(shareData, apiUrl);

        expect(shareLink).toBe(expectedShareLink);

        console.log('Voici ton lien de partage ' + shareLink);
    });


    test('gestion des erreurs lors du partage d\'album', async () => {
        axios.post.mockRejectedValue(new Error('Erreur lors de la requête API'));

        const result = await ShareLinkAlbum('error', 'share');

        expect(result).toEqual('share?error=');

    });


});