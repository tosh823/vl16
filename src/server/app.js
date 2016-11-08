
// Server-side script that handles client connection,
// creates and removes entities

if (server.IsRunning()) {
    server.UserConnected.connect(onConnected);
    server.UserDisconnected.connect(onDisconnected);
}

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

function updateEntity (entityID, position) {
    var userEntity = scene.EntityById(entityID);
    var placeable = userEntity.placeable;
    var transform = placeable.transform;
    transform.pos.x = position.x;
    transform.pos.y = position.y;
    transform.pos.z = position.z;
    placeable.transform = transform;
};

function onDisconnected(connID, user) {
    var userEntityName = 'User-' + connID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        scene.RemoveEntity(userEntity.id);
        print("Removed entity for " + connID);
    }
};

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