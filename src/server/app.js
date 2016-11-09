
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

if (server.IsRunning()) {
    server.UserConnected.connect(onConnected);
    server.UserDisconnected.connect(onDisconnected);
}

// When user connects, create entity for him
// and spawn it on specific place
function onConnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.CreateEntity(scene.NextFreeId(), ["Placeable"]);
    userEntity.SetTemporary(true);
    userEntity.SetName(userEntityName);

    var placeable = userEntity.placeable;
    var transform = placeable.transform;
    transform.pos.x = 25.39;
    transform.pos.y = 1.9;
    transform.pos.z = -2.34;
    placeable.transform = transform;

    userEntity.Action('UserPositionUpdate').Triggered.connect(onUserPositionUpdated);
    print("Created entity for " + connID);
};

// Update certain entity position
function updateEntity (entityID, position) {
    var userEntity = scene.EntityById(entityID);
    var placeable = userEntity.placeable;
    var transform = placeable.transform;
    transform.pos.x = position.x;
    transform.pos.y = position.y;
    transform.pos.z = position.z;
    placeable.transform = transform;
};

// When user disconnects, delete his entity from scene as well
function onDisconnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        scene.RemoveEntity(userEntity.id);
        print("Removed entity for " + connID);
    }
};

// Callback on action from entity
// Updates location of entity on server and 
// Notifies client about it
function onUserPositionUpdated(data) {
    var connID = server.ActionSender().id;
    var newPosition = JSON.parse(data);
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        var placeable = userEntity.placeable;
        var transform = placeable.transform;
        transform.pos.x = newPosition.x;
        transform.pos.y = newPosition.y;
        transform.pos.z = newPosition.z;
        placeable.transform = transform;
        // 4 for peers
        userEntity.Exec(4, 'UserPositionNotify', JSON.stringify({
            enitityName: userEntityName,
            posX: newPosition.x,
            posY: newPosition.y,
            posZ: newPosition.z
        }));
    }
};