
var LibraryAPI = function () {
    this.host = 'https://koha.outikirjastot.fi';
    this.searchReq = '/cgi-bin/koha/opac-search.pl?idx=&q=';
};

LibraryAPI.prototype.contructor = LibraryAPI;

LibraryAPI.prototype.search = function (query, onSearchFinnish) {
    var correctQuery = query.replace(/ /g, '+');
    var url = this.host + this.searchReq + correctQuery + '&branch_group_limit=branch%3AOUPK';
    $.get(url, function(data) {
        var searchResultsTable = $(data).find('.table-striped > tbody');
        var searchResults = [];
        $(searchResultsTable).children('tr').each(function(index, element) {
            var info = $(element).find('.bibliocol');
            var titleA = $(info, 'p').find('.nimeke');
            var authorSpan = $(info, 'p').find('.author');
            var materialSpan = $(info, 'span').find('.results_summary');
            var languageSpan = $(info, 'span').find('.results_summary.language');
            var publisherSpan = $(info, 'span').find('.results_summary.publisher');
            var title = $(titleA).text();
            var href = $(titleA).attr('href');
            var author = $(authorSpan).text();
            var materialType = $(materialSpan).children('img').attr('alt');
            var language = $(languageSpan).children('img').attr('alt');
            var publisher = $(publisherSpan).text();
            searchResults.push({
                title: title,
                author: author,
                href: href,
                type: materialType,
                language: language,
                publisher: publisher
            });
        });
        onSearchFinnish(searchResults);
    }).fail(function(error) {
        console.log(error);
    });
};

module.exports = LibraryAPI;