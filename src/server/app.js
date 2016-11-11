
// Server-side script
// Written by scripts from other sources since I haven't found any clear documentation or reference:
// https://github.com/playsign/fidemo/blob/master/js/server/user-presence.js
// https://github.com/realXtend/tundra/blob/tundra2/bin/scenes/Avatar/simpleavatar.js
// Found problems:
// Not possible to use 'this' reference, so making an object is useless
// The flow of sync is only server -> client, not backwards
// Client can only call actions, so don't change entities on client, it is useless

// run the server with
// Tundra --server --headless --port 8080 --protocol tcp --file data/assets/vl/scene.txml

var MainLibrarySpawn = {
    x: 25.39,
    y: 1.9,
    z: -2.34
};

var RitaharjuSpawn = {
    x: 21.86,
    y: 2.9,
    z: -16.16
};

// When user connects, create entity for him
// and spawn it on specific place
function onConnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.CreateEntity(scene.NextFreeId(), ['Name', 'Placeable']);
    userEntity.SetTemporary(true);
    userEntity.SetName(userEntityName);
    userEntity.group = "MainLibrary";

    userEntity.placeable.SetPosition(MainLibrarySpawn);

    userEntity.Action('updateUser').Triggered.connect(onUserUpdated);
    userEntity.Action('changeLocation').Triggered.connect(onUserChangedLocation);

    print('Created entity [' + connID + ']');
};

// Callback on action from entity
// Updates location of entity on server and 
// Notifies client about it
function onUserUpdated(json) {
    var connID = server.ActionSender().id;
    var data = JSON.parse(json);
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        userEntity.placeable.SetPosition(data.x, data.y, data.z);
        userEntity.group = data.location;
        // 4 for peers
        userEntity.Exec(4, 'userUpdated', JSON.stringify({
            entityName: userEntityName,
            location: userEntity.group,
            posX: data.x,
            posY: data.y,
            posZ: data.z
        }));
    }
};

// When user disconnects, delete his entity from scene as well
function onDisconnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        scene.RemoveEntity(userEntity.id);
        print('Removed entity[' + connID + ']');
    }
};

function onUserChangedLocation(json) {
    var connID = server.ActionSender().id;
    var data = JSON.parse(json);
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        var departure = userEntity.group;
        var arrival = data.location;
        var spawnPoint = getSpawnInLocation(arrival);
        userEntity.Exec(4, 'userChangedLocation', JSON.stringify({
            entityName: userEntityName,
            from: departure,
            to: arrival
        }));
    }
}

function getSpawnInLocation(location) {
    var spawn;
    switch (location) {
        case 'MainLibrary':
            spawn = MainLibrarySpawn;
            break;
        case 'Ritaharju':
            spawn = RitaharjuSpawn;
            break;
        default:
            spawn = { x: 0, y: 0, z: 0 };
            break;
    }
    return spawn;
};

// Run server
if (server.IsRunning()) {
    server.UserConnected.connect(onConnected);
    server.UserDisconnected.connect(onDisconnected);
}