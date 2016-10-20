
var LibraryAPI = function () {
    this.baseURL = 'https://koha.outikirjastot.fi/cgi-bin/koha/';
};

LibraryAPI.prototype.contructor = LibraryAPI;

LibraryAPI.prototype.search = function (query, onSearchFinnish) {
    var correctQuery = query.replace(/ /g, '+');
    var url = this.baseURL + 'opac-search.pl?idx=&q=' + correctQuery + '&branch_group_limit=branch%3AOUPK';
    $.get(url, function(data) {
        var searchResultsTable = $(data).find('.table-striped > tbody');
        $(searchResultsTable).children('tr').each(function(index, element) {
            var info = $(element).find('.bibliocol');
            var titleElement = $(info).find('p > a');
            var title = $(titleElement).text();
            var idNumber = $(titleElement).attr('href');
        });
        onSearchFinnish();
    }).fail(function(error) {
        console.log(error);
    });
};

module.exports = LibraryAPI;