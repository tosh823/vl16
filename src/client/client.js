
function Client() {
    IApplication.call(this);
    console.log('Created and instance of IApplication');
};

Client.prototype = Object.create(IApplication);
Client.prototype.constructor = Client;

Client.prototype.onConnected = function() {
    console.log('Client connected');
};

Client.prototype.onDisconnected = function() {
    console.log('Client disconnected');
};

Client.protytype.onUpdate = function(frame) {

};

module.exports = Client;

