
// Server-side script that handles client connection,
// creates and removes entities

if (server.IsRunning()) {
    server.UserConnected.connect(onConnected);
    server.UserDisconnected.connect(onDisconnected);
    me.Action('UserPositionUpdate').Triggered.connect(this, function (jsonData) {
        onUserPositionUpdate(server.ActionSender().id, JSON.parse(jsonData));
    });
}

function onConnected(connectionID, user) {
    var userEntityName = 'User-' + connectionID;
    var userEntity = scene.CreateEntity(scene.NextFreeId(), ["Placeable"]);
    userEntity.SetTemporary(true);
    userEntity.SetName(userEntityName);

    var placeable = userEntity.placeable;
    var transform = placeable.transform;
    transform.pos.x = 25.39;
    transform.pos.y = 1.9;
    transform.pos.z = -2.34;
    placeable.transform = transform;

    print("Created entity for " + connectionID);
}

function onUserPositionUpdate(connectionID, data) {
    var userEntityName = 'User-' + connectionID;
    var userEntity = scene.EntityByName(userPresenceName);
    if (userEntity != null) {
        var placeable = userEntity.placeable;
        var transform = placeable.transform;
        transform.pos.x = data.x;
        transform.pos.y = data.y;
        transform.pos.z = data.z;
        placeable.transform = transform;
    }
}

function onDisconnected(connectionID, user) {
    var userEntityName = 'User-' + connectionID;
    var userEntity = scene.EntityByName(userEntityName);
    if (userEntity != null) {
        scene.RemoveEntity(userEntity.id);
        print("Removed entity for " + connectionID);
    }
}