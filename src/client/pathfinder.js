
var Pathfinder = function (library) {
    this.library = library;
};

Pathfinder.prototype.constructor = Pathfinder;
Pathfinder.prototype.loadMap = function() {
    // Read navigation map
    var navMapFile = 'assets/' + this.library.location.asset + '_Navigation.json';
    $.getJSON(navMapFile,
        function onSuccess(json) {
            this.nodes = json;
            /*this.nodes = {};
            json.map(function(value, index) {
                this.nodes[value.name] = value.links;
            }.bind(this));*/
            console.log('Loaded map of ' + this.nodes.length + ' waypoints');
        }.bind(this)
    );
};

Pathfinder.prototype.findPath = function (start, destination) {
    if (this.nodes == null || this.nodes.length == 0) {
        console.log('Pathfinder does not have a map or it is empty');
        return null;
    }
    // Preparation
    var visitedNodes = [];
    var distances = [];
    var route = [];
    var startIndex = this.indexOf(start);
    var size = this.nodes.length;
    for (var i = 0; i < size; i++) {
        distances[i] = Number.MAX_SAFE_INTEGER;
        route[i] = startIndex;
    }
    console.log('Index of start element is ' + startIndex);
    distances[startIndex] = 0;
    // Dijkstra’s algorithm
    var checkNode = function(nodeIndex) {
        var node = this.nodes[nodeIndex];
        console.log(node);
        var nodeDistance = distances[nodeIndex];
        for (var child in node.links) {
            if (visitedNodes.includes(child)) continue;
            var childIndex = this.indexOf(child);
            var distance = node.links[child] + nodeDistance;
            if (distances[childIndex] > distance) {
                distances[childIndex] = distance;
                route[childIndex] = nodeIndex;
            }
        }
    }.bind(this)

    while (visitedNodes.length <= this.nodes.length) {
        var minDistIndex = 0;
        for (var index = 0; index < distances.length; index++) {
            if (visitedNodes.includes(this.nodes[index].name)) continue;
            if (distances[minDistIndex] > distances[index]) {
                minDistIndex = index;
            }
        }
        visitedNodes.push(this.nodes[minDistIndex].name);
        checkNode(minDistIndex);
        console.log(visitedNodes);
    }

    console.log('Distances: ' + distances);
    console.log('Route: ' + route);
};

Pathfinder.prototype.indexOf = function(key) {
    if (this.nodes == null || this.nodes.length == 0) return -1;
    for (var i = 0; i < this.nodes.length; i++) {
        if (this.nodes[i].name == key) return i;
    }
    return -1;
};

Pathfinder.prototype

module.exports = Pathfinder;