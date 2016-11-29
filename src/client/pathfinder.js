
var Pathfinder = function (library) {
    this.library = library;
};

Pathfinder.prototype.constructor = Pathfinder;
Pathfinder.prototype.loadMap = function () {
    // Read navigation map
    var navMapFile = 'assets/' + this.library.location.asset + 'Navigation.json';
    $.getJSON(navMapFile,
        function onSuccess(json) {
            //this.nodes = json;
            this.map = {};
            json['wayPoints'].map(function (value, index) {
                this.map[value.name] = value;
            }.bind(this));
            console.log('Loaded map of ' + json.length + ' waypoints');
        }.bind(this)
    );
};

Pathfinder.prototype.findPath = function (start, destination) {
    if (this.map == null) {
        console.log('Pathfinder does not have a map.');
        return null;
    }

    // Preparation
    var nodes = {};
    var visitedNodesCount = 0;
    for (var node in this.map) {
        nodes[node] = {};
        nodes[node].links = this.map[node].links;
        nodes[node].distance = Number.MAX_SAFE_INTEGER;
        nodes[node].closestNode = start;
        nodes[node].visited = false;
    }
    nodes[start].distance = 0;

    // Dijkstra’s algorithm
    var checkNode = function (node) {
        for (var child in nodes[node].links) {
            if (nodes[child].visited == true) continue;
            var distance = nodes[node].links[child] + nodes[node].distance;
            if (distance < nodes[child].distance) {
                nodes[child].distance = distance;
                nodes[child].closestNode = node;
            }
        }
    };

    while (visitedNodesCount < Object.keys(nodes).length) {
        // Searching for closest non-visited node
        var minValue = Number.MAX_SAFE_INTEGER;
        var closestNode = null;
        for (var node in nodes) {
            if (nodes[node].visited == true) continue;
            if (nodes[node].distance < minValue) {
                closestNode = node;
                minValue = nodes[node].distance;
            }
        }
        if (closestNode != null) {
            nodes[closestNode].visited = true;
            visitedNodesCount++;
            checkNode(closestNode);
        }
    }

    var route = [];
    var step = destination;
    route.push(step);
    while (step != start) {
        step = nodes[step].closestNode;
        route.push(step);
    }
    route.reverse();

    return route;
};

Pathfinder.prototype.findShelf = function (book) {
    var code = book.locations[0].callNumber;
    console.log('Must find shelf for ' + code);
    var splitted = code.split(' ');
    if (splitted[0] != 'AIK') {
        console.log('The book is not in adult department');
        return null;
    }
    var number = splitted[1];
    var symbol = splitted[2];
    var collection = book.locations[0].collection;
    var hits = [];
    for (var node in this.map) {
        var wayPoint = this.map[node];
        if (wayPoint.shelfFrom != null && wayPoint.shelfFrom != '') {
            // Here we go, the shelf containing info
            var shelfFromSplitted = wayPoint.shelfFrom.split('|');
            var shelfToSplitted = wayPoint.shelfTo.split('|');
            // Assuming the from and to are equal lengths
            for (var index = 0; index < shelfFromSplitted.length; index++) {
                var codeFrom = shelfFromSplitted[index].split(' ');
                var codeTo = shelfToSplitted[index].split(' ');
                if (number >= codeFrom[0] && number <= codeTo[0]) {
                    // We have number hit, moving on
                    if (codeFrom[1] != null) {
                        // Compare symbolic part
                        var startCondition = ((codeFrom[1] == '>') ? true : (symbol >= codeFrom[1]));
                        var endCondition = ((codeTo[1] == '<') ? true : (symbol <= codeTo[1]));
                        if (startCondition && endCondition) {
                            // We have symbolic hit, moving on
                            if (codeFrom[2] == null && collection == null) {
                                // No collection, direct hit!
                                hits.push(node);
                            }
                            else {
                                // Compare collection part
                                if (collection == codeFrom[2]) hits.push(node);
                            }
                        }
                    }
                    else {
                        hits.push(node);
                    }
                }
            }
        }
    }
    console.log('Found ' + JSON.stringify(hits));
    return hits;
};

Pathfinder.prototype.indexOf = function (key) {
    if (this.nodes == null || this.nodes.length == 0) return -1;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].name == key) return i;
    }
    return -1;
};

Pathfinder.prototype

module.exports = Pathfinder;