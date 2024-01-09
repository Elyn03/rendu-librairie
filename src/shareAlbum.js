function ShareLinkAlbum(shareData, apiUrl) {

    const apiParams = new URLSearchParams(shareData);
    return `${apiUrl}?${apiParams}`;
}

module.exports = ShareLinkAlbum;