
function Agent() {
    this.servers = {
        iceServers: [{
            url: "stun:numb.viagenie.ca"
        },
        {
            url: "turn:numb.viagenie.ca",
            credential: 'kriogen1',
            username: 'ayli.veaynim@gmail.com'
        }]
    }
}

Agent.prototype.constructor = Agent;

module.exports = Agent;