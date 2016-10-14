
var libraryAPI = function() {
    this.baseURL = 'https://koha.outikirjastot.fi/cgi-bin/koha/';
};

libraryAPI.prototype.contructor = libraryAPI;

libraryAPI.prototype.search = function(query, onSearchFinnish) {
    
};

module.exports = libraryAPI;