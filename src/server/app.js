
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

if (server.IsRunning()) {
    server.UserConnected.connect(onConnected);
    server.UserDisconnected.connect(onDisconnected);
}

// When user connects, create entity for him
// and spawn it on specific place
function onConnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.CreateEntity(scene.NextFreeId(), ['Name', 'Placeable']);
    userEntity.SetTemporary(true);
    userEntity.SetName(userEntityName);
    userEntity.group = "MainLibrary";

    updateEntity(userEntity.id, MainLibrarySpawn);

    userEntity.Action('UserPositionUpdate').Triggered.connect(onUserPositionUpdated);
    userEntity.Action('UserLocationUpdate').Triggered.connect(onMoveToLocation);
    print('Created entity [' + connID + ']');
};

// Update certain entity position
function updateEntity(entityID, position) {
    var userEntity = scene.EntityById(entityID);
    var placeable = userEntity.placeable;
    //var placeable = entity.placeable;
    var transform = placeable.transform;
    transform.pos.x = position.x;
    transform.pos.y = position.y;
    transform.pos.z = position.z;
    placeable.transform = transform;
};

// Callback on action from entity
// Updates location of entity on server and 
// Notifies client about it
function onUserPositionUpdated(json) {
    var connID = server.ActionSender().id;
    var newPosition = JSON.parse(json);
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        updateEntity(userEntity.id, newPosition);
        // 4 for peers
        userEntity.Exec(4, 'UserPositionNotify', JSON.stringify({
            entityName: userEntityName,
            locationName: userEntity.group,
            posX: newPosition.x,
            posY: newPosition.y,
            posZ: newPosition.z
        }));
    }
};

function onMoveToLocation(json) {
    var connID = server.ActionSender().id;
    var data = JSON.parse(json);
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (data.destination != null) {
        userEntity.group = data.destination;
        var spawn = getSpawnInLocation(data.destination);
        updateEntity(userEntity.id, spawn);
        userEntity.Exec(4, 'UserLocationNotify', JSON.stringify({
            entityName: userEntityName,
            locationName: userEntity.group
        }));
        print('Entity [' + connID + '] moved to ' + data.destination + ', spawned in ' + JSON.stringify(spawn));
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