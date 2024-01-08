import handleSearch from '../src/search';

describe('handleSearch()', () => {
    it('should return Result 1', () => {
        const data = 'Result 1';
        expect(handleSearch(data)).toBe('Result 1 ');
    });

});