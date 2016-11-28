
var Stats = require('stats');
var Avatar = require('./avatar');
var Stuff = require('./stuff');
var Pathfinder = require('./pathfinder');
var Warp = require('./warp');
var Canvas = require('./canvas');
var Client = require('./client');
require('OrbitControls');
require('EffectComposer');
require('SkyShader');
require('RenderPass');
require('ShaderPass');
require('CopyShader');
require('HorizontalBlurShader');
require('VerticalBlurShader');

/*
    Okay. So Tundra client consumes scenes in its .txml format which
    contatins entities and settings for them. Since I do everything
    by myself and threejs I will only need some textual entities.
    Sadly I can't find a way to disable rendering in TundraClient,
    so we gonna stick with it for a while. I hate this job.
*/

var World = function(app, canvas) {
    this.app = app;
    this.canvas = new Canvas(canvas);
    this.pathfinder = new Pathfinder(this);
    this.ready = false;
    this.clock = new THREE.Clock();
    this.tundra = new TundraClient({
        Tundra: {
            polymer: (typeof Polymer === "function"),
            deprecatedWarnings: false
        },
        TundraClient: {
            renderer: ThreeJsRenderer, 
            container: "#world",
            loglevel: "error"
        },
        AssetAPI: {
            storages: {
                "webtundra://": window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
                "webtundra-assets://": "./assets"
            }
        }
    });
};

World.prototype.constructor = World;

World.prototype.loadLibrary = function() {

};

module.exports = World;