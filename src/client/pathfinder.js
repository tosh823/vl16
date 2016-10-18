
var Pathfinder = function (library) {
    this.library = library;
};

Pathfinder.prototype.constructor = Pathfinder;
Pathfinder.prototype.loadMap = function () {
    // Read navigation map
    var navMapFile = 'assets/' + this.library.location.asset + '_Navigation.json';
    $.getJSON(navMapFile,
        function onSuccess(json) {
            //this.nodes = json;
            this.map = {};
            json.map(function(value, index) {
                this.map[value.name] = value.links;
            }.bind(this));
            console.log('Loaded map of ' + json.length + ' waypoints');
        }.bind(this)
    );
};

Pathfinder.prototype.findPathOld = function(start, destination) {
    if (this.map == null) {
        console.log('Pathfinder does not have a map.');
        return null;
    }
    // Preparation
    var visitedNodes = {};
    var visitedNodesCount = 0;
    var distances = {};
    var route = {};
    for (var node in this.map) {
        distances[node] = Number.MAX_SAFE_INTEGER;
        route[node] = start;
        visitedNodes[node] = false;
    }
    nodes[start].distance = 0;
    distances[start] = 0;
    // Dijkstra’s algorithm
    var checkNode = function (node) {
        var nodeDistance = distances[node];
        for (var child in this.map[node]) {
            if (visitedNodes[child] == true) continue;
            var distance = this.map[node][child] + nodeDistance;
            if (distances[child] > distance) {
                distances[child] = distance;
                route[child] = node;
            }
        }
    }.bind(this)

    while (visitedNodesCount < Object.keys(this.map).length) {
        // Searching for closest non-visited node
        var minValue = Number.MAX_SAFE_INTEGER;
        var closestNode = null;
        for (var node in this.map) {
            if (visitedNodes[node] == true) continue;
            if (distances[node] < minValue) {
                closestNode = node;
                minValue = distances[node];
            }
        }
        if (closestNode != null) {
            visitedNodes[closestNode] = true;
            visitedNodesCount++;
            checkNode(closestNode);
        }
    }

    console.log(distances);
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
        nodes[node].links = this.map[node];
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

    console.log(nodes);
    console.log(route);

    return route;
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