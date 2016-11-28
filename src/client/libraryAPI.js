
var LibraryAPI = function () {
    this.host = 'https://koha.outikirjastot.fi';
    this.searchReq = '/cgi-bin/koha/opac-search.pl?idx=&q=';
};

LibraryAPI.prototype.contructor = LibraryAPI;

LibraryAPI.prototype.search = function (query, onSearchFinnish) {
    var correctQuery = query.replace(/ /g, '+');
    var url = this.host + this.searchReq + correctQuery + '&branch_group_limit=branch%3AOUPK';
    $.get(url, function (data) {
        var bookInfoPage = $(data).find('#catalogue_detail_biblio');
        var itemList = false;
        var results = [];
        if (bookInfoPage.length > 0) {
            var book = this._parseBookDetailsPage(data);
            results.push(book);
            itemList = false;
        }
        else {
            results = this._parseSearchResultsPage(data);
            itemList = true;
        }
        onSearchFinnish(itemList, results);
    }.bind(this)).fail(function (error) {
        console.log(error);
    });
};

LibraryAPI.prototype.getBook = function (href, onRequestFinished) {
    var url = this.host + href;
    $.get(url, function (data) {
        var book = this._parseBookDetailsPage(data);
        onRequestFinished(book);
    }.bind(this)).fail(function (error) {
        console.log(error);
    });
};

LibraryAPI.prototype._parseSearchResultsPage = function (page) {
    var searchResultsTable = $(page).find('.table-striped > tbody');
    var searchResults = [];
    $(searchResultsTable).children('tr').each(function (index, element) {
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
    return searchResults;
};

LibraryAPI.prototype._parseBookDetailsPage = function (page) {
    var book = {};
    var bookInfo = $(page).find('#catalogue_detail_biblio').children('.tietue');
    var holdsInfo = $(page).find('.holdingst');
    book['title'] = $(bookInfo).find('.title').text();
    book['authors'] = [];
    $(bookInfo).find('.author').find('span').each(function (index, element) {
        if ($(element).attr('property') == 'name') {
            book['authors'].push($(element).text());
        }
    });
    book['type'] = $(bookInfo).find('.results_summary.type').text();
    book['language'] = $(bookInfo).find('.results_summary.language').children('img').attr('alt');
    book['publisher'] = [];
    $(bookInfo).find('.results_summary.publisher').find('span').each(function (index, element) {
        var property = $(element).attr('property');
        var location = (property == 'location');
        var name = (property == 'name');
        var datePublished = (property == 'datePublished');
        if (location || name || datePublished) {
            book['publisher'].push($(element).text());
        }
    });
    $(bookInfo).find('.results_summary.description > *').each(function (index, element) {
        if ($(element).attr('property') == 'description') {
            book['description'] = $(element).text().trim();
        }
    });
    $(bookInfo).find('.results_summary.isbn > *').each(function (index, element) {
        if ($(element).attr('property') == 'isbn') {
            book['isbn'] = $(element).text().trim();
        }
    });
    // Holds data
    book['locations'] = [];
    $(holdsInfo).find('tbody').children().each(function (index, element) {
        var library = $(element).find('.location').children('div');
        var libraryName = $(library).text().trim();
        if (libraryName == 'Oulun kaupungin pääkirjasto') {
            // Location fetching
            var locationModel = {};
            var locationCallNumber = $(element).find('.call_no');
            locationModel['callNumber'] = $(locationCallNumber).text().trim();
            // Collection fetching
            var collection = $(element).find('.collection');
            if (collection != null && collection.text().trim() != '') locationModel['collection'] = collection.text().trim();
            book['locations'].push(locationModel);
        }
    });
    return book;
};

module.exports = LibraryAPI;