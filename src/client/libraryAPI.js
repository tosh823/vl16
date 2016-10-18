
var LibraryAPI = function () {
    this.baseURL = 'https://koha.outikirjastot.fi/cgi-bin/koha/';
};

LibraryAPI.prototype.contructor = LibraryAPI;

LibraryAPI.prototype.search = function (query, onSearchFinnish) {
    var correctQuery = query.replace(/ /g, '+');
    var url = this.baseURL + 'opac-search.pl?idx=&q=' + correctQuery + '&branch_group_limit=branch%3AOUPK';
    $.get(url, function(data) {
        console.log(data);
    }).fail(function(error) {
        console.log(error);
    });
};

module.exports = LibraryAPI;