// File:src/Three.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
var THREE={REVISION:"76"};
//
"function"==typeof define&&define.amd?define("three",THREE):"undefined"!=typeof exports&&"undefined"!=typeof module&&(module.exports=THREE),
//
void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52)),
//
void 0===Math.sign&&(
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
Math.sign=function(a){return a<0?-1:a>0?1:+a}),void 0===Function.prototype.name&&void 0!==Object.defineProperty&&
// Missing in IE9-11.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}}),void 0===Object.assign&&
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Object.defineProperty(Object,"assign",{writable:!0,configurable:!0,value:function(a){"use strict";if(void 0===a||null===a)throw new TypeError("Cannot convert first argument to object");for(var b=Object(a),c=1,d=arguments.length;c!==d;++c){var e=arguments[c];if(void 0!==e&&null!==e){e=Object(e);for(var f=Object.keys(e),g=0,h=f.length;g!==h;++g){var i=f[g],j=Object.getOwnPropertyDescriptor(e,i);void 0!==j&&j.enumerable&&(b[i]=e[i])}}}return b}}),
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button
THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2},
// GL STATE CONSTANTS
THREE.CullFaceNone=0,THREE.CullFaceBack=1,THREE.CullFaceFront=2,THREE.CullFaceFrontBack=3,THREE.FrontFaceDirectionCW=0,THREE.FrontFaceDirectionCCW=1,
// SHADOWING TYPES
THREE.BasicShadowMap=0,THREE.PCFShadowMap=1,THREE.PCFSoftShadowMap=2,
// MATERIAL CONSTANTS
// side
THREE.FrontSide=0,THREE.BackSide=1,THREE.DoubleSide=2,
// shading
THREE.FlatShading=1,THREE.SmoothShading=2,
// colors
THREE.NoColors=0,THREE.FaceColors=1,THREE.VertexColors=2,
// blending modes
THREE.NoBlending=0,THREE.NormalBlending=1,THREE.AdditiveBlending=2,THREE.SubtractiveBlending=3,THREE.MultiplyBlending=4,THREE.CustomBlending=5,
// custom blending equations
// (numbers start from 100 not to clash with other
// mappings to OpenGL constants defined in Texture.js)
THREE.AddEquation=100,THREE.SubtractEquation=101,THREE.ReverseSubtractEquation=102,THREE.MinEquation=103,THREE.MaxEquation=104,
// custom blending destination factors
THREE.ZeroFactor=200,THREE.OneFactor=201,THREE.SrcColorFactor=202,THREE.OneMinusSrcColorFactor=203,THREE.SrcAlphaFactor=204,THREE.OneMinusSrcAlphaFactor=205,THREE.DstAlphaFactor=206,THREE.OneMinusDstAlphaFactor=207,
// custom blending source factors
//THREE.ZeroFactor = 200;
//THREE.OneFactor = 201;
//THREE.SrcAlphaFactor = 204;
//THREE.OneMinusSrcAlphaFactor = 205;
//THREE.DstAlphaFactor = 206;
//THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor=208,THREE.OneMinusDstColorFactor=209,THREE.SrcAlphaSaturateFactor=210,
// depth modes
THREE.NeverDepth=0,THREE.AlwaysDepth=1,THREE.LessDepth=2,THREE.LessEqualDepth=3,THREE.EqualDepth=4,THREE.GreaterEqualDepth=5,THREE.GreaterDepth=6,THREE.NotEqualDepth=7,
// TEXTURE CONSTANTS
THREE.MultiplyOperation=0,THREE.MixOperation=1,THREE.AddOperation=2,
// Tone Mapping modes
THREE.NoToneMapping=0,// do not do any tone mapping, not even exposure (required for special purpose passes.)
THREE.LinearToneMapping=1,// only apply exposure.
THREE.ReinhardToneMapping=2,THREE.Uncharted2ToneMapping=3,// John Hable
THREE.CineonToneMapping=4,// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
// Mapping modes
THREE.UVMapping=300,THREE.CubeReflectionMapping=301,THREE.CubeRefractionMapping=302,THREE.EquirectangularReflectionMapping=303,THREE.EquirectangularRefractionMapping=304,THREE.SphericalReflectionMapping=305,THREE.CubeUVReflectionMapping=306,THREE.CubeUVRefractionMapping=307,
// Wrapping modes
THREE.RepeatWrapping=1e3,THREE.ClampToEdgeWrapping=1001,THREE.MirroredRepeatWrapping=1002,
// Filters
THREE.NearestFilter=1003,THREE.NearestMipMapNearestFilter=1004,THREE.NearestMipMapLinearFilter=1005,THREE.LinearFilter=1006,THREE.LinearMipMapNearestFilter=1007,THREE.LinearMipMapLinearFilter=1008,
// Data types
THREE.UnsignedByteType=1009,THREE.ByteType=1010,THREE.ShortType=1011,THREE.UnsignedShortType=1012,THREE.IntType=1013,THREE.UnsignedIntType=1014,THREE.FloatType=1015,THREE.HalfFloatType=1025,
// Pixel types
//THREE.UnsignedByteType = 1009;
THREE.UnsignedShort4444Type=1016,THREE.UnsignedShort5551Type=1017,THREE.UnsignedShort565Type=1018,
// Pixel formats
THREE.AlphaFormat=1019,THREE.RGBFormat=1020,THREE.RGBAFormat=1021,THREE.LuminanceFormat=1022,THREE.LuminanceAlphaFormat=1023,
// THREE.RGBEFormat handled as THREE.RGBAFormat in shaders
THREE.RGBEFormat=THREE.RGBAFormat,//1024;
THREE.DepthFormat=1026,
// DDS / ST3C Compressed texture formats
THREE.RGB_S3TC_DXT1_Format=2001,THREE.RGBA_S3TC_DXT1_Format=2002,THREE.RGBA_S3TC_DXT3_Format=2003,THREE.RGBA_S3TC_DXT5_Format=2004,
// PVRTC compressed texture formats
THREE.RGB_PVRTC_4BPPV1_Format=2100,THREE.RGB_PVRTC_2BPPV1_Format=2101,THREE.RGBA_PVRTC_4BPPV1_Format=2102,THREE.RGBA_PVRTC_2BPPV1_Format=2103,
// ETC compressed texture formats
THREE.RGB_ETC1_Format=2151,
// Loop styles for AnimationAction
THREE.LoopOnce=2200,THREE.LoopRepeat=2201,THREE.LoopPingPong=2202,
// Interpolation
THREE.InterpolateDiscrete=2300,THREE.InterpolateLinear=2301,THREE.InterpolateSmooth=2302,
// Interpolant ending modes
THREE.ZeroCurvatureEnding=2400,THREE.ZeroSlopeEnding=2401,THREE.WrapAroundEnding=2402,
// Triangle Draw modes
THREE.TrianglesDrawMode=0,THREE.TriangleStripDrawMode=1,THREE.TriangleFanDrawMode=2,
// Texture Encodings
THREE.LinearEncoding=3e3,// No encoding at all.
THREE.sRGBEncoding=3001,THREE.GammaEncoding=3007,// uses GAMMA_FACTOR, for backwards compatibility with WebGLRenderer.gammaInput/gammaOutput
// The following Texture Encodings are for RGB-only (no alpha) HDR light emission sources.
// These encodings should not specified as output encodings except in rare situations.
THREE.RGBEEncoding=3002,// AKA Radiance.
THREE.LogLuvEncoding=3003,THREE.RGBM7Encoding=3004,THREE.RGBM16Encoding=3005,THREE.RGBDEncoding=3006,// MaxRange is 256.
// Depth packing strategies
THREE.BasicDepthPacking=3200,// for writing to float textures for high precision or for visualizing results in RGB buffers
THREE.RGBADepthPacking=3201,// for packing into RGBA buffers.
// File:src/math/Color.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Color=function(a){return 3===arguments.length?this.fromArray(arguments):this.set(a)},THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){return a instanceof THREE.Color?this.copy(a):"number"==typeof a?this.setHex(a):"string"==typeof a&&this.setStyle(a),this},setScalar:function(a){this.r=a,this.g=a,this.b=a},setHex:function(a){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(255&a)/255,this},setRGB:function(a,b,c){return this.r=a,this.g=b,this.b=c,this},setHSL:function(){function a(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+6*(b-a)*(2/3-c):a}return function(b,c,d){if(
// h,s,l ranges are in 0.0 - 1.0
b=THREE.Math.euclideanModulo(b,1),c=THREE.Math.clamp(c,0,1),d=THREE.Math.clamp(d,0,1),0===c)this.r=this.g=this.b=d;else{var e=d<=.5?d*(1+c):d+c-d*c,f=2*d-e;this.r=a(f,e,b+1/3),this.g=a(f,e,b),this.b=a(f,e,b-1/3)}return this}}(),setStyle:function(a){function b(b){void 0!==b&&parseFloat(b)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){
// rgb / hsl
var d,e=c[1],f=c[2];switch(e){case"rgb":case"rgba":if(d=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))
// rgb(255,0,0) rgba(255,0,0,0.5)
return this.r=Math.min(255,parseInt(d[1],10))/255,this.g=Math.min(255,parseInt(d[2],10))/255,this.b=Math.min(255,parseInt(d[3],10))/255,b(d[5]),this;if(d=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))
// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
return this.r=Math.min(100,parseInt(d[1],10))/100,this.g=Math.min(100,parseInt(d[2],10))/100,this.b=Math.min(100,parseInt(d[3],10))/100,b(d[5]),this;break;case"hsl":case"hsla":if(d=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)){
// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
var g=parseFloat(d[1])/360,h=parseInt(d[2],10)/100,i=parseInt(d[3],10)/100;return b(d[5]),this.setHSL(g,h,i)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){
// hex color
var j=c[1],k=j.length;if(3===k)
// #ff0
return this.r=parseInt(j.charAt(0)+j.charAt(0),16)/255,this.g=parseInt(j.charAt(1)+j.charAt(1),16)/255,this.b=parseInt(j.charAt(2)+j.charAt(2),16)/255,this;if(6===k)
// #ff0000
return this.r=parseInt(j.charAt(0)+j.charAt(1),16)/255,this.g=parseInt(j.charAt(2)+j.charAt(3),16)/255,this.b=parseInt(j.charAt(4)+j.charAt(5),16)/255,this}if(a&&a.length>0){
// color keywords
var j=THREE.ColorKeywords[a];void 0!==j?
// red
this.setHex(j):
// unknown color
console.warn("THREE.Color: Unknown color "+a)}return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){return this.r=a.r,this.g=a.g,this.b=a.b,this},copyGammaToLinear:function(a,b){return void 0===b&&(b=2),this.r=Math.pow(a.r,b),this.g=Math.pow(a.g,b),this.b=Math.pow(a.b,b),this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=b>0?1/b:1;return this.r=Math.pow(a.r,c),this.g=Math.pow(a.g,c),this.b=Math.pow(a.b,c),this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;return this.r=a*a,this.g=b*b,this.b=c*c,this},convertLinearToGamma:function(){return this.r=Math.sqrt(this.r),this.g=Math.sqrt(this.g),this.b=Math.sqrt(this.b),this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){
// h,s,l ranges are in 0.0 - 1.0
var b,c,d=a||{h:0,s:0,l:0},e=this.r,f=this.g,g=this.b,h=Math.max(e,f,g),i=Math.min(e,f,g),j=(i+h)/2;if(i===h)b=0,c=0;else{var k=h-i;switch(c=j<=.5?k/(h+i):k/(2-h-i),h){case e:b=(f-g)/k+(f<g?6:0);break;case f:b=(g-e)/k+2;break;case g:b=(e-f)/k+4}b/=6}return d.h=b,d.s=c,d.l=j,d},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();return d.h+=a,d.s+=b,d.l+=c,this.setHSL(d.h,d.s,d.l),this},add:function(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this},addColors:function(a,b){return this.r=a.r+b.r,this.g=a.g+b.g,this.b=a.b+b.b,this},addScalar:function(a){return this.r+=a,this.g+=a,this.b+=a,this},multiply:function(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this},multiplyScalar:function(a){return this.r*=a,this.g*=a,this.b*=a,this},lerp:function(a,b){return this.r+=(a.r-this.r)*b,this.g+=(a.g-this.g)*b,this.b+=(a.b-this.b)*b,this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){return void 0===b&&(b=0),this.r=a[b],this.g=a[b+1],this.b=a[b+2],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.r,a[b+1]=this.g,a[b+2]=this.b,a}},THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},
// File:src/math/Quaternion.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
THREE.Quaternion=function(a,b,c,d){this._x=a||0,this._y=b||0,this._z=c||0,this._w=void 0!==d?d:1},THREE.Quaternion.prototype={constructor:THREE.Quaternion,get x(){return this._x},set x(a){this._x=a,this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a,this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a,this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a,this.onChangeCallback()},set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._w=d,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this.onChangeCallback(),this},setFromEuler:function(a,b){if(a instanceof THREE.Euler==!1)throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
// http://www.mathworks.com/matlabcentral/fileexchange/
// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
//	content/SpinCalc.m
var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),i=a.order;return"XYZ"===i?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===i?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===i?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===i?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===i?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===i&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h),b!==!1&&this.onChangeCallback(),this},setFromAxisAngle:function(a,b){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm
// assumes axis is normalized
var c=b/2,d=Math.sin(c);return this._x=a.x*d,this._y=a.y*d,this._z=a.z*d,this._w=Math.cos(c),this.onChangeCallback(),this},setFromRotationMatrix:function(a){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var b,c=a.elements,d=c[0],e=c[4],f=c[8],g=c[1],h=c[5],i=c[9],j=c[2],k=c[6],l=c[10],m=d+h+l;return m>0?(b=.5/Math.sqrt(m+1),this._w=.25/b,this._x=(k-i)*b,this._y=(f-j)*b,this._z=(g-e)*b):d>h&&d>l?(b=2*Math.sqrt(1+d-h-l),this._w=(k-i)/b,this._x=.25*b,this._y=(e+g)/b,this._z=(f+j)/b):h>l?(b=2*Math.sqrt(1+h-d-l),this._w=(f-j)/b,this._x=(e+g)/b,this._y=.25*b,this._z=(i+k)/b):(b=2*Math.sqrt(1+l-d-h),this._w=(g-e)/b,this._x=(f+j)/b,this._y=(i+k)/b,this._z=.25*b),this.onChangeCallback(),this},setFromUnitVectors:function(){
// http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final
// assumes direction vectors vFrom and vTo are normalized
var a,b,c=1e-6;return function(d,e){return void 0===a&&(a=new THREE.Vector3),b=d.dot(e)+1,b<c?(b=0,Math.abs(d.x)>Math.abs(d.z)?a.set(-d.y,d.x,0):a.set(0,-d.z,d.y)):a.crossVectors(d,e),this._x=a.x,this._y=a.y,this._z=a.z,this._w=b,this.normalize(),this}}(),inverse:function(){return this.conjugate().normalize(),this},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();return 0===a?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this.onChangeCallback(),this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){
// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,i=b._z,j=b._w;return this._x=c*j+f*g+d*i-e*h,this._y=d*j+f*h+e*g-c*i,this._z=e*j+f*i+c*h-d*g,this._w=f*j-c*g-d*h-e*i,this.onChangeCallback(),this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;if(g<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a),g>=1)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(Math.abs(h)<.001)return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var i=Math.atan2(h,g),j=Math.sin((1-b)*i)/h,k=Math.sin(b*i)/h;return this._w=f*j+this._w*k,this._x=c*j+this._x*k,this._y=d*j+this._y*k,this._z=e*j+this._z*k,this.onChangeCallback(),this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){return void 0===b&&(b=0),this._x=a[b],this._y=a[b+1],this._z=a[b+2],this._w=a[b+3],this.onChangeCallback(),this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._w,a},onChange:function(a){return this.onChangeCallback=a,this},onChangeCallback:function(){}},Object.assign(THREE.Quaternion,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){
// fuzz-free, array-based Quaternion SLERP operation
var h=c[d+0],i=c[d+1],j=c[d+2],k=c[d+3],l=e[f+0],m=e[f+1],n=e[f+2],o=e[f+3];if(k!==o||h!==l||i!==m||j!==n){var p=1-g,q=h*l+i*m+j*n+k*o,r=q>=0?1:-1,s=1-q*q;
// Skip the Slerp for tiny steps to avoid numeric problems:
if(s>Number.EPSILON){var t=Math.sqrt(s),u=Math.atan2(t,q*r);p=Math.sin(p*u)/t,g=Math.sin(g*u)/t}var v=g*r;
// Normalize in case we just did a lerp:
if(h=h*p+l*v,i=i*p+m*v,j=j*p+n*v,k=k*p+o*v,p===1-g){var w=1/Math.sqrt(h*h+i*i+j*j+k*k);h*=w,i*=w,j*=w,k*=w}}a[b]=h,a[b+1]=i,a[b+2]=j,a[b+3]=k}}),
// File:src/math/Vector2.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
THREE.Vector2=function(a,b){this.x=a||0,this.y=b||0},THREE.Vector2.prototype={constructor:THREE.Vector2,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},
//
set:function(a,b){return this.x=a,this.y=b,this},setScalar:function(a){return this.x=a,this.y=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw new Error("index is out of range: "+a)}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){return this.x=a.x,this.y=a.y,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this)},addScalar:function(a){return this.x+=a,this.y+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this)},subScalar:function(a){return this.x-=a,this.y-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this},multiply:function(a){return this.x*=a.x,this.y*=a.y,this},multiplyScalar:function(a){return isFinite(a)?(this.x*=a,this.y*=a):(this.x=0,this.y=0),this},divide:function(a){return this.x/=a.x,this.y/=a.y,this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this},clamp:function(a,b){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this},clampScalar:function(){var a,b;return function(c,d){return void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2),a.set(c,c),b.set(d,d),this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c),this},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){
// computes the angle in radians with respect to the positive x-axis
var a=Math.atan2(this.y,this.x);return a<0&&(a+=2*Math.PI),a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;return b*b+c*c},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a),this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a},fromAttribute:function(a,b,c){return void 0===c&&(c=0),b=b*a.itemSize+c,this.x=a.array[b],this.y=a.array[b+1],this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;return this.x=e*c-f*d+a.x,this.y=e*d+f*c+a.y,this}},
// File:src/math/Vector3.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author *kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.Vector3=function(a,b,c){this.x=a||0,this.y=b||0,this.z=c||0},THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){return this.x=a,this.y=b,this.z=c,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw new Error("index is out of range: "+a)}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b)):(this.x*=a.x,this.y*=a.y,this.z*=a.z,this)},multiplyScalar:function(a){return isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):(this.x=0,this.y=0,this.z=0),this},multiplyVectors:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this},applyEuler:function(){var a;return function(b){return b instanceof THREE.Euler==!1&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),void 0===a&&(a=new THREE.Quaternion),this.applyQuaternion(a.setFromEuler(b)),this}}(),applyAxisAngle:function(){var a;return function(b,c){return void 0===a&&(a=new THREE.Quaternion),this.applyQuaternion(a.setFromAxisAngle(b,c)),this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[3]*c+e[6]*d,this.y=e[1]*b+e[4]*c+e[7]*d,this.z=e[2]*b+e[5]*c+e[8]*d,this},applyMatrix4:function(a){
// input: THREE.Matrix4 affine matrix
var b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[4]*c+e[8]*d+e[12],this.y=e[1]*b+e[5]*c+e[9]*d+e[13],this.z=e[2]*b+e[6]*c+e[10]*d+e[14],this},applyProjection:function(a){
// input: THREE.Matrix4 projection matrix
var b=this.x,c=this.y,d=this.z,e=a.elements,f=1/(e[3]*b+e[7]*c+e[11]*d+e[15]);// perspective divide
return this.x=(e[0]*b+e[4]*c+e[8]*d+e[12])*f,this.y=(e[1]*b+e[5]*c+e[9]*d+e[13])*f,this.z=(e[2]*b+e[6]*c+e[10]*d+e[14])*f,this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z,h=a.w,i=h*b+f*d-g*c,j=h*c+g*b-e*d,k=h*d+e*c-f*b,l=-e*b-f*c-g*d;
// calculate result * inverse quat
return this.x=i*h+l*-e+j*-g-k*-f,this.y=j*h+l*-f+k*-e-i*-g,this.z=k*h+l*-g+i*-f-j*-e,this},project:function(){var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld)),this.applyProjection(a)}}(),unproject:function(){var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix)),this.applyProjection(a)}}(),transformDirection:function(a){
// input: THREE.Matrix4 affine matrix
// vector interpreted as a direction
var b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[4]*c+e[8]*d,this.y=e[1]*b+e[5]*c+e[9]*d,this.z=e[2]*b+e[6]*c+e[10]*d,this.normalize(),this},divide:function(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this},clamp:function(a,b){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this},clampScalar:function(){var a,b;return function(c,d){return void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3),a.set(c,c,c),b.set(d,d,d),this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c),this},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a),this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;return this.x=d*a.z-e*a.y,this.y=e*a.x-c*a.z,this.z=c*a.y-d*a.x,this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;return this.x=d*h-e*g,this.y=e*f-c*h,this.z=c*g-d*f,this},projectOnVector:function(){var a,b;return function(c){return void 0===a&&(a=new THREE.Vector3),a.copy(c).normalize(),b=this.dot(a),this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){return void 0===a&&(a=new THREE.Vector3),a.copy(this).projectOnVector(b),this.sub(a)}}(),reflect:function(){
// reflect incident vector off plane orthogonal to normal
// normal is assumed to have unit length
var a;return function(b){return void 0===a&&(a=new THREE.Vector3),this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){var b=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());
// clamp, to handle numerical problems
return Math.acos(THREE.Math.clamp(b,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,d=this.z-a.z;return b*b+c*c+d*d},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;return this.x=b*Math.sin(a.theta),this.y=Math.cos(a.phi)*a.radius,this.z=b*Math.cos(a.theta),this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length(),d=this.setFromMatrixColumn(a,2).length();return this.x=b,this.y=c,this.z=d,this},setFromMatrixColumn:function(a,b){return"number"==typeof a&&(console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index )."),a=arguments[1],b=arguments[0]),this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a},fromAttribute:function(a,b,c){return void 0===c&&(c=0),b=b*a.itemSize+c,this.x=a.array[b],this.y=a.array[b+1],this.z=a.array[b+2],this}},
// File:src/math/Vector4.js
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.Vector4=function(a,b,c,d){this.x=a||0,this.y=b||0,this.z=c||0,this.w=void 0!==d?d:1},THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this.w=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setW:function(a){return this.w=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw new Error("index is out of range: "+a)}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=void 0!==a.w?a.w:1,this},add:function(a,b){return void 0!==b?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this.w=a.w+b.w,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this.w+=a.w*b,this},sub:function(a,b){return void 0!==b?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this.w=a.w-b.w,this},multiplyScalar:function(a){return isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.x=0,this.y=0,this.z=0,this.w=0),this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,f=a.elements;return this.x=f[0]*b+f[4]*c+f[8]*d+f[12]*e,this.y=f[1]*b+f[5]*c+f[9]*d+f[13]*e,this.z=f[2]*b+f[6]*c+f[10]*d+f[14]*e,this.w=f[3]*b+f[7]*c+f[11]*d+f[15]*e,this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm
// q is assumed to be normalized
this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);return b<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b),this},setAxisAngleFromRotationMatrix:function(a){
// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
var b,c,d,e,// variables for result
f=.01,// margin to allow for rounding errors
g=.1,// margin to distinguish between 0 and 180 degrees
h=a.elements,i=h[0],j=h[4],k=h[8],l=h[1],m=h[5],n=h[9],o=h[2],p=h[6],q=h[10];if(Math.abs(j-l)<f&&Math.abs(k-o)<f&&Math.abs(n-p)<f){
// singularity found
// first check for identity matrix which must have +1 for all terms
// in leading diagonal and zero in other terms
if(Math.abs(j+l)<g&&Math.abs(k+o)<g&&Math.abs(n+p)<g&&Math.abs(i+m+q-3)<g)
// this singularity is identity matrix so angle = 0
return this.set(1,0,0,0),this;
// otherwise this singularity is angle = 180
b=Math.PI;var r=(i+1)/2,s=(m+1)/2,t=(q+1)/2,u=(j+l)/4,v=(k+o)/4,w=(n+p)/4;
// m11 is the largest diagonal term
// m22 is the largest diagonal term
// m33 is the largest diagonal term so base result on this
return r>s&&r>t?r<f?(c=0,d=.707106781,e=.707106781):(c=Math.sqrt(r),d=u/c,e=v/c):s>t?s<f?(c=.707106781,d=0,e=.707106781):(d=Math.sqrt(s),c=u/d,e=w/d):t<f?(c=.707106781,d=.707106781,e=0):(e=Math.sqrt(t),c=v/e,d=w/e),this.set(c,d,e,b),this}
// as we have reached here there are no singularities so we can handle normally
var x=Math.sqrt((p-n)*(p-n)+(k-o)*(k-o)+(l-j)*(l-j));// used to normalize
// prevent divide by zero, should not happen if matrix is orthogonal and should be
// caught by singularity test above, but I've left it in just in case
return Math.abs(x)<.001&&(x=1),this.x=(p-n)/x,this.y=(k-o)/x,this.z=(l-j)/x,this.w=Math.acos((i+m+q-1)/2),this},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this},clamp:function(a,b){
// This function assumes min < max, if this assumption isn't true it will not operate correctly
return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this.w=Math.max(a.w,Math.min(b.w,this.w)),this},clampScalar:function(){var a,b;return function(c,d){return void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4),a.set(c,c,c,c),b.set(d,d,d,d),this.clamp(a,b)}}(),floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this.w+=(a.w-this.w)*b,this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a),this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){return void 0===b&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this.w=a[b+3],this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a[b+3]=this.w,a},fromAttribute:function(a,b,c){return void 0===c&&(c=0),b=b*a.itemSize+c,this.x=a.array[b],this.y=a.array[b+1],this.z=a.array[b+2],this.w=a.array[b+3],this}},
// File:src/math/Euler.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */
THREE.Euler=function(a,b,c,d){this._x=a||0,this._y=b||0,this._z=c||0,this._order=d||THREE.Euler.DefaultOrder},THREE.Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"],THREE.Euler.DefaultOrder="XYZ",THREE.Euler.prototype={constructor:THREE.Euler,get x(){return this._x},set x(a){this._x=a,this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a,this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a,this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a,this.onChangeCallback()},set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._order=d||this._order,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this.onChangeCallback(),this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements,f=e[0],g=e[4],h=e[8],i=e[1],j=e[5],k=e[9],l=e[2],m=e[6],n=e[10];return b=b||this._order,"XYZ"===b?(this._y=Math.asin(d(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(-k,n),this._z=Math.atan2(-g,f)):(this._x=Math.atan2(m,j),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(k,-1,1)),Math.abs(k)<.99999?(this._y=Math.atan2(h,n),this._z=Math.atan2(i,j)):(this._y=Math.atan2(-l,f),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(m,-1,1)),Math.abs(m)<.99999?(this._y=Math.atan2(-l,n),this._z=Math.atan2(-g,j)):(this._y=0,this._z=Math.atan2(i,f))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(m,n),this._z=Math.atan2(i,f)):(this._x=0,this._z=Math.atan2(-g,j))):"YZX"===b?(this._z=Math.asin(d(i,-1,1)),Math.abs(i)<.99999?(this._x=Math.atan2(-k,j),this._y=Math.atan2(-l,f)):(this._x=0,this._y=Math.atan2(h,n))):"XZY"===b?(this._z=Math.asin(-d(g,-1,1)),Math.abs(g)<.99999?(this._x=Math.atan2(m,j),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-k,n),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b),this._order=b,c!==!1&&this.onChangeCallback(),this},setFromQuaternion:function(){var a;return function(b,c,d){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationFromQuaternion(b),this.setFromRotationMatrix(a,c,d),this}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){
// WARNING: this discards revolution information -bhouston
var a=new THREE.Quaternion;return function(b){a.setFromEuler(this),this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){return this._x=a[0],this._y=a[1],this._z=a[2],void 0!==a[3]&&(this._order=a[3]),this.onChangeCallback(),this},toArray:function(a,b){return void 0===a&&(a=[]),void 0===b&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._order,a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){return this.onChangeCallback=a,this},onChangeCallback:function(){}},
// File:src/math/Line3.js
/**
 * @author bhouston / http://clara.io
 */
THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3,this.end=void 0!==b?b:new THREE.Vector3},THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){return this.start.copy(a),this.end.copy(b),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.start.copy(a.start),this.end.copy(a.end),this},center:function(a){var b=a||new THREE.Vector3;return b.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){var b=a||new THREE.Vector3;return b.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start),b.subVectors(this.end,this.start);var e=b.dot(b),f=b.dot(a),g=f/e;return d&&(g=THREE.Math.clamp(g,0,1)),g}}(),closestPointToPoint:function(a,b,c){var d=this.closestPointToPointParameter(a,b),e=c||new THREE.Vector3;return this.delta(e).multiplyScalar(d).add(this.start)},applyMatrix4:function(a){return this.start.applyMatrix4(a),this.end.applyMatrix4(a),this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}},
// File:src/math/Box2.js
/**
 * @author bhouston / http://clara.io
 */
THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(+(1/0),+(1/0)),this.max=void 0!==b?b:new THREE.Vector2(-(1/0),-(1/0))},THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d),this.max.copy(b).add(d),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=+(1/0),this.max.x=this.max.y=-(1/0),this},isEmpty:function(){
// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){var b=a||new THREE.Vector2;return b.addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){var b=a||new THREE.Vector2;return b.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},containsPoint:function(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y)},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){
// This can potentially have a divide by zero if the box
// has a size dimension of 0.
var c=b||new THREE.Vector2;return c.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){
// using 6 splitting planes to rule out intersections.
return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y)},clampPoint:function(a,b){var c=b||new THREE.Vector2;return c.copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){var c=a.copy(b).clamp(this.min,this.max);return c.sub(b).length()}}(),intersect:function(a){return this.min.max(a.min),this.max.min(a.max),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}},
// File:src/math/Box3.js
/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(+(1/0),+(1/0),+(1/0)),this.max=void 0!==b?b:new THREE.Vector3(-(1/0),-(1/0),-(1/0))},THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromArray:function(a){for(var b=+(1/0),c=+(1/0),d=+(1/0),e=-(1/0),f=-(1/0),g=-(1/0),h=0,i=a.length;h<i;h+=3){var j=a[h],k=a[h+1],l=a[h+2];j<b&&(b=j),k<c&&(c=k),l<d&&(d=l),j>e&&(e=j),k>f&&(f=k),l>g&&(g=l)}this.min.set(b,c,d),this.max.set(e,f,g)},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);return this.min.copy(b).sub(d),this.max.copy(b).add(d),this}}(),setFromObject:function(){
// Computes the world-axis-aligned bounding box of an object (including its children),
// accounting for both the object's, and children's, world transforms
var a=new THREE.Vector3;return function(b){var c=this;return b.updateMatrixWorld(!0),this.makeEmpty(),b.traverse(function(b){var d=b.geometry;if(void 0!==d)if(d instanceof THREE.Geometry)for(var e=d.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(d instanceof THREE.BufferGeometry&&void 0!==d.attributes.position)for(var h=d.attributes.position.array,f=0,g=h.length;f<g;f+=3)a.fromArray(h,f),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=+(1/0),this.max.x=this.max.y=this.max.z=-(1/0),this},isEmpty:function(){
// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes
return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){var b=a||new THREE.Vector3;return b.addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){var b=a||new THREE.Vector3;return b.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},containsPoint:function(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z)},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){
// This can potentially have a divide by zero if the box
// has a size dimension of 0.
var c=b||new THREE.Vector3;return c.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){
// using 6 splitting planes to rule out intersections.
return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z)},intersectsSphere:function(){var a;return function(b){
// If that point is inside the sphere, the AABB and sphere intersect.
// Find the point on the AABB closest to the sphere center.
return void 0===a&&(a=new THREE.Vector3),this.clampPoint(b.center,a),a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){
// We compute the minimum and maximum dot product values. If those values
// are on the same side (back or front) of the plane, then there is no intersection.
var b,c;return a.normal.x>0?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x),a.normal.y>0?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y),a.normal.z>0?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z),b<=a.constant&&c>=a.constant},clampPoint:function(a,b){var c=b||new THREE.Vector3;return c.copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.copy(b).clamp(this.min,this.max);return c.sub(b).length()}}(),getBoundingSphere:function(){var a=new THREE.Vector3;return function(b){var c=b||new THREE.Sphere;return c.center=this.center(),c.radius=.5*this.size(a).length(),c}}(),intersect:function(a){
// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){
// transform of empty box is an empty box.
// transform of empty box is an empty box.
// NOTE: I am using a binary pattern to specify all 2^3 combinations below
// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111
return this.isEmpty()?this:(a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b),a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b),a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b),a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b),a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b),a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b),a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b),a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b),this.setFromPoints(a),this)}}(),translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}},
// File:src/math/Matrix3.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 * @author tschw
 */
THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")},THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,i){var j=this.elements;return j[0]=a,j[1]=d,j[2]=g,j[3]=b,j[4]=e,j[5]=h,j[6]=c,j[7]=f,j[8]=i,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=a.elements;return this.set(b[0],b[3],b[6],b[1],b[4],b[7],b[2],b[5],b[8]),this},setFromMatrix4:function(a){var b=a.elements;return this.set(b[0],b[4],b[8],b[1],b[5],b[9],b[2],b[6],b[10]),this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3),void 0===c&&(c=0),void 0===d&&(d=b.length);for(var e=0,f=c;e<d;e+=3,f+=3)a.fromArray(b,f),a.applyMatrix3(this),a.toArray(b,f);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3),void 0===c&&(c=0),void 0===d&&(d=b.length/b.itemSize);for(var e=0,f=c;e<d;e++,f++)a.x=b.getX(f),a.y=b.getY(f),a.z=b.getZ(f),a.applyMatrix3(this),b.setXYZ(a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;return b[0]*=a,b[3]*=a,b[6]*=a,b[1]*=a,b[4]*=a,b[7]*=a,b[2]*=a,b[5]*=a,b[8]*=a,this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8];return b*f*j-b*g*i-c*e*j+c*g*h+d*e*i-d*f*h},getInverse:function(a,b){a instanceof THREE.Matrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],i=c[4],j=c[5],k=c[6],l=c[7],m=c[8],n=m*i-j*l,o=j*k-m*h,p=l*h-i*k,q=e*n+f*o+g*p;if(0===q){var r="THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";if(b)throw new Error(r);return console.warn(r),this.identity()}return d[0]=n,d[1]=g*l-m*f,d[2]=j*f-g*i,d[3]=o,d[4]=m*e-g*k,d[5]=g*h-j*e,d[6]=p,d[7]=f*k-l*e,d[8]=i*e-f*h,this.multiplyScalar(1/q)},transpose:function(){var a,b=this.elements;return a=b[1],b[1]=b[3],b[3]=a,a=b[2],b[2]=b[6],b[6]=a,a=b[5],b[5]=b[7],b[7]=a,this},flattenToArrayOffset:function(a,b){return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),this.toArray(a,b)},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;return a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8],this},fromArray:function(a){return this.elements.set(a),this},toArray:function(a,b){void 0===a&&(a=[]),void 0===b&&(b=0);var c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a}},
// File:src/math/Matrix4.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")},THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=this.elements;return q[0]=a,q[4]=b,q[8]=c,q[12]=d,q[1]=e,q[5]=f,q[9]=g,q[13]=h,q[2]=i,q[6]=j,q[10]=k,q[14]=l,q[3]=m,q[7]=n,q[11]=o,q[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)},copy:function(a){return this.elements.set(a.elements),this},copyPosition:function(a){var b=this.elements,c=a.elements;return b[12]=c[12],b[13]=c[13],b[14]=c[14],this},extractBasis:function(a,b,c){return a.setFromMatrixColumn(this,0),b.setFromMatrixColumn(this,1),c.setFromMatrixColumn(this,2),this},makeBasis:function(a,b,c){return this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1),this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length(),g=1/a.setFromMatrixColumn(b,2).length();return c[0]=d[0]*e,c[1]=d[1]*e,c[2]=d[2]*e,c[4]=d[4]*f,c[5]=d[5]*f,c[6]=d[6]*f,c[8]=d[8]*g,c[9]=d[9]*g,c[10]=d[10]*g,this}}(),makeRotationFromEuler:function(a){a instanceof THREE.Euler==!1&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),g=Math.sin(c),h=Math.cos(d),i=Math.sin(d),j=Math.cos(e),k=Math.sin(e);if("XYZ"===a.order){var l=f*j,m=f*k,n=g*j,o=g*k;b[0]=h*j,b[4]=-h*k,b[8]=i,b[1]=m+n*i,b[5]=l-o*i,b[9]=-g*h,b[2]=o-l*i,b[6]=n+m*i,b[10]=f*h}else if("YXZ"===a.order){var p=h*j,q=h*k,r=i*j,s=i*k;b[0]=p+s*g,b[4]=r*g-q,b[8]=f*i,b[1]=f*k,b[5]=f*j,b[9]=-g,b[2]=q*g-r,b[6]=s+p*g,b[10]=f*h}else if("ZXY"===a.order){var p=h*j,q=h*k,r=i*j,s=i*k;b[0]=p-s*g,b[4]=-f*k,b[8]=r+q*g,b[1]=q+r*g,b[5]=f*j,b[9]=s-p*g,b[2]=-f*i,b[6]=g,b[10]=f*h}else if("ZYX"===a.order){var l=f*j,m=f*k,n=g*j,o=g*k;b[0]=h*j,b[4]=n*i-m,b[8]=l*i+o,b[1]=h*k,b[5]=o*i+l,b[9]=m*i-n,b[2]=-i,b[6]=g*h,b[10]=f*h}else if("YZX"===a.order){var t=f*h,u=f*i,v=g*h,w=g*i;b[0]=h*j,b[4]=w-t*k,b[8]=v*k+u,b[1]=k,b[5]=f*j,b[9]=-g*j,b[2]=-i*j,b[6]=u*k+v,b[10]=t-w*k}else if("XZY"===a.order){var t=f*h,u=f*i,v=g*h,w=g*i;b[0]=h*j,b[4]=-k,b[8]=i*j,b[1]=t*k+w,b[5]=f*j,b[9]=u*k-v,b[2]=v*k-u,b[6]=g*j,b[10]=w*k+t}
// last column
// bottom row
return b[3]=0,b[7]=0,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,i=e+e,j=c*g,k=c*h,l=c*i,m=d*h,n=d*i,o=e*i,p=f*g,q=f*h,r=f*i;
// last column
// bottom row
return b[0]=1-(m+o),b[4]=k-r,b[8]=l+q,b[1]=k+r,b[5]=1-(j+o),b[9]=n-p,b[2]=l-q,b[6]=n+p,b[10]=1-(j+m),b[3]=0,b[7]=0,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new THREE.Vector3),void 0===b&&(b=new THREE.Vector3),void 0===c&&(c=new THREE.Vector3);var g=this.elements;return c.subVectors(d,e).normalize(),0===c.lengthSq()&&(c.z=1),a.crossVectors(f,c).normalize(),0===a.lengthSq()&&(c.x+=1e-4,a.crossVectors(f,c).normalize()),b.crossVectors(c,a),g[0]=a.x,g[4]=b.x,g[8]=c.x,g[1]=a.y,g[5]=b.y,g[9]=c.y,g[2]=a.z,g[6]=b.z,g[10]=c.z,this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],k=c[5],l=c[9],m=c[13],n=c[2],o=c[6],p=c[10],q=c[14],r=c[3],s=c[7],t=c[11],u=c[15],v=d[0],w=d[4],x=d[8],y=d[12],z=d[1],A=d[5],B=d[9],C=d[13],D=d[2],E=d[6],F=d[10],G=d[14],H=d[3],I=d[7],J=d[11],K=d[15];return e[0]=f*v+g*z+h*D+i*H,e[4]=f*w+g*A+h*E+i*I,e[8]=f*x+g*B+h*F+i*J,e[12]=f*y+g*C+h*G+i*K,e[1]=j*v+k*z+l*D+m*H,e[5]=j*w+k*A+l*E+m*I,e[9]=j*x+k*B+l*F+m*J,e[13]=j*y+k*C+l*G+m*K,e[2]=n*v+o*z+p*D+q*H,e[6]=n*w+o*A+p*E+q*I,e[10]=n*x+o*B+p*F+q*J,e[14]=n*y+o*C+p*G+q*K,e[3]=r*v+s*z+t*D+u*H,e[7]=r*w+s*A+t*E+u*I,e[11]=r*x+s*B+t*F+u*J,e[15]=r*y+s*C+t*G+u*K,this},multiplyToArray:function(a,b,c){var d=this.elements;return this.multiplyMatrices(a,b),c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],c[4]=d[4],c[5]=d[5],c[6]=d[6],c[7]=d[7],c[8]=d[8],c[9]=d[9],c[10]=d[10],c[11]=d[11],c[12]=d[12],c[13]=d[13],c[14]=d[14],c[15]=d[15],this},multiplyScalar:function(a){var b=this.elements;return b[0]*=a,b[4]*=a,b[8]*=a,b[12]*=a,b[1]*=a,b[5]*=a,b[9]*=a,b[13]*=a,b[2]*=a,b[6]*=a,b[10]*=a,b[14]*=a,b[3]*=a,b[7]*=a,b[11]*=a,b[15]*=a,this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3),void 0===c&&(c=0),void 0===d&&(d=b.length);for(var e=0,f=c;e<d;e+=3,f+=3)a.fromArray(b,f),a.applyMatrix4(this),a.toArray(b,f);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3),void 0===c&&(c=0),void 0===d&&(d=b.length/b.itemSize);for(var e=0,f=c;e<d;e++,f++)a.x=b.getX(f),a.y=b.getY(f),a.z=b.getZ(f),a.applyMatrix4(this),b.setXYZ(a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],k=a[6],l=a[10],m=a[14],n=a[3],o=a[7],p=a[11],q=a[15];
//TODO: make this more efficient
//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )
return n*(+e*h*k-d*i*k-e*g*l+c*i*l+d*g*m-c*h*m)+o*(+b*h*m-b*i*l+e*f*l-d*f*m+d*i*j-e*h*j)+p*(+b*i*k-b*g*m-e*f*k+c*f*m+e*g*j-c*i*j)+q*(-d*g*j-b*h*k+b*g*l+d*f*k-c*f*l+c*h*j)},transpose:function(){var a,b=this.elements;return a=b[1],b[1]=b[4],b[4]=a,a=b[2],b[2]=b[8],b[8]=a,a=b[6],b[6]=b[9],b[9]=a,a=b[3],b[3]=b[12],b[12]=a,a=b[7],b[7]=b[13],b[13]=a,a=b[11],b[11]=b[14],b[14]=a,this},flattenToArrayOffset:function(a,b){return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),this.toArray(a,b)},getPosition:function(){var a;return function(){return void 0===a&&(a=new THREE.Vector3),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),a.setFromMatrixColumn(this,3)}}(),setPosition:function(a){var b=this.elements;return b[12]=a.x,b[13]=a.y,b[14]=a.z,this},getInverse:function(a,b){
// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],i=d[4],j=d[5],k=d[6],l=d[7],m=d[8],n=d[9],o=d[10],p=d[11],q=d[12],r=d[13],s=d[14],t=d[15],u=n*s*l-r*o*l+r*k*p-j*s*p-n*k*t+j*o*t,v=q*o*l-m*s*l-q*k*p+i*s*p+m*k*t-i*o*t,w=m*r*l-q*n*l+q*j*p-i*r*p-m*j*t+i*n*t,x=q*n*k-m*r*k-q*j*o+i*r*o+m*j*s-i*n*s,y=e*u+f*v+g*w+h*x;if(0===y){var z="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(b)throw new Error(z);return console.warn(z),this.identity()}return c[0]=u,c[1]=r*o*h-n*s*h-r*g*p+f*s*p+n*g*t-f*o*t,c[2]=j*s*h-r*k*h+r*g*l-f*s*l-j*g*t+f*k*t,c[3]=n*k*h-j*o*h-n*g*l+f*o*l+j*g*p-f*k*p,c[4]=v,c[5]=m*s*h-q*o*h+q*g*p-e*s*p-m*g*t+e*o*t,c[6]=q*k*h-i*s*h-q*g*l+e*s*l+i*g*t-e*k*t,c[7]=i*o*h-m*k*h+m*g*l-e*o*l-i*g*p+e*k*p,c[8]=w,c[9]=q*n*h-m*r*h-q*f*p+e*r*p+m*f*t-e*n*t,c[10]=i*r*h-q*j*h+q*f*l-e*r*l-i*f*t+e*j*t,c[11]=m*j*h-i*n*h-m*f*l+e*n*l+i*f*p-e*j*p,c[12]=x,c[13]=m*r*g-q*n*g+q*f*o-e*r*o-m*f*s+e*n*s,c[14]=q*j*g-i*r*g-q*f*k+e*r*k+i*f*s-e*j*s,c[15]=i*n*g-m*j*g+m*f*k-e*n*k-i*f*o+e*j*o,this.multiplyScalar(1/y)},scale:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z;return b[0]*=c,b[4]*=d,b[8]*=e,b[1]*=c,b[5]*=d,b[9]*=e,b[2]*=c,b[6]*=d,b[10]*=e,b[3]*=c,b[7]*=d,b[11]*=e,this},getMaxScaleOnAxis:function(){var a=this.elements,b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],d=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(b,c,d))},makeTranslation:function(a,b,c){return this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1),this},makeRotationX:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(1,0,0,0,0,b,-c,0,0,c,b,0,0,0,0,1),this},makeRotationY:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(b,0,c,0,0,1,0,0,-c,0,b,0,0,0,0,1),this},makeRotationZ:function(a){var b=Math.cos(a),c=Math.sin(a);return this.set(b,-c,0,0,c,b,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(a,b){
// Based on http://www.gamedev.net/reference/articles/article1199.asp
var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;return this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1),this},makeScale:function(a,b,c){return this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1),this},compose:function(a,b,c){return this.makeRotationFromQuaternion(b),this.scale(c),this.setPosition(a),this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new THREE.Vector3),void 0===b&&(b=new THREE.Matrix4);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length(),j=this.determinant();j<0&&(g=-g),c.x=f[12],c.y=f[13],c.z=f[14],
// scale the rotation part
b.elements.set(this.elements);// at this point matrix is incomplete so we can't use .copy()
var k=1/g,l=1/h,m=1/i;return b.elements[0]*=k,b.elements[1]*=k,b.elements[2]*=k,b.elements[4]*=l,b.elements[5]*=l,b.elements[6]*=l,b.elements[8]*=m,b.elements[9]*=m,b.elements[10]*=m,d.setFromRotationMatrix(b),e.x=g,e.y=h,e.z=i,this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements,h=2*e/(b-a),i=2*e/(d-c),j=(b+a)/(b-a),k=(d+c)/(d-c),l=-(f+e)/(f-e),m=-2*f*e/(f-e);return g[0]=h,g[4]=0,g[8]=j,g[12]=0,g[1]=0,g[5]=i,g[9]=k,g[13]=0,g[2]=0,g[6]=0,g[10]=l,g[14]=m,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this},makePerspective:function(a,b,c,d){var e=c*Math.tan(THREE.Math.DEG2RAD*a*.5),f=-e,g=f*b,h=e*b;return this.makeFrustum(g,h,f,e,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),i=1/(c-d),j=1/(f-e),k=(b+a)*h,l=(c+d)*i,m=(f+e)*j;return g[0]=2*h,g[4]=0,g[8]=0,g[12]=-k,g[1]=0,g[5]=2*i,g[9]=0,g[13]=-l,g[2]=0,g[6]=0,g[10]=-2*j,g[14]=-m,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this},equals:function(a){for(var b=this.elements,c=a.elements,d=0;d<16;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a){return this.elements.set(a),this},toArray:function(a,b){void 0===a&&(a=[]),void 0===b&&(b=0);var c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a[b+9]=c[9],a[b+10]=c[10],a[b+11]=c[11],a[b+12]=c[12],a[b+13]=c[13],a[b+14]=c[14],a[b+15]=c[15],a}},
// File:src/math/Ray.js
/**
 * @author bhouston / http://clara.io
 */
THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3,this.direction=void 0!==b?b:new THREE.Vector3},THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){return this.origin.copy(a),this.direction.copy(b),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this},at:function(a,b){var c=b||new THREE.Vector3;return c.copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize()},recast:function(){var a=new THREE.Vector3;return function(b){return this.origin.copy(this.at(b,a)),this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);var d=c.dot(this.direction);return d<0?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);
// point behind the ray
// point behind the ray
return c<0?this.origin.distanceToSquared(b):(a.copy(this.direction).multiplyScalar(c).add(this.origin),a.distanceToSquared(b))}}(),distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){
// from http://www.geometrictools.com/LibMathematics/Distance/Wm5DistRay3Segment3.cpp
// It returns the min distance between the ray and the segment
// defined by v0 and v1
// It can also set two optional targets :
// - The closest point on the ray
// - The closest point on the segment
a.copy(d).add(e).multiplyScalar(.5),b.copy(e).sub(d).normalize(),c.copy(this.origin).sub(a);var h,i,j,k,l=.5*d.distanceTo(e),m=-this.direction.dot(b),n=c.dot(this.direction),o=-c.dot(b),p=c.lengthSq(),q=Math.abs(1-m*m);if(q>0)if(
// The ray and segment are not parallel.
h=m*o-n,i=m*n-o,k=l*q,h>=0)if(i>=-k)if(i<=k){
// region 0
// Minimum at interior points of ray and segment.
var r=1/q;h*=r,i*=r,j=h*(h+m*i+2*n)+i*(m*h+i+2*o)+p}else
// region 1
i=l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;else
// region 5
i=-l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;else i<=-k?(
// region 4
h=Math.max(0,-(-m*l+n)),i=h>0?-l:Math.min(Math.max(-l,-o),l),j=-h*h+i*(i+2*o)+p):i<=k?(
// region 3
h=0,i=Math.min(Math.max(-l,-o),l),j=i*(i+2*o)+p):(
// region 2
h=Math.max(0,-(m*l+n)),i=h>0?l:Math.min(Math.max(-l,-o),l),j=-h*h+i*(i+2*o)+p);else
// Ray and segment are parallel.
i=m>0?-l:l,h=Math.max(0,-(m*i+n)),j=-h*h+i*(i+2*o)+p;return f&&f.copy(this.direction).multiplyScalar(h).add(this.origin),g&&g.copy(b).multiplyScalar(i).add(a),j}}(),intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;var g=Math.sqrt(f-e),h=d-g,i=d+g;
// test to see if both t0 and t1 are behind the ray - if so, return null
// test to see if both t0 and t1 are behind the ray - if so, return null
// test to see if t0 is behind the ray:
// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
// in order to always return an intersect point that is in front of the ray.
return h<0&&i<0?null:h<0?this.at(i,c):this.at(h,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)
// line is coplanar, return origin
// line is coplanar, return origin
return 0===a.distanceToPoint(this.origin)?0:null;var c=-(this.origin.dot(a.normal)+a.constant)/b;
// Return if the ray never intersects the plane
return c>=0?c:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){
// check if the ray lies on the plane first
var b=a.distanceToPoint(this.origin);if(0===b)return!0;var c=a.normal.dot(this.direction);return c*b<0},intersectBox:function(a,b){var c,d,e,f,g,h,i=1/this.direction.x,j=1/this.direction.y,k=1/this.direction.z,l=this.origin;
// These lines also handle the case where tmin or tmax is NaN
// (result of 0 * Infinity). x !== x returns true if x is NaN
//return point closest to the ray (positive side)
return i>=0?(c=(a.min.x-l.x)*i,d=(a.max.x-l.x)*i):(c=(a.max.x-l.x)*i,d=(a.min.x-l.x)*i),j>=0?(e=(a.min.y-l.y)*j,f=(a.max.y-l.y)*j):(e=(a.max.y-l.y)*j,f=(a.min.y-l.y)*j),c>f||e>d?null:((e>c||c!==c)&&(c=e),(f<d||d!==d)&&(d=f),k>=0?(g=(a.min.z-l.z)*k,h=(a.max.z-l.z)*k):(g=(a.max.z-l.z)*k,h=(a.min.z-l.z)*k),c>h||g>d?null:((g>c||c!==c)&&(c=g),(h<d||d!==d)&&(d=h),d<0?null:this.at(c>=0?c:d,b)))},intersectsBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){
// Compute the offset origin, edges, and normal.
var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,i){
// from http://www.geometrictools.com/LibMathematics/Intersection/Wm5IntrRay3Triangle3.cpp
b.subVectors(f,e),c.subVectors(g,e),d.crossVectors(b,c);
// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
var j,k=this.direction.dot(d);if(k>0){if(h)return null;j=1}else{if(!(k<0))return null;j=-1,k=-k}a.subVectors(this.origin,e);var l=j*this.direction.dot(c.crossVectors(a,c));
// b1 < 0, no intersection
if(l<0)return null;var m=j*this.direction.dot(b.cross(a));
// b2 < 0, no intersection
if(m<0)return null;
// b1+b2 > 1, no intersection
if(l+m>k)return null;
// Line intersects triangle, check if ray does.
var n=-j*a.dot(d);
// t < 0, no intersection
// t < 0, no intersection
return n<0?null:this.at(n/k,i)}}(),applyMatrix4:function(a){return this.direction.add(this.origin).applyMatrix4(a),this.origin.applyMatrix4(a),this.direction.sub(this.origin),this.direction.normalize(),this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}},
// File:src/math/Sphere.js
/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3,this.radius=void 0!==b?b:0},THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){return this.center.copy(a),this.radius=b,this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));return this.radius=Math.sqrt(e),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.center.copy(a.center),this.radius=a.radius,this},empty:function(){return this.radius<=0},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){
// We use the following equation to compute the signed distance from
// the center of the sphere to the plane.
//
// distance = q * n - d
//
// If this distance is greater than the radius of the sphere,
// then there is no intersection.
return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;return d.copy(a),c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center)),d},getBoundingBox:function(a){var b=a||new THREE.Box3;return b.set(this.center,this.center),b.expandByScalar(this.radius),b},applyMatrix4:function(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this},translate:function(a){return this.center.add(a),this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}},
// File:src/math/Frustum.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / http://clara.io
 */
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]},THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;return g[0].copy(a),g[1].copy(b),g[2].copy(c),g[3].copy(d),g[4].copy(e),g[5].copy(f),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;c<6;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],j=c[6],k=c[7],l=c[8],m=c[9],n=c[10],o=c[11],p=c[12],q=c[13],r=c[14],s=c[15];return b[0].setComponents(g-d,k-h,o-l,s-p).normalize(),b[1].setComponents(g+d,k+h,o+l,s+p).normalize(),b[2].setComponents(g+e,k+i,o+m,s+q).normalize(),b[3].setComponents(g-e,k-i,o-m,s-q).normalize(),b[4].setComponents(g-f,k-j,o-n,s-r).normalize(),b[5].setComponents(g+f,k+j,o+n,s+r).normalize(),this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;return null===c.boundingSphere&&c.computeBoundingSphere(),a.copy(c.boundingSphere),a.applyMatrix4(b.matrixWorld),this.intersectsSphere(a)}}(),intersectsSphere:function(a){for(var b=this.planes,c=a.center,d=-a.radius,e=0;e<6;e++){var f=b[e].distanceToPoint(c);if(f<d)return!1}return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;e<6;e++){var f=d[e];a.x=f.normal.x>0?c.min.x:c.max.x,b.x=f.normal.x>0?c.max.x:c.min.x,a.y=f.normal.y>0?c.min.y:c.max.y,b.y=f.normal.y>0?c.max.y:c.min.y,a.z=f.normal.z>0?c.min.z:c.max.z,b.z=f.normal.z>0?c.max.z:c.min.z;var g=f.distanceToPoint(a),h=f.distanceToPoint(b);
// if both outside plane, no intersection
if(g<0&&h<0)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;c<6;c++)if(b[c].distanceToPoint(a)<0)return!1;return!0}},
// File:src/math/Plane.js
/**
 * @author bhouston / http://clara.io
 */
THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0),this.constant=void 0!==b?b:0},THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){return this.normal.copy(a),this.constant=b,this},setComponents:function(a,b,c,d){return this.normal.set(a,b,c),this.constant=d,this},setFromNormalAndCoplanarPoint:function(a,b){// must be this.normal, not normal, as this.normal is normalized
return this.normal.copy(a),this.constant=-b.dot(this.normal),this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){var f=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();
// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?
return this.setFromNormalAndCoplanarPoint(f,c),this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.normal.copy(a.normal),this.constant=a.constant,this},normalize:function(){
// Note: will lead to a divide by zero if the plane is invalid.
var a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a),d=b||new THREE.Vector3;return d.copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0!==f){var g=-(b.start.dot(this.normal)+this.constant)/f;if(!(g<0||g>1))return d.copy(e).multiplyScalar(g).add(b.start)}else
// line is coplanar, return origin
if(0===this.distanceToPoint(b.start))return d.copy(b.start)}}(),intersectsLine:function(a){
// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.
var b=this.distanceToPoint(a.start),c=this.distanceToPoint(a.end);return b<0&&c>0||c<0&&b>0},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){var b=a||new THREE.Vector3;return b.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Matrix3;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),g=this.normal.applyMatrix3(f).normalize();
// recalculate constant (like in setFromNormalAndCoplanarPoint)
return this.constant=-e.dot(g),this}}(),translate:function(a){return this.constant=this.constant-a.dot(this.normal),this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}},
// File:src/math/Spherical.js
/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
 *
 * The poles (phi) are at the positive and negative y axis.
 * The equator starts at positive z.
 */
THREE.Spherical=function(a,b,c){// around the equator of the sphere
// up / down towards top and bottom pole
return this.radius=void 0!==a?a:1,this.phi=void 0!==b?b:0,this.theta=void 0!==c?c:0,this},THREE.Spherical.prototype={constructor:THREE.Spherical,set:function(a,b,c){this.radius=a,this.phi=b,this.theta=c},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.radius.copy(a.radius),this.phi.copy(a.phi),this.theta.copy(a.theta),this},
// restrict phi to be betwee EPS and PI-EPS
makeSafe:function(){var a=1e-6;this.phi=Math.max(a,Math.min(Math.PI-a,this.phi))},setFromVector3:function(a){// equator angle around y-up axis
return this.radius=a.length(),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(THREE.Math.clamp(a.y/this.radius,-1,1))),this}},
// File:src/math/Math.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Math={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){
// http://www.broofa.com/Tools/Math.uuid.htm
var a,b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),c=new Array(36),d=0;return function(){for(var e=0;e<36;e++)8===e||13===e||18===e||23===e?c[e]="-":14===e?c[e]="4":(d<=2&&(d=33554432+16777216*Math.random()|0),a=15&d,d>>=4,c[e]=b[19===e?3&a|8:a]);return c.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},
// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
euclideanModulo:function(a,b){return(a%b+b)%b},
// Linear mapping from range <a1, a2> to range <b1, b2>
mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},
// http://en.wikipedia.org/wiki/Smoothstep
smoothstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*(3-2*a))},smootherstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*a*(a*(6*a-15)+10))},random16:function(){return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),Math.random()},
// Random integer from <low, high> interval
randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},
// Random float from <low, high> interval
randFloat:function(a,b){return a+Math.random()*(b-a)},
// Random float from <-range/2, range/2> interval
randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*THREE.Math.DEG2RAD},radToDeg:function(a){return a*THREE.Math.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}},
// File:src/math/Spline.js
/**
 * Spline from Tween.js, slightly optimized (and trashed)
 * http://sole.github.com/tween.js/examples/05_spline.html
 *
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Spline=function(a){
// Catmull-Rom
function b(a,b,c,d,e,f,g){var h=.5*(c-a),i=.5*(d-b);return(2*(b-c)+h+i)*g+(-3*(b-c)-2*h-i)*f+h*e+b}this.points=a;var c,d,e,f,g,h,i,j,k,l=[],m={x:0,y:0,z:0};this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}},this.getPoint=function(a){return c=(this.points.length-1)*a,d=Math.floor(c),e=c-d,l[0]=0===d?d:d-1,l[1]=d,l[2]=d>this.points.length-2?this.points.length-1:d+1,l[3]=d>this.points.length-3?this.points.length-1:d+2,h=this.points[l[0]],i=this.points[l[1]],j=this.points[l[2]],k=this.points[l[3]],f=e*e,g=e*f,m.x=b(h.x,i.x,j.x,k.x,e,f,g),m.y=b(h.y,i.y,j.y,k.y,e,f,g),m.z=b(h.z,i.z,j.z,k.z,e,f,g),m},this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d},
// approximate length by summing linear segments
this.getLength=function(a){var b,c,d,e,f=0,g=0,h=0,i=new THREE.Vector3,j=new THREE.Vector3,k=[],l=0;for(
// first point has 0 length
k[0]=0,a||(a=100),d=this.points.length*a,i.copy(this.points[0]),b=1;b<d;b++)c=b/d,e=this.getPoint(c),j.copy(e),l+=j.distanceTo(i),i.copy(e),f=(this.points.length-1)*c,g=Math.floor(f),g!==h&&(k[g]=l,h=g);
// last point ends with total length
return k[k.length]=l,{chunks:k,total:l}},this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h,i,j=[],k=new THREE.Vector3,l=this.getLength();for(j.push(k.copy(this.points[0]).clone()),b=1;b<this.points.length;b++){for(
//tmpVec.copy( this.points[ i - 1 ] );
//linearDistance = tmpVec.distanceTo( this.points[ i ] );
g=l.chunks[b]-l.chunks[b-1],h=Math.ceil(a*g/l.total),e=(b-1)/(this.points.length-1),f=b/(this.points.length-1),c=1;c<h-1;c++)d=e+c*(1/h)*(f-e),i=this.getPoint(d),j.push(k.copy(i).clone());j.push(k.copy(this.points[b]).clone())}this.points=j}},
// File:src/math/Triangle.js
/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3,this.b=void 0!==b?b:new THREE.Vector3,this.c=void 0!==c?c:new THREE.Vector3},THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){var f=e||new THREE.Vector3;f.subVectors(d,c),a.subVectors(b,c),f.cross(a);var g=f.lengthSq();return g>0?f.multiplyScalar(1/Math.sqrt(g)):f.set(0,0,0)}}(),
// static/instance method to calculate barycentric coordinates
// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e),b.subVectors(f,e),c.subVectors(d,e);var i=a.dot(a),j=a.dot(b),k=a.dot(c),l=b.dot(b),m=b.dot(c),n=i*l-j*j,o=h||new THREE.Vector3;
// collinear or singular triangle
if(0===n)
// arbitrary location outside of triangle?
// not sure if this is the best idea, maybe should be returning undefined
return o.set(-2,-1,-1);var p=1/n,q=(l*k-j*m)*p,r=(i*m-j*k)*p;
// barycentric coordinates must always sum to 1
return o.set(1-q-r,r,q)}}(),THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){var f=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return f.x>=0&&f.y>=0&&f.x+f.y<=1}}(),THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){return this.a.copy(a),this.b.copy(b),this.c.copy(c),this},setFromPointsAndIndices:function(a,b,c,d){return this.a.copy(a[b]),this.b.copy(a[c]),this.c.copy(a[d]),this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){return a.subVectors(this.c,this.b),b.subVectors(this.a,this.b),.5*a.cross(b).length()}}(),midpoint:function(a){var b=a||new THREE.Vector3;return b.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){var b=a||new THREE.Plane;return b.setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a,b,c,d;return function(e,f){void 0===a&&(a=new THREE.Plane,b=[new THREE.Line3,new THREE.Line3,new THREE.Line3],c=new THREE.Vector3,d=new THREE.Vector3);var g=f||new THREE.Vector3,h=1/0;
// check if the projection lies within the triangle
if(
// project the point onto the plane of the triangle
a.setFromCoplanarPoints(this.a,this.b,this.c),a.projectPoint(e,c),this.containsPoint(c)===!0)
// if so, this is the closest point
g.copy(c);else{
// if not, the point falls outside the triangle. the result is the closest point to the triangle's edges or vertices
b[0].set(this.a,this.b),b[1].set(this.b,this.c),b[2].set(this.c,this.a);for(var i=0;i<b.length;i++){b[i].closestPointToPoint(c,!0,d);var j=c.distanceToSquared(d);j<h&&(h=j,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}},
// File:src/math/Interpolant.js
/**
 * Abstract base class of interpolants over parametric samples.
 *
 * The parameter domain is one dimensional, typically the time or a path
 * along a curve defined by the data.
 *
 * The sample values can have any dimensionality and derived classes may
 * apply special interpretations to the data.
 *
 * This class provides the interval seek in a Template Method, deferring
 * the actual interpolation to derived classes.
 *
 * Time complexity is O(1) for linear access crossing at most two points
 * and O(log N) for random access, where N is the number of positions.
 *
 * References:
 *
 * 		http://www.oodesign.com/template-method-pattern.html
 *
 * @author tschw
 */
THREE.Interpolant=function(a,b,c,d){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=void 0!==d?d:new b.constructor(c),this.sampleValues=b,this.valueSize=c},THREE.Interpolant.prototype={constructor:THREE.Interpolant,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{var f;c:{
//- See http://jsperf.com/comparison-to-undefined/3
//- slower code:
//-
//- 				if ( t >= t1 || t1 === undefined ) {
d:if(!(a<d)){for(var g=c+2;;){if(void 0===d){if(a<e)break d;
// after end
return c=b.length,this._cachedIndex=c,this.afterEnd_(c-1,a,e)}if(c===g)break;if(// this loop
e=d,d=b[++c],a<d)
// we have arrived at the sought interval
break b}
// prepare binary search on the right side of the index
f=b.length;break c}
//- slower code:
//-					if ( t < t0 || t0 === undefined ) {
{if(a>=e)
// the interval is valid
break a;
// looping?
var h=b[1];a<h&&(c=2,// + 1, using the scan for the details
e=h);
// linear reverse scan
for(var g=c-2;;){if(void 0===e)
// before start
return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===g)break;if(// this loop
d=e,e=b[--c-1],a>=e)
// we have arrived at the sought interval
break b}
// prepare binary search on the left side of the index
f=c,c=0}}// linear scan
// binary search
for(;c<f;){var i=c+f>>>1;a<b[i]?f=i:c=i+1}
// check boundary cases, again
if(d=b[c],e=b[c-1],void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return c=b.length,this._cachedIndex=c,this.afterEnd_(c-1,e,a)}// seek
this._cachedIndex=c,this.intervalChanged_(c,e,d)}// validate_interval
return this.interpolate_(c,e,a,d)},settings:null,// optional, subclass-specific settings structure
// Note: The indirection allows central control of many interpolants.
// --- Protected interface
DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){for(var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize,e=a*d,f=0;f!==d;++f)b[f]=c[e+f];return b},
// Template methods for derived classes:
interpolate_:function(a,b,c,d){throw new Error("call to abstract method")},intervalChanged_:function(a,b,c){}},Object.assign(THREE.Interpolant.prototype,{beforeStart_://( 0, t, t0 ), returns this.resultBuffer
THREE.Interpolant.prototype.copySampleValue_,afterEnd_://( N-1, tN-1, t ), returns this.resultBuffer
THREE.Interpolant.prototype.copySampleValue_}),
// File:src/math/interpolants/CubicInterpolant.js
/**
 * Fast and simple cubic spline interpolant.
 *
 * It was derived from a Hermitian construction setting the first derivative
 * at each sample position to the linear slope between neighboring positions
 * over their parameter interval.
 *
 * @author tschw
 */
THREE.CubicInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0},THREE.CubicInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.CubicInterpolant,DefaultSettings_:{endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case THREE.ZeroSlopeEnding:
// f'(t0) = 0
e=a,g=2*b-c;break;case THREE.WrapAroundEnding:
// use the other end of the curve
e=d.length-2,g=b+d[e]-d[e+1];break;default:// ZeroCurvatureEnding
// f''(t0) = 0 a.k.a. Natural Spline
e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case THREE.ZeroSlopeEnding:
// f'(tN) = 0
f=a,h=2*c-b;break;case THREE.WrapAroundEnding:
// use the other end of the curve
f=1,h=c+d[1]-d[0];break;default:// ZeroCurvatureEnding
// f''(tN) = 0, a.k.a. Natural Spline
f=a-1,h=b}var i=.5*(c-b),j=this.valueSize;this._weightPrev=i/(b-g),this._weightNext=i/(h-c),this._offsetPrev=e*j,this._offsetNext=f*j},interpolate_:function(a,b,c,d){
// combine data linearly
for(var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=a*g,i=h-g,j=this._offsetPrev,k=this._offsetNext,l=this._weightPrev,m=this._weightNext,n=(c-b)/(d-b),o=n*n,p=o*n,q=-l*p+2*l*o-l*n,r=(1+l)*p+(-1.5-2*l)*o+(-.5+l)*n+1,s=(-1-m)*p+(1.5+m)*o+.5*n,t=m*p-m*o,u=0;u!==g;++u)e[u]=q*f[j+u]+r*f[i+u]+s*f[h+u]+t*f[k+u];return e}}),
// File:src/math/interpolants/DiscreteInterpolant.js
/**
 *
 * Interpolant that evaluates to the sample value at the position preceeding
 * the parameter.
 *
 * @author tschw
 */
THREE.DiscreteInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)},THREE.DiscreteInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.DiscreteInterpolant,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}}),
// File:src/math/interpolants/LinearInterpolant.js
/**
 * @author tschw
 */
THREE.LinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)},THREE.LinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.LinearInterpolant,interpolate_:function(a,b,c,d){for(var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=a*g,i=h-g,j=(c-b)/(d-b),k=1-j,l=0;l!==g;++l)e[l]=f[i+l]*k+f[h+l]*j;return e}}),
// File:src/math/interpolants/QuaternionLinearInterpolant.js
/**
 * Spherical linear unit quaternion interpolant.
 *
 * @author tschw
 */
THREE.QuaternionLinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)},THREE.QuaternionLinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.QuaternionLinearInterpolant,interpolate_:function(a,b,c,d){for(var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=a*g,i=(c-b)/(d-b),j=h+g;h!==j;h+=4)THREE.Quaternion.slerpFlat(e,0,f,h-g,f,h,i);return e}}),
// File:src/core/Clock.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Clock=function(a){this.autoStart=void 0===a||a,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1},THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.startTime=(performance||Date).now(),this.oldTime=this.startTime,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&!this.running&&this.start(),this.running){var b=(performance||Date).now();a=(b-this.oldTime)/1e3,this.oldTime=b,this.elapsedTime+=a}return a}},
// File:src/core/EventDispatcher.js
/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */
THREE.EventDispatcher=function(){},THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener,a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener,a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener,a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]),c[a].indexOf(b)===-1&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&c[a].indexOf(b)!==-1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners,d=c[a];if(void 0!==d){var e=d.indexOf(b);e!==-1&&d.splice(e,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners,c=b[a.type];if(void 0!==c){a.target=this;for(var d=[],e=c.length,f=0;f<e;f++)d[f]=c[f];for(var f=0;f<e;f++)d[f].call(this,a)}}}},
// File:src/core/Layers.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Layers=function(){this.mask=1},THREE.Layers.prototype={constructor:THREE.Layers,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}},
// File:src/core/Raycaster.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author bhouston / http://clara.io/
 * @author stephomi / http://stephaneginier.com/
 */
function(a){function b(a,b){return a.distance-b.distance}function c(a,b,d,e){if(a.visible!==!1&&(a.raycast(b,d),e===!0))for(var f=a.children,g=0,h=f.length;g<h;g++)c(f[g],b,d,!0)}a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c),
// direction is assumed to be normalized (for accurate distance calculations)
this.near=d||0,this.far=e||1/0,this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})},
//
a.Raycaster.prototype={constructor:a.Raycaster,linePrecision:1,set:function(a,b){
// direction is assumed to be normalized (for accurate distance calculations)
this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?(this.ray.origin.setFromMatrixPosition(c.matrixWorld),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(this.ray.origin).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,d){var e=[];return c(a,this,e,d),e.sort(b),e},intersectObjects:function(a,d){var e=[];if(Array.isArray(a)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),e;for(var f=0,g=a.length;f<g;f++)c(a[f],this,e,d);return e.sort(b),e}}}(THREE),
// File:src/core/Object3D.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author elephantatwork / www.elephantatwork.ch
 */
THREE.Object3D=function(){function a(){e.setFromEuler(d,!1)}function b(){d.setFromQuaternion(e,void 0,!1)}Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=THREE.Object3D.DefaultUp.clone();var c=new THREE.Vector3,d=new THREE.Euler,e=new THREE.Quaternion,f=new THREE.Vector3(1,1,1);d.onChange(a),e.onChange(b),Object.defineProperties(this,{position:{enumerable:!0,value:c},rotation:{enumerable:!0,value:d},quaternion:{enumerable:!0,value:e},scale:{enumerable:!0,value:f},modelViewMatrix:{value:new THREE.Matrix4},normalMatrix:{value:new THREE.Matrix3}}),this.rotationAutoUpdate=!0,this.matrix=new THREE.Matrix4,this.matrixWorld=new THREE.Matrix4,this.matrixAutoUpdate=THREE.Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new THREE.Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}},THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0),THREE.Object3D.DefaultMatrixAutoUpdate=!0,THREE.Object3D.prototype={constructor:THREE.Object3D,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix),this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){
// assumes axis is normalized
this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){
// assumes q is normalized
this.quaternion.copy(a)},rotateOnAxis:function(){
// rotate object on axis in object space
// axis is assumed to be normalized
var a=new THREE.Quaternion;return function(b,c){return a.setFromAxisAngle(b,c),this.quaternion.multiply(a),this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){
// translate object by distance along axis in object space
// axis is assumed to be normalized
var a=new THREE.Vector3;return function(b,c){return a.copy(b).applyQuaternion(this.quaternion),this.position.add(a.multiplyScalar(c)),this}}(),translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){
// This routine does not support objects with rotated and/or translated parent(s)
var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up),this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(arguments.length>1){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a instanceof THREE.Object3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)},remove:function(a){if(arguments.length>1)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);var c=this.children.indexOf(a);c!==-1&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(c,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c],f=e.getObjectByProperty(a,b);if(void 0!==f)return f}},getWorldPosition:function(a){var b=a||new THREE.Vector3;return this.updateMatrixWorld(!0),b.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){var d=c||new THREE.Quaternion;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(a,d,b),d}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){var c=b||new THREE.Euler;return this.getWorldQuaternion(a),c.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(c){var d=c||new THREE.Vector3;return this.updateMatrixWorld(!0),this.matrixWorld.decompose(a,b,d),d}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){var c=b||new THREE.Vector3;return this.getWorldQuaternion(a),c.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(this.visible!==!1){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate===!0&&this.updateMatrix(),this.matrixWorldNeedsUpdate!==!0&&a!==!0||(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);
// update children
for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},toJSON:function(a){
// extract data from the cache hash
// remove metadata on each item
// and return as array
function b(a){var b=[];for(var c in a){var d=a[c];delete d.metadata,b.push(d)}return b}
// meta is '' when called from JSON.stringify
var c=void 0===a||""===a,d={};
// meta is a hash used to collect geometries, materials.
// not providing it implies that this is the root object
// being serialized.
c&&(
// initialize meta obj
a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});
// standard Object3D serialization
var e={};
//
if(e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),e.matrix=this.matrix.toArray(),
//
void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid),void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid),this.children.length>0){e.children=[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var g=b(a.geometries),h=b(a.materials),i=b(a.textures),j=b(a.images);g.length>0&&(d.geometries=g),h.length>0&&(d.materials=h),i.length>0&&(d.textures=i),j.length>0&&(d.images=j)}return d.object=e,d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){if(void 0===b&&(b=!0),this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.rotationAutoUpdate=a.rotationAutoUpdate,this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.userData=JSON.parse(JSON.stringify(a.userData)),b===!0)for(var c=0;c<a.children.length;c++){var d=a.children[c];this.add(d.clone())}return this}},THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),THREE.Object3DIdCount=0,
// File:src/core/Face3.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Face3=function(a,b,c,d,e,f){this.a=a,this.b=b,this.c=c,this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3,this.vertexNormals=Array.isArray(d)?d:[],this.color=e instanceof THREE.Color?e:new THREE.Color,this.vertexColors=Array.isArray(e)?e:[],this.materialIndex=void 0!==f?f:0},THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a,this.b=a.b,this.c=a.c,this.normal.copy(a.normal),this.color.copy(a.color),this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();for(var b=0,c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}},
// File:src/core/BufferAttribute.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.BufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID(),this.array=a,this.itemSize=b,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0,this.normalized=c===!0},THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get count(){return this.array.length/this.itemSize},set needsUpdate(a){a===!0&&this.version++},setDynamic:function(a){return this.dynamic=a,this},copy:function(a){return this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.dynamic=a.dynamic,this},copyAt:function(a,b,c){a*=this.itemSize,c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){return this.array.set(a),this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new THREE.Color),b[c++]=f.r,b[c++]=f.g,b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a,b[c++]=f.b,b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new THREE.Vector2),b[c++]=f.x,b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new THREE.Vector3),b[c++]=f.x,b[c++]=f.y,b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new THREE.Vector4),b[c++]=f.x,b[c++]=f.y,b[c++]=f.z,b[c++]=f.w}return this},set:function(a,b){return void 0===b&&(b=0),this.array.set(a,b),this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){return this.array[a*this.itemSize]=b,this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){return this.array[a*this.itemSize+1]=b,this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){return this.array[a*this.itemSize+2]=b,this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){return this.array[a*this.itemSize+3]=b,this},setXY:function(a,b,c){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this},setXYZ:function(a,b,c,d){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this},setXYZW:function(a,b,c,d,e){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this.array[a+3]=e,this},clone:function(){return(new this.constructor).copy(this)}},
//
THREE.Int8Attribute=function(a,b){return new THREE.BufferAttribute(new Int8Array(a),b)},THREE.Uint8Attribute=function(a,b){return new THREE.BufferAttribute(new Uint8Array(a),b)};THREE.Uint8ClampedAttribute=function(a,b){return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)};THREE.Int16Attribute=function(a,b){return new THREE.BufferAttribute(new Int16Array(a),b)},THREE.Uint16Attribute=function(a,b){return new THREE.BufferAttribute(new Uint16Array(a),b)},THREE.Int32Attribute=function(a,b){return new THREE.BufferAttribute(new Int32Array(a),b)},THREE.Uint32Attribute=function(a,b){return new THREE.BufferAttribute(new Uint32Array(a),b)},THREE.Float32Attribute=function(a,b){return new THREE.BufferAttribute(new Float32Array(a),b)},THREE.Float64Attribute=function(a,b){return new THREE.BufferAttribute(new Float64Array(a),b)},
// Deprecated
THREE.DynamicBufferAttribute=function(a,b){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),new THREE.BufferAttribute(a,b).setDynamic(!0)},
// File:src/core/InstancedBufferAttribute.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.InstancedBufferAttribute=function(a,b,c){THREE.BufferAttribute.call(this,a,b),this.meshPerAttribute=c||1},THREE.InstancedBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype),THREE.InstancedBufferAttribute.prototype.constructor=THREE.InstancedBufferAttribute,THREE.InstancedBufferAttribute.prototype.copy=function(a){return THREE.BufferAttribute.prototype.copy.call(this,a),this.meshPerAttribute=a.meshPerAttribute,this},
// File:src/core/InterleavedBuffer.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.InterleavedBuffer=function(a,b){this.uuid=THREE.Math.generateUUID(),this.array=a,this.stride=b,this.dynamic=!1,this.updateRange={offset:0,count:-1},this.version=0},THREE.InterleavedBuffer.prototype={constructor:THREE.InterleavedBuffer,get length(){return this.array.length},get count(){return this.array.length/this.stride},set needsUpdate(a){a===!0&&this.version++},setDynamic:function(a){return this.dynamic=a,this},copy:function(a){return this.array=new a.array.constructor(a.array),this.stride=a.stride,this.dynamic=a.dynamic,this},copyAt:function(a,b,c){a*=this.stride,c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){return void 0===b&&(b=0),this.array.set(a,b),this},clone:function(){return(new this.constructor).copy(this)}},
// File:src/core/InstancedInterleavedBuffer.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.InstancedInterleavedBuffer=function(a,b,c){THREE.InterleavedBuffer.call(this,a,b),this.meshPerAttribute=c||1},THREE.InstancedInterleavedBuffer.prototype=Object.create(THREE.InterleavedBuffer.prototype),THREE.InstancedInterleavedBuffer.prototype.constructor=THREE.InstancedInterleavedBuffer,THREE.InstancedInterleavedBuffer.prototype.copy=function(a){return THREE.InterleavedBuffer.prototype.copy.call(this,a),this.meshPerAttribute=a.meshPerAttribute,this},
// File:src/core/InterleavedBufferAttribute.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.InterleavedBufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID(),this.data=a,this.itemSize=b,this.offset=c},THREE.InterleavedBufferAttribute.prototype={constructor:THREE.InterleavedBufferAttribute,get length(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),this.array.length},get count(){return this.data.count},setX:function(a,b){return this.data.array[a*this.data.stride+this.offset]=b,this},setY:function(a,b){return this.data.array[a*this.data.stride+this.offset+1]=b,this},setZ:function(a,b){return this.data.array[a*this.data.stride+this.offset+2]=b,this},setW:function(a,b){return this.data.array[a*this.data.stride+this.offset+3]=b,this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this},setXYZ:function(a,b,c,d){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this.data.array[a+2]=d,this},setXYZW:function(a,b,c,d,e){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this.data.array[a+2]=d,this.data.array[a+3]=e,this}},
// File:src/core/Geometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author bhouston / http://clara.io
 */
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,
// update flags
this.verticesNeedUpdate=!1,this.elementsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1},THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++){var e=this.vertices[c];e.applyMatrix4(a)}for(var c=0,d=this.faces.length;c<d;c++){var f=this.faces[c];f.normal.applyMatrix3(b).normalize();for(var g=0,h=f.vertexNormals.length;g<h;g++)f.vertexNormals[g].applyMatrix3(b).normalize()}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(){
// rotate geometry around world x-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationX(b),this.applyMatrix(a),this}}(),rotateY:function(){
// rotate geometry around world y-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationY(b),this.applyMatrix(a),this}}(),rotateZ:function(){
// rotate geometry around world z-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationZ(b),this.applyMatrix(a),this}}(),translate:function(){
// translate geometry
var a;return function(b,c,d){return void 0===a&&(a=new THREE.Matrix4),a.makeTranslation(b,c,d),this.applyMatrix(a),this}}(),scale:function(){
// scale geometry
var a;return function(b,c,d){return void 0===a&&(a=new THREE.Matrix4),a.makeScale(b,c,d),this.applyMatrix(a),this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D),a.lookAt(b),a.updateMatrix(),this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[k[a].clone(),k[b].clone(),k[d].clone()]:[],n=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[],o=new THREE.Face3(a,b,d,f,n,e);c.faces.push(o),void 0!==i&&c.faceVertexUvs[0].push([l[a].clone(),l[b].clone(),l[d].clone()]),void 0!==j&&c.faceVertexUvs[1].push([m[a].clone(),m[b].clone(),m[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,i=void 0!==e.uv?e.uv.array:void 0,j=void 0!==e.uv2?e.uv2.array:void 0;void 0!==j&&(this.faceVertexUvs[1]=[]);for(var k=[],l=[],m=[],n=0,o=0;n<f.length;n+=3,o+=2)c.vertices.push(new THREE.Vector3(f[n],f[n+1],f[n+2])),void 0!==g&&k.push(new THREE.Vector3(g[n],g[n+1],g[n+2])),void 0!==h&&c.colors.push(new THREE.Color(h[n],h[n+1],h[n+2])),void 0!==i&&l.push(new THREE.Vector2(i[o],i[o+1])),void 0!==j&&m.push(new THREE.Vector2(j[o],j[o+1]));if(void 0!==d){var p=a.groups;if(p.length>0)for(var n=0;n<p.length;n++)for(var q=p[n],r=q.start,s=q.count,o=r,t=r+s;o<t;o+=3)b(d[o],d[o+1],d[o+2],q.materialIndex);else for(var n=0;n<d.length;n+=3)b(d[n],d[n+1],d[n+2])}else for(var n=0;n<f.length/3;n+=3)b(n,n+1,n+2);return this.computeFaceNormals(),null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone()),null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone()),this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();return this.translate(a.x,a.y,a.z),a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,c=0===b?1:1/b,d=new THREE.Matrix4;return d.set(c,0,0,-c*a.x,0,c,0,-c*a.y,0,0,c,-c*a.z,0,0,0,1),this.applyMatrix(d),this},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b],h=this.vertices[e.c];a.subVectors(h,g),b.subVectors(f,g),a.cross(b),a.normalize(),e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d,e,f,g;for(g=new Array(this.vertices.length),b=0,c=this.vertices.length;b<c;b++)g[b]=new THREE.Vector3;if(a){
// vertex normals weighted by triangle areas
// http://www.iquilezles.org/www/articles/normals/normals.htm
var h,i,j,k=new THREE.Vector3,l=new THREE.Vector3;for(d=0,e=this.faces.length;d<e;d++)f=this.faces[d],h=this.vertices[f.a],i=this.vertices[f.b],j=this.vertices[f.c],k.subVectors(j,i),l.subVectors(h,i),k.cross(l),g[f.a].add(k),g[f.b].add(k),g[f.c].add(k)}else for(d=0,e=this.faces.length;d<e;d++)f=this.faces[d],g[f.a].add(f.normal),g[f.b].add(f.normal),g[f.c].add(f.normal);for(b=0,c=this.vertices.length;b<c;b++)g[b].normalize();for(d=0,e=this.faces.length;d<e;d++){f=this.faces[d];var m=f.vertexNormals;3===m.length?(m[0].copy(g[f.a]),m[1].copy(g[f.b]),m[2].copy(g[f.c])):(m[0]=g[f.a].clone(),m[1]=g[f.b].clone(),m[2]=g[f.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;
// save original normals
// - create temp variables on first access
//   otherwise just copy (for faster repeated calls)
for(c=0,d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();
// use temp geometry to compute face and vertex normals for each morph
var f=new THREE.Geometry;for(f.faces=this.faces,a=0,b=this.morphTargets.length;a<b;a++){
// create on first access
if(!this.morphNormals[a]){this.morphNormals[a]={},this.morphNormals[a].faceNormals=[],this.morphNormals[a].vertexNormals=[];var g,h,i=this.morphNormals[a].faceNormals,j=this.morphNormals[a].vertexNormals;for(c=0,d=this.faces.length;c<d;c++)g=new THREE.Vector3,h={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},i.push(g),j.push(h)}var k=this.morphNormals[a];
// set vertices to morph target
f.vertices=this.morphTargets[a].vertices,
// compute morph normals
f.computeFaceNormals(),f.computeVertexNormals();
// store morph normals
var g,h;for(c=0,d=this.faces.length;c<d;c++)e=this.faces[c],g=k.faceNormals[c],h=k.vertexNormals[c],g.copy(e.normal),h.a.copy(e.vertexNormals[0]),h.b.copy(e.vertexNormals[1]),h.c.copy(e.vertexNormals[2])}
// restore original normals
for(c=0,d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)c>0&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere),this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a instanceof THREE.Geometry==!1)return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,i=a.faces,j=this.faceVertexUvs[0],k=a.faceVertexUvs[0];void 0===c&&(c=0),void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));
// vertices
for(var l=0,m=g.length;l<m;l++){var n=g[l],o=n.clone();void 0!==b&&o.applyMatrix4(b),f.push(o)}
// faces
for(l=0,m=i.length;l<m;l++){var p,q,r,s=i[l],t=s.vertexNormals,u=s.vertexColors;p=new THREE.Face3(s.a+e,s.b+e,s.c+e),p.normal.copy(s.normal),void 0!==d&&p.normal.applyMatrix3(d).normalize();for(var v=0,w=t.length;v<w;v++)q=t[v].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),p.vertexNormals.push(q);p.color.copy(s.color);for(var v=0,w=u.length;v<w;v++)r=u[v],p.vertexColors.push(r.clone());p.materialIndex=s.materialIndex+c,h.push(p)}
// uvs
for(l=0,m=k.length;l<m;l++){var x=k[l],y=[];if(void 0!==x){for(var v=0,w=x.length;v<w;v++)y.push(x[v].clone());j.push(y)}}},mergeMesh:function(a){return a instanceof THREE.Mesh==!1?void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),void this.merge(a.geometry,a.matrix))},/*
	 * Checks for duplicate vertices with hashmap.
	 * Duplicated vertices are removed
	 * and faces' vertices are updated.
	 */
mergeVertices:function(){var a,b,c,d,e,f,g,h,i={},j=[],k=[],l=4,m=Math.pow(10,l);for(c=0,d=this.vertices.length;c<d;c++)a=this.vertices[c],b=Math.round(a.x*m)+"_"+Math.round(a.y*m)+"_"+Math.round(a.z*m),void 0===i[b]?(i[b]=c,j.push(this.vertices[c]),k[c]=j.length-1):
//console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
k[c]=k[i[b]];
// if faces are completely degenerate after merging vertices, we
// have to remove them from the geometry.
var n=[];for(c=0,d=this.faces.length;c<d;c++){e=this.faces[c],e.a=k[e.a],e.b=k[e.b],e.c=k[e.c],f=[e.a,e.b,e.c];
// if any duplicate vertices are found in a Face3
// we have to remove the face as nothing can be saved
for(var o=-1,p=0;p<3;p++)if(f[p]===f[(p+1)%3]){o=p,n.push(c);break}}for(c=n.length-1;c>=0;c--){var q=n[c];for(this.faces.splice(q,1),g=0,h=this.faceVertexUvs.length;g<h;g++)this.faceVertexUvs[g].splice(q,1)}
// Use unique set of vertices
var r=this.vertices.length-j.length;return this.vertices=j,r},sortFacesByMaterialIndex:function(){
// sort faces
function a(a,b){return a.materialIndex-b.materialIndex}
// tag faces
for(var b=this.faces,c=b.length,d=0;d<c;d++)b[d]._id=d;b.sort(a);
// sort uvs
var e,f,g=this.faceVertexUvs[0],h=this.faceVertexUvs[1];g&&g.length===c&&(e=[]),h&&h.length===c&&(f=[]);for(var d=0;d<c;d++){var i=b[d]._id;e&&e.push(g[i]),f&&f.push(h[i])}e&&(this.faceVertexUvs[0]=e),f&&(this.faceVertexUvs[1]=f)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();return void 0!==m[b]?m[b]:(m[b]=l.length/3,l.push(a.x,a.y,a.z),m[b])}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();return void 0!==o[b]?o[b]:(o[b]=n.length,n.push(a.getHex()),o[b])}function d(a){var b=a.x.toString()+a.y.toString();return void 0!==q[b]?q[b]:(q[b]=p.length/2,p.push(a.x,a.y),q[b])}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};if(
// standard Geometry serialization
e.uuid=this.uuid,e.type=this.type,""!==this.name&&(e.name=this.name),void 0!==this.parameters){var f=this.parameters;for(var g in f)void 0!==f[g]&&(e[g]=f[g]);return e}for(var h=[],i=0;i<this.vertices.length;i++){var j=this.vertices[i];h.push(j.x,j.y,j.z)}for(var k=[],l=[],m={},n=[],o={},p=[],q={},i=0;i<this.faces.length;i++){var r=this.faces[i],s=!0,t=!1,u=void 0!==this.faceVertexUvs[0][i],v=r.normal.length()>0,w=r.vertexNormals.length>0,x=1!==r.color.r||1!==r.color.g||1!==r.color.b,y=r.vertexColors.length>0,z=0;if(z=a(z,0,0),// isQuad
z=a(z,1,s),z=a(z,2,t),z=a(z,3,u),z=a(z,4,v),z=a(z,5,w),z=a(z,6,x),z=a(z,7,y),k.push(z),k.push(r.a,r.b,r.c),k.push(r.materialIndex),u){var A=this.faceVertexUvs[0][i];k.push(d(A[0]),d(A[1]),d(A[2]))}if(v&&k.push(b(r.normal)),w){var B=r.vertexNormals;k.push(b(B[0]),b(B[1]),b(B[2]))}if(x&&k.push(c(r.color)),y){var C=r.vertexColors;k.push(c(C[0]),c(C[1]),c(C[2]))}}// temporal backward compatibility
return e.data={},e.data.vertices=h,e.data.normals=l,n.length>0&&(e.data.colors=n),p.length>0&&(e.data.uvs=[p]),e.data.faces=k,e},clone:function(){/*
		// Handle primitives

		var parameters = this.parameters;

		if ( parameters !== undefined ) {

			var values = [];

			for ( var key in parameters ) {

				values.push( parameters[ key ] );

			}

			var geometry = Object.create( this.constructor.prototype );
			this.constructor.apply( geometry, values );
			return geometry;

		}

		return new this.constructor().copy( this );
		*/
return(new THREE.Geometry).copy(this)},copy:function(a){this.vertices=[],this.faces=[],this.faceVertexUvs=[[]];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());for(var e=a.faces,c=0,d=e.length;c<d;c++)this.faces.push(e[c].clone());for(var c=0,d=a.faceVertexUvs.length;c<d;c++){var f=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var g=0,h=f.length;g<h;g++){for(var i=f[g],j=[],k=0,l=i.length;k<l;k++){var m=i[k];j.push(m.clone())}this.faceVertexUvs[c].push(j)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),THREE.GeometryIdCount=0,
// File:src/core/DirectGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.DirectGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="DirectGeometry",this.indices=[],this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],
// this.lineDistances = [];
this.boundingBox=null,this.boundingSphere=null,
// update flags
this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1},THREE.DirectGeometry.prototype={constructor:THREE.DirectGeometry,computeBoundingBox:THREE.Geometry.prototype.computeBoundingBox,computeBoundingSphere:THREE.Geometry.prototype.computeBoundingSphere,computeFaceNormals:function(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")},computeVertexNormals:function(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")},computeGroups:function(a){for(var b,c,d=[],e=a.faces,f=0;f<e.length;f++){var g=e[f];
// materials
g.materialIndex!==c&&(c=g.materialIndex,void 0!==b&&(b.count=3*f-b.start,d.push(b)),b={start:3*f,materialIndex:c})}void 0!==b&&(b.count=3*f-b.start,d.push(b)),this.groups=d},fromGeometry:function(a){var b,c=a.faces,d=a.vertices,e=a.faceVertexUvs,f=e[0]&&e[0].length>0,g=e[1]&&e[1].length>0,h=a.morphTargets,i=h.length;if(i>0){b=[];for(var j=0;j<i;j++)b[j]=[];this.morphTargets.position=b}var k,l=a.morphNormals,m=l.length;if(m>0){k=[];for(var j=0;j<m;j++)k[j]=[];this.morphTargets.normal=k}
//
for(var n=a.skinIndices,o=a.skinWeights,p=n.length===d.length,q=o.length===d.length,j=0;j<c.length;j++){var r=c[j];this.vertices.push(d[r.a],d[r.b],d[r.c]);var s=r.vertexNormals;if(3===s.length)this.normals.push(s[0],s[1],s[2]);else{var t=r.normal;this.normals.push(t,t,t)}var u=r.vertexColors;if(3===u.length)this.colors.push(u[0],u[1],u[2]);else{var v=r.color;this.colors.push(v,v,v)}if(f===!0){var w=e[0][j];void 0!==w?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",j),this.uvs.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2))}if(g===!0){var w=e[1][j];void 0!==w?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",j),this.uvs2.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2))}
// morphs
for(var x=0;x<i;x++){var y=h[x].vertices;b[x].push(y[r.a],y[r.b],y[r.c])}for(var x=0;x<m;x++){var z=l[x].vertexNormals[j];k[x].push(z.a,z.b,z.c)}
// skins
p&&this.skinIndices.push(n[r.a],n[r.b],n[r.c]),q&&this.skinWeights.push(o[r.a],o[r.b],o[r.c])}return this.computeGroups(a),this.verticesNeedUpdate=a.verticesNeedUpdate,this.normalsNeedUpdate=a.normalsNeedUpdate,this.colorsNeedUpdate=a.colorsNeedUpdate,this.uvsNeedUpdate=a.uvsNeedUpdate,this.groupsNeedUpdate=a.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype),
// File:src/core/BufferGeometry.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0}},THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b){return b instanceof THREE.BufferAttribute==!1&&b instanceof THREE.InterleavedBufferAttribute==!1?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),void this.addAttribute(a,new THREE.BufferAttribute(arguments[1],arguments[2]))):"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),void this.setIndex(b)):(this.attributes[a]=b,this)},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){return delete this.attributes[a],this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a,this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);var c=this.attributes.normal;if(void 0!==c){var d=(new THREE.Matrix3).getNormalMatrix(a);d.applyToVector3Array(c.array),c.needsUpdate=!0}return null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this},rotateX:function(){
// rotate geometry around world x-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationX(b),this.applyMatrix(a),this}}(),rotateY:function(){
// rotate geometry around world y-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationY(b),this.applyMatrix(a),this}}(),rotateZ:function(){
// rotate geometry around world z-axis
var a;return function(b){return void 0===a&&(a=new THREE.Matrix4),a.makeRotationZ(b),this.applyMatrix(a),this}}(),translate:function(){
// translate geometry
var a;return function(b,c,d){return void 0===a&&(a=new THREE.Matrix4),a.makeTranslation(b,c,d),this.applyMatrix(a),this}}(),scale:function(){
// scale geometry
var a;return function(b,c,d){return void 0===a&&(a=new THREE.Matrix4),a.makeScale(b,c,d),this.applyMatrix(a),this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D),a.lookAt(b),a.updateMatrix(),this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();return this.translate(a.x,a.y,a.z),a},setFromObject:function(a){
// console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );
var b=a.geometry;if(a instanceof THREE.Points||a instanceof THREE.Line){var c=new THREE.Float32Attribute(3*b.vertices.length,3),d=new THREE.Float32Attribute(3*b.colors.length,3);if(this.addAttribute("position",c.copyVector3sArray(b.vertices)),this.addAttribute("color",d.copyColorsArray(b.colors)),b.lineDistances&&b.lineDistances.length===b.vertices.length){var e=new THREE.Float32Attribute(b.lineDistances.length,1);this.addAttribute("lineDistance",e.copyArray(b.lineDistances))}null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone()),null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a instanceof THREE.Mesh&&b instanceof THREE.Geometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a instanceof THREE.Mesh){var c=b.__directGeometry;if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate,c.normalsNeedUpdate=b.normalsNeedUpdate,c.colorsNeedUpdate=b.colorsNeedUpdate,c.uvsNeedUpdate=b.uvsNeedUpdate,c.groupsNeedUpdate=b.groupsNeedUpdate,b.verticesNeedUpdate=!1,b.normalsNeedUpdate=!1,b.colorsNeedUpdate=!1,b.uvsNeedUpdate=!1,b.groupsNeedUpdate=!1,b=c}if(b.verticesNeedUpdate===!0){var d=this.attributes.position;void 0!==d&&(d.copyVector3sArray(b.vertices),d.needsUpdate=!0),b.verticesNeedUpdate=!1}if(b.normalsNeedUpdate===!0){var d=this.attributes.normal;void 0!==d&&(d.copyVector3sArray(b.normals),d.needsUpdate=!0),b.normalsNeedUpdate=!1}if(b.colorsNeedUpdate===!0){var d=this.attributes.color;void 0!==d&&(d.copyColorsArray(b.colors),d.needsUpdate=!0),b.colorsNeedUpdate=!1}if(b.uvsNeedUpdate){var d=this.attributes.uv;void 0!==d&&(d.copyVector2sArray(b.uvs),d.needsUpdate=!0),b.uvsNeedUpdate=!1}if(b.lineDistancesNeedUpdate){var d=this.attributes.lineDistance;void 0!==d&&(d.copyArray(b.lineDistances),d.needsUpdate=!0),b.lineDistancesNeedUpdate=!1}return b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1),this},fromGeometry:function(a){return a.__directGeometry=(new THREE.DirectGeometry).fromGeometry(a),this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);if(this.addAttribute("position",new THREE.BufferAttribute(b,3).copyVector3sArray(a.vertices)),a.normals.length>0){var c=new Float32Array(3*a.normals.length);this.addAttribute("normal",new THREE.BufferAttribute(c,3).copyVector3sArray(a.normals))}if(a.colors.length>0){var d=new Float32Array(3*a.colors.length);this.addAttribute("color",new THREE.BufferAttribute(d,3).copyColorsArray(a.colors))}if(a.uvs.length>0){var e=new Float32Array(2*a.uvs.length);this.addAttribute("uv",new THREE.BufferAttribute(e,2).copyVector2sArray(a.uvs))}if(a.uvs2.length>0){var f=new Float32Array(2*a.uvs2.length);this.addAttribute("uv2",new THREE.BufferAttribute(f,2).copyVector2sArray(a.uvs2))}if(a.indices.length>0){var g=a.vertices.length>65535?Uint32Array:Uint16Array,h=new g(3*a.indices.length);this.setIndex(new THREE.BufferAttribute(h,1).copyIndicesArray(a.indices))}
// groups
this.groups=a.groups;
// morphs
for(var i in a.morphTargets){for(var j=[],k=a.morphTargets[i],l=0,m=k.length;l<m;l++){var n=k[l],o=new THREE.Float32Attribute(3*n.length,3);j.push(o.copyVector3sArray(n))}this.morphAttributes[i]=j}
// skinning
if(a.skinIndices.length>0){var p=new THREE.Float32Attribute(4*a.skinIndices.length,4);this.addAttribute("skinIndex",p.copyVector4sArray(a.skinIndices))}if(a.skinWeights.length>0){var q=new THREE.Float32Attribute(4*a.skinWeights.length,4);this.addAttribute("skinWeight",q.copyVector4sArray(a.skinWeights))}
//
return null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone()),null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone()),this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;void 0!==a?this.boundingBox.setFromArray(a):this.boundingBox.makeEmpty(),(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){var d=this.boundingSphere.center;a.setFromArray(c),a.center(d);for(var e=0,f=0,g=c.length;f<g;f+=3)b.fromArray(c,f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var h,i,j,k=b.normal.array,l=new THREE.Vector3,m=new THREE.Vector3,n=new THREE.Vector3,o=new THREE.Vector3,p=new THREE.Vector3;
// indexed elements
if(a){var q=a.array;0===c.length&&this.addGroup(0,q.length);for(var r=0,s=c.length;r<s;++r)for(var t=c[r],u=t.start,v=t.count,f=u,g=u+v;f<g;f+=3)h=3*q[f+0],i=3*q[f+1],j=3*q[f+2],l.fromArray(d,h),m.fromArray(d,i),n.fromArray(d,j),o.subVectors(n,m),p.subVectors(l,m),o.cross(p),k[h]+=o.x,k[h+1]+=o.y,k[h+2]+=o.z,k[i]+=o.x,k[i+1]+=o.y,k[i+2]+=o.z,k[j]+=o.x,k[j+1]+=o.y,k[j+2]+=o.z}else
// non-indexed elements (unconnected triangle soup)
for(var f=0,g=d.length;f<g;f+=9)l.fromArray(d,f),m.fromArray(d,f+3),n.fromArray(d,f+6),o.subVectors(n,m),p.subVectors(l,m),o.cross(p),k[f]=o.x,k[f+1]=o.y,k[f+2]=o.z,k[f+3]=o.x,k[f+4]=o.y,k[f+5]=o.z,k[f+6]=o.x,k[f+7]=o.y,k[f+8]=o.z;this.normalizeNormals(),b.normal.needsUpdate=!0}},merge:function(a,b){if(a instanceof THREE.BufferGeometry==!1)return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);void 0===b&&(b=0);var c=this.attributes;for(var d in c)if(void 0!==a.attributes[d])for(var e=c[d],f=e.array,g=a.attributes[d],h=g.array,i=g.itemSize,j=0,k=i*b;j<h.length;j++,k++)f[k]=h[j];return this},normalizeNormals:function(){for(var a,b,c,d,e=this.attributes.normal.array,f=0,g=e.length;f<g;f+=3)a=e[f],b=e[f+1],c=e[f+2],d=1/Math.sqrt(a*a+b*b+c*c),e[f]*=d,e[f+1]*=d,e[f+2]*=d},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new THREE.BufferGeometry,b=this.index.array,c=this.attributes;for(var d in c){for(var e=c[d],f=e.array,g=e.itemSize,h=new f.constructor(b.length*g),i=0,j=0,k=0,l=b.length;k<l;k++){i=b[k]*g;for(var m=0;m<g;m++)h[j++]=f[i++]}a.addAttribute(d,new THREE.BufferAttribute(h,g))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(
// standard BufferGeometry serialization
a.uuid=this.uuid,a.type=this.type,""!==this.name&&(a.name=this.name),void 0!==this.parameters){var b=this.parameters;for(var c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;if(null!==d){var e=Array.prototype.slice.call(d.array);a.data.index={type:d.array.constructor.name,array:e}}var f=this.attributes;for(var c in f){var g=f[c],e=Array.prototype.slice.call(g.array);a.data.attributes[c]={itemSize:g.itemSize,type:g.array.constructor.name,array:e,normalized:g.normalized}}var h=this.groups;h.length>0&&(a.data.groups=JSON.parse(JSON.stringify(h)));var i=this.boundingSphere;return null!==i&&(a.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),a},clone:function(){/*
		// Handle primitives

		var parameters = this.parameters;

		if ( parameters !== undefined ) {

			var values = [];

			for ( var key in parameters ) {

				values.push( parameters[ key ] );

			}

			var geometry = Object.create( this.constructor.prototype );
			this.constructor.apply( geometry, values );
			return geometry;

		}

		return new this.constructor().copy( this );
		*/
return(new THREE.BufferGeometry).copy(this)},copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var c=a.attributes;for(var d in c){var e=c[d];this.addAttribute(d,e.clone())}for(var f=a.groups,g=0,h=f.length;g<h;g++){var i=f[g];this.addGroup(i.start,i.count,i.materialIndex)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),THREE.BufferGeometry.MaxIndex=65535,
// File:src/core/InstancedBufferGeometry.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.InstancedBufferGeometry=function(){THREE.BufferGeometry.call(this),this.type="InstancedBufferGeometry",this.maxInstancedCount=void 0},THREE.InstancedBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.InstancedBufferGeometry.prototype.constructor=THREE.InstancedBufferGeometry,THREE.InstancedBufferGeometry.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,instances:c})},THREE.InstancedBufferGeometry.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var c=a.attributes;for(var d in c){var e=c[d];this.addAttribute(d,e.clone())}for(var f=a.groups,g=0,h=f.length;g<h;g++){var i=f[g];this.addGroup(i.start,i.count,i.instances)}return this},THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype),
// File:src/core/Uniform.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Uniform=function(a){"string"==typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=arguments[1]),this.value=a,this.dynamic=!1},THREE.Uniform.prototype={constructor:THREE.Uniform,onUpdate:function(a){return this.dynamic=!0,this.onUpdateCallback=a,this}},
// File:src/animation/AnimationClip.js
/**
 *
 * Reusable set of Tracks that represent an animation.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
THREE.AnimationClip=function(a,b,c){this.name=a||THREE.Math.generateUUID(),this.tracks=c,this.duration=void 0!==b?b:-1,
// this means it should figure out its duration by scanning the tracks
this.duration<0&&this.resetDuration(),
// maybe only do these on demand, as doing them here could potentially slow down loading
// but leaving these here during development as this ensures a lot of testing of these functions
this.trim(),this.optimize()},THREE.AnimationClip.prototype={constructor:THREE.AnimationClip,resetDuration:function(){for(var a=this.tracks,b=0,c=0,d=a.length;c!==d;++c){var e=this.tracks[c];b=Math.max(b,e.times[e.times.length-1])}this.duration=b},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}},
// Static methods:
Object.assign(THREE.AnimationClip,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));return new THREE.AnimationClip(a.name,a.duration,b)},toJSON:function(a){for(var b=[],c=a.tracks,d={name:a.name,duration:a.duration,tracks:b},e=0,f=c.length;e!==f;++e)b.push(THREE.KeyframeTrack.toJSON(c[e]));return d},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],i=[];h.push((g+e-1)%e,g,(g+1)%e),i.push(0,1,0);var j=THREE.AnimationUtils.getKeyframeOrder(h);h=THREE.AnimationUtils.sortedArray(h,1,j),i=THREE.AnimationUtils.sortedArray(i,1,j),
// if there is a key at the first frame, duplicate it as the
// last frame as well for perfect loop.
d||0!==h[0]||(h.push(e),i.push(i[0])),f.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences["+b[g].name+"]",h,i).scale(1/c))}return new THREE.AnimationClip(a,-1,f)},findByName:function(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return a[c];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){
// sort morph target names into animation groups based
// patterns like Walk_001, Walk_002, Run_001, Run_002
for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],i=h.name.match(e);if(i&&i.length>1){var j=i[1],k=d[j];k||(d[j]=k=[]),k.push(h)}}var l=[];for(var j in d)l.push(THREE.AnimationClip.CreateFromMorphTargetSequence(j,d[j],b,c));return l},
// parse the animation.hierarchy format
parseAnimation:function(a,b,c){if(!a)return console.error("  no animation in JSONLoader data"),null;for(var d=function(a,b,c,d,e){
// only return track if there are actually keys.
if(0!==c.length){var f=[],g=[];THREE.AnimationUtils.flattenJSON(c,f,g,d),
// empty keys are filtered out, so check again
0!==f.length&&e.push(new a(b,f,g))}},e=[],f=a.name||"default",g=a.length||-1,h=a.fps||30,i=a.hierarchy||[],j=0;j<i.length;j++){var k=i[j].keys;
// skip empty tracks
if(k&&0!=k.length)
// process morph targets in a way exactly compatible
// with AnimationHandler.init( animation )
if(k[0].morphTargets){for(var l={},m=0;m<k.length;m++)if(k[m].morphTargets)for(var n=0;n<k[m].morphTargets.length;n++)l[k[m].morphTargets[n]]=-1;
// create a track for each morph target with all zero
// morphTargetInfluences except for the keys in which
// the morphTarget is named.
for(var o in l){for(var p=[],q=[],n=0;n!==k[m].morphTargets.length;++n){var r=k[m];p.push(r.time),q.push(r.morphTarget===o?1:0)}e.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence["+o+"]",p,q))}g=l.length*(h||1)}else{
// ...assume skeletal animation
var s=".bones["+b[j].name+"]";d(THREE.VectorKeyframeTrack,s+".position",k,"pos",e),d(THREE.QuaternionKeyframeTrack,s+".quaternion",k,"rot",e),d(THREE.VectorKeyframeTrack,s+".scale",k,"scl",e)}}if(0===e.length)return null;var t=new THREE.AnimationClip(f,g,e);return t}}),
// File:src/animation/AnimationMixer.js
/**
 *
 * Player for AnimationClips.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.AnimationMixer=function(a){this._root=a,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1},THREE.AnimationMixer.prototype={constructor:THREE.AnimationMixer,
// return an action for a clip optionally using a custom root target
// object (this method allocates a lot of dynamic memory in case a
// previously unknown clip/root combination is specified)
clipAction:function(a,b){var c,d=b||this._root,e=d.uuid,f="string"==typeof a?a:a.name,g=a!==f?a:null,h=this._actionsByClip[f];if(void 0!==h){var i=h.actionByRoot[e];if(void 0!==i)return i;if(
// we know the clip, so we don't have to parse all
// the bindings again but can just copy
c=h.knownActions[0],
// also, take the clip from the prototype action
g=c._clip,a!==f&&a!==g)throw new Error("Different clips with the same name detected!")}
// clip must be known when specified via string
if(null===g)return null;
// allocate all resources required to run it
var j=new THREE.AnimationMixer._Action(this,g,b);
// and make the action known to the memory manager
return this._bindAction(j,c),this._addInactiveAction(j,f,e),j},
// get an existing action
existingAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"==typeof a?a:a.name,f=this._actionsByClip[e];return void 0!==f?f.actionByRoot[d]||null:null},
// deactivates all previously scheduled actions
stopAllAction:function(){var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings;this._nActiveActions=0,this._nActiveBindings=0;for(var e=0;e!==b;++e)a[e].reset();for(var e=0;e!==d;++e)c[e].useCount=0;return this},
// advance the time and update apply the animation
update:function(a){a*=this.timeScale;
// run active actions
for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}for(var i=this._bindings,j=this._nActiveBindings,g=0;g!==j;++g)i[g].apply(f);return this},
// return this mixer's root target object
getRoot:function(){return this._root},
// free all resources specific to a particular clip
uncacheClip:function(a){var b=this._actions,c=a.name,d=this._actionsByClip,e=d[c];if(void 0!==e){for(var f=e.knownActions,g=0,h=f.length;g!==h;++g){var i=f[g];this._deactivateAction(i);var j=i._cacheIndex,k=b[b.length-1];i._cacheIndex=null,i._byClipCacheIndex=null,k._cacheIndex=j,b[j]=k,b.pop(),this._removeInactiveBindingsForAction(i)}delete d[c]}},
// free all resources specific to a particular root target object
uncacheRoot:function(a){var b=a.uuid,c=this._actionsByClip;for(var d in c){var e=c[d].actionByRoot,f=e[b];void 0!==f&&(this._deactivateAction(f),this._removeInactiveAction(f))}var g=this._bindingsByRootAndName,h=g[b];if(void 0!==h)for(var i in h){var j=h[i];j.restoreOriginalState(),this._removeInactiveBinding(j)}},
// remove a targeted clip from the cache
uncacheAction:function(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}},THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype),THREE.AnimationMixer._Action=function(a,b,c){this._mixer=a,this._clip=b,this._localRoot=c||null;for(var d=b.tracks,e=d.length,f=new Array(e),g={endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},h=0;h!==e;++h){var i=d[h].createInterpolant(null);f[h]=i,i.settings=g}this._interpolantSettings=g,this._interpolants=f,// bound by the mixer
// inside: PropertyMixer (managed by the mixer)
this._propertyBindings=new Array(e),this._cacheIndex=null,// for the memory manager
this._byClipCacheIndex=null,// for the memory manager
this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=THREE.LoopRepeat,this._loopCount=-1,
// global mixer time when the action is to be started
// it's set back to 'null' upon start of the action
this._startTime=null,
// scaled local time of the action
// gets clamped or wrapped to 0..clip.duration according to loop
this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,// no. of repetitions when looping
this.paused=!1,// false -> zero effective time scale
this.enabled=!0,// true -> zero effective weight
this.clampWhenFinished=!1,// keep feeding the last frame?
this.zeroSlopeAtStart=!0,// for smooth interpolation w/o separate
this.zeroSlopeAtEnd=!0},THREE.AnimationMixer._Action.prototype={constructor:THREE.AnimationMixer._Action,
// State & Scheduling
play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){// forget scheduling
// restart clip
// forget previous loops
return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){this._startTime;return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},
// return true when play has been called
isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){return this._startTime=a,this},setLoop:function(a,b){return this.loop=a,this.repetitions=b,this},
// Weight
// set the weight stopping any scheduled fading
// although .enabled = false yields an effective weight of zero, this
// method does *not* change .enabled, because it would be confusing
setEffectiveWeight:function(a){
// note: same logic as when updated at runtime
return this.weight=a,this._effectiveWeight=this.enabled?a:0,this.stopFading()},
// return the weight considering fading and .enabled
getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){this._mixer;if(a.fadeOut(b),this.fadeIn(b),c){var d=this._clip.duration,e=a._clip.duration,f=e/d,g=d/e;a.warp(1,f,b),this.warp(g,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;return null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this},
// Time Scale Control
// set the weight stopping any scheduled warping
// although .paused = true yields an effective time scale of zero, this
// method does *not* change .paused, because it would be confusing
setEffectiveTimeScale:function(a){return this.timeScale=a,this._effectiveTimeScale=this.paused?0:a,this.stopWarping()},
// return the time scale considering warping and .paused
getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){return this.timeScale=this._clip.duration/a,this.stopWarping()},syncWith:function(a){return this.time=a.time,this.timeScale=a.timeScale,this.stopWarping()},halt:function(a){return this.warp(this._currentTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(f=d._lendControlInterpolant(),this._timeScaleInterpolant=f);var h=f.parameterPositions,i=f.sampleValues;return h[0]=e,h[1]=e+c,i[0]=a/g,i[1]=b/g,this},stopWarping:function(){var a=this._timeScaleInterpolant;return null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this},
// Object Accessors
getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},
// Interna
_update:function(a,b,c,d){
// called by the mixer
var e=this._startTime;if(null!==e){
// check for scheduled start of action
var f=(a-e)*c;if(f<0||0===c)return;
// start
this._startTime=null,// unschedule
b=c*f}
// apply time scale and advance time
b*=this._updateTimeScale(a);var g=this._updateTime(b),h=this._updateWeight(a);if(h>0)for(var i=this._interpolants,j=this._propertyBindings,k=0,l=i.length;k!==l;++k)i[k].evaluate(g),j[k].accumulate(d,h)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d,a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(
// faded out, disable
this.enabled=!1))}}return this._effectiveWeight=b,b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d,a>c.parameterPositions[1]&&(this.stopWarping(),0===b?
// motion has halted, pause
this.pause=!0:
// warp done - apply final time scale
this.timeScale=b)}}return this._effectiveTimeScale=b,b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount,f=!1;switch(d){case THREE.LoopOnce:if(e===-1&&(
// just started
this.loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else{if(!(b<0))break;b=0}
// reached the end
this.clampWhenFinished?this.pause=!0:this.enabled=!1,this._mixer.dispatchEvent({type:"finished",action:this,direction:a<0?-1:1});break;case THREE.LoopPingPong:f=!0;case THREE.LoopRepeat:if(e===-1&&(
// just started
a>0?(e=0,this._setEndings(!0,0===this.repetitions,f)):
// when looping in reverse direction, the initial
// transition through zero counts as a repetition,
// so leave loopCount at -1
this._setEndings(0===this.repetitions,!0,f)),b>=c||b<0){
// wrap around
var g=Math.floor(b/c);// signed
b-=c*g,e+=Math.abs(g);var h=this.repetitions-e;if(h<0){
// stop (switch state, clamp time, fire event)
this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=a>0?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:a>0?1:-1});break}if(0===h){
// transition to last round
var i=a<0;this._setEndings(i,!i,f)}else this._setEndings(!1,!1,f);this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:g})}if(d===THREE.LoopPingPong&&1===(1&e))
// invert time for the "pong round"
return this.time=b,c-b}return this.time=b,b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=THREE.ZeroSlopeEnding,d.endingEnd=THREE.ZeroSlopeEnding):(
// assuming for LoopOnce atStart == atEnd == true
a?d.endingStart=this.zeroSlopeAtStart?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:d.endingStart=THREE.WrapAroundEnding,b?d.endingEnd=this.zeroSlopeAtEnd?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:d.endingEnd=THREE.WrapAroundEnding)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(f=d._lendControlInterpolant(),this._weightInterpolant=f);var g=f.parameterPositions,h=f.sampleValues;return g[0]=e,h[0]=b,g[1]=e+a,h[1]=c,this}},
// Implementation details:
Object.assign(THREE.AnimationMixer.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,i=this._bindingsByRootAndName,j=i[h];void 0===j&&(j={},i[h]=j);for(var k=0;k!==e;++k){var l=d[k],m=l.name,n=j[m];if(void 0!==n)f[k]=n;else{if(n=f[k],void 0!==n){
// existing binding, make sure the cache knows
null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,m));continue}var o=b&&b._propertyBindings[k].binding.parsedPath;n=new THREE.PropertyMixer(THREE.PropertyBinding.create(c,m,o),l.ValueTypeName,l.getValueSize()),++n.referenceCount,this._addInactiveBinding(n,h,m),f[k]=n}g[k].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){
// this action has been forgotten by the cache, but the user
// appears to be still using it -> rebind
var b=(a._localRoot||this._root).uuid,c=a._clip.name,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]),this._addInactiveAction(a,c,b)}
// increment reference counts / sort out state
for(var e=a._propertyBindings,f=0,g=e.length;f!==g;++f){var h=e[f];0===h.useCount++&&(this._lendBinding(h),h.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){
// decrement reference counts / sort out state
for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},
// Memory manager
_initMemoryManager:function(){this._actions=[],// 'nActiveActions' followed by inactive ones
this._nActiveActions=0,this._actionsByClip={},
// inside:
// {
// 		knownActions: Array< _Action >	- used as prototypes
// 		actionByRoot: _Action			- lookup
// }
this._bindings=[],// 'nActiveBindings' followed by inactive ones
this._nActiveBindings=0,this._bindingsByRootAndName={},// inside: Map< name, PropertyMixer >
this._controlInterpolants=[],// same game as above
this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},
// Memory management for _Action objects
_isActiveAction:function(a){var b=a._cacheIndex;return null!==b&&b<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];if(void 0===f)f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f;else{var g=f.knownActions;a._byClipCacheIndex=g.length,g.push(a)}a._cacheIndex=d.length,d.push(a),f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d,b[d]=c,b.pop(),a._cacheIndex=null;var e=a._clip.name,f=this._actionsByClip,g=f[e],h=g.knownActions,i=h[h.length-1],j=a._byClipCacheIndex;i._byClipCacheIndex=j,h[j]=i,h.pop(),a._byClipCacheIndex=null;var k=g.actionByRoot,l=(b._localRoot||this._root).uuid;delete k[l],0===h.length&&delete f[e],this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.referenceCount&&this._removeInactiveBinding(e)}},_lendAction:function(a){
// [ active actions |  inactive actions  ]
// [  active actions >| inactive actions ]
//                 s        a
//                  <-swap->
//                 a        s
var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_takeBackAction:function(a){
// [  active actions  | inactive actions ]
// [ active actions |< inactive actions  ]
//        a        s
//         <-swap->
//        s        a
var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},
// Memory management for PropertyMixer objects
_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e),e[c]=a,a._cacheIndex=f.length,f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,e=c.path,f=this._bindingsByRootAndName,g=f[d],h=b[b.length-1],i=a._cacheIndex;h._cacheIndex=i,b[i]=h,b.pop(),delete g[e];a:{for(var j in g)break a;delete f[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},
// Memory management of Interpolants for weight and time scale
_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];return void 0===c&&(c=new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c),c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d,b[d]=a,e.__cacheIndex=c,b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)}),
// File:src/animation/AnimationObjectGroup.js
/**
 *
 * A group of objects that receives a shared animation state.
 *
 * Usage:
 *
 * 	-	Add objects you would otherwise pass as 'root' to the
 * 		constructor or the .clipAction method of AnimationMixer.
 *
 * 	-	Instead pass this object as 'root'.
 *
 * 	-	You can also add and remove objects later when the mixer
 * 		is running.
 *
 * Note:
 *
 *  	Objects of this class appear as one object to the mixer,
 *  	so cache control of the individual objects must be done
 *  	on the group.
 *
 * Limitation:
 *
 * 	- 	The animated properties must be compatible among the
 * 		all objects in the group.
 *
 *  -	A single property can either be controlled through a
 *  	target group or directly, but not both.
 *
 * @author tschw
 */
THREE.AnimationObjectGroup=function(a){this.uuid=THREE.Math.generateUUID(),
// cached objects followed by the active ones
this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;// threshold
// note: read by PropertyBinding.Composite
var b={};this._indicesByUUID=b;// for bookkeeping
for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[],// inside: string
this._parsedPaths=[],// inside: { we don't care, here }
this._bindings=[],// inside: Array< PropertyBinding >
this._bindingsIndicesByPath={};// inside: indices in these arrays
var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}},THREE.AnimationObjectGroup.prototype={constructor:THREE.AnimationObjectGroup,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,i=h.length,j=0,k=arguments.length;j!==k;++j){var l=arguments[j],m=l.uuid,n=e[m];if(void 0===n){
// unknown object -> add it to the ACTIVE region
n=c++,e[m]=n,b.push(l);
// accounting is done, now do the same for all bindings
for(var o=0,p=i;o!==p;++o)h[o].push(new THREE.PropertyBinding(l,f[o],g[o]))}else if(n<d){var q=b[n],r=--d,s=b[r];e[s.uuid]=n,b[n]=s,e[m]=r,b[r]=l;
// accounting is done, now do the same for all bindings
for(var o=0,p=i;o!==p;++o){var t=h[o],u=t[r],v=t[n];t[n]=u,void 0===v&&(
// since we do not bother to create new bindings
// for objects that are cached, the binding may
// or may not exist
v=new THREE.PropertyBinding(l,f[o],g[o])),t[r]=v}}else b[n]!==q&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}// for arguments
this.nCachedObjects_=d},remove:function(a){for(var b=this._objects,c=(b.length,this.nCachedObjects_),d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var i=arguments[g],j=i.uuid,k=d[j];if(void 0!==k&&k>=c){
// move existing object into the CACHED region
var l=c++,m=b[l];d[m.uuid]=k,b[k]=m,d[j]=l,b[l]=i;
// accounting is done, now do the same for all bindings
for(var n=0,o=f;n!==o;++n){var p=e[n],q=p[l],r=p[k];p[k]=q,p[l]=r}}}// for arguments
this.nCachedObjects_=c},
// remove & forget
uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,i=arguments.length;h!==i;++h){var j=arguments[h],k=j.uuid,l=e[k];if(void 0!==l)if(delete e[k],l<d){
// object is cached, shrink the CACHED region
var m=--d,n=b[m],o=--c,p=b[o];
// last cached object takes this object's place
e[n.uuid]=l,b[l]=n,
// last object goes to the activated slot and pop
e[p.uuid]=m,b[m]=p,b.pop();
// accounting is done, now do the same for all bindings
for(var q=0,r=g;q!==r;++q){var s=f[q],t=s[m],u=s[o];s[l]=t,s[m]=u,s.pop()}}else{
// object is active, just swap with the last and pop
var o=--c,p=b[o];e[p.uuid]=l,b[l]=p,b.pop();
// accounting is done, now do the same for all bindings
for(var q=0,r=g;q!==r;++q){var s=f[q];s[l]=s[o],s.pop()}}}// for arguments
this.nCachedObjects_=d},
// Internal interface used by befriended PropertyBinding.Composite:
subscribe_:function(a,b){
// returns an array of bindings for the given path that is changed
// according to the contained objects in the group
var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,i=h.length,j=this.nCachedObjects_,k=new Array(i);d=e.length,c[a]=d,f.push(a),g.push(b),e.push(k);for(var l=j,m=h.length;l!==m;++l){var n=h[l];k[l]=new THREE.PropertyBinding(n,a,b)}return k},unsubscribe_:function(a){
// tells the group to forget about a property path and no longer
// update the array previously obtained with 'subscribe_'
var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g],i=a[g];b[i]=c,f[c]=h,f.pop(),e[c]=e[g],e.pop(),d[c]=d[g],d.pop()}}},
// File:src/animation/AnimationUtils.js
/**
 * @author tschw
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 */
THREE.AnimationUtils={
// same as Array.prototype.slice, but also works on typed arrays
arraySlice:function(a,b,c){return THREE.AnimationUtils.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},
// converts an array to a specific type
convertArray:function(a,b,c){// let 'undefined' and 'null' pass
return!a||!c&&a.constructor===b?a:"number"==typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},
// returns an array by which times and values can be sorted
getKeyframeOrder:function(a){function b(b,c){return a[b]-a[c]}for(var c=a.length,d=new Array(c),e=0;e!==c;++e)d[e]=e;return d.sort(b),d},
// uses the array previously returned by 'getKeyframeOrder' to sort data
sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,i=0;i!==b;++i)e[g++]=a[h+i];return e},
// function for parsing AOS keyframe formats
flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){// no data
var g=f[d];if(void 0!==g)// no data
if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){
// ...assume THREE.Math-ish
do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else
// otherwise push as-is
do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}},
// File:src/animation/KeyframeTrack.js
/**
 *
 * A timed sequence of keyframes for a specific property.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.KeyframeTrack=function(a,b,c,d){if(void 0===a)throw new Error("track name is undefined");if(void 0===b||0===b.length)throw new Error("no keyframes in track named "+a);this.name=a,this.times=THREE.AnimationUtils.convertArray(b,this.TimeBufferType),this.values=THREE.AnimationUtils.convertArray(c,this.ValueBufferType),this.setInterpolation(d||this.DefaultInterpolation),this.validate(),this.optimize()},THREE.KeyframeTrack.prototype={constructor:THREE.KeyframeTrack,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodDiscrete:function(a){return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b=void 0;switch(a){case THREE.InterpolateDiscrete:b=this.InterpolantFactoryMethodDiscrete;break;case THREE.InterpolateLinear:b=this.InterpolantFactoryMethodLinear;break;case THREE.InterpolateSmooth:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){var c="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){
// fall back to default, unless the default itself is messed up
if(a===this.DefaultInterpolation)throw new Error(c);this.setInterpolation(this.DefaultInterpolation)}return void console.warn(c)}this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return THREE.InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return THREE.InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return THREE.InterpolateSmooth}},getValueSize:function(){return this.values.length/this.times.length},
// move all keyframes either forwards or backwards in time
shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},
// scale all keyframe times by a factor (useful for frame <-> seconds conversions)
scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},
// removes keyframes before and after animation without changing any values within the range [startTime, endTime].
// IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;f!==-1&&c[f]>b;)--f;// inclusive -> exclusive bound
if(++f,0!==e||f!==d){
// empty tracks are forbidden, so keep at least one keyframe
e>=f&&(f=Math.max(f,1),e=f-1);var g=this.getValueSize();this.times=THREE.AnimationUtils.arraySlice(c,e,f),this.values=THREE.AnimationUtils.arraySlice(this.values,e*g,f*g)}return this},
// ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
validate:function(){var a=!0,b=this.getValueSize();b-Math.floor(b)!==0&&(console.error("invalid value size in track",this),a=!1);var c=this.times,d=this.values,e=c.length;0===e&&(console.error("track is empty",this),a=!1);for(var f=null,g=0;g!==e;g++){var h=c[g];if("number"==typeof h&&isNaN(h)){console.error("time is not a valid number",this,g,h),a=!1;break}if(null!==f&&f>h){console.error("out of order keys",this,g,h,f),a=!1;break}f=h}if(void 0!==d&&THREE.AnimationUtils.isTypedArray(d))for(var g=0,i=d.length;g!==i;++g){var j=d[g];if(isNaN(j)){console.error("value is not a valid number",this,g,j),a=!1;break}}return a},
// removes equivalent sequential keys as common in morph target sequences
// (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=1,e=1,f=a.length-1;e<=f;++e){var g=!1,h=a[e],i=a[e+1];
// remove adjacent keyframes scheduled at the same time
if(h!==i&&(1!==e||h!==h[0]))for(var j=e*c,k=j-c,l=j+c,m=0;m!==c;++m){var n=b[j+m];if(n!==b[k+m]||n!==b[l+m]){g=!0;break}}
// in-place compaction
if(g){if(e!==d){a[d]=a[e];for(var o=e*c,p=d*c,m=0;m!==c;++m)b[p+m]=b[o+m]}++d}}return d!==a.length&&(this.times=THREE.AnimationUtils.arraySlice(a,0,d),this.values=THREE.AnimationUtils.arraySlice(b,0,d*c)),this}},
// Static methods:
Object.assign(THREE.KeyframeTrack,{
// Serialization (in static context, because of constructor invocation
// and automatic invocation of .toJSON):
parse:function(a){if(void 0===a.type)throw new Error("track type undefined, can not parse");var b=THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){console.warn("legacy JSON format detected, converting");var c=[],d=[];THREE.AnimationUtils.flattenJSON(a.keys,c,d,"value"),a.times=c,a.values=d}
// derived classes can define a static parse method
// derived classes can define a static parse method
return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b,c=a.constructor;
// derived classes can define a static toJSON method
if(void 0!==c.toJSON)b=c.toJSON(a);else{
// by default, we assume the data can be serialized as-is
b={name:a.name,times:THREE.AnimationUtils.convertArray(a.times,Array),values:THREE.AnimationUtils.convertArray(a.values,Array)};var d=a.getInterpolation();d!==a.DefaultInterpolation&&(b.interpolation=d)}// mandatory
return b.type=a.ValueTypeName,b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return THREE.NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return THREE.VectorKeyframeTrack;case"color":return THREE.ColorKeyframeTrack;case"quaternion":return THREE.QuaternionKeyframeTrack;case"bool":case"boolean":return THREE.BooleanKeyframeTrack;case"string":return THREE.StringKeyframeTrack}throw new Error("Unsupported typeName: "+a)}}),
// File:src/animation/PropertyBinding.js
/**
 *
 * A reference to a real property in the scene graph.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.PropertyBinding=function(a,b,c){this.path=b,this.parsedPath=c||THREE.PropertyBinding.parseTrackName(b),this.node=THREE.PropertyBinding.findNode(a,this.parsedPath.nodeName)||a,this.rootNode=a},THREE.PropertyBinding.prototype={constructor:THREE.PropertyBinding,getValue:function(a,b){this.bind(),this.getValue(a,b)},setValue:function(a,b){this.bind(),this.setValue(a,b)},
// create getter / setter pair for a property in the scene graph
bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;
// ensure there is a value node
if(a||(a=THREE.PropertyBinding.findNode(this.rootNode,b.nodeName)||this.rootNode,this.node=a),
// set fail state so we can just 'return' on error
this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a)return void console.error("  trying to update node for track: "+this.path+" but it wasn't found.");if(c){var f=b.objectIndex;
// special cases were we need to reach deeper into the hierarchy to get the face materials....
switch(c){case"materials":if(!a.material)return void console.error("  can not bind to material as node does not have a material",this);if(!a.material.materials)return void console.error("  can not bind to material.materials as node.material does not have a materials array",this);a=a.material.materials;break;case"bones":if(!a.skeleton)return void console.error("  can not bind to bones as node does not have a skeleton",this);
// potential future optimization: skip this if propertyIndex is already an integer
// and convert the integer string to a true integer.
a=a.skeleton.bones;
// support resolving morphTarget names into indices.
for(var g=0;g<a.length;g++)if(a[g].name===f){f=g;break}break;default:if(void 0===a[c])return void console.error("  can not bind to objectName of node, undefined",this);a=a[c]}if(void 0!==f){if(void 0===a[f])return void console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);a=a[f]}}
// resolve property
var h=a[d];if(!h){var i=b.nodeName;return void console.error("  trying to update property for track: "+i+"."+d+" but it wasn't found.",a)}
// determine versioning scheme
var j=this.Versioning.None;void 0!==a.needsUpdate?(// material
j=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(// node transform
j=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);
// determine how the property gets bound
var k=this.BindingType.Direct;if(void 0!==e){
// access a sub element of the property array (only primitives are supported right now)
if("morphTargetInfluences"===d){
// potential optimization, skip this if propertyIndex is already an integer, and convert the integer string to a true integer.
// support resolving morphTarget names into indices.
if(!a.geometry)return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);if(!a.geometry.morphTargets)return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);for(var g=0;g<this.node.geometry.morphTargets.length;g++)if(a.geometry.morphTargets[g].name===e){e=g;break}}k=this.BindingType.ArrayElement,this.resolvedProperty=h,this.propertyIndex=e}else void 0!==h.fromArray&&void 0!==h.toArray?(
// must use copy for Object3D.Euler/Quaternion
k=this.BindingType.HasFromToArray,this.resolvedProperty=h):void 0!==h.length?(k=this.BindingType.EntireArray,this.resolvedProperty=h):this.propertyName=d;
// select getter / setter
this.getValue=this.GetterByBindingType[k],this.setValue=this.SetterByBindingTypeAndVersioning[k][j]},unbind:function(){this.node=null,
// back to the prototype version of getValue / setValue
// note: avoiding to mutate the shape of 'this' via 'delete'
this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},Object.assign(THREE.PropertyBinding.prototype,{// prototype, continued
// these are used to "bind" a nonexistent property
_getValue_unavailable:function(){},_setValue_unavailable:function(){},
// initial state of these methods that calls 'bind'
_getValue_unbound:THREE.PropertyBinding.prototype.getValue,_setValue_unbound:THREE.PropertyBinding.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[
// Direct
function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b],this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b],this.targetObject.matrixWorldNeedsUpdate=!0}],[
// EntireArray
function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[
// ArrayElement
function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b],this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b],this.targetObject.matrixWorldNeedsUpdate=!0}],[
// HasToFromArray
function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b),this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b),this.targetObject.matrixWorldNeedsUpdate=!0}]]}),THREE.PropertyBinding.Composite=function(a,b,c){var d=c||THREE.PropertyBinding.parseTrackName(b);this._targetGroup=a,this._bindings=a.subscribe_(b,d)},THREE.PropertyBinding.Composite.prototype={constructor:THREE.PropertyBinding.Composite,getValue:function(a,b){this.bind();// bind all binding
var c=this._targetGroup.nCachedObjects_,d=this._bindings[c];
// and only call .getValue on the first
void 0!==d&&d.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}},THREE.PropertyBinding.create=function(a,b,c){return a instanceof THREE.AnimationObjectGroup?new THREE.PropertyBinding.Composite(a,b,c):new THREE.PropertyBinding(a,b,c)},THREE.PropertyBinding.parseTrackName=function(a){
// matches strings in the form of:
//    nodeName.property
//    nodeName.property[accessor]
//    nodeName.material.property[accessor]
//    uuid.property[accessor]
//    uuid.objectName[objectIndex].propertyName[propertyIndex]
//    parentName/nodeName.property
//    parentName/parentName/nodeName.property[index]
//	  .bone[Armature.DEF_cog].position
// created and tested via https://regex101.com/#javascript
var b=/^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,c=b.exec(a);if(!c)throw new Error("cannot parse trackName at all: "+a);c.index===b.lastIndex&&b.lastIndex++;var d={
// directoryName: matches[1], // (tschw) currently unused
nodeName:c[3],// allowed to be null, specified root node.
objectName:c[5],objectIndex:c[7],propertyName:c[9],propertyIndex:c[11]};if(null===d.propertyName||0===d.propertyName.length)throw new Error("can not parse propertyName from trackName: "+a);return d},THREE.PropertyBinding.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||b===-1||b===a.name||b===a.uuid)return a;
// search into skeleton bones.
if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null},d=c(a.skeleton);if(d)return d}
// search into node subtree.
if(a.children){var e=function(a){for(var c=0;c<a.length;c++){var d=a[c];if(d.name===b||d.uuid===b)return d;var f=e(d.children);if(f)return f}return null},f=e(a.children);if(f)return f}return null},
// File:src/animation/PropertyMixer.js
/**
 *
 * Buffered scene graph property that allows weighted accumulation.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.PropertyMixer=function(a,b,c){this.binding=a,this.valueSize=c;var d,e=Float64Array;switch(b){case"quaternion":d=this._slerp;break;case"string":case"bool":e=Array,d=this._select;break;default:d=this._lerp}this.buffer=new e(4*c),
// layout: [ incoming | accu0 | accu1 | orig ]
//
// interpolators can use .buffer as their .result
// the data then goes to 'incoming'
//
// 'accu0' and 'accu1' are used frame-interleaved for
// the cumulative result and are compared to detect
// changes
//
// 'orig' stores the original state of the property
this._mixBufferRegion=d,this.cumulativeWeight=0,this.useCount=0,this.referenceCount=0},THREE.PropertyMixer.prototype={constructor:THREE.PropertyMixer,
// accumulate data in the 'incoming' region into 'accu<i>'
accumulate:function(a,b){
// note: happily accumulating nothing when weight = 0, the caller knows
// the weight and shouldn't have made the call in the first place
var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){
// accuN := incoming * weight
for(var g=0;g!==d;++g)c[e+g]=c[g];f=b}else{
// accuN := accuN + incoming * weight
f+=b;var h=b/f;this._mixBufferRegion(c,e,0,h,d)}this.cumulativeWeight=f},
// apply the state of 'accu<i>' to the binding when accus differ
apply:function(a){var b=this.valueSize,c=this.buffer,d=a*b+b,e=this.cumulativeWeight,f=this.binding;if(this.cumulativeWeight=0,e<1){
// accuN := accuN + original * ( 1 - cumulativeWeight )
var g=3*b;this._mixBufferRegion(c,d,g,1-e,b)}for(var h=b,i=b+b;h!==i;++h)if(c[h]!==c[h+b]){
// value has changed -> update scene graph
f.setValue(c,d);break}},
// remember the state of the bound property and copy it to both accus
saveOriginalState:function(){var a=this.binding,b=this.buffer,c=this.valueSize,d=3*c;a.getValue(b,d);
// accu[0..1] := orig -- initially detect changes against the original
for(var e=c,f=d;e!==f;++e)b[e]=b[d+e%c];this.cumulativeWeight=0},
// apply the state previously taken via 'saveOriginalState' to the binding
restoreOriginalState:function(){var a=3*this.valueSize;this.binding.setValue(this.buffer,a)},
// mix functions
_select:function(a,b,c,d,e){if(d>=.5)for(var f=0;f!==e;++f)a[b+f]=a[c+f]},_slerp:function(a,b,c,d,e){THREE.Quaternion.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}},
// File:src/animation/tracks/BooleanKeyframeTrack.js
/**
 *
 * A Track of Boolean keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.BooleanKeyframeTrack=function(a,b,c){THREE.KeyframeTrack.call(this,a,b,c)},THREE.BooleanKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.BooleanKeyframeTrack,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:THREE.InterpolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),
// File:src/animation/tracks/ColorKeyframeTrack.js
/**
 *
 * A Track of keyframe values that represent color.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.ColorKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)},THREE.ColorKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.ColorKeyframeTrack,ValueTypeName:"color"}),
// File:src/animation/tracks/NumberKeyframeTrack.js
/**
 *
 * A Track of numeric keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.NumberKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)},THREE.NumberKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.NumberKeyframeTrack,ValueTypeName:"number"}),
// File:src/animation/tracks/QuaternionKeyframeTrack.js
/**
 *
 * A Track of quaternion keyframe values.
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.QuaternionKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)},THREE.QuaternionKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.QuaternionKeyframeTrack,ValueTypeName:"quaternion",
// ValueBufferType is inherited
DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodLinear:function(a){return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0}),
// File:src/animation/tracks/StringKeyframeTrack.js
/**
 *
 * A Track that interpolates Strings
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.StringKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)},THREE.StringKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.StringKeyframeTrack,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:THREE.InterpolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0}),
// File:src/animation/tracks/VectorKeyframeTrack.js
/**
 *
 * A Track of vectored keyframe values.
 *
 *
 * @author Ben Houston / http://clara.io/
 * @author David Sarno / http://lighthaus.us/
 * @author tschw
 */
THREE.VectorKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)},THREE.VectorKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.VectorKeyframeTrack,ValueTypeName:"vector"}),
// File:src/audio/Audio.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */
THREE.Audio=function(a){THREE.Object3D.call(this),this.type="Audio",this.context=a.context,this.source=this.context.createBufferSource(),this.source.onended=this.onEnded.bind(this),this.gain=this.context.createGain(),this.gain.connect(a.getInput()),this.autoplay=!1,this.startTime=0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this.filter=null},THREE.Audio.prototype=Object.create(THREE.Object3D.prototype),THREE.Audio.prototype.constructor=THREE.Audio,THREE.Audio.prototype.getOutput=function(){return this.gain},THREE.Audio.prototype.setNodeSource=function(a){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=a,this.connect(),this},THREE.Audio.prototype.setBuffer=function(a){var b=this;return b.source.buffer=a,b.sourceType="buffer",b.autoplay&&b.play(),this},THREE.Audio.prototype.play=function(){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");var a=this.context.createBufferSource();a.buffer=this.source.buffer,a.loop=this.source.loop,a.onended=this.source.onended,a.start(0,this.startTime),a.playbackRate.value=this.playbackRate,this.isPlaying=!0,this.source=a,this.connect()},THREE.Audio.prototype.pause=function(){return this.hasPlaybackControl===!1?void console.warn("THREE.Audio: this Audio has no playback control."):(this.source.stop(),void(this.startTime=this.context.currentTime))},THREE.Audio.prototype.stop=function(){return this.hasPlaybackControl===!1?void console.warn("THREE.Audio: this Audio has no playback control."):(this.source.stop(),void(this.startTime=0))},THREE.Audio.prototype.connect=function(){null!==this.filter?(this.source.connect(this.filter),this.filter.connect(this.getOutput())):this.source.connect(this.getOutput())},THREE.Audio.prototype.disconnect=function(){null!==this.filter?(this.source.disconnect(this.filter),this.filter.disconnect(this.getOutput())):this.source.disconnect(this.getOutput())},THREE.Audio.prototype.getFilter=function(){return this.filter},THREE.Audio.prototype.setFilter=function(a){void 0===a&&(a=null),this.isPlaying===!0?(this.disconnect(),this.filter=a,this.connect()):this.filter=a},THREE.Audio.prototype.setPlaybackRate=function(a){return this.hasPlaybackControl===!1?void console.warn("THREE.Audio: this Audio has no playback control."):(this.playbackRate=a,void(this.isPlaying===!0&&(this.source.playbackRate.value=this.playbackRate)))},THREE.Audio.prototype.getPlaybackRate=function(){return this.playbackRate},THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1},THREE.Audio.prototype.setLoop=function(a){return this.hasPlaybackControl===!1?void console.warn("THREE.Audio: this Audio has no playback control."):void(this.source.loop=a)},THREE.Audio.prototype.getLoop=function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.source.loop},THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a},THREE.Audio.prototype.getVolume=function(){return this.gain.gain.value},
// File:src/audio/AudioAnalyser.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.AudioAnalyser=function(a,b){this.analyser=a.context.createAnalyser(),this.analyser.fftSize=void 0!==b?b:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),a.getOutput().connect(this.analyser)},THREE.AudioAnalyser.prototype={constructor:THREE.AudioAnalyser,getData:function(){return this.analyser.getByteFrequencyData(this.data),this.data}},
// File:src/audio/AudioContext.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
Object.defineProperty(THREE,"AudioContext",{get:function(){var a;return function(){return void 0===a&&(a=new(window.AudioContext||window.webkitAudioContext)),a}}()}),
// File:src/audio/PositionalAudio.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.PositionalAudio=function(a){THREE.Audio.call(this,a),this.panner=this.context.createPanner(),this.panner.connect(this.gain)},THREE.PositionalAudio.prototype=Object.create(THREE.Audio.prototype),THREE.PositionalAudio.prototype.constructor=THREE.PositionalAudio,THREE.PositionalAudio.prototype.getOutput=function(){return this.panner},THREE.PositionalAudio.prototype.setRefDistance=function(a){this.panner.refDistance=a},THREE.PositionalAudio.prototype.getRefDistance=function(){return this.panner.refDistance},THREE.PositionalAudio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a},THREE.PositionalAudio.prototype.getRolloffFactor=function(){return this.panner.rolloffFactor},THREE.PositionalAudio.prototype.setDistanceModel=function(a){this.panner.distanceModel=a},THREE.PositionalAudio.prototype.getDistanceModel=function(){return this.panner.distanceModel},THREE.PositionalAudio.prototype.setMaxDistance=function(a){this.panner.maxDistance=a},THREE.PositionalAudio.prototype.getMaxDistance=function(){return this.panner.maxDistance},THREE.PositionalAudio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b),a.setFromMatrixPosition(this.matrixWorld),this.panner.setPosition(a.x,a.y,a.z)}}(),
// File:src/audio/AudioListener.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.AudioListener=function(){THREE.Object3D.call(this),this.type="AudioListener",this.context=THREE.AudioContext,this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null},THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype),THREE.AudioListener.prototype.constructor=THREE.AudioListener,THREE.AudioListener.prototype.getInput=function(){return this.gain},THREE.AudioListener.prototype.removeFilter=function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},THREE.AudioListener.prototype.setFilter=function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=a,this.gain.connect(this.filter),this.filter.connect(this.context.destination)},THREE.AudioListener.prototype.getFilter=function(){return this.filter},THREE.AudioListener.prototype.setMasterVolume=function(a){this.gain.gain.value=a},THREE.AudioListener.prototype.getMasterVolume=function(){return this.gain.gain.value},THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3;return function(e){THREE.Object3D.prototype.updateMatrixWorld.call(this,e);var f=this.context.listener,g=this.up;this.matrixWorld.decompose(a,b,c),d.set(0,0,-1).applyQuaternion(b),f.setPosition(a.x,a.y,a.z),f.setOrientation(d.x,d.y,d.z,g.x,g.y,g.z)}}(),
// File:src/cameras/Camera.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/
THREE.Camera=function(){THREE.Object3D.call(this),this.type="Camera",this.matrixWorldInverse=new THREE.Matrix4,this.projectionMatrix=new THREE.Matrix4},THREE.Camera.prototype=Object.create(THREE.Object3D.prototype),THREE.Camera.prototype.constructor=THREE.Camera,THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){var c=b||new THREE.Vector3;return this.getWorldQuaternion(a),c.set(0,0,-1).applyQuaternion(a)}}(),THREE.Camera.prototype.lookAt=function(){
// This routine does not support cameras with rotated and/or translated parent(s)
var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up),this.quaternion.setFromRotationMatrix(a)}}(),THREE.Camera.prototype.clone=function(){return(new this.constructor).copy(this)},THREE.Camera.prototype.copy=function(a){return THREE.Object3D.prototype.copy.call(this,a),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this},
// File:src/cameras/CubeCamera.js
/**
 * Camera for rendering cube maps
 *	- renders scene into axis-aligned cube
 *
 * @author alteredq / http://alteredqualia.com/
 */
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this),this.type="CubeCamera";var d=90,e=1,f=new THREE.PerspectiveCamera(d,e,a,b);f.up.set(0,-1,0),f.lookAt(new THREE.Vector3(1,0,0)),this.add(f);var g=new THREE.PerspectiveCamera(d,e,a,b);g.up.set(0,-1,0),g.lookAt(new THREE.Vector3(-1,0,0)),this.add(g);var h=new THREE.PerspectiveCamera(d,e,a,b);h.up.set(0,0,1),h.lookAt(new THREE.Vector3(0,1,0)),this.add(h);var i=new THREE.PerspectiveCamera(d,e,a,b);i.up.set(0,0,-1),i.lookAt(new THREE.Vector3(0,-1,0)),this.add(i);var j=new THREE.PerspectiveCamera(d,e,a,b);j.up.set(0,-1,0),j.lookAt(new THREE.Vector3(0,0,1)),this.add(j);var k=new THREE.PerspectiveCamera(d,e,a,b);k.up.set(0,-1,0),k.lookAt(new THREE.Vector3(0,0,-1)),this.add(k);var l={format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter};this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,l),this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,d=c.texture.generateMipmaps;c.texture.generateMipmaps=!1,c.activeCubeFace=0,a.render(b,f,c),c.activeCubeFace=1,a.render(b,g,c),c.activeCubeFace=2,a.render(b,h,c),c.activeCubeFace=3,a.render(b,i,c),c.activeCubeFace=4,a.render(b,j,c),c.texture.generateMipmaps=d,c.activeCubeFace=5,a.render(b,k,c),a.setRenderTarget(null)}},THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype),THREE.CubeCamera.prototype.constructor=THREE.CubeCamera,
// File:src/cameras/OrthographicCamera.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this),this.type="OrthographicCamera",this.zoom=1,this.left=a,this.right=b,this.top=c,this.bottom=d,this.near=void 0!==e?e:.1,this.far=void 0!==f?f:2e3,this.updateProjectionMatrix()},THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype),THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera,THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)},THREE.OrthographicCamera.prototype.copy=function(a){return THREE.Camera.prototype.copy.call(this,a),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this},THREE.OrthographicCamera.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);return b.object.zoom=this.zoom,b.object.left=this.left,b.object.right=this.right,b.object.top=this.top,b.object.bottom=this.bottom,b.object.near=this.near,b.object.far=this.far,b},
// File:src/cameras/PerspectiveCamera.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author greggman / http://games.greggman.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author tschw
 */
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this),this.type="PerspectiveCamera",this.fov=void 0!==a?a:50,this.zoom=1,this.near=void 0!==c?c:.1,this.far=void 0!==d?d:2e3,this.focus=10,this.aspect=void 0!==b?b:1,this.view=null,this.filmGauge=35,// width of the film (default in millimeters)
this.filmOffset=0,// horizontal film offset (same unit as gauge)
this.updateProjectionMatrix()},THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype),THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera,/**
 * Sets the FOV by focal length (DEPRECATED).
 *
 * Optionally also sets .filmGauge, otherwise uses it. See .setFocalLength.
 */
THREE.PerspectiveCamera.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),void 0!==b&&(this.filmGauge=b),this.setFocalLength(a)},/**
 * Sets the FOV by focal length in respect to the current .filmGauge.
 *
 * The default film gauge is 35, so that the focal length can be specified for
 * a 35mm (full frame) camera.
 *
 * Values for focal length and film gauge must have the same unit.
 */
THREE.PerspectiveCamera.prototype.setFocalLength=function(a){
// see http://www.bobatkins.com/photography/technical/field_of_view.html
var b=.5*this.getFilmHeight()/a;this.fov=2*THREE.Math.RAD2DEG*Math.atan(b),this.updateProjectionMatrix()},/**
 * Calculates the focal length from the current .fov and .filmGauge.
 */
THREE.PerspectiveCamera.prototype.getFocalLength=function(){var a=Math.tan(.5*THREE.Math.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},THREE.PerspectiveCamera.prototype.getEffectiveFOV=function(){return 2*THREE.Math.RAD2DEG*Math.atan(Math.tan(.5*THREE.Math.DEG2RAD*this.fov)/this.zoom)},THREE.PerspectiveCamera.prototype.getFilmWidth=function(){
// film not completely covered in portrait format (aspect < 1)
return this.filmGauge*Math.min(this.aspect,1)},THREE.PerspectiveCamera.prototype.getFilmHeight=function(){
// film not completely covered in landscape format (aspect > 1)
return this.filmGauge/Math.max(this.aspect,1)},/**
 * Sets an offset in a larger frustum. This is useful for multi-window or
 * multi-monitor/multi-machine setups.
 *
 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
 * the monitors are in grid like this
 *
 *   +---+---+---+
 *   | A | B | C |
 *   +---+---+---+
 *   | D | E | F |
 *   +---+---+---+
 *
 * then for each monitor you would call it like this
 *
 *   var w = 1920;
 *   var h = 1080;
 *   var fullWidth = w * 3;
 *   var fullHeight = h * 2;
 *
 *   --A--
 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
 *   --B--
 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
 *   --C--
 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
 *   --D--
 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
 *   --E--
 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
 *   --F--
 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
 *
 *   Note there is no reason monitors have to be the same size or in a grid.
 */
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.aspect=a/b,this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f},this.updateProjectionMatrix()},THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=this.near,b=a*Math.tan(.5*THREE.Math.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g,b-=f.offsetY*c/h,d*=f.width/g,c*=f.height/h}var i=this.filmOffset;0!==i&&(e+=a*i/this.getFilmWidth()),this.projectionMatrix.makeFrustum(e,e+d,b-c,b,a,this.far)},THREE.PerspectiveCamera.prototype.copy=function(a){return THREE.Camera.prototype.copy.call(this,a),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=null===a.view?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this},THREE.PerspectiveCamera.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);return b.object.fov=this.fov,b.object.zoom=this.zoom,b.object.near=this.near,b.object.far=this.far,b.object.focus=this.focus,b.object.aspect=this.aspect,null!==this.view&&(b.object.view=Object.assign({},this.view)),b.object.filmGauge=this.filmGauge,b.object.filmOffset=this.filmOffset,b},
// File:src/cameras/StereoCamera.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.StereoCamera=function(){this.type="StereoCamera",this.aspect=1,this.cameraL=new THREE.PerspectiveCamera,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new THREE.PerspectiveCamera,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1},THREE.StereoCamera.prototype={constructor:THREE.StereoCamera,update:function(){var a,b,c,d,e,f=new THREE.Matrix4,g=new THREE.Matrix4;return function(h){var i=a!==h.focus||b!==h.fov||c!==h.aspect*this.aspect||d!==h.near||e!==h.far;if(i){a=h.focus,b=h.fov,c=h.aspect*this.aspect,d=h.near,e=h.far;
// Off-axis stereoscopic effect based on
// http://paulbourke.net/stereographics/stereorender/
var j,k,l=h.projectionMatrix.clone(),m=.032,n=m*d/a,o=d*Math.tan(THREE.Math.DEG2RAD*b*.5);
// translate xOffset
g.elements[12]=-m,f.elements[12]=m,
// for left eye
j=-o*c+n,k=o*c+n,l.elements[0]=2*d/(k-j),l.elements[8]=(k+j)/(k-j),this.cameraL.projectionMatrix.copy(l),
// for right eye
j=-o*c-n,k=o*c-n,l.elements[0]=2*d/(k-j),l.elements[8]=(k+j)/(k-j),this.cameraR.projectionMatrix.copy(l)}this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g),this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f)}}()},
// File:src/lights/Light.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Light=function(a,b){THREE.Object3D.call(this),this.type="Light",this.color=new THREE.Color(a),this.intensity=void 0!==b?b:1,this.receiveShadow=void 0},THREE.Light.prototype=Object.create(THREE.Object3D.prototype),THREE.Light.prototype.constructor=THREE.Light,THREE.Light.prototype.copy=function(a){return THREE.Object3D.prototype.copy.call(this,a),this.color.copy(a.color),this.intensity=a.intensity,this},THREE.Light.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);return b.object.color=this.color.getHex(),b.object.intensity=this.intensity,void 0!==this.groundColor&&(b.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(b.object.distance=this.distance),void 0!==this.angle&&(b.object.angle=this.angle),void 0!==this.decay&&(b.object.decay=this.decay),void 0!==this.penumbra&&(b.object.penumbra=this.penumbra),b},
// File:src/lights/LightShadow.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.LightShadow=function(a){this.camera=a,this.bias=0,this.radius=1,this.mapSize=new THREE.Vector2(512,512),this.map=null,this.matrix=new THREE.Matrix4},THREE.LightShadow.prototype={constructor:THREE.LightShadow,copy:function(a){return this.camera=a.camera.clone(),this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this},clone:function(){return(new this.constructor).copy(this)}},
// File:src/lights/AmbientLight.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.AmbientLight=function(a,b){THREE.Light.call(this,a,b),this.type="AmbientLight",this.castShadow=void 0},THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype),THREE.AmbientLight.prototype.constructor=THREE.AmbientLight,
// File:src/lights/DirectionalLight.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a,b),this.type="DirectionalLight",this.position.set(0,1,0),this.updateMatrix(),this.target=new THREE.Object3D,this.shadow=new THREE.DirectionalLightShadow},THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype),THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight,THREE.DirectionalLight.prototype.copy=function(a){return THREE.Light.prototype.copy.call(this,a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this},
// File:src/lights/DirectionalLightShadow.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.DirectionalLightShadow=function(a){THREE.LightShadow.call(this,new THREE.OrthographicCamera(-5,5,5,-5,.5,500))},THREE.DirectionalLightShadow.prototype=Object.create(THREE.LightShadow.prototype),THREE.DirectionalLightShadow.prototype.constructor=THREE.DirectionalLightShadow,
// File:src/lights/HemisphereLight.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a,c),this.type="HemisphereLight",this.castShadow=void 0,this.position.set(0,1,0),this.updateMatrix(),this.groundColor=new THREE.Color(b)},THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype),THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight,THREE.HemisphereLight.prototype.copy=function(a){return THREE.Light.prototype.copy.call(this,a),this.groundColor.copy(a.groundColor),this},
// File:src/lights/PointLight.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a,b),this.type="PointLight",this.distance=void 0!==c?c:0,this.decay=void 0!==d?d:1,// for physically correct lights, should be 2.
this.shadow=new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))},THREE.PointLight.prototype=Object.create(THREE.Light.prototype),THREE.PointLight.prototype.constructor=THREE.PointLight,Object.defineProperty(THREE.PointLight.prototype,"power",{get:function(){
// intensity = power per solid angle.
// ref: equation (15) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
return 4*this.intensity*Math.PI},set:function(a){
// intensity = power per solid angle.
// ref: equation (15) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
this.intensity=a/(4*Math.PI)}}),THREE.PointLight.prototype.copy=function(a){return THREE.Light.prototype.copy.call(this,a),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this},
// File:src/lights/SpotLight.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a,b),this.type="SpotLight",this.position.set(0,1,0),this.updateMatrix(),this.target=new THREE.Object3D,this.distance=void 0!==c?c:0,this.angle=void 0!==d?d:Math.PI/3,this.penumbra=void 0!==e?e:0,this.decay=void 0!==f?f:1,// for physically correct lights, should be 2.
this.shadow=new THREE.SpotLightShadow},THREE.SpotLight.prototype=Object.create(THREE.Light.prototype),THREE.SpotLight.prototype.constructor=THREE.SpotLight,Object.defineProperty(THREE.SpotLight.prototype,"power",{get:function(){
// intensity = power per solid angle.
// ref: equation (17) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
return this.intensity*Math.PI},set:function(a){
// intensity = power per solid angle.
// ref: equation (17) from http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr.pdf
this.intensity=a/Math.PI}}),THREE.SpotLight.prototype.copy=function(a){return THREE.Light.prototype.copy.call(this,a),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this},
// File:src/lights/SpotLightShadow.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.SpotLightShadow=function(){THREE.LightShadow.call(this,new THREE.PerspectiveCamera(50,1,.5,500))},THREE.SpotLightShadow.prototype=Object.create(THREE.LightShadow.prototype),THREE.SpotLightShadow.prototype.constructor=THREE.SpotLightShadow,THREE.SpotLightShadow.prototype.update=function(a){var b=2*THREE.Math.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height,d=a.distance||500,e=this.camera;b===e.fov&&c===e.aspect&&d===e.far||(e.fov=b,e.aspect=c,e.far=d,e.updateProjectionMatrix())},
// File:src/loaders/AudioLoader.js
/**
 * @author Reece Aaron Lecrivain / http://reecenotes.com/
 */
THREE.AudioLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.AudioLoader.prototype={constructor:THREE.AudioLoader,load:function(a,b,c,d){var e=new THREE.XHRLoader(this.manager);e.setResponseType("arraybuffer"),e.load(a,function(a){var c=THREE.AudioContext;c.decodeAudioData(a,function(a){b(a)})},c,d)}},
// File:src/loaders/Cache.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Cache={enabled:!1,files:{},add:function(a,b){this.enabled!==!1&&(
// console.log( 'THREE.Cache', 'Adding key:', key );
this.files[a]=b)},get:function(a){if(this.enabled!==!1)
// console.log( 'THREE.Cache', 'Checking key:', key );
return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},
// File:src/loaders/Loader.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Loader=function(){this.onLoadStart=function(){},this.onLoadProgress=function(){},this.onLoadComplete=function(){}},THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,extractUrlBase:function(a){var b=a.split("/");return 1===b.length?"./":(b.pop(),b.join("/")+"/")},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a,b,c;return function(d,e,f){function g(a,c,d,g,i){var j,k=e+a,l=THREE.Loader.Handlers.get(k);null!==l?j=l.load(k):(b.setCrossOrigin(f),j=b.load(k)),void 0!==c&&(j.repeat.fromArray(c),1!==c[0]&&(j.wrapS=THREE.RepeatWrapping),1!==c[1]&&(j.wrapT=THREE.RepeatWrapping)),void 0!==d&&j.offset.fromArray(d),void 0!==g&&("repeat"===g[0]&&(j.wrapS=THREE.RepeatWrapping),"mirror"===g[0]&&(j.wrapS=THREE.MirroredRepeatWrapping),"repeat"===g[1]&&(j.wrapT=THREE.RepeatWrapping),"mirror"===g[1]&&(j.wrapT=THREE.MirroredRepeatWrapping)),void 0!==i&&(j.anisotropy=i);var m=THREE.Math.generateUUID();return h[m]=j,m}void 0===a&&(a=new THREE.Color),void 0===b&&(b=new THREE.TextureLoader),void 0===c&&(c=new THREE.MaterialLoader);
// convert from old material format
var h={},i={uuid:THREE.Math.generateUUID(),type:"MeshLambertMaterial"};for(var j in d){var k=d[j];switch(j){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":i.name=k;break;case"blending":i.blending=THREE[k];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",j,"is no longer supported.");break;case"colorDiffuse":i.color=a.fromArray(k).getHex();break;case"colorSpecular":i.specular=a.fromArray(k).getHex();break;case"colorEmissive":i.emissive=a.fromArray(k).getHex();break;case"specularCoef":i.shininess=k;break;case"shading":"basic"===k.toLowerCase()&&(i.type="MeshBasicMaterial"),"phong"===k.toLowerCase()&&(i.type="MeshPhongMaterial");break;case"mapDiffuse":i.map=g(k,d.mapDiffuseRepeat,d.mapDiffuseOffset,d.mapDiffuseWrap,d.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapLight":i.lightMap=g(k,d.mapLightRepeat,d.mapLightOffset,d.mapLightWrap,d.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":i.aoMap=g(k,d.mapAORepeat,d.mapAOOffset,d.mapAOWrap,d.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":i.bumpMap=g(k,d.mapBumpRepeat,d.mapBumpOffset,d.mapBumpWrap,d.mapBumpAnisotropy);break;case"mapBumpScale":i.bumpScale=k;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":i.normalMap=g(k,d.mapNormalRepeat,d.mapNormalOffset,d.mapNormalWrap,d.mapNormalAnisotropy);break;case"mapNormalFactor":i.normalScale=[k,k];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":i.specularMap=g(k,d.mapSpecularRepeat,d.mapSpecularOffset,d.mapSpecularWrap,d.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapAlpha":i.alphaMap=g(k,d.mapAlphaRepeat,d.mapAlphaOffset,d.mapAlphaWrap,d.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":i.side=THREE.BackSide;break;case"doubleSided":i.side=THREE.DoubleSide;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),i.opacity=k;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":i[j]=k;break;case"vertexColors":k===!0&&(i.vertexColors=THREE.VertexColors),"face"===k&&(i.vertexColors=THREE.FaceColors);break;default:console.error("THREE.Loader.createMaterial: Unsupported",j,k)}}return"MeshBasicMaterial"===i.type&&delete i.emissive,"MeshPhongMaterial"!==i.type&&delete i.specular,i.opacity<1&&(i.transparent=!0),c.setTextures(h),c.parse(i)}}()},THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c],f=b[c+1];if(e.test(a))return f}return null}},
// File:src/loaders/XHRLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){void 0!==this.path&&(a=this.path+a);var e=this,f=THREE.Cache.get(a);if(void 0!==f)return b&&setTimeout(function(){b(f)},0),f;var g=new XMLHttpRequest;return g.overrideMimeType("text/plain"),g.open("GET",a,!0),g.addEventListener("load",function(c){var f=c.target.response;THREE.Cache.add(a,f),200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(
// Some browsers return HTTP Status 0 when using non-http protocol
// e.g. 'file://' or 'data://'. Handle as success.
console.warn("THREE.XHRLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1),void 0!==c&&g.addEventListener("progress",function(a){c(a)},!1),g.addEventListener("error",function(b){d&&d(b),e.manager.itemError(a)},!1),void 0!==this.responseType&&(g.responseType=this.responseType),void 0!==this.withCredentials&&(g.withCredentials=this.withCredentials),g.send(null),e.manager.itemStart(a),g},setPath:function(a){this.path=a},setResponseType:function(a){this.responseType=a},setWithCredentials:function(a){this.withCredentials=a}},
// File:src/loaders/FontLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.FontLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.FontLoader.prototype={constructor:THREE.FontLoader,load:function(a,b,c,d){var e=new THREE.XHRLoader(this.manager);e.load(a,function(a){b(new THREE.Font(JSON.parse(a.substring(65,a.length-2))))},c,d)}},
// File:src/loaders/ImageLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){void 0!==this.path&&(a=this.path+a);var e=this,f=THREE.Cache.get(a);if(void 0!==f)return e.manager.itemStart(a),b?setTimeout(function(){b(f),e.manager.itemEnd(a)},0):e.manager.itemEnd(a),f;var g=document.createElement("img");return g.addEventListener("load",function(c){THREE.Cache.add(a,this),b&&b(this),e.manager.itemEnd(a)},!1),void 0!==c&&g.addEventListener("progress",function(a){c(a)},!1),g.addEventListener("error",function(b){d&&d(b),e.manager.itemError(a)},!1),void 0!==this.crossOrigin&&(g.crossOrigin=this.crossOrigin),e.manager.itemStart(a),g.src=a,g},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}},
// File:src/loaders/JSONLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.JSONLoader=function(a){"boolean"==typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0),this.manager=void 0!==a?a:THREE.DefaultLoadingManager,this.withCredentials=!1};THREE.JSONLoader.prototype={constructor:THREE.JSONLoader,
// Deprecated
get statusDomElement(){return void 0===this._statusDomElement&&(this._statusDomElement=document.createElement("div")),console.warn("THREE.JSONLoader: .statusDomElement has been removed."),this._statusDomElement},load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"==typeof this.texturePath?this.texturePath:THREE.Loader.prototype.extractUrlBase(a),g=new THREE.XHRLoader(this.manager);g.setWithCredentials(this.withCredentials),g.load(a,function(c){var d=JSON.parse(c),g=d.metadata;if(void 0!==g){var h=g.type;if(void 0!==h){if("object"===h.toLowerCase())return void console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");if("scene"===h.toLowerCase())return void console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.")}}var i=e.parse(d,f);b(i.geometry,i.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){function c(b){function c(a,b){return a&1<<b}var d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=a.faces,G=a.vertices,H=a.normals,I=a.colors,J=0;if(void 0!==a.uvs){
// disregard empty arrays
for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&J++;for(d=0;d<J;d++)g.faceVertexUvs[d]=[]}for(h=0,i=G.length;h<i;)v=new THREE.Vector3,v.x=G[h++]*b,v.y=G[h++]*b,v.z=G[h++]*b,g.vertices.push(v);for(h=0,i=F.length;h<i;)
// console.log("type", type, "bits", isQuad, hasMaterial, hasFaceVertexUv, hasFaceNormal, hasFaceVertexNormal, hasFaceColor, hasFaceVertexColor);
if(n=F[h++],o=c(n,0),p=c(n,1),q=c(n,3),r=c(n,4),s=c(n,5),t=c(n,6),u=c(n,7),o){if(x=new THREE.Face3,x.a=F[h],x.b=F[h+1],x.c=F[h+3],y=new THREE.Face3,y.a=F[h+1],y.b=F[h+2],y.c=F[h+3],h+=4,p&&(m=F[h++],x.materialIndex=m,y.materialIndex=m),
// to get face <=> uv index correspondence
f=g.faces.length,q)for(d=0;d<J;d++)for(B=a.uvs[d],g.faceVertexUvs[d][f]=[],g.faceVertexUvs[d][f+1]=[],e=0;e<4;e++)l=F[h++],D=B[2*l],E=B[2*l+1],C=new THREE.Vector2(D,E),2!==e&&g.faceVertexUvs[d][f].push(C),0!==e&&g.faceVertexUvs[d][f+1].push(C);if(r&&(k=3*F[h++],x.normal.set(H[k++],H[k++],H[k]),y.normal.copy(x.normal)),s)for(d=0;d<4;d++)k=3*F[h++],A=new THREE.Vector3(H[k++],H[k++],H[k]),2!==d&&x.vertexNormals.push(A),0!==d&&y.vertexNormals.push(A);if(t&&(j=F[h++],z=I[j],x.color.setHex(z),y.color.setHex(z)),u)for(d=0;d<4;d++)j=F[h++],z=I[j],2!==d&&x.vertexColors.push(new THREE.Color(z)),0!==d&&y.vertexColors.push(new THREE.Color(z));g.faces.push(x),g.faces.push(y)}else{if(w=new THREE.Face3,w.a=F[h++],w.b=F[h++],w.c=F[h++],p&&(m=F[h++],w.materialIndex=m),
// to get face <=> uv index correspondence
f=g.faces.length,q)for(d=0;d<J;d++)for(B=a.uvs[d],g.faceVertexUvs[d][f]=[],e=0;e<3;e++)l=F[h++],D=B[2*l],E=B[2*l+1],C=new THREE.Vector2(D,E),g.faceVertexUvs[d][f].push(C);if(r&&(k=3*F[h++],w.normal.set(H[k++],H[k++],H[k])),s)for(d=0;d<3;d++)k=3*F[h++],A=new THREE.Vector3(H[k++],H[k++],H[k]),w.vertexNormals.push(A);if(t&&(j=F[h++],w.color.setHex(I[j])),u)for(d=0;d<3;d++)j=F[h++],w.vertexColors.push(new THREE.Color(I[j]));g.faces.push(w)}}function d(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var c=0,d=a.skinWeights.length;c<d;c+=b){var e=a.skinWeights[c],f=b>1?a.skinWeights[c+1]:0,h=b>2?a.skinWeights[c+2]:0,i=b>3?a.skinWeights[c+3]:0;g.skinWeights.push(new THREE.Vector4(e,f,h,i))}if(a.skinIndices)for(var c=0,d=a.skinIndices.length;c<d;c+=b){var j=a.skinIndices[c],k=b>1?a.skinIndices[c+1]:0,l=b>2?a.skinIndices[c+2]:0,m=b>3?a.skinIndices[c+3]:0;g.skinIndices.push(new THREE.Vector4(j,k,l,m))}g.bones=a.bones,g.bones&&g.bones.length>0&&(g.skinWeights.length!==g.skinIndices.length||g.skinIndices.length!==g.vertices.length)&&console.warn("When skinning, number of vertices ("+g.vertices.length+"), skinIndices ("+g.skinIndices.length+"), and skinWeights ("+g.skinWeights.length+") should match.")}function e(b){if(void 0!==a.morphTargets)for(var c=0,d=a.morphTargets.length;c<d;c++){g.morphTargets[c]={},g.morphTargets[c].name=a.morphTargets[c].name,g.morphTargets[c].vertices=[];for(var e=g.morphTargets[c].vertices,f=a.morphTargets[c].vertices,h=0,i=f.length;h<i;h+=3){var j=new THREE.Vector3;j.x=f[h]*b,j.y=f[h+1]*b,j.z=f[h+2]*b,e.push(j)}}if(void 0!==a.morphColors&&a.morphColors.length>0){console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');for(var k=g.faces,l=a.morphColors[0].colors,c=0,d=k.length;c<d;c++)k[c].color.fromArray(l,3*c)}}function f(){var b=[],c=[];void 0!==a.animation&&c.push(a.animation),void 0!==a.animations&&(a.animations.length?c=c.concat(a.animations):c.push(a.animations));for(var d=0;d<c.length;d++){var e=THREE.AnimationClip.parseAnimation(c[d],g.bones);e&&b.push(e)}
// parse implicit morph animations
if(g.morphTargets){
// TODO: Figure out what an appropraite FPS is for morph target animations -- defaulting to 10, but really it is completely arbitrary.
var f=THREE.AnimationClip.CreateClipsFromMorphTargetSequences(g.morphTargets,10);b=b.concat(f)}b.length>0&&(g.animations=b)}var g=new THREE.Geometry,h=void 0!==a.scale?1/a.scale:1;if(c(h),d(),e(h),f(),g.computeFaceNormals(),g.computeBoundingSphere(),void 0===a.materials||0===a.materials.length)return{geometry:g};var i=THREE.Loader.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:g,materials:i}}};
// File:src/loaders/LoadingManager.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.LoadingManager=function(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0,this.onLoad=a,this.onProgress=b,this.onError=c,this.itemStart=function(a){g++,e===!1&&void 0!==d.onStart&&d.onStart(a,f,g),e=!0},this.itemEnd=function(a){f++,void 0!==d.onProgress&&d.onProgress(a,f,g),f===g&&(e=!1,void 0!==d.onLoad&&d.onLoad())},this.itemError=function(a){void 0!==d.onError&&d.onError(a)}},THREE.DefaultLoadingManager=new THREE.LoadingManager,
// File:src/loaders/BufferGeometryLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};if(void 0!==c){var e=new d[c.type](c.array);b.setIndex(new THREE.BufferAttribute(e,1))}var f=a.data.attributes;for(var g in f){var h=f[g],e=new d[h.type](h.array);b.addAttribute(g,new THREE.BufferAttribute(e,h.itemSize,h.normalized))}var i=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==i)for(var j=0,k=i.length;j!==k;++j){var l=i[j];b.addGroup(l.start,l.count,l.materialIndex)}var m=a.data.boundingSphere;if(void 0!==m){var n=new THREE.Vector3;void 0!==m.center&&n.fromArray(m.center),b.boundingSphere=new THREE.Sphere(n,m.radius)}return b}},
// File:src/loaders/MaterialLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,this.textures={}},THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},getTexture:function(a){var b=this.textures;return void 0===b[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a),b[a]},parse:function(a){var b=new THREE[a.type];if(void 0!==a.uuid&&(b.uuid=a.uuid),void 0!==a.name&&(b.name=a.name),void 0!==a.color&&b.color.setHex(a.color),void 0!==a.roughness&&(b.roughness=a.roughness),void 0!==a.metalness&&(b.metalness=a.metalness),void 0!==a.emissive&&b.emissive.setHex(a.emissive),void 0!==a.specular&&b.specular.setHex(a.specular),void 0!==a.shininess&&(b.shininess=a.shininess),void 0!==a.uniforms&&(b.uniforms=a.uniforms),void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader),void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader),void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors),void 0!==a.shading&&(b.shading=a.shading),void 0!==a.blending&&(b.blending=a.blending),void 0!==a.side&&(b.side=a.side),void 0!==a.opacity&&(b.opacity=a.opacity),void 0!==a.transparent&&(b.transparent=a.transparent),void 0!==a.alphaTest&&(b.alphaTest=a.alphaTest),void 0!==a.depthTest&&(b.depthTest=a.depthTest),void 0!==a.depthWrite&&(b.depthWrite=a.depthWrite),void 0!==a.colorWrite&&(b.colorWrite=a.colorWrite),void 0!==a.wireframe&&(b.wireframe=a.wireframe),void 0!==a.wireframeLinewidth&&(b.wireframeLinewidth=a.wireframeLinewidth),
// for PointsMaterial
void 0!==a.size&&(b.size=a.size),void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation),
// maps
void 0!==a.map&&(b.map=this.getTexture(a.map)),void 0!==a.alphaMap&&(b.alphaMap=this.getTexture(a.alphaMap),b.transparent=!0),void 0!==a.bumpMap&&(b.bumpMap=this.getTexture(a.bumpMap)),void 0!==a.bumpScale&&(b.bumpScale=a.bumpScale),void 0!==a.normalMap&&(b.normalMap=this.getTexture(a.normalMap)),void 0!==a.normalScale){var c=a.normalScale;Array.isArray(c)===!1&&(
// Blender exporter used to export a scalar. See #7459
c=[c,c]),b.normalScale=(new THREE.Vector2).fromArray(c)}
// MultiMaterial
if(void 0!==a.displacementMap&&(b.displacementMap=this.getTexture(a.displacementMap)),void 0!==a.displacementScale&&(b.displacementScale=a.displacementScale),void 0!==a.displacementBias&&(b.displacementBias=a.displacementBias),void 0!==a.roughnessMap&&(b.roughnessMap=this.getTexture(a.roughnessMap)),void 0!==a.metalnessMap&&(b.metalnessMap=this.getTexture(a.metalnessMap)),void 0!==a.emissiveMap&&(b.emissiveMap=this.getTexture(a.emissiveMap)),void 0!==a.emissiveIntensity&&(b.emissiveIntensity=a.emissiveIntensity),void 0!==a.specularMap&&(b.specularMap=this.getTexture(a.specularMap)),void 0!==a.envMap&&(b.envMap=this.getTexture(a.envMap),b.combine=THREE.MultiplyOperation),a.reflectivity&&(b.reflectivity=a.reflectivity),void 0!==a.lightMap&&(b.lightMap=this.getTexture(a.lightMap)),void 0!==a.lightMapIntensity&&(b.lightMapIntensity=a.lightMapIntensity),void 0!==a.aoMap&&(b.aoMap=this.getTexture(a.aoMap)),void 0!==a.aoMapIntensity&&(b.aoMapIntensity=a.aoMapIntensity),void 0!==a.materials)for(var d=0,e=a.materials.length;d<e;d++)b.materials.push(this.parse(a.materials[d]));return b}},
// File:src/loaders/ObjectLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,this.texturePath=""},THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,f=new THREE.XHRLoader(e.manager);f.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(g)}),e=this.parseTextures(a.textures,d),f=this.parseMaterials(a.materials,e),g=this.parseObject(a.object,c,f);return a.animations&&(g.animations=this.parseAnimations(a.animations)),void 0!==a.images&&0!==a.images.length||void 0!==b&&b(g),g},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case"PlaneGeometry":case"PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":// backwards compatible
g=new THREE[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":g=new THREE[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":g=new THREE[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":g=new THREE[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case"DodecahedronGeometry":g=new THREE.DodecahedronGeometry(h.radius,h.detail);break;case"IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case"OctahedronGeometry":g=new THREE.OctahedronGeometry(h.radius,h.detail);break;case"TetrahedronGeometry":g=new THREE.TetrahedronGeometry(h.radius,h.detail);break;case"RingGeometry":case"RingBufferGeometry":g=new THREE[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":g=new THREE[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":g=new THREE[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case"LatheGeometry":case"LatheBufferGeometry":g=new THREE[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case"BufferGeometry":g=d.parse(h);break;case"Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}g.uuid=h.uuid,void 0!==h.name&&(g.name=h.name),b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new THREE.MaterialLoader;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=THREE.AnimationClip.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){return d.manager.itemStart(a),g.load(a,function(){d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&a.length>0){var f=new THREE.LoadingManager(b),g=new THREE.ImageLoader(f);g.setCrossOrigin(this.crossOrigin);for(var h=0,i=a.length;h<i;h++){var j=a[h],k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(j.url)?j.url:d.texturePath+j.url;e[j.uuid]=c(k)}}return e},parseTextures:function(a,b){function c(a){return"number"==typeof a?a:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a),THREE[a])}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid),void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new THREE.Texture(b[g.image]);h.needsUpdate=!0,h.uuid=g.uuid,void 0!==g.name&&(h.name=g.name),void 0!==g.mapping&&(h.mapping=c(g.mapping)),void 0!==g.offset&&(h.offset=new THREE.Vector2(g.offset[0],g.offset[1])),void 0!==g.repeat&&(h.repeat=new THREE.Vector2(g.repeat[0],g.repeat[1])),void 0!==g.minFilter&&(h.minFilter=c(g.minFilter)),void 0!==g.magFilter&&(h.magFilter=c(g.magFilter)),void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy),Array.isArray(g.wrap)&&(h.wrapS=c(g.wrap[0]),h.wrapT=c(g.wrap[1])),d[g.uuid]=h}return d},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){function e(a){return void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a),c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case"Scene":g=new THREE.Scene;break;case"PerspectiveCamera":g=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far),void 0!==b.focus&&(g.focus=b.focus),void 0!==b.zoom&&(g.zoom=b.zoom),void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge),void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset),void 0!==b.view&&(g.view=Object.assign({},b.view));break;case"OrthographicCamera":g=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case"AmbientLight":g=new THREE.AmbientLight(b.color,b.intensity);break;case"DirectionalLight":g=new THREE.DirectionalLight(b.color,b.intensity);break;case"PointLight":g=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case"SpotLight":g=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case"HemisphereLight":g=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case"Mesh":var h=e(b.geometry),i=f(b.material);g=h.bones&&h.bones.length>0?new THREE.SkinnedMesh(h,i):new THREE.Mesh(h,i);break;case"LOD":g=new THREE.LOD;break;case"Line":g=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case"PointCloud":case"Points":g=new THREE.Points(e(b.geometry),f(b.material));break;case"Sprite":g=new THREE.Sprite(f(b.material));break;case"Group":g=new THREE.Group;break;default:g=new THREE.Object3D}if(g.uuid=b.uuid,void 0!==b.name&&(g.name=b.name),void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.scale&&g.scale.fromArray(b.scale)),void 0!==b.castShadow&&(g.castShadow=b.castShadow),void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow),void 0!==b.visible&&(g.visible=b.visible),void 0!==b.userData&&(g.userData=b.userData),void 0!==b.children)for(var j in b.children)g.add(this.parseObject(b.children[j],c,d));if("LOD"===b.type)for(var k=b.levels,l=0;l<k.length;l++){var m=k[l],j=g.getObjectByProperty("uuid",m.object);void 0!==j&&g.addLevel(j,m.distance)}return g}}()},
// File:src/loaders/TextureLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.Texture,f=new THREE.ImageLoader(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(a,function(a){e.image=a,e.needsUpdate=!0,void 0!==b&&b(e)},c,d),e},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}},
// File:src/loaders/CubeTextureLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.CubeTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager},THREE.CubeTextureLoader.prototype={constructor:THREE.CubeTextureLoader,load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a,h++,6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new THREE.CubeTexture,g=new THREE.ImageLoader(this.manager);g.setCrossOrigin(this.crossOrigin),g.setPath(this.path);for(var h=0,i=0;i<a.length;++i)e(i);return f},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}},
// File:src/loaders/BinaryTextureLoader.js
/**
 * @author Nikos M. / https://github.com/foo123/
 *
 * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
 */
THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,
// override in sub classes
this._parser=null},THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader(this.manager);return g.setResponseType("arraybuffer"),g.load(a,function(a){var c=e._parser(a);c&&(void 0!==c.image?f.image=c.image:void 0!==c.data&&(f.image.width=c.width,f.image.height=c.height,f.image.data=c.data),f.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter,f.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==c.anisotropy?c.anisotropy:1,void 0!==c.format&&(f.format=c.format),void 0!==c.type&&(f.type=c.type),void 0!==c.mipmaps&&(f.mipmaps=c.mipmaps),1===c.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,c))},c,d),f}},
// File:src/loaders/CompressedTextureLoader.js
/**
 * @author mrdoob / http://mrdoob.com/
 *
 * Abstract Base class to block based textures loader (dds, pvr, ...)
 */
THREE.CompressedTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager,
// override in sub classes
this._parser=null},THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c,d){function e(e){i.load(a[e],function(a){var c=f._parser(a,!0);g[e]={width:c.width,height:c.height,format:c.format,mipmaps:c.mipmaps},j+=1,6===j&&(1===c.mipmapCount&&(h.minFilter=THREE.LinearFilter),h.format=c.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new THREE.CompressedTexture;h.image=g;var i=new THREE.XHRLoader(this.manager);if(i.setPath(this.path),i.setResponseType("arraybuffer"),Array.isArray(a))for(var j=0,k=0,l=a.length;k<l;++k)e(k);else
// compressed cubemap texture stored in a single DDS file
i.load(a,function(a){var c=f._parser(a,!0);if(c.isCubemap)for(var d=c.mipmaps.length/c.mipmapCount,e=0;e<d;e++){g[e]={mipmaps:[]};for(var i=0;i<c.mipmapCount;i++)g[e].mipmaps.push(c.mipmaps[e*c.mipmapCount+i]),g[e].format=c.format,g[e].width=c.width,g[e].height=c.height}else h.image.width=c.width,h.image.height=c.height,h.mipmaps=c.mipmaps;1===c.mipmapCount&&(h.minFilter=THREE.LinearFilter),h.format=c.format,h.needsUpdate=!0,b&&b(h)},c,d);return h},setPath:function(a){this.path=a}},
// File:src/materials/Material.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.type="Material",this.side=THREE.FrontSide,this.opacity=1,this.transparent=!1,this.blending=THREE.NormalBlending,this.blendSrc=THREE.SrcAlphaFactor,this.blendDst=THREE.OneMinusSrcAlphaFactor,this.blendEquation=THREE.AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=THREE.LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.clippingPlanes=null,this.clipShadows=!1,this.colorWrite=!0,this.precision=null,// override the renderer's default precision for this material
this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.alphaTest=0,this.premultipliedAlpha=!1,this.overdraw=0,// Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer
this.visible=!0,this._needsUpdate=!0},THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){a===!0&&this.update(),this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0!==c){var d=this[b];void 0!==d?d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):"overdraw"===b?
// ensure overdraw is backwards-compatible with legacy boolean type
this[b]=Number(c):this[b]=c:console.warn("THREE."+this.type+": '"+b+"' is not a property of this material.")}else console.warn("THREE.Material: '"+b+"' parameter is undefined.")}},toJSON:function(a){
// TODO: Copied from Object3D.toJSON
function b(a){var b=[];for(var c in a){var d=a[c];delete d.metadata,b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};if(
// standard Material serialization
d.uuid=this.uuid,d.type=this.type,""!==this.name&&(d.name=this.name),this.color instanceof THREE.Color&&(d.color=this.color.getHex()),.5!==this.roughness&&(d.roughness=this.roughness),.5!==this.metalness&&(d.metalness=this.metalness),this.emissive instanceof THREE.Color&&(d.emissive=this.emissive.getHex()),this.specular instanceof THREE.Color&&(d.specular=this.specular.getHex()),void 0!==this.shininess&&(d.shininess=this.shininess),this.map instanceof THREE.Texture&&(d.map=this.map.toJSON(a).uuid),this.alphaMap instanceof THREE.Texture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap instanceof THREE.Texture&&(d.lightMap=this.lightMap.toJSON(a).uuid),this.bumpMap instanceof THREE.Texture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale),this.normalMap instanceof THREE.Texture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray()),this.displacementMap instanceof THREE.Texture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias),this.roughnessMap instanceof THREE.Texture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap instanceof THREE.Texture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap instanceof THREE.Texture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap instanceof THREE.Texture&&(d.specularMap=this.specularMap.toJSON(a).uuid),this.envMap instanceof THREE.Texture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity),void 0!==this.size&&(d.size=this.size),void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation),void 0!==this.vertexColors&&this.vertexColors!==THREE.NoColors&&(d.vertexColors=this.vertexColors),void 0!==this.shading&&this.shading!==THREE.SmoothShading&&(d.shading=this.shading),void 0!==this.blending&&this.blending!==THREE.NormalBlending&&(d.blending=this.blending),void 0!==this.side&&this.side!==THREE.FrontSide&&(d.side=this.side),this.opacity<1&&(d.opacity=this.opacity),this.transparent===!0&&(d.transparent=this.transparent),this.alphaTest>0&&(d.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(d.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(d.wireframe=this.wireframe),this.wireframeLinewidth>1&&(d.wireframeLinewidth=this.wireframeLinewidth),c){var e=b(a.textures),f=b(a.images);e.length>0&&(d.textures=e),f.length>0&&(d.images=f)}return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name,this.side=a.side,this.opacity=a.opacity,this.transparent=a.transparent,this.blending=a.blending,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.alphaTest=a.alphaTest,this.premultipliedAlpha=a.premultipliedAlpha,this.overdraw=a.overdraw,this.visible=a.visible,this.clipShadows=a.clipShadows;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=new Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}return this.clippingPlanes=c,this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),THREE.MaterialIdCount=0,
// File:src/materials/LineBasicMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round",
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>
 *
 *  fog: <bool>
 * }
 */
THREE.LineBasicMaterial=function(a){THREE.Material.call(this),this.type="LineBasicMaterial",this.color=new THREE.Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.blending=THREE.NormalBlending,this.vertexColors=THREE.NoColors,this.fog=!0,this.setValues(a)},THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype),THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial,THREE.LineBasicMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.vertexColors=a.vertexColors,this.fog=a.fog,this},
// File:src/materials/LineDashedMaterial.js
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *
 *  scale: <float>,
 *  dashSize: <float>,
 *  gapSize: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: THREE.NoColors / THREE.FaceColors / THREE.VertexColors
 *
 *  fog: <bool>
 * }
 */
THREE.LineDashedMaterial=function(a){THREE.Material.call(this),this.type="LineDashedMaterial",this.color=new THREE.Color(16777215),this.linewidth=1,this.scale=1,this.dashSize=3,this.gapSize=1,this.blending=THREE.NormalBlending,this.vertexColors=THREE.NoColors,this.fog=!0,this.setValues(a)},THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype),THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial,THREE.LineDashedMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.linewidth=a.linewidth,this.scale=a.scale,this.dashSize=a.dashSize,this.gapSize=a.gapSize,this.vertexColors=a.vertexColors,this.fog=a.fog,this},
// File:src/materials/MeshBasicMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *
 *  fog: <bool>
 * }
 */
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this),this.type="MeshBasicMaterial",this.color=new THREE.Color(16777215),// emissive
this.map=null,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.blending=THREE.NormalBlending,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.vertexColors=THREE.NoColors,this.skinning=!1,this.morphTargets=!1,this.setValues(a)},THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial,THREE.MeshBasicMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.fog=a.fog,this.shading=a.shading,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.vertexColors=a.vertexColors,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this},
// File:src/materials/MeshDepthMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / https://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this),this.type="MeshDepthMaterial",this.depthPacking=THREE.BasicDepthPacking,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)},THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial,THREE.MeshDepthMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.depthPacking=a.depthPacking,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this},
// File:src/materials/MeshLambertMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this),this.type="MeshLambertMaterial",this.color=new THREE.Color(16777215),// diffuse
this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new THREE.Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.blending=THREE.NormalBlending,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.vertexColors=THREE.NoColors,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)},THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial,THREE.MeshLambertMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.fog=a.fog,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.vertexColors=a.vertexColors,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this},
// File:src/materials/MeshNormalMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 *
 * parameters = {
 *  opacity: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a),this.type="MeshNormalMaterial",this.wireframe=!1,this.wireframeLinewidth=1,this.morphTargets=!1,this.setValues(a)},THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial,THREE.MeshNormalMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this},
// File:src/materials/MeshPhongMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  specular: <hex>,
 *  shininess: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this),this.type="MeshPhongMaterial",this.color=new THREE.Color(16777215),// diffuse
this.specular=new THREE.Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new THREE.Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new THREE.Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=THREE.MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.blending=THREE.NormalBlending,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.vertexColors=THREE.NoColors,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)},THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial,THREE.MeshPhongMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.specular.copy(a.specular),this.shininess=a.shininess,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.fog=a.fog,this.shading=a.shading,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.vertexColors=a.vertexColors,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this},
// File:src/materials/MeshStandardMaterial.js
/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  color: <hex>,
 *  roughness: <float>,
 *  metalness: <float>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  bumpMap: new THREE.Texture( <Image> ),
 *  bumpScale: <float>,
 *
 *  normalMap: new THREE.Texture( <Image> ),
 *  normalScale: <Vector2>,
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  roughnessMap: new THREE.Texture( <Image> ),
 *
 *  metalnessMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
 *  envMapIntensity: <float>
 *
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */
THREE.MeshStandardMaterial=function(a){THREE.Material.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new THREE.Color(16777215),// diffuse
this.roughness=.5,this.metalness=.5,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new THREE.Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalScale=new THREE.Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.fog=!0,this.shading=THREE.SmoothShading,this.blending=THREE.NormalBlending,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.vertexColors=THREE.NoColors,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)},THREE.MeshStandardMaterial.prototype=Object.create(THREE.Material.prototype),THREE.MeshStandardMaterial.prototype.constructor=THREE.MeshStandardMaterial,THREE.MeshStandardMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapIntensity=a.envMapIntensity,this.refractionRatio=a.refractionRatio,this.fog=a.fog,this.shading=a.shading,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.vertexColors=a.vertexColors,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this},
// File:src/materials/MeshPhysicalMaterial.js
/**
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *  reflectivity: <float>
 * }
 */
THREE.MeshPhysicalMaterial=function(a){THREE.MeshStandardMaterial.call(this),this.defines={PHYSICAL:""},this.type="MeshPhysicalMaterial",this.reflectivity=.5,// maps to F0 = 0.04
this.setValues(a)},THREE.MeshPhysicalMaterial.prototype=Object.create(THREE.MeshStandardMaterial.prototype),THREE.MeshPhysicalMaterial.prototype.constructor=THREE.MeshPhysicalMaterial,THREE.MeshPhysicalMaterial.prototype.copy=function(a){return THREE.MeshStandardMaterial.prototype.copy.call(this,a),this.defines={PHYSICAL:""},this.reflectivity=a.reflectivity,this},
// File:src/materials/MultiMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.MultiMaterial=function(a){this.uuid=THREE.Math.generateUUID(),this.type="MultiMaterial",this.materials=a instanceof Array?a:[],this.visible=!0},THREE.MultiMaterial.prototype={constructor:THREE.MultiMaterial,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata,b.materials.push(f)}return b.visible=this.visible,b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a.visible=this.visible,a}},
// File:src/materials/PointsMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>,
 *
 *  fog: <bool>
 * }
 */
THREE.PointsMaterial=function(a){THREE.Material.call(this),this.type="PointsMaterial",this.color=new THREE.Color(16777215),this.map=null,this.size=1,this.sizeAttenuation=!0,this.blending=THREE.NormalBlending,this.vertexColors=THREE.NoColors,this.fog=!0,this.setValues(a)},THREE.PointsMaterial.prototype=Object.create(THREE.Material.prototype),THREE.PointsMaterial.prototype.constructor=THREE.PointsMaterial,THREE.PointsMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.size=a.size,this.sizeAttenuation=a.sizeAttenuation,this.vertexColors=a.vertexColors,this.fog=a.fog,this},
// File:src/materials/ShaderMaterial.js
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { type: "1f", value: 1.0 }, "parameter2": { type: "1i" value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  shading: THREE.SmoothShading,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  vertexColors: THREE.NoColors / THREE.VertexColors / THREE.FaceColors,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>,
 *
 *	fog: <bool>
 * }
 */
THREE.ShaderMaterial=function(a){THREE.Material.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.shading=THREE.SmoothShading,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,// set to use scene fog
this.lights=!1,// set to use scene lights
this.clipping=!1,// set to use user-defined clipping planes
this.vertexColors=THREE.NoColors,// set to use "color" attribute stream
this.skinning=!1,// set to use skinning attribute streams
this.morphTargets=!1,// set to use morph targets
this.morphNormals=!1,// set to use morph normals
this.extensions={derivatives:!1,// set to use derivatives
fragDepth:!1,// set to use fragment depth values
drawBuffers:!1,// set to use draw buffers
shaderTextureLOD:!1},
// When rendered geometry doesn't include these attributes but the material does,
// use these default values in WebGL. This avoids errors when buffer data is missing.
this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))},THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype),THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial,THREE.ShaderMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=THREE.UniformsUtils.clone(a.uniforms),this.defines=a.defines,this.shading=a.shading,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.vertexColors=a.vertexColors,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this.extensions=a.extensions,this},THREE.ShaderMaterial.prototype.toJSON=function(a){var b=THREE.Material.prototype.toJSON.call(this,a);return b.uniforms=this.uniforms,b.vertexShader=this.vertexShader,b.fragmentShader=this.fragmentShader,b},
// File:src/materials/RawShaderMaterial.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a),this.type="RawShaderMaterial"},THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype),THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial,
// File:src/materials/SpriteMaterial.js
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *	uvOffset: new THREE.Vector2(),
 *	uvScale: new THREE.Vector2(),
 *
 *  fog: <bool>
 * }
 */
THREE.SpriteMaterial=function(a){THREE.Material.call(this),this.type="SpriteMaterial",this.color=new THREE.Color(16777215),this.map=null,this.rotation=0,this.fog=!1,
// set parameters
this.setValues(a)},THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial,THREE.SpriteMaterial.prototype.copy=function(a){return THREE.Material.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.rotation=a.rotation,this.fog=a.fog,this},
// File:src/textures/Texture.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */
THREE.Texture=function(a,b,c,d,e,f,g,h,i,j){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++}),this.uuid=THREE.Math.generateUUID(),this.name="",this.sourceFile="",this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING,this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping,this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping,this.magFilter=void 0!==e?e:THREE.LinearFilter,this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter,this.anisotropy=void 0!==i?i:1,this.format=void 0!==g?g:THREE.RGBAFormat,this.type=void 0!==h?h:THREE.UnsignedByteType,this.offset=new THREE.Vector2(0,0),this.repeat=new THREE.Vector2(1,1),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
//
// Also changing the encoding after already used by a Material will not automatically make the Material
// update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
this.encoding=void 0!==j?j:THREE.LinearEncoding,this.version=0,this.onUpdate=null},THREE.Texture.DEFAULT_IMAGE=void 0,THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping,THREE.Texture.prototype={constructor:THREE.Texture,set needsUpdate(a){a===!0&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.image=a.image,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.encoding=a.encoding,this},toJSON:function(a){function b(a){var b;return void 0!==a.toDataURL?b=a:(b=document.createElement("canvas"),b.width=a.width,b.height=a.height,b.getContext("2d").drawImage(a,0,0,a.width,a.height)),b.width>2048||b.height>2048?b.toDataURL("image/jpeg",.6):b.toDataURL("image/png")}if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy};if(void 0!==this.image){
// TODO: Move to THREE.Image
var d=this.image;void 0===d.uuid&&(d.uuid=THREE.Math.generateUUID()),void 0===a.images[d.uuid]&&(a.images[d.uuid]={uuid:d.uuid,url:b(d)}),c.image=d.uuid}return a.textures[this.uuid]=c,c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping===THREE.UVMapping){if(a.multiply(this.repeat),a.add(this.offset),a.x<0||a.x>1)switch(this.wrapS){case THREE.RepeatWrapping:a.x=a.x-Math.floor(a.x);break;case THREE.ClampToEdgeWrapping:a.x=a.x<0?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x)}if(a.y<0||a.y>1)switch(this.wrapT){case THREE.RepeatWrapping:a.y=a.y-Math.floor(a.y);break;case THREE.ClampToEdgeWrapping:a.y=a.y<0?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.y)%2)?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}},THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),THREE.TextureIdCount=0,
// File:src/textures/DepthTexture.js
/**
 * @author Matt DesLauriers / @mattdesl
 */
THREE.DepthTexture=function(a,b,c,d,e,f,g,h,i){THREE.Texture.call(this,null,d,e,f,g,h,THREE.DepthFormat,c,i),this.image={width:a,height:b},this.type=void 0!==c?c:THREE.UnsignedShortType,this.magFilter=void 0!==g?g:THREE.NearestFilter,this.minFilter=void 0!==h?h:THREE.NearestFilter,this.flipY=!1,this.generateMipmaps=!1},THREE.DepthTexture.prototype=Object.create(THREE.Texture.prototype),THREE.DepthTexture.prototype.constructor=THREE.DepthTexture,
// File:src/textures/CanvasTexture.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.CanvasTexture=function(a,b,c,d,e,f,g,h,i){THREE.Texture.call(this,a,b,c,d,e,f,g,h,i),this.needsUpdate=!0},THREE.CanvasTexture.prototype=Object.create(THREE.Texture.prototype),THREE.CanvasTexture.prototype.constructor=THREE.CanvasTexture,
// File:src/textures/CubeTexture.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.CubeTexture=function(a,b,c,d,e,f,g,h,i,j){a=void 0!==a?a:[],b=void 0!==b?b:THREE.CubeReflectionMapping,THREE.Texture.call(this,a,b,c,d,e,f,g,h,i,j),this.flipY=!1},THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype),THREE.CubeTexture.prototype.constructor=THREE.CubeTexture,Object.defineProperty(THREE.CubeTexture.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}}),
// File:src/textures/CompressedTexture.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,i,j,k,l){THREE.Texture.call(this,null,f,g,h,i,j,d,e,k,l),this.image={width:b,height:c},this.mipmaps=a,
// no flipping for cube textures
// (also flipping doesn't work for compressed textures )
this.flipY=!1,
// can't generate mipmaps for compressed textures
// mips must be embedded in DDS files
this.generateMipmaps=!1},THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype),THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture,
// File:src/textures/DataTexture.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.DataTexture=function(a,b,c,d,e,f,g,h,i,j,k,l){THREE.Texture.call(this,null,f,g,h,i,j,d,e,k,l),this.image={data:a,width:b,height:c},this.magFilter=void 0!==i?i:THREE.NearestFilter,this.minFilter=void 0!==j?j:THREE.NearestFilter,this.flipY=!1,this.generateMipmaps=!1},THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype),THREE.DataTexture.prototype.constructor=THREE.DataTexture,
// File:src/textures/VideoTexture.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.VideoTexture=function(a,b,c,d,e,f,g,h,i){function j(){requestAnimationFrame(j),a.readyState>=a.HAVE_CURRENT_DATA&&(k.needsUpdate=!0)}THREE.Texture.call(this,a,b,c,d,e,f,g,h,i),this.generateMipmaps=!1;var k=this;j()},THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype),THREE.VideoTexture.prototype.constructor=THREE.VideoTexture,
// File:src/objects/Group.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Group=function(){THREE.Object3D.call(this),this.type="Group"},THREE.Group.prototype=Object.create(THREE.Object3D.prototype),THREE.Group.prototype.constructor=THREE.Group,
// File:src/objects/Points.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Points=function(a,b){THREE.Object3D.call(this),this.type="Points",this.geometry=void 0!==a?a:new THREE.Geometry,this.material=void 0!==b?b:new THREE.PointsMaterial({color:16777215*Math.random()})},THREE.Points.prototype=Object.create(THREE.Object3D.prototype),THREE.Points.prototype.constructor=THREE.Points,THREE.Points.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){var h=b.closestPointToPoint(a);h.applyMatrix4(i);var j=d.ray.origin.distanceTo(h);if(j<d.near||j>d.far)return;e.push({distance:j,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,i=this.matrixWorld,j=d.params.Points.threshold;if(
// Checking boundingSphere distance to ray
null===h.boundingSphere&&h.computeBoundingSphere(),c.copy(h.boundingSphere),c.applyMatrix4(i),d.ray.intersectsSphere(c)!==!1){
//
a.getInverse(i),b.copy(d.ray).applyMatrix4(a);var k=j/((this.scale.x+this.scale.y+this.scale.z)/3),l=k*k,m=new THREE.Vector3;if(h instanceof THREE.BufferGeometry){var n=h.index,o=h.attributes,p=o.position.array;if(null!==n)for(var q=n.array,r=0,s=q.length;r<s;r++){var t=q[r];m.fromArray(p,3*t),f(m,t)}else for(var r=0,u=p.length/3;r<u;r++)m.fromArray(p,3*r),f(m,r)}else for(var v=h.vertices,r=0,u=v.length;r<u;r++)f(v[r],r)}}}(),THREE.Points.prototype.clone=function(){return new this.constructor(this.geometry,this.material).copy(this)},
// File:src/objects/Line.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Line=function(a,b,c){return 1===c?(console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new THREE.LineSegments(a,b)):(THREE.Object3D.call(this),this.type="Line",this.geometry=void 0!==a?a:new THREE.Geometry,void(this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()})))},THREE.Line.prototype=Object.create(THREE.Object3D.prototype),THREE.Line.prototype.constructor=THREE.Line,THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,g=f*f,h=this.geometry,i=this.matrixWorld;if(
// Checking boundingSphere distance to ray
null===h.boundingSphere&&h.computeBoundingSphere(),c.copy(h.boundingSphere),c.applyMatrix4(i),d.ray.intersectsSphere(c)!==!1){
//
a.getInverse(i),b.copy(d.ray).applyMatrix4(a);var j=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,m=new THREE.Vector3,n=this instanceof THREE.LineSegments?2:1;if(h instanceof THREE.BufferGeometry){var o=h.index,p=h.attributes,q=p.position.array;if(null!==o)for(var r=o.array,s=0,t=r.length-1;s<t;s+=n){var u=r[s],v=r[s+1];j.fromArray(q,3*u),k.fromArray(q,3*v);var w=b.distanceSqToSegment(j,k,m,l);if(!(w>g)){m.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var x=d.ray.origin.distanceTo(m);x<d.near||x>d.far||e.push({distance:x,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:l.clone().applyMatrix4(this.matrixWorld),index:s,face:null,faceIndex:null,object:this})}}else for(var s=0,t=q.length/3-1;s<t;s+=n){j.fromArray(q,3*s),k.fromArray(q,3*s+3);var w=b.distanceSqToSegment(j,k,m,l);if(!(w>g)){m.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var x=d.ray.origin.distanceTo(m);x<d.near||x>d.far||e.push({distance:x,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:l.clone().applyMatrix4(this.matrixWorld),index:s,face:null,faceIndex:null,object:this})}}}else if(h instanceof THREE.Geometry)for(var y=h.vertices,z=y.length,s=0;s<z-1;s+=n){var w=b.distanceSqToSegment(y[s],y[s+1],m,l);if(!(w>g)){m.applyMatrix4(this.matrixWorld);//Move back to world space for distance calculation
var x=d.ray.origin.distanceTo(m);x<d.near||x>d.far||e.push({distance:x,
// What do we want? intersection point on the ray or on the segment??
// point: raycaster.ray.at( distance ),
point:l.clone().applyMatrix4(this.matrixWorld),index:s,face:null,faceIndex:null,object:this})}}}}}(),THREE.Line.prototype.clone=function(){return new this.constructor(this.geometry,this.material).copy(this)},
// DEPRECATED
THREE.LineStrip=0,THREE.LinePieces=1,
// File:src/objects/LineSegments.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.LineSegments=function(a,b){THREE.Line.call(this,a,b),this.type="LineSegments"},THREE.LineSegments.prototype=Object.create(THREE.Line.prototype),THREE.LineSegments.prototype.constructor=THREE.LineSegments,
// File:src/objects/Mesh.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 */
THREE.Mesh=function(a,b){THREE.Object3D.call(this),this.type="Mesh",this.geometry=void 0!==a?a:new THREE.Geometry,this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()}),this.drawMode=THREE.TrianglesDrawMode,this.updateMorphTargets()},THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype),THREE.Mesh.prototype.constructor=THREE.Mesh,THREE.Mesh.prototype.setDrawMode=function(a){this.drawMode=a},THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&this.geometry.morphTargets.length>0){this.morphTargetBase=-1,this.morphTargetInfluences=[],this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}},THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){return void 0!==this.morphTargetDictionary[a]?this.morphTargetDictionary[a]:(console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0."),0)},THREE.Mesh.prototype.raycast=function(){function a(a,b,c,d,e,f,g){return THREE.Triangle.barycoordFromPoint(a,b,c,d,p),e.multiplyScalar(p.x),f.multiplyScalar(p.y),g.multiplyScalar(p.z),e.add(f).add(g),e.clone()}function b(a,b,c,d,e,f,g){var h,i=a.material;if(h=i.side===THREE.BackSide?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,i.side!==THREE.DoubleSide,g),null===h)return null;r.copy(g),r.applyMatrix4(a.matrixWorld);var j=b.ray.origin.distanceTo(r);return j<b.near||j>b.far?null:{distance:j,point:r.clone(),object:a}}function c(c,d,e,f,j,k,l,p){g.fromArray(f,3*k),h.fromArray(f,3*l),i.fromArray(f,3*p);var r=b(c,d,e,g,h,i,q);return r&&(j&&(m.fromArray(j,2*k),n.fromArray(j,2*l),o.fromArray(j,2*p),r.uv=a(q,g,h,i,m,n,o)),r.face=new THREE.Face3(k,l,p,THREE.Triangle.normal(g,h,i)),r.faceIndex=k),r}var d=new THREE.Matrix4,e=new THREE.Ray,f=new THREE.Sphere,g=new THREE.Vector3,h=new THREE.Vector3,i=new THREE.Vector3,j=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,m=new THREE.Vector2,n=new THREE.Vector2,o=new THREE.Vector2,p=new THREE.Vector3,q=new THREE.Vector3,r=new THREE.Vector3;return function(p,r){var s=this.geometry,t=this.material,u=this.matrixWorld;if(void 0!==t&&(
// Checking boundingSphere distance to ray
null===s.boundingSphere&&s.computeBoundingSphere(),f.copy(s.boundingSphere),f.applyMatrix4(u),p.ray.intersectsSphere(f)!==!1&&(
//
d.getInverse(u),e.copy(p.ray).applyMatrix4(d),null===s.boundingBox||e.intersectsBox(s.boundingBox)!==!1)))
// Check boundingBox before continuing
{var v,w;if(s instanceof THREE.BufferGeometry){var x,y,z,A=s.index,B=s.attributes,C=B.position.array;if(void 0!==B.uv&&(v=B.uv.array),null!==A)for(var D=A.array,E=0,F=D.length;E<F;E+=3)x=D[E],y=D[E+1],z=D[E+2],w=c(this,p,e,C,v,x,y,z),w&&(w.faceIndex=Math.floor(E/3),// triangle number in indices buffer semantics
r.push(w));else for(var E=0,F=C.length;E<F;E+=9)x=E/3,y=x+1,z=x+2,w=c(this,p,e,C,v,x,y,z),w&&(w.index=x,// triangle number in positions buffer semantics
r.push(w))}else if(s instanceof THREE.Geometry){var G,H,I,J=t instanceof THREE.MultiMaterial,K=J===!0?t.materials:null,L=s.vertices,M=s.faces,N=s.faceVertexUvs[0];N.length>0&&(v=N);for(var O=0,P=M.length;O<P;O++){var Q=M[O],R=J===!0?K[Q.materialIndex]:t;if(void 0!==R){if(G=L[Q.a],H=L[Q.b],I=L[Q.c],R.morphTargets===!0){var S=s.morphTargets,T=this.morphTargetInfluences;g.set(0,0,0),h.set(0,0,0),i.set(0,0,0);for(var U=0,V=S.length;U<V;U++){var W=T[U];if(0!==W){var X=S[U].vertices;g.addScaledVector(j.subVectors(X[Q.a],G),W),h.addScaledVector(k.subVectors(X[Q.b],H),W),i.addScaledVector(l.subVectors(X[Q.c],I),W)}}g.add(G),h.add(H),i.add(I),G=g,H=h,I=i}if(w=b(this,p,e,G,H,I,q)){if(v){var Y=v[O];m.copy(Y[0]),n.copy(Y[1]),o.copy(Y[2]),w.uv=a(q,G,H,I,m,n,o)}w.face=Q,w.faceIndex=O,r.push(w)}}}}}}}(),THREE.Mesh.prototype.clone=function(){return new this.constructor(this.geometry,this.material).copy(this)},
// File:src/objects/Bone.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
THREE.Bone=function(a){THREE.Object3D.call(this),this.type="Bone",this.skin=a},THREE.Bone.prototype=Object.create(THREE.Object3D.prototype),THREE.Bone.prototype.constructor=THREE.Bone,THREE.Bone.prototype.copy=function(a){return THREE.Object3D.prototype.copy.call(this,a),this.skin=a.skin,this},
// File:src/objects/Skeleton.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author michael guerrero / http://realitymeltdown.com
 * @author ikerr / http://verold.com
 */
THREE.Skeleton=function(a,b,c){
// create a bone texture or an array of floats
if(this.useVertexTexture=void 0===c||c,this.identityMatrix=new THREE.Matrix4,
// copy the bone array
a=a||[],this.bones=a.slice(0),this.useVertexTexture){
// layout (1 matrix = 4 pixels)
//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)
var d=Math.sqrt(4*this.bones.length);// 4 pixels needed for 1 matrix
d=THREE.Math.nextPowerOfTwo(Math.ceil(d)),d=Math.max(d,4),this.boneTextureWidth=d,this.boneTextureHeight=d,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),// 4 floats per RGBA pixel
this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)}else this.boneMatrices=new Float32Array(16*this.bones.length);
// use the supplied bone inverses or calculate the inverses
if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else{console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[];for(var e=0,f=this.bones.length;e<f;e++)this.boneInverses.push(new THREE.Matrix4)}},THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld),this.boneInverses.push(c)}},THREE.Skeleton.prototype.pose=function(){
// recover the bind-time world matrices
for(var a,b=0,c=this.bones.length;b<c;b++)a=this.bones[b],a&&a.matrixWorld.getInverse(this.boneInverses[b]);
// compute the local matrices, positions, rotations and scales
for(var b=0,c=this.bones.length;b<c;b++)a=this.bones[b],a&&(a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))},THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){
// flatten bone matrices to array
for(var b=0,c=this.bones.length;b<c;b++){
// compute the offset between the current and the original transform
var d=this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix;a.multiplyMatrices(d,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b)}this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),THREE.Skeleton.prototype.clone=function(){return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)},
// File:src/objects/SkinnedMesh.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author ikerr / http://verold.com
 */
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new THREE.Matrix4,this.bindMatrixInverse=new THREE.Matrix4;
// init bones
// TODO: remove bone creation as there is no reason (other than
// convenience) for THREE.SkinnedMesh to do this.
var d=[];if(this.geometry&&void 0!==this.geometry.bones){for(var e,f,g=0,h=this.geometry.bones.length;g<h;++g)f=this.geometry.bones[g],e=new THREE.Bone(this),d.push(e),e.name=f.name,e.position.fromArray(f.pos),e.quaternion.fromArray(f.rotq),void 0!==f.scl&&e.scale.fromArray(f.scl);for(var g=0,h=this.geometry.bones.length;g<h;++g)f=this.geometry.bones[g],f.parent!==-1&&null!==f.parent&&void 0!==d[f.parent]?d[f.parent].add(d[g]):this.add(d[g])}this.normalizeSkinWeights(),this.updateMatrixWorld(!0),this.bind(new THREE.Skeleton(d,void 0,c),this.matrixWorld)},THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype),THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh,THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a,void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld),this.bindMatrix.copy(b),this.bindMatrixInverse.getInverse(b)},THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()},THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();c!==1/0?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry instanceof THREE.BufferGeometry)for(var d=new THREE.Vector4,e=this.geometry.attributes.skinWeight,a=0;a<e.count;a++){d.x=e.getX(a),d.y=e.getY(a),d.z=e.getZ(a),d.w=e.getW(a);var c=1/d.lengthManhattan();c!==1/0?d.multiplyScalar(c):d.set(1,0,0,0),e.setXYZW(a,d.x,d.y,d.z,d.w)}},THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0),"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},THREE.SkinnedMesh.prototype.clone=function(){return new this.constructor(this.geometry,this.material,this.useVertexTexture).copy(this)},
// File:src/objects/LOD.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.LOD=function(){THREE.Object3D.call(this),this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})},THREE.LOD.prototype=Object.create(THREE.Object3D.prototype),THREE.LOD.prototype.constructor=THREE.LOD,THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0),b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a}),this.add(a)},THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){var d=this.levels;if(d.length>1){a.setFromMatrixPosition(c.matrixWorld),b.setFromMatrixPosition(this.matrixWorld);var e=a.distanceTo(b);d[0].object.visible=!0;for(var f=1,g=d.length;f<g&&e>=d[f].distance;f++)d[f-1].object.visible=!1,d[f].object.visible=!0;for(;f<g;f++)d[f].object.visible=!1}}}(),THREE.LOD.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a,!1);for(var b=a.levels,c=0,d=b.length;c<d;c++){var e=b[c];this.addLevel(e.object.clone(),e.distance)}return this},THREE.LOD.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);b.object.levels=[];for(var c=this.levels,d=0,e=c.length;d<e;d++){var f=c[d];b.object.levels.push({object:f.object.uuid,distance:f.distance})}return b},
// File:src/objects/Sprite.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;return d.setIndex(new THREE.BufferAttribute(a,1)),d.addAttribute("position",new THREE.BufferAttribute(b,3)),d.addAttribute("uv",new THREE.BufferAttribute(c,2)),function(a){THREE.Object3D.call(this),this.type="Sprite",this.geometry=d,this.material=void 0!==a?a:new THREE.SpriteMaterial}}(),THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype),THREE.Sprite.prototype.constructor=THREE.Sprite,THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a),e=this.scale.x*this.scale.y/4;d>e||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}(),THREE.Sprite.prototype.clone=function(){return new this.constructor(this.material).copy(this)},
// Backwards compatibility
THREE.Particle=THREE.Sprite,
// File:src/objects/LensFlare.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this),this.lensFlares=[],this.positionScreen=new THREE.Vector3,this.customUpdateCallback=void 0,void 0!==a&&this.add(a,b,c,d,e)},THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype),THREE.LensFlare.prototype.constructor=THREE.LensFlare,/*
 * Add: adds another flare
 */
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1),void 0===c&&(c=0),void 0===f&&(f=1),void 0===e&&(e=new THREE.Color(16777215)),void 0===d&&(d=THREE.NormalBlending),c=Math.min(c,Math.max(0,c)),this.lensFlares.push({texture:a,// THREE.Texture
size:b,// size in pixels (-1 = use texture.width)
distance:c,// distance (0-1) from light source (0=at light source)
x:0,y:0,z:0,// screen position (-1 => 1) z = 0 is in front z = 1 is back
scale:1,// scale
rotation:0,// rotation
opacity:f,// opacity
color:e,// color
blending:d})},/*
 * Update lens flares update positions on all flares based on the screen position
 * Set myLensFlare.customUpdateCallback to alter the flares in your project specific way.
 */
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b,c=this.lensFlares.length,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<c;a++)b=this.lensFlares[a],b.x=this.positionScreen.x+d*b.distance,b.y=this.positionScreen.y+e*b.distance,b.wantedRotation=b.x*Math.PI*.25,b.rotation+=.25*(b.wantedRotation-b.rotation)},THREE.LensFlare.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a),this.positionScreen.copy(a.positionScreen),this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},
// File:src/scenes/Scene.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Scene=function(){THREE.Object3D.call(this),this.type="Scene",this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0},THREE.Scene.prototype=Object.create(THREE.Object3D.prototype),THREE.Scene.prototype.constructor=THREE.Scene,THREE.Scene.prototype.copy=function(a,b){return THREE.Object3D.prototype.copy.call(this,a,b),null!==a.fog&&(this.fog=a.fog.clone()),null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone()),this.autoUpdate=a.autoUpdate,this.matrixAutoUpdate=a.matrixAutoUpdate,this},
// File:src/scenes/Fog.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.Fog=function(a,b,c){this.name="",this.color=new THREE.Color(a),this.near=void 0!==b?b:1,this.far=void 0!==c?c:1e3},THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)},
// File:src/scenes/FogExp2.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.FogExp2=function(a,b){this.name="",this.color=new THREE.Color(a),this.density=void 0!==b?b:25e-5},THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)},
// File:src/renderers/shaders/ShaderChunk.js
THREE.ShaderChunk={},
// File:src/renderers/shaders/ShaderChunk/alphamap_fragment.glsl
THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/alphamap_pars_fragment.glsl
THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/alphatest_fragment.glsl
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/aomap_fragment.glsl
THREE.ShaderChunk.aomap_fragment="#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/aomap_pars_fragment.glsl
THREE.ShaderChunk.aomap_pars_fragment="#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
// File:src/renderers/shaders/ShaderChunk/begin_vertex.glsl
THREE.ShaderChunk.begin_vertex="\nvec3 transformed = vec3( position );\n",
// File:src/renderers/shaders/ShaderChunk/beginnormal_vertex.glsl
THREE.ShaderChunk.beginnormal_vertex="\nvec3 objectNormal = vec3( normal );\n",
// File:src/renderers/shaders/ShaderChunk/bsdfs.glsl
THREE.ShaderChunk.bsdfs="bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
// File:src/renderers/shaders/ShaderChunk/bumpmap_pars_fragment.glsl
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/clipping_planes_fragment.glsl
THREE.ShaderChunk.clipping_planes_fragment="#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/clipping_planes_pars_fragment.glsl
THREE.ShaderChunk.clipping_planes_pars_fragment="#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/clipping_planes_pars_vertex.glsl
THREE.ShaderChunk.clipping_planes_pars_vertex="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/clipping_planes_vertex.glsl
THREE.ShaderChunk.clipping_planes_vertex="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/color_fragment.glsl
THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
// File:src/renderers/shaders/ShaderChunk/color_pars_fragment.glsl
THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/color_pars_vertex.glsl
THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
// File:src/renderers/shaders/ShaderChunk/color_vertex.glsl
THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
// File:src/renderers/shaders/ShaderChunk/common.glsl
THREE.ShaderChunk.common="#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n",
// File:src/renderers/shaders/ShaderChunk/cube_uv_reflection_fragment.glsl
THREE.ShaderChunk.cube_uv_reflection_fragment="#ifdef ENVMAP_TYPE_CUBE_UV\nconst float cubeUV_textureSize = 1024.0;\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\nfloat cubeUV_maxLods1 = log2(cubeUV_textureSize*0.25) - 1.0;\nfloat cubeUV_rangeClamp = exp2((6.0 - 1.0) * 2.0);\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\nfloat cubeUV_maxLods2 = log2(cubeUV_textureSize*0.25) - 2.0;\nconst float cubeUV_rcpTextureSize = 1.0 / cubeUV_textureSize;\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\nfloat cubeUV_maxLods3 = log2(cubeUV_textureSize*0.25) - 3.0;\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/defaultnormal_vertex.glsl
THREE.ShaderChunk.defaultnormal_vertex="#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
// File:src/renderers/shaders/ShaderChunk/displacementmap_vertex.glsl
THREE.ShaderChunk.displacementmap_vertex="#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/displacementmap_pars_vertex.glsl
THREE.ShaderChunk.displacementmap_pars_vertex="#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/emissivemap_fragment.glsl
THREE.ShaderChunk.emissivemap_fragment="#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/emissivemap_pars_fragment.glsl
THREE.ShaderChunk.emissivemap_pars_fragment="#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/encodings_pars_fragment.glsl
THREE.ShaderChunk.encodings_pars_fragment="\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n",
// File:src/renderers/shaders/ShaderChunk/encodings_fragment.glsl
THREE.ShaderChunk.encodings_fragment="  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
// File:src/renderers/shaders/ShaderChunk/envmap_fragment.glsl
THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/envmap_pars_fragment.glsl
THREE.ShaderChunk.envmap_pars_fragment="#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";
// File:src/renderers/shaders/ShaderChunk/envmap_pars_vertex.glsl
THREE.ShaderChunk.envmap_pars_vertex="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n";
// File:src/renderers/shaders/ShaderChunk/envmap_vertex.glsl
THREE.ShaderChunk.envmap_vertex="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/fog_fragment.glsl
THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/fog_pars_fragment.glsl
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
// File:src/renderers/shaders/ShaderChunk/lightmap_fragment.glsl
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/lightmap_pars_fragment.glsl
THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
// File:src/renderers/shaders/ShaderChunk/lights_lambert_vertex.glsl
THREE.ShaderChunk.lights_lambert_vertex="vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/lights_pars.glsl
THREE.ShaderChunk.lights_pars="uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/lights_phong_fragment.glsl
THREE.ShaderChunk.lights_phong_fragment="BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
// File:src/renderers/shaders/ShaderChunk/lights_phong_pars_fragment.glsl
THREE.ShaderChunk.lights_phong_pars_fragment="varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
// File:src/renderers/shaders/ShaderChunk/lights_physical_fragment.glsl
THREE.ShaderChunk.lights_physical_fragment="PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.16 * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/lights_physical_pars_fragment.glsl
THREE.ShaderChunk.lights_physical_pars_fragment="struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t#endif\n};\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
// File:src/renderers/shaders/ShaderChunk/lights_template.glsl
THREE.ShaderChunk.lights_template="\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\tRE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/logdepthbuf_fragment.glsl
THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
// File:src/renderers/shaders/ShaderChunk/logdepthbuf_pars_fragment.glsl
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/logdepthbuf_pars_vertex.glsl
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
// File:src/renderers/shaders/ShaderChunk/logdepthbuf_vertex.glsl
THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/map_fragment.glsl
THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/map_pars_fragment.glsl
THREE.ShaderChunk.map_pars_fragment="#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/map_particle_fragment.glsl
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/map_particle_pars_fragment.glsl
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/metalnessmap_fragment.glsl
THREE.ShaderChunk.metalnessmap_fragment="float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/metalnessmap_pars_fragment.glsl
THREE.ShaderChunk.metalnessmap_pars_fragment="#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
// File:src/renderers/shaders/ShaderChunk/morphnormal_vertex.glsl
THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/morphtarget_pars_vertex.glsl
THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
// File:src/renderers/shaders/ShaderChunk/morphtarget_vertex.glsl
THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/normal_fragment.glsl
THREE.ShaderChunk.normal_fragment="#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/normalmap_pars_fragment.glsl
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/packing.glsl
THREE.ShaderChunk.packing="vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nvec4 packDepthToRGBA( const in float value ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( value * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nfloat unpackRGBAToDepth( const in vec4 rgba ) {\n\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\treturn dot( rgba, bitSh );\n}\nfloat viewZToOrthoDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat OrthoDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
// File:src/renderers/shaders/ShaderChunk/premultiplied_alpha_fragment.glsl
THREE.ShaderChunk.premultiplied_alpha_fragment="#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/project_vertex.glsl
THREE.ShaderChunk.project_vertex="#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
// File:src/renderers/shaders/ShaderChunk/roughnessmap_fragment.glsl
THREE.ShaderChunk.roughnessmap_fragment="float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/roughnessmap_pars_fragment.glsl
THREE.ShaderChunk.roughnessmap_pars_fragment="#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
// File:src/renderers/shaders/ShaderChunk/shadowmap_pars_fragment.glsl
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/shadowmap_pars_vertex.glsl
THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/shadowmap_vertex.glsl
THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/shadowmask_pars_fragment.glsl
THREE.ShaderChunk.shadowmask_pars_fragment="float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
// File:src/renderers/shaders/ShaderChunk/skinbase_vertex.glsl
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
// File:src/renderers/shaders/ShaderChunk/skinning_pars_vertex.glsl
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/skinning_vertex.glsl
THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/skinnormal_vertex.glsl
THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/specularmap_fragment.glsl
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
// File:src/renderers/shaders/ShaderChunk/specularmap_pars_fragment.glsl
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
// File:src/renderers/shaders/ShaderChunk/tonemapping_fragment.glsl
THREE.ShaderChunk.tonemapping_fragment="#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/tonemapping_pars_fragment.glsl
THREE.ShaderChunk.tonemapping_pars_fragment="#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
// File:src/renderers/shaders/ShaderChunk/uv2_pars_fragment.glsl
THREE.ShaderChunk.uv2_pars_fragment="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
// File:src/renderers/shaders/ShaderChunk/uv2_pars_vertex.glsl
THREE.ShaderChunk.uv2_pars_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
// File:src/renderers/shaders/ShaderChunk/uv2_vertex.glsl
THREE.ShaderChunk.uv2_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
// File:src/renderers/shaders/ShaderChunk/uv_pars_fragment.glsl
THREE.ShaderChunk.uv_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
// File:src/renderers/shaders/ShaderChunk/uv_pars_vertex.glsl
THREE.ShaderChunk.uv_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
// File:src/renderers/shaders/ShaderChunk/uv_vertex.glsl
THREE.ShaderChunk.uv_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
// File:src/renderers/shaders/ShaderChunk/worldpos_vertex.glsl
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
// File:src/renderers/shaders/UniformsUtils.js
/**
 * Uniform Utilities
 */
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]);for(var e in d)b[e]=d[e]}return b},clone:function(a){var b={};for(var c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix3||e instanceof THREE.Matrix4||e instanceof THREE.Texture?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},
// File:src/renderers/shaders/UniformsLib.js
/**
 * Uniforms library for shared webgl shaders
 */
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"1f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"1f",value:-1},reflectivity:{type:"1f",value:1},refractionRatio:{type:"1f",value:.98}},aomap:{aoMap:{type:"t",value:null},aoMapIntensity:{type:"1f",value:1}},lightmap:{lightMap:{type:"t",value:null},lightMapIntensity:{type:"1f",value:1}},emissivemap:{emissiveMap:{type:"t",value:null}},bumpmap:{bumpMap:{type:"t",value:null},bumpScale:{type:"1f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},displacementmap:{displacementMap:{type:"t",value:null},displacementScale:{type:"1f",value:1},displacementBias:{type:"1f",value:0}},roughnessmap:{roughnessMap:{type:"t",value:null}},metalnessmap:{metalnessMap:{type:"t",value:null}},fog:{fogDensity:{type:"1f",value:25e-5},fogNear:{type:"1f",value:1},fogFar:{type:"1f",value:2e3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"3fv",value:[]},directionalLights:{type:"sa",value:[],properties:{direction:{type:"v3"},color:{type:"c"},shadow:{type:"1i"},shadowBias:{type:"1f"},shadowRadius:{type:"1f"},shadowMapSize:{type:"v2"}}},directionalShadowMap:{type:"tv",value:[]},directionalShadowMatrix:{type:"m4v",value:[]},spotLights:{type:"sa",value:[],properties:{color:{type:"c"},position:{type:"v3"},direction:{type:"v3"},distance:{type:"1f"},coneCos:{type:"1f"},penumbraCos:{type:"1f"},decay:{type:"1f"},shadow:{type:"1i"},shadowBias:{type:"1f"},shadowRadius:{type:"1f"},shadowMapSize:{type:"v2"}}},spotShadowMap:{type:"tv",value:[]},spotShadowMatrix:{type:"m4v",value:[]},pointLights:{type:"sa",value:[],properties:{color:{type:"c"},position:{type:"v3"},decay:{type:"1f"},distance:{type:"1f"},shadow:{type:"1i"},shadowBias:{type:"1f"},shadowRadius:{type:"1f"},shadowMapSize:{type:"v2"}}},pointShadowMap:{type:"tv",value:[]},pointShadowMatrix:{type:"m4v",value:[]},hemisphereLights:{type:"sa",value:[],properties:{direction:{type:"v3"},skyColor:{type:"c"},groundColor:{type:"c"}}}},points:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"1f",value:1},size:{type:"1f",value:1},scale:{type:"1f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)}}},
// File:src/renderers/shaders/ShaderLib/cube_frag.glsl
THREE.ShaderChunk.cube_frag="uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\t#include <logdepthbuf_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/cube_vert.glsl
THREE.ShaderChunk.cube_vert="varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/depth_frag.glsl
THREE.ShaderChunk.depth_frag="#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
// File:src/renderers/shaders/ShaderLib/depth_vert.glsl
THREE.ShaderChunk.depth_vert="#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/distanceRGBA_frag.glsl
THREE.ShaderChunk.distanceRGBA_frag="uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
// File:src/renderers/shaders/ShaderLib/distanceRGBA_vert.glsl
THREE.ShaderChunk.distanceRGBA_vert="varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
// File:src/renderers/shaders/ShaderLib/equirect_frag.glsl
THREE.ShaderChunk.equirect_frag="uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <logdepthbuf_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/equirect_vert.glsl
THREE.ShaderChunk.equirect_vert="varying vec3 vWorldPosition;\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/linedashed_frag.glsl
THREE.ShaderChunk.linedashed_frag="uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/linedashed_vert.glsl
THREE.ShaderChunk.linedashed_vert="uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshbasic_frag.glsl
THREE.ShaderChunk.meshbasic_frag="uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshbasic_vert.glsl
THREE.ShaderChunk.meshbasic_vert="#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshlambert_frag.glsl
THREE.ShaderChunk.meshlambert_frag="uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshlambert_vert.glsl
THREE.ShaderChunk.meshlambert_vert="#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshphong_frag.glsl
THREE.ShaderChunk.meshphong_frag="#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshphong_vert.glsl
THREE.ShaderChunk.meshphong_vert="#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshphysical_frag.glsl
THREE.ShaderChunk.meshphysical_frag="#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/meshphysical_vert.glsl
THREE.ShaderChunk.meshphysical_vert="#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/normal_frag.glsl
THREE.ShaderChunk.normal_frag="uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/normal_vert.glsl
THREE.ShaderChunk.normal_vert="varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib/points_frag.glsl
THREE.ShaderChunk.points_frag="uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
// File:src/renderers/shaders/ShaderLib/points_vert.glsl
THREE.ShaderChunk.points_vert="uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n",
// File:src/renderers/shaders/ShaderLib.js
/**
 * Webgl Shader Library for three.js
 *
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.fog]),vertexShader:THREE.ShaderChunk.meshbasic_vert,fragmentShader:THREE.ShaderChunk.meshbasic_frag},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{type:"c",value:new THREE.Color(0)}}]),vertexShader:THREE.ShaderChunk.meshlambert_vert,fragmentShader:THREE.ShaderChunk.meshlambert_frag},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"1f",value:30}}]),vertexShader:THREE.ShaderChunk.meshphong_vert,fragmentShader:THREE.ShaderChunk.meshphong_frag},standard:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.roughnessmap,THREE.UniformsLib.metalnessmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{type:"c",value:new THREE.Color(0)},roughness:{type:"1f",value:.5},metalness:{type:"1f",value:0},envMapIntensity:{type:"1f",value:1}}]),vertexShader:THREE.ShaderChunk.meshphysical_vert,fragmentShader:THREE.ShaderChunk.meshphysical_frag},points:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.points,THREE.UniformsLib.fog]),vertexShader:THREE.ShaderChunk.points_vert,fragmentShader:THREE.ShaderChunk.points_frag},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"1f",value:1},dashSize:{type:"1f",value:1},totalSize:{type:"1f",value:2}}]),vertexShader:THREE.ShaderChunk.linedashed_vert,fragmentShader:THREE.ShaderChunk.linedashed_frag},depth:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.displacementmap]),vertexShader:THREE.ShaderChunk.depth_vert,fragmentShader:THREE.ShaderChunk.depth_frag},normal:{uniforms:{opacity:{type:"1f",value:1}},vertexShader:THREE.ShaderChunk.normal_vert,fragmentShader:THREE.ShaderChunk.normal_frag},/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"1f",value:-1}},vertexShader:THREE.ShaderChunk.cube_vert,fragmentShader:THREE.ShaderChunk.cube_frag},/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */
equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"1f",value:-1}},vertexShader:THREE.ShaderChunk.equirect_vert,fragmentShader:THREE.ShaderChunk.equirect_frag},distanceRGBA:{uniforms:{lightPos:{type:"v3",value:new THREE.Vector3}},vertexShader:THREE.ShaderChunk.distanceRGBA_vert,fragmentShader:THREE.ShaderChunk.distanceRGBA_frag}},THREE.ShaderLib.physical={uniforms:THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms,{}]),vertexShader:THREE.ShaderChunk.meshphysical_vert,fragmentShader:THREE.ShaderChunk.meshphysical_frag},
// File:src/renderers/WebGLRenderer.js
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 * @author tschw
 */
THREE.WebGLRenderer=function(a){
//
function b(){return null===xa?Ka:1}function c(a,b,c,d){la===!0&&(a*=d,b*=d,c*=d),ib.clearColor(a,b,c,d)}function d(){ib.init(),ib.scissor(Ca.copy(La).multiplyScalar(Ka)),ib.viewport(Ea.copy(Na).multiplyScalar(Ka)),c(Ga.r,Ga.g,Ga.b,Ha)}function e(){wa=null,Ba=null,Aa="",za=-1,ib.reset()}
// Events
function f(a){a.preventDefault(),e(),d(),jb.clear()}function g(a){var b=a.target;b.removeEventListener("dispose",g),j(b),ab.textures--}function h(a){var b=a.target;b.removeEventListener("dispose",h),k(b),ab.textures--}function i(a){var b=a.target;b.removeEventListener("dispose",i),l(b)}
// Buffer deallocation
function j(a){var b=jb.get(a);if(a.image&&b.__image__webglTextureCube)
// cube texture
cb.deleteTexture(b.__image__webglTextureCube);else{
// 2D texture
if(void 0===b.__webglInit)return;cb.deleteTexture(b.__webglTexture)}
// remove all webgl properties
jb.delete(a)}function k(a){var b=jb.get(a),c=jb.get(a.texture);if(a){if(void 0!==c.__webglTexture&&cb.deleteTexture(c.__webglTexture),a.depthTexture&&a.depthTexture.dispose(),a instanceof THREE.WebGLRenderTargetCube)for(var d=0;d<6;d++)cb.deleteFramebuffer(b.__webglFramebuffer[d]),b.__webglDepthbuffer&&cb.deleteRenderbuffer(b.__webglDepthbuffer[d]);else cb.deleteFramebuffer(b.__webglFramebuffer),b.__webglDepthbuffer&&cb.deleteRenderbuffer(b.__webglDepthbuffer);jb.delete(a.texture),jb.delete(a)}}function l(a){m(a),jb.delete(a)}function m(a){var b=jb.get(a).program;a.program=void 0,void 0!==b&&lb.releaseProgram(b)}function n(a,b,c,d){var e;if(c instanceof THREE.InstancedBufferGeometry&&(e=gb.get("ANGLE_instanced_arrays"),null===e))return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");void 0===d&&(d=0),ib.initAttributes();var f=c.attributes,g=b.getAttributes(),h=a.defaultAttributeValues;for(var i in g){var j=g[i];if(j>=0){var k=f[i];if(void 0!==k){var l=cb.FLOAT,m=k.array,n=k.normalized;m instanceof Float32Array?l=cb.FLOAT:m instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):m instanceof Uint16Array?l=cb.UNSIGNED_SHORT:m instanceof Int16Array?l=cb.SHORT:m instanceof Uint32Array?l=cb.UNSIGNED_INT:m instanceof Int32Array?l=cb.INT:m instanceof Int8Array?l=cb.BYTE:m instanceof Uint8Array&&(l=cb.UNSIGNED_BYTE);var o=k.itemSize,p=kb.getAttributeBuffer(k);if(k instanceof THREE.InterleavedBufferAttribute){var q=k.data,r=q.stride,s=k.offset;q instanceof THREE.InstancedInterleavedBuffer?(ib.enableAttributeAndDivisor(j,q.meshPerAttribute,e),void 0===c.maxInstancedCount&&(c.maxInstancedCount=q.meshPerAttribute*q.count)):ib.enableAttribute(j),cb.bindBuffer(cb.ARRAY_BUFFER,p),cb.vertexAttribPointer(j,o,l,n,r*q.array.BYTES_PER_ELEMENT,(d*r+s)*q.array.BYTES_PER_ELEMENT)}else k instanceof THREE.InstancedBufferAttribute?(ib.enableAttributeAndDivisor(j,k.meshPerAttribute,e),void 0===c.maxInstancedCount&&(c.maxInstancedCount=k.meshPerAttribute*k.count)):ib.enableAttribute(j),cb.bindBuffer(cb.ARRAY_BUFFER,p),cb.vertexAttribPointer(j,o,l,n,0,d*o*k.array.BYTES_PER_ELEMENT)}else if(void 0!==h){var t=h[i];if(void 0!==t)switch(t.length){case 2:cb.vertexAttrib2fv(j,t);break;case 3:cb.vertexAttrib3fv(j,t);break;case 4:cb.vertexAttrib4fv(j,t);break;default:cb.vertexAttrib1fv(j,t)}}}}ib.disableUnusedAttributes()}
// Sorting
function o(a,b){return Math.abs(b[0])-Math.abs(a[0])}function p(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function q(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function r(a,b,c,d,e){var f,g;
// allocate the next position in the appropriate array
c.transparent?(f=qa,g=++ra):(f=oa,g=++pa);
// recycle existing render item or grow the array
var h=f[g];void 0!==h?(h.id=a.id,h.object=a,h.geometry=b,h.material=c,h.z=$a.z,h.group=e):(h={id:a.id,object:a,geometry:b,material:c,z:$a.z,group:e},
// assert( index === array.length );
f.push(h))}function s(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();var c=Xa.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);if(!Oa.intersectsSphere(c))return!1;if(0===Sa)return!0;var d=va.clippingPlanes,e=c.center,f=-c.radius,g=0;do
// out when deeper than radius in the negative halfspace
if(d[g].distanceToPoint(e)<f)return!1;while(++g!==Sa);return!0}function t(a,b){if(a.visible!==!1){if(a.layers.test(b.layers))if(a instanceof THREE.Light)na.push(a);else if(a instanceof THREE.Sprite)a.frustumCulled!==!1&&s(a)!==!0||ta.push(a);else if(a instanceof THREE.LensFlare)ua.push(a);else if(a instanceof THREE.ImmediateRenderObject)va.sortObjects===!0&&($a.setFromMatrixPosition(a.matrixWorld),$a.applyProjection(Za)),r(a,null,a.material,$a.z,null);else if((a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&(a instanceof THREE.SkinnedMesh&&a.skeleton.update(),a.frustumCulled===!1||s(a)===!0)){var c=a.material;if(c.visible===!0){va.sortObjects===!0&&($a.setFromMatrixPosition(a.matrixWorld),$a.applyProjection(Za));var d=kb.update(a);if(c instanceof THREE.MultiMaterial)for(var e=d.groups,f=c.materials,g=0,h=e.length;g<h;g++){var i=e[g],j=f[i.materialIndex];j.visible===!0&&r(a,d,j,$a.z,i)}else r(a,d,c,$a.z,null)}}for(var k=a.children,g=0,h=k.length;g<h;g++)t(k[g],b)}}function u(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,i=g.geometry,j=void 0===d?g.material:d,k=g.group;if(h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),h instanceof THREE.ImmediateRenderObject){w(j);var l=y(b,c,j,h);Aa="",h.render(function(a){va.renderBufferImmediate(a,l,j)})}else va.renderBufferDirect(b,c,i,j,h,k)}}function v(a,b,c){var d=jb.get(a),e=lb.getParameters(a,_a,b,Sa,c),f=lb.getProgramCode(a,e),g=d.program,h=!0;if(void 0===g)
// new material
a.addEventListener("dispose",i);else if(g.code!==f)
// changed glsl or parameters
m(a);else{if(void 0!==e.shaderID)
// same glsl and uniform list
return;
// only rebuild uniform list
h=!1}if(h){if(e.shaderID){var j=THREE.ShaderLib[e.shaderID];d.__webglShader={name:a.type,uniforms:THREE.UniformsUtils.clone(j.uniforms),vertexShader:j.vertexShader,fragmentShader:j.fragmentShader}}else d.__webglShader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};a.__webglShader=d.__webglShader,g=lb.acquireProgram(a,e,f),d.program=g,a.program=g}var k=g.getAttributes();if(a.morphTargets){a.numSupportedMorphTargets=0;for(var l=0;l<va.maxMorphTargets;l++)k["morphTarget"+l]>=0&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;for(var l=0;l<va.maxMorphNormals;l++)k["morphNormal"+l]>=0&&a.numSupportedMorphNormals++}var n=d.__webglShader.uniforms;(a instanceof THREE.ShaderMaterial||a instanceof THREE.RawShaderMaterial)&&a.clipping!==!0||(d.numClippingPlanes=Sa,n.clippingPlanes=Ta),(a instanceof THREE.MeshPhongMaterial||a instanceof THREE.MeshLambertMaterial||a instanceof THREE.MeshStandardMaterial||a.lights)&&(
// store the light setup it was created for
d.lightsHash=_a.hash,
// wire up the material to this renderer's lighting state
n.ambientLightColor.value=_a.ambient,n.directionalLights.value=_a.directional,n.spotLights.value=_a.spot,n.pointLights.value=_a.point,n.hemisphereLights.value=_a.hemi,n.directionalShadowMap.value=_a.directionalShadowMap,n.directionalShadowMatrix.value=_a.directionalShadowMatrix,n.spotShadowMap.value=_a.spotShadowMap,n.spotShadowMatrix.value=_a.spotShadowMatrix,n.pointShadowMap.value=_a.pointShadowMap,n.pointShadowMatrix.value=_a.pointShadowMatrix);var o=d.program.getUniforms(),p=THREE.WebGLUniforms.seqWithValue(o.seq,n);d.uniformsList=p,d.dynamicUniforms=THREE.WebGLUniforms.splitDynamic(p,n)}function w(a){x(a),a.transparent===!0?ib.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):ib.setBlending(THREE.NoBlending),ib.setDepthFunc(a.depthFunc),ib.setDepthTest(a.depthTest),ib.setDepthWrite(a.depthWrite),ib.setColorWrite(a.colorWrite),ib.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function x(a){a.side!==THREE.DoubleSide?ib.enable(cb.CULL_FACE):ib.disable(cb.CULL_FACE),ib.setFlipSided(a.side===THREE.BackSide)}function y(a,b,c,d){Fa=0;var e=jb.get(c);if(Pa){if(Qa||a!==Ba){var f=a===Ba&&c.id===za;
// we might want to call this function with some ClippingGroup
// object instead of the material, once it becomes feasible
// (#8465, #8379)
O(c.clippingPlanes,c.clipShadows,a,e,f)}void 0!==e.numClippingPlanes&&e.numClippingPlanes!==Sa&&(c.needsUpdate=!0)}void 0===e.program&&(c.needsUpdate=!0),void 0!==e.lightsHash&&e.lightsHash!==_a.hash&&(c.needsUpdate=!0),c.needsUpdate&&(v(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,i=!1,j=e.program,k=j.getUniforms(),l=e.__webglShader.uniforms;if(j.id!==wa&&(cb.useProgram(j.program),wa=j.id,g=!0,h=!0,i=!0),c.id!==za&&(za=c.id,h=!0),g||a!==Ba){
// load material specific uniforms
// (shader material also gets them for the sake of genericity)
if(k.set(cb,a,"projectionMatrix"),hb.logarithmicDepthBuffer&&k.setValue(cb,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2)),a!==Ba&&(Ba=a,
// lighting uniforms depend on the camera so enforce an update
// now, in case this material supports lights - or later, when
// the next material that does gets activated:
h=!0,// set to true on material change
i=!0),c instanceof THREE.ShaderMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial||c.envMap){var m=k.map.cameraPosition;void 0!==m&&m.setValue(cb,$a.setFromMatrixPosition(a.matrixWorld))}(c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshStandardMaterial||c instanceof THREE.ShaderMaterial||c.skinning)&&k.setValue(cb,"viewMatrix",a.matrixWorldInverse),k.set(cb,va,"toneMappingExposure"),k.set(cb,va,"toneMappingWhitePoint")}
// skinning uniforms must be set even if material didn't change
// auto-setting of texture unit for bone texture must go before other textures
// not sure why, but otherwise weird things happen
if(c.skinning){k.setOptional(cb,d,"bindMatrix"),k.setOptional(cb,d,"bindMatrixInverse");var n=d.skeleton;n&&(hb.floatVertexTextures&&n.useVertexTexture?(k.set(cb,n,"boneTexture"),k.set(cb,n,"boneTextureWidth"),k.set(cb,n,"boneTextureHeight")):k.setOptional(cb,n,"boneMatrices"))}h&&((c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshStandardMaterial||c.lights)&&
// the current material requires lighting info
// note: all lighting uniforms are always set correctly
// they simply reference the renderer's state for their
// values
//
// use the current material's .needsUpdate flags to set
// the GL state when required
I(l,i),
// refresh uniforms common to several materials
b&&c.fog&&D(l,b),(c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial||c instanceof THREE.MeshDepthMaterial)&&z(l,c),
// refresh single material specific uniforms
c instanceof THREE.LineBasicMaterial?A(l,c):c instanceof THREE.LineDashedMaterial?(A(l,c),B(l,c)):c instanceof THREE.PointsMaterial?C(l,c):c instanceof THREE.MeshLambertMaterial?E(l,c):c instanceof THREE.MeshPhongMaterial?F(l,c):c instanceof THREE.MeshPhysicalMaterial?H(l,c):c instanceof THREE.MeshStandardMaterial?G(l,c):c instanceof THREE.MeshDepthMaterial?c.displacementMap&&(l.displacementMap.value=c.displacementMap,l.displacementScale.value=c.displacementScale,l.displacementBias.value=c.displacementBias):c instanceof THREE.MeshNormalMaterial&&(l.opacity.value=c.opacity),THREE.WebGLUniforms.upload(cb,e.uniformsList,l,va)),
// common matrices
k.set(cb,d,"modelViewMatrix"),k.set(cb,d,"normalMatrix"),k.setValue(cb,"modelMatrix",d.matrixWorld);
// dynamic uniforms
var o=e.dynamicUniforms;return null!==o&&(THREE.WebGLUniforms.evalDynamic(o,l,d,a),THREE.WebGLUniforms.upload(cb,o,l,va)),j}
// Uniforms (refresh uniforms objects)
function z(a,b){a.opacity.value=b.opacity,a.diffuse.value=b.color,b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),a.map.value=b.map,a.specularMap.value=b.specularMap,a.alphaMap.value=b.alphaMap,b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);
// uv repeat and offset setting priorities
// 1. color map
// 2. specular map
// 3. normal map
// 4. bump map
// 5. alpha map
// 6. emissive map
var c;if(b.map?c=b.map:b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap),void 0!==c){c instanceof THREE.WebGLRenderTarget&&(c=c.texture);var d=c.offset,e=c.repeat;a.offsetRepeat.value.set(d.x,d.y,e.x,e.y)}a.envMap.value=b.envMap,a.flipEnvMap.value=b.envMap instanceof THREE.WebGLRenderTargetCube?1:-1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio}function A(a,b){a.diffuse.value=b.color,a.opacity.value=b.opacity}function B(a,b){a.dashSize.value=b.dashSize,a.totalSize.value=b.dashSize+b.gapSize,a.scale.value=b.scale}function C(a,b){if(a.diffuse.value=b.color,a.opacity.value=b.opacity,a.size.value=b.size*Ka,a.scale.value=.5*fa.clientHeight,a.map.value=b.map,null!==b.map){var c=b.map.offset,d=b.map.repeat;a.offsetRepeat.value.set(c.x,c.y,d.x,d.y)}}function D(a,b){a.fogColor.value=b.color,b instanceof THREE.Fog?(a.fogNear.value=b.near,a.fogFar.value=b.far):b instanceof THREE.FogExp2&&(a.fogDensity.value=b.density)}function E(a,b){b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap)}function F(a,b){a.specular.value=b.specular,a.shininess.value=Math.max(b.shininess,1e-4),// to prevent pow( 0.0, 0.0 )
b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function G(a,b){a.roughness.value=b.roughness,a.metalness.value=b.metalness,b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap),b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity),b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap),b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale),b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale)),b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias),b.envMap&&(
//uniforms.envMap.value = material.envMap; // part of uniforms common
a.envMapIntensity.value=b.envMapIntensity)}function H(a,b){G(a,b)}
// If uniforms are marked as clean, they don't need to be loaded to the GPU.
function I(a,b){a.ambientLightColor.needsUpdate=b,a.directionalLights.needsUpdate=b,a.pointLights.needsUpdate=b,a.spotLights.needsUpdate=b,a.hemisphereLights.needsUpdate=b}
// Lighting
function J(a){for(var b=0,c=0,d=a.length;c<d;c++){var e=a[c];e.castShadow&&(_a.shadows[b++]=e)}_a.shadows.length=b}function K(a,b){var c,d,e,f,g,h,i=0,j=0,k=0,l=b.matrixWorldInverse,m=0,n=0,o=0,p=0;for(c=0,d=a.length;c<d;c++)if(e=a[c],f=e.color,g=e.intensity,h=e.distance,e instanceof THREE.AmbientLight)i+=f.r*g,j+=f.g*g,k+=f.b*g;else if(e instanceof THREE.DirectionalLight){var q=mb.get(e);q.color.copy(e.color).multiplyScalar(e.intensity),q.direction.setFromMatrixPosition(e.matrixWorld),$a.setFromMatrixPosition(e.target.matrixWorld),q.direction.sub($a),q.direction.transformDirection(l),q.shadow=e.castShadow,e.castShadow&&(q.shadowBias=e.shadow.bias,q.shadowRadius=e.shadow.radius,q.shadowMapSize=e.shadow.mapSize),_a.directionalShadowMap[m]=e.shadow.map,_a.directionalShadowMatrix[m]=e.shadow.matrix,_a.directional[m++]=q}else if(e instanceof THREE.SpotLight){var q=mb.get(e);q.position.setFromMatrixPosition(e.matrixWorld),q.position.applyMatrix4(l),q.color.copy(f).multiplyScalar(g),q.distance=h,q.direction.setFromMatrixPosition(e.matrixWorld),$a.setFromMatrixPosition(e.target.matrixWorld),q.direction.sub($a),q.direction.transformDirection(l),q.coneCos=Math.cos(e.angle),q.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),q.decay=0===e.distance?0:e.decay,q.shadow=e.castShadow,e.castShadow&&(q.shadowBias=e.shadow.bias,q.shadowRadius=e.shadow.radius,q.shadowMapSize=e.shadow.mapSize),_a.spotShadowMap[o]=e.shadow.map,_a.spotShadowMatrix[o]=e.shadow.matrix,_a.spot[o++]=q}else if(e instanceof THREE.PointLight){var q=mb.get(e);q.position.setFromMatrixPosition(e.matrixWorld),q.position.applyMatrix4(l),q.color.copy(e.color).multiplyScalar(e.intensity),q.distance=e.distance,q.decay=0===e.distance?0:e.decay,q.shadow=e.castShadow,e.castShadow&&(q.shadowBias=e.shadow.bias,q.shadowRadius=e.shadow.radius,q.shadowMapSize=e.shadow.mapSize),_a.pointShadowMap[n]=e.shadow.map,void 0===_a.pointShadowMatrix[n]&&(_a.pointShadowMatrix[n]=new THREE.Matrix4),
// for point lights we set the shadow matrix to be a translation-only matrix
// equal to inverse of the light's position
$a.setFromMatrixPosition(e.matrixWorld).negate(),_a.pointShadowMatrix[n].identity().setPosition($a),_a.point[n++]=q}else if(e instanceof THREE.HemisphereLight){var q=mb.get(e);q.direction.setFromMatrixPosition(e.matrixWorld),q.direction.transformDirection(l),q.direction.normalize(),q.skyColor.copy(e.color).multiplyScalar(g),q.groundColor.copy(e.groundColor).multiplyScalar(g),_a.hemi[p++]=q}_a.ambient[0]=i,_a.ambient[1]=j,_a.ambient[2]=k,_a.directional.length=m,_a.spot.length=o,_a.point.length=n,_a.hemi.length=p,_a.hash=m+","+n+","+o+","+p+","+_a.shadows.length}
// Clipping
function L(a,b){Pa=0!==va.clippingPlanes.length||va.localClippingEnabled||
// enable state of previous frame - the clipping code has to
// run another frame in order to reset the state:
0!==Va||Qa,Qa=va.localClippingEnabled,Ua=M(a,b,0),Va=null!==a?a.length:0}function M(a,b,c,d){var e=null!==a?a.length:0,f=null;if(0!==e){if(f=Ta.value,d!==!0||null===f){var g=c+4*e,h=b.matrixWorldInverse,i=Wa.getNormalMatrix(h);(null===f||f.length<g)&&(f=new Float32Array(g));for(var j=0,k=c;j!==e;++j,k+=4){var l=Ya.copy(a[j]).applyMatrix4(h,i);l.normal.toArray(f,k),f[k+3]=l.constant}}Ta.value=f,Ta.needsUpdate=!0}return Sa=e,f}function N(){Ta.value!==Ua&&(Ta.value=Ua,Ta.needsUpdate=Va>0),Sa=Va}function O(a,b,c,d,e){if(!Qa||null===a||0===a.length||Ra&&!b)
// there's no local clipping
Ra?
// there's no global clipping
M(null):N();else{var f=Ra?0:Va,g=4*f,h=d.clippingState||null;Ta.value=h,// ensure unique state
h=M(a,c,g,e);for(var i=0;i!==g;++i)h[i]=Ua[i];d.clippingState=h,Sa+=f}}
// Textures
function P(){var a=Fa;return a>=hb.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+hb.maxTextures),Fa+=1,a}function Q(a,b,c){var d;if(c?(cb.texParameteri(a,cb.TEXTURE_WRAP_S,ea(b.wrapS)),cb.texParameteri(a,cb.TEXTURE_WRAP_T,ea(b.wrapT)),cb.texParameteri(a,cb.TEXTURE_MAG_FILTER,ea(b.magFilter)),cb.texParameteri(a,cb.TEXTURE_MIN_FILTER,ea(b.minFilter))):(cb.texParameteri(a,cb.TEXTURE_WRAP_S,cb.CLAMP_TO_EDGE),cb.texParameteri(a,cb.TEXTURE_WRAP_T,cb.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",b),cb.texParameteri(a,cb.TEXTURE_MAG_FILTER,da(b.magFilter)),cb.texParameteri(a,cb.TEXTURE_MIN_FILTER,da(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",b)),d=gb.get("EXT_texture_filter_anisotropic")){if(b.type===THREE.FloatType&&null===gb.get("OES_texture_float_linear"))return;if(b.type===THREE.HalfFloatType&&null===gb.get("OES_texture_half_float_linear"))return;(b.anisotropy>1||jb.get(b).__currentAnisotropy)&&(cb.texParameterf(a,d.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,va.getMaxAnisotropy())),jb.get(b).__currentAnisotropy=b.anisotropy)}}function R(a,b,c){void 0===a.__webglInit&&(a.__webglInit=!0,b.addEventListener("dispose",g),a.__webglTexture=cb.createTexture(),ab.textures++),ib.activeTexture(cb.TEXTURE0+c),ib.bindTexture(cb.TEXTURE_2D,a.__webglTexture),cb.pixelStorei(cb.UNPACK_FLIP_Y_WEBGL,b.flipY),cb.pixelStorei(cb.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),cb.pixelStorei(cb.UNPACK_ALIGNMENT,b.unpackAlignment);var d=T(b.image,hb.maxTextureSize);V(b)&&U(d)===!1&&(d=W(d));var e=U(d),f=ea(b.format),h=ea(b.type);Q(cb.TEXTURE_2D,b,e);var i,j=b.mipmaps;if(b instanceof THREE.DepthTexture){
// populate depth texture with dummy data
var k=cb.DEPTH_COMPONENT;if(b.type===THREE.FloatType){if(!fb)throw new Error("Float Depth Texture only supported in WebGL2.0");k=cb.DEPTH_COMPONENT32F}else fb&&(
// WebGL 2.0 requires signed internalformat for glTexImage2D
k=cb.DEPTH_COMPONENT16);ib.texImage2D(cb.TEXTURE_2D,0,k,d.width,d.height,0,f,h,null)}else if(b instanceof THREE.DataTexture)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(j.length>0&&e){for(var l=0,m=j.length;l<m;l++)i=j[l],ib.texImage2D(cb.TEXTURE_2D,l,f,i.width,i.height,0,f,h,i.data);b.generateMipmaps=!1}else ib.texImage2D(cb.TEXTURE_2D,0,f,d.width,d.height,0,f,h,d.data);else if(b instanceof THREE.CompressedTexture)for(var l=0,m=j.length;l<m;l++)i=j[l],b.format!==THREE.RGBAFormat&&b.format!==THREE.RGBFormat?ib.getCompressedTextureFormats().indexOf(f)>-1?ib.compressedTexImage2D(cb.TEXTURE_2D,l,f,i.width,i.height,0,i.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ib.texImage2D(cb.TEXTURE_2D,l,f,i.width,i.height,0,f,h,i.data);else
// regular Texture (image, video, canvas)
// use manually created mipmaps if available
// if there are no manual mipmaps
// set 0 level mipmap and then use GL to generate other mipmap levels
if(j.length>0&&e){for(var l=0,m=j.length;l<m;l++)i=j[l],ib.texImage2D(cb.TEXTURE_2D,l,f,f,h,i);b.generateMipmaps=!1}else ib.texImage2D(cb.TEXTURE_2D,0,f,f,h,d);b.generateMipmaps&&e&&cb.generateMipmap(cb.TEXTURE_2D),a.__version=b.version,b.onUpdate&&b.onUpdate(b)}function S(a,b){a instanceof THREE.WebGLRenderTarget&&(a=a.texture);var c=jb.get(a);if(a.version>0&&c.__version!==a.version){var d=a.image;return void 0===d?void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",a):d.complete===!1?void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",a):void R(c,a,b)}ib.activeTexture(cb.TEXTURE0+b),ib.bindTexture(cb.TEXTURE_2D,c.__webglTexture)}function T(a,b){if(a.width>b||a.height>b){
// Warning: Scaling through the canvas will only work with images that use
// premultiplied alpha.
var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c),d.height=Math.floor(a.height*c);var e=d.getContext("2d");return e.drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height),console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a),d}return a}function U(a){return THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height)}function V(a){return a.wrapS!==THREE.ClampToEdgeWrapping||a.wrapT!==THREE.ClampToEdgeWrapping||a.minFilter!==THREE.NearestFilter&&a.minFilter!==THREE.LinearFilter}function W(a){if(a instanceof HTMLImageElement||a instanceof HTMLCanvasElement){var b=document.createElement("canvas");b.width=THREE.Math.nearestPowerOfTwo(a.width),b.height=THREE.Math.nearestPowerOfTwo(a.height);var c=b.getContext("2d");return c.drawImage(a,0,0,b.width,b.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+a.width+"x"+a.height+"). Resized to "+b.width+"x"+b.height,a),b}return a}function X(a,b){var c=jb.get(a);if(6===a.image.length)if(a.version>0&&c.__version!==a.version){c.__image__webglTextureCube||(a.addEventListener("dispose",g),c.__image__webglTextureCube=cb.createTexture(),ab.textures++),ib.activeTexture(cb.TEXTURE0+b),ib.bindTexture(cb.TEXTURE_CUBE_MAP,c.__image__webglTextureCube),cb.pixelStorei(cb.UNPACK_FLIP_Y_WEBGL,a.flipY);for(var d=a instanceof THREE.CompressedTexture,e=a.image[0]instanceof THREE.DataTexture,f=[],h=0;h<6;h++)!va.autoScaleCubemaps||d||e?f[h]=e?a.image[h].image:a.image[h]:f[h]=T(a.image[h],hb.maxCubemapSize);var i=f[0],j=U(i),k=ea(a.format),l=ea(a.type);Q(cb.TEXTURE_CUBE_MAP,a,j);for(var h=0;h<6;h++)if(d)for(var m,n=f[h].mipmaps,o=0,p=n.length;o<p;o++)m=n[o],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?ib.getCompressedTextureFormats().indexOf(k)>-1?ib.compressedTexImage2D(cb.TEXTURE_CUBE_MAP_POSITIVE_X+h,o,k,m.width,m.height,0,m.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):ib.texImage2D(cb.TEXTURE_CUBE_MAP_POSITIVE_X+h,o,k,m.width,m.height,0,k,l,m.data);else e?ib.texImage2D(cb.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,k,f[h].width,f[h].height,0,k,l,f[h].data):ib.texImage2D(cb.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,k,k,l,f[h]);a.generateMipmaps&&j&&cb.generateMipmap(cb.TEXTURE_CUBE_MAP),c.__version=a.version,a.onUpdate&&a.onUpdate(a)}else ib.activeTexture(cb.TEXTURE0+b),ib.bindTexture(cb.TEXTURE_CUBE_MAP,c.__image__webglTextureCube)}function Y(a,b){ib.activeTexture(cb.TEXTURE0+b),ib.bindTexture(cb.TEXTURE_CUBE_MAP,jb.get(a).__webglTexture)}
// Render targets
// Setup storage for target texture and bind it to correct framebuffer
function Z(a,b,c,d){var e=ea(b.texture.format),f=ea(b.texture.type);ib.texImage2D(d,0,e,b.width,b.height,0,e,f,null),cb.bindFramebuffer(cb.FRAMEBUFFER,a),cb.framebufferTexture2D(cb.FRAMEBUFFER,c,d,jb.get(b.texture).__webglTexture,0),cb.bindFramebuffer(cb.FRAMEBUFFER,null)}
// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
function $(a,b){cb.bindRenderbuffer(cb.RENDERBUFFER,a),b.depthBuffer&&!b.stencilBuffer?(cb.renderbufferStorage(cb.RENDERBUFFER,cb.DEPTH_COMPONENT16,b.width,b.height),cb.framebufferRenderbuffer(cb.FRAMEBUFFER,cb.DEPTH_ATTACHMENT,cb.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(cb.renderbufferStorage(cb.RENDERBUFFER,cb.DEPTH_STENCIL,b.width,b.height),cb.framebufferRenderbuffer(cb.FRAMEBUFFER,cb.DEPTH_STENCIL_ATTACHMENT,cb.RENDERBUFFER,a)):
// FIXME: We don't support !depth !stencil
cb.renderbufferStorage(cb.RENDERBUFFER,cb.RGBA4,b.width,b.height),cb.bindRenderbuffer(cb.RENDERBUFFER,null)}
// Setup resources for a Depth Texture for a FBO (needs an extension)
function _(a,b){var c=b instanceof THREE.WebGLRenderTargetCube;if(c)throw new Error("Depth Texture with cube render targets is not supported!");if(cb.bindFramebuffer(cb.FRAMEBUFFER,a),!(b.depthTexture instanceof THREE.DepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
// upload an empty depth texture with framebuffer size
jb.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),va.setTexture(b.depthTexture,0);var d=jb.get(b.depthTexture).__webglTexture;cb.framebufferTexture2D(cb.FRAMEBUFFER,cb.DEPTH_ATTACHMENT,cb.TEXTURE_2D,d,0)}
// Setup GL resources for a non-texture depth buffer
function aa(a){var b=jb.get(a),c=a instanceof THREE.WebGLRenderTargetCube;if(a.depthTexture){if(c)throw new Error("target.depthTexture not supported in Cube render targets");_(b.__webglFramebuffer,a)}else if(c){b.__webglDepthbuffer=[];for(var d=0;d<6;d++)cb.bindFramebuffer(cb.FRAMEBUFFER,b.__webglFramebuffer[d]),b.__webglDepthbuffer[d]=cb.createRenderbuffer(),$(b.__webglDepthbuffer[d],a)}else cb.bindFramebuffer(cb.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=cb.createRenderbuffer(),$(b.__webglDepthbuffer,a);cb.bindFramebuffer(cb.FRAMEBUFFER,null)}
// Set up GL resources for the render target
function ba(a){var b=jb.get(a),c=jb.get(a.texture);a.addEventListener("dispose",h),c.__webglTexture=cb.createTexture(),ab.textures++;var d=a instanceof THREE.WebGLRenderTargetCube,e=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height);
// Setup framebuffer
if(d){b.__webglFramebuffer=[];for(var f=0;f<6;f++)b.__webglFramebuffer[f]=cb.createFramebuffer()}else b.__webglFramebuffer=cb.createFramebuffer();
// Setup color buffer
if(d){ib.bindTexture(cb.TEXTURE_CUBE_MAP,c.__webglTexture),Q(cb.TEXTURE_CUBE_MAP,a.texture,e);for(var f=0;f<6;f++)Z(b.__webglFramebuffer[f],a,cb.COLOR_ATTACHMENT0,cb.TEXTURE_CUBE_MAP_POSITIVE_X+f);a.texture.generateMipmaps&&e&&cb.generateMipmap(cb.TEXTURE_CUBE_MAP),ib.bindTexture(cb.TEXTURE_CUBE_MAP,null)}else ib.bindTexture(cb.TEXTURE_2D,c.__webglTexture),Q(cb.TEXTURE_2D,a.texture,e),Z(b.__webglFramebuffer,a,cb.COLOR_ATTACHMENT0,cb.TEXTURE_2D),a.texture.generateMipmaps&&e&&cb.generateMipmap(cb.TEXTURE_2D),ib.bindTexture(cb.TEXTURE_2D,null);
// Setup depth and stencil buffers
a.depthBuffer&&aa(a)}function ca(a){var b=a instanceof THREE.WebGLRenderTargetCube?cb.TEXTURE_CUBE_MAP:cb.TEXTURE_2D,c=jb.get(a.texture).__webglTexture;ib.bindTexture(b,c),cb.generateMipmap(b),ib.bindTexture(b,null)}
// Fallback filters for non-power-of-2 textures
function da(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?cb.NEAREST:cb.LINEAR}
// Map three.js constants to WebGL constants
function ea(a){var b;if(a===THREE.RepeatWrapping)return cb.REPEAT;if(a===THREE.ClampToEdgeWrapping)return cb.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return cb.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return cb.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return cb.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return cb.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return cb.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return cb.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return cb.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return cb.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return cb.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return cb.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return cb.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return cb.BYTE;if(a===THREE.ShortType)return cb.SHORT;if(a===THREE.UnsignedShortType)return cb.UNSIGNED_SHORT;if(a===THREE.IntType)return cb.INT;if(a===THREE.UnsignedIntType)return cb.UNSIGNED_INT;if(a===THREE.FloatType)return cb.FLOAT;if(b=gb.get("OES_texture_half_float"),null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return cb.ALPHA;if(a===THREE.RGBFormat)return cb.RGB;if(a===THREE.RGBAFormat)return cb.RGBA;if(a===THREE.LuminanceFormat)return cb.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return cb.LUMINANCE_ALPHA;if(a===THREE.DepthFormat)return cb.DEPTH_COMPONENT;if(a===THREE.AddEquation)return cb.FUNC_ADD;if(a===THREE.SubtractEquation)return cb.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return cb.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return cb.ZERO;if(a===THREE.OneFactor)return cb.ONE;if(a===THREE.SrcColorFactor)return cb.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return cb.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return cb.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return cb.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return cb.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return cb.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return cb.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return cb.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return cb.SRC_ALPHA_SATURATE;if(b=gb.get("WEBGL_compressed_texture_s3tc"),null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(b=gb.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(b=gb.get("WEBGL_compressed_texture_etc1"),null!==b&&a===THREE.RGB_ETC1_Format)return b.COMPRESSED_RGB_ETC1_WEBGL;if(b=gb.get("EXT_blend_minmax"),null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION),a=a||{};var fa=void 0!==a.canvas?a.canvas:document.createElement("canvas"),ga=void 0!==a.context?a.context:null,ha=void 0!==a.alpha&&a.alpha,ia=void 0===a.depth||a.depth,ja=void 0===a.stencil||a.stencil,ka=void 0!==a.antialias&&a.antialias,la=void 0===a.premultipliedAlpha||a.premultipliedAlpha,ma=void 0!==a.preserveDrawingBuffer&&a.preserveDrawingBuffer,na=[],oa=[],pa=-1,qa=[],ra=-1,sa=new Float32Array(8),ta=[],ua=[];
// public properties
this.domElement=fa,this.context=null,
// clearing
this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,
// scene graph
this.sortObjects=!0,
// user-defined clipping
this.clippingPlanes=[],this.localClippingEnabled=!1,
// physically based shading
this.gammaFactor=2,// for backwards compatibility
this.gammaInput=!1,this.gammaOutput=!1,
// physical lights
this.physicallyCorrectLights=!1,
// tone mapping
this.toneMapping=THREE.LinearToneMapping,this.toneMappingExposure=1,this.toneMappingWhitePoint=1,
// morphs
this.maxMorphTargets=8,this.maxMorphNormals=4,
// flags
this.autoScaleCubemaps=!0;
// internal properties
var va=this,
// internal state cache
wa=null,xa=null,ya=null,za=-1,Aa="",Ba=null,Ca=new THREE.Vector4,Da=null,Ea=new THREE.Vector4,
//
Fa=0,
//
Ga=new THREE.Color(0),Ha=0,Ia=fa.width,Ja=fa.height,Ka=1,La=new THREE.Vector4(0,0,Ia,Ja),Ma=!1,Na=new THREE.Vector4(0,0,Ia,Ja),
// frustum
Oa=new THREE.Frustum,
// clipping
Pa=!1,Qa=!1,Ra=!1,Sa=0,Ta={type:"4fv",value:null,needsUpdate:!1},Ua=null,Va=0,Wa=new THREE.Matrix3,Xa=new THREE.Sphere,Ya=new THREE.Plane,
// camera matrices cache
Za=new THREE.Matrix4,$a=new THREE.Vector3,
// light arrays cache
_a={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},
// info
ab={geometries:0,textures:0},bb={calls:0,vertices:0,faces:0,points:0};this.info={render:bb,memory:ab,programs:null};
// initialize
var cb;try{var db={alpha:ha,depth:ia,stencil:ja,antialias:ka,premultipliedAlpha:la,preserveDrawingBuffer:ma};if(cb=ga||fa.getContext("webgl",db)||fa.getContext("experimental-webgl",db),null===cb)throw null!==fa.getContext("webgl")?"Error creating WebGL context with your selected attributes.":"Error creating WebGL context.";
// Some experimental-webgl implementations do not have getShaderPrecisionFormat
void 0===cb.getShaderPrecisionFormat&&(cb.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}}),fa.addEventListener("webglcontextlost",f,!1)}catch(eb){console.error("THREE.WebGLRenderer: "+eb)}var fb="undefined"!=typeof WebGL2RenderingContext&&cb instanceof WebGL2RenderingContext,gb=new THREE.WebGLExtensions(cb);gb.get("WEBGL_depth_texture"),gb.get("OES_texture_float"),gb.get("OES_texture_float_linear"),gb.get("OES_texture_half_float"),gb.get("OES_texture_half_float_linear"),gb.get("OES_standard_derivatives"),gb.get("ANGLE_instanced_arrays"),gb.get("OES_element_index_uint")&&(THREE.BufferGeometry.MaxIndex=4294967296);var hb=new THREE.WebGLCapabilities(cb,gb,a),ib=new THREE.WebGLState(cb,gb,ea),jb=new THREE.WebGLProperties,kb=new THREE.WebGLObjects(cb,jb,this.info),lb=new THREE.WebGLPrograms(this,hb),mb=new THREE.WebGLLights;this.info.programs=lb.programs;var nb=new THREE.WebGLBufferRenderer(cb,gb,bb),ob=new THREE.WebGLIndexedBufferRenderer(cb,gb,bb);d(),this.context=cb,this.capabilities=hb,this.extensions=gb,this.properties=jb,this.state=ib;
// shadow map
var pb=new THREE.WebGLShadowMap(this,_a,kb);this.shadowMap=pb;
// Plugins
var qb=new THREE.SpritePlugin(this,ta),rb=new THREE.LensFlarePlugin(this,ua);
// API
this.getContext=function(){return cb},this.getContextAttributes=function(){return cb.getContextAttributes()},this.forceContextLoss=function(){gb.get("WEBGL_lose_context").loseContext()},this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=gb.get("EXT_texture_filter_anisotropic");return a=null!==b?cb.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}(),this.getPrecision=function(){return hb.precision},this.getPixelRatio=function(){return Ka},this.setPixelRatio=function(a){void 0!==a&&(Ka=a,this.setSize(Na.z,Na.w,!1))},this.getSize=function(){return{width:Ia,height:Ja}},this.setSize=function(a,b,c){Ia=a,Ja=b,fa.width=a*Ka,fa.height=b*Ka,c!==!1&&(fa.style.width=a+"px",fa.style.height=b+"px"),this.setViewport(0,0,a,b)},this.setViewport=function(a,b,c,d){ib.viewport(Na.set(a,b,c,d))},this.setScissor=function(a,b,c,d){ib.scissor(La.set(a,b,c,d))},this.setScissorTest=function(a){ib.setScissorTest(Ma=a)},
// Clearing
this.getClearColor=function(){return Ga},this.setClearColor=function(a,b){Ga.set(a),Ha=void 0!==b?b:1,c(Ga.r,Ga.g,Ga.b,Ha)},this.getClearAlpha=function(){return Ha},this.setClearAlpha=function(a){Ha=a,c(Ga.r,Ga.g,Ga.b,Ha)},this.clear=function(a,b,c){var d=0;(void 0===a||a)&&(d|=cb.COLOR_BUFFER_BIT),(void 0===b||b)&&(d|=cb.DEPTH_BUFFER_BIT),(void 0===c||c)&&(d|=cb.STENCIL_BUFFER_BIT),cb.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.clearTarget=function(a,b,c,d){this.setRenderTarget(a),this.clear(b,c,d)},
// Reset
this.resetGLState=e,this.dispose=function(){fa.removeEventListener("webglcontextlost",f,!1)},
// Buffer rendering
this.renderBufferImmediate=function(a,b,c){ib.initAttributes();var d=jb.get(a);a.hasPositions&&!d.position&&(d.position=cb.createBuffer()),a.hasNormals&&!d.normal&&(d.normal=cb.createBuffer()),a.hasUvs&&!d.uv&&(d.uv=cb.createBuffer()),a.hasColors&&!d.color&&(d.color=cb.createBuffer());var e=b.getAttributes();if(a.hasPositions&&(cb.bindBuffer(cb.ARRAY_BUFFER,d.position),cb.bufferData(cb.ARRAY_BUFFER,a.positionArray,cb.DYNAMIC_DRAW),ib.enableAttribute(e.position),cb.vertexAttribPointer(e.position,3,cb.FLOAT,!1,0,0)),a.hasNormals){if(cb.bindBuffer(cb.ARRAY_BUFFER,d.normal),"MeshPhongMaterial"!==c.type&&"MeshStandardMaterial"!==c.type&&"MeshPhysicalMaterial"!==c.type&&c.shading===THREE.FlatShading)for(var f=0,g=3*a.count;f<g;f+=9){var h=a.normalArray,i=(h[f+0]+h[f+3]+h[f+6])/3,j=(h[f+1]+h[f+4]+h[f+7])/3,k=(h[f+2]+h[f+5]+h[f+8])/3;h[f+0]=i,h[f+1]=j,h[f+2]=k,h[f+3]=i,h[f+4]=j,h[f+5]=k,h[f+6]=i,h[f+7]=j,h[f+8]=k}cb.bufferData(cb.ARRAY_BUFFER,a.normalArray,cb.DYNAMIC_DRAW),ib.enableAttribute(e.normal),cb.vertexAttribPointer(e.normal,3,cb.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(cb.bindBuffer(cb.ARRAY_BUFFER,d.uv),cb.bufferData(cb.ARRAY_BUFFER,a.uvArray,cb.DYNAMIC_DRAW),ib.enableAttribute(e.uv),cb.vertexAttribPointer(e.uv,2,cb.FLOAT,!1,0,0)),a.hasColors&&c.vertexColors!==THREE.NoColors&&(cb.bindBuffer(cb.ARRAY_BUFFER,d.color),cb.bufferData(cb.ARRAY_BUFFER,a.colorArray,cb.DYNAMIC_DRAW),ib.enableAttribute(e.color),cb.vertexAttribPointer(e.color,3,cb.FLOAT,!1,0,0)),ib.disableUnusedAttributes(),cb.drawArrays(cb.TRIANGLES,0,a.count),a.count=0},this.renderBufferDirect=function(a,c,d,e,f,g){w(e);var h=y(a,c,e,f),i=!1,j=d.id+"_"+h.id+"_"+e.wireframe;j!==Aa&&(Aa=j,i=!0);
// morph targets
var k=f.morphTargetInfluences;if(void 0!==k){for(var l=[],m=0,p=k.length;m<p;m++){var q=k[m];l.push([q,m])}l.sort(o),l.length>8&&(l.length=8);for(var r=d.morphAttributes,m=0,p=l.length;m<p;m++){var q=l[m];if(sa[m]=q[0],0!==q[0]){var s=q[1];e.morphTargets===!0&&r.position&&d.addAttribute("morphTarget"+m,r.position[s]),e.morphNormals===!0&&r.normal&&d.addAttribute("morphNormal"+m,r.normal[s])}else e.morphTargets===!0&&d.removeAttribute("morphTarget"+m),e.morphNormals===!0&&d.removeAttribute("morphNormal"+m)}h.getUniforms().setValue(cb,"morphTargetInfluences",sa),i=!0}
//
var s=d.index,t=d.attributes.position;e.wireframe===!0&&(s=kb.getWireframeAttribute(d));var u;null!==s?(u=ob,u.setIndex(s)):u=nb,i&&(n(e,h,d),null!==s&&cb.bindBuffer(cb.ELEMENT_ARRAY_BUFFER,kb.getAttributeBuffer(s)));
//
var v=0,x=1/0;null!==s?x=s.count:void 0!==t&&(x=t.count);var z=d.drawRange.start,A=d.drawRange.count,B=null!==g?g.start:0,C=null!==g?g.count:1/0,D=Math.max(v,z,B),E=Math.min(v+x,z+A,B+C)-1,F=Math.max(0,E-D+1);
//
if(f instanceof THREE.Mesh)if(e.wireframe===!0)ib.setLineWidth(e.wireframeLinewidth*b()),u.setMode(cb.LINES);else switch(f.drawMode){case THREE.TrianglesDrawMode:u.setMode(cb.TRIANGLES);break;case THREE.TriangleStripDrawMode:u.setMode(cb.TRIANGLE_STRIP);break;case THREE.TriangleFanDrawMode:u.setMode(cb.TRIANGLE_FAN)}else if(f instanceof THREE.Line){var G=e.linewidth;void 0===G&&(G=1),// Not using Line*Material
ib.setLineWidth(G*b()),f instanceof THREE.LineSegments?u.setMode(cb.LINES):u.setMode(cb.LINE_STRIP)}else f instanceof THREE.Points&&u.setMode(cb.POINTS);d instanceof THREE.InstancedBufferGeometry?d.maxInstancedCount>0&&u.renderInstances(d,D,F):u.render(D,F)},
// Rendering
this.render=function(a,b,c,d){if(b instanceof THREE.Camera==!1)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");var e=a.fog;
//
if(
// reset caching for this frame
Aa="",za=-1,Ba=null,
// update scene graph
a.autoUpdate===!0&&a.updateMatrixWorld(),
// update camera matrices and frustum
null===b.parent&&b.updateMatrixWorld(),b.matrixWorldInverse.getInverse(b.matrixWorld),Za.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Oa.setFromMatrix(Za),na.length=0,pa=-1,ra=-1,ta.length=0,ua.length=0,L(this.clippingPlanes,b),t(a,b),oa.length=pa+1,qa.length=ra+1,va.sortObjects===!0&&(oa.sort(p),qa.sort(q)),
//
Pa&&(Ra=!0,M(null)),J(na),pb.render(a,b),K(na,b),Pa&&(Ra=!1,N()),
//
bb.calls=0,bb.vertices=0,bb.faces=0,bb.points=0,void 0===c&&(c=null),this.setRenderTarget(c),(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil),a.overrideMaterial){var f=a.overrideMaterial;u(oa,b,e,f),u(qa,b,e,f)}else
// opaque pass (front-to-back order)
ib.setBlending(THREE.NoBlending),u(oa,b,e),
// transparent pass (back-to-front order)
u(qa,b,e);
// Generate mipmap if we're using any kind of mipmap filtering
if(
// custom render plugins (post pass)
qb.render(a,b),rb.render(a,b,Ea),c){var g=c.texture;g.generateMipmaps&&U(c)&&g.minFilter!==THREE.NearestFilter&&g.minFilter!==THREE.LinearFilter&&ca(c)}
// Ensure depth buffer writing is enabled so it can be cleared on next render
ib.setDepthTest(!0),ib.setDepthWrite(!0),ib.setColorWrite(!0)},
// GL state setting
this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?ib.disable(cb.CULL_FACE):(b===THREE.FrontFaceDirectionCW?cb.frontFace(cb.CW):cb.frontFace(cb.CCW),a===THREE.CullFaceBack?cb.cullFace(cb.BACK):a===THREE.CullFaceFront?cb.cullFace(cb.FRONT):cb.cullFace(cb.FRONT_AND_BACK),ib.enable(cb.CULL_FACE))};var sb=!1;this.setTexture=function(a,b){sb||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),sb=!0),S(a,b)},this.allocTextureUnit=P,this.setTexture2D=S,this.setTextureCube=function(a,b){a instanceof THREE.CubeTexture||Array.isArray(a.image)&&6===a.image.length?
// CompressedTexture can have Array in image :/
X(a,b):
// assumed: texture instanceof THREE.WebGLRenderTargetCube
Y(a.texture,b)},this.getCurrentRenderTarget=function(){return xa},this.setRenderTarget=function(a){xa=a,a&&void 0===jb.get(a).__webglFramebuffer&&ba(a);var b,c=a instanceof THREE.WebGLRenderTargetCube;if(a){var d=jb.get(a);b=c?d.__webglFramebuffer[a.activeCubeFace]:d.__webglFramebuffer,Ca.copy(a.scissor),Da=a.scissorTest,Ea.copy(a.viewport)}else b=null,Ca.copy(La).multiplyScalar(Ka),Da=Ma,Ea.copy(Na).multiplyScalar(Ka);if(ya!==b&&(cb.bindFramebuffer(cb.FRAMEBUFFER,b),ya=b),ib.scissor(Ca),ib.setScissorTest(Da),ib.viewport(Ea),c){var e=jb.get(a.texture);cb.framebufferTexture2D(cb.FRAMEBUFFER,cb.COLOR_ATTACHMENT0,cb.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,e.__webglTexture,a.activeMipMapLevel)}},this.readRenderTargetPixels=function(a,b,c,d,e,f){if(a instanceof THREE.WebGLRenderTarget==!1)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");var g=jb.get(a).__webglFramebuffer;if(g){var h=!1;g!==ya&&(cb.bindFramebuffer(cb.FRAMEBUFFER,g),h=!0);try{var i=a.texture;if(i.format!==THREE.RGBAFormat&&ea(i.format)!==cb.getParameter(cb.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!(i.type===THREE.UnsignedByteType||ea(i.type)===cb.getParameter(cb.IMPLEMENTATION_COLOR_READ_TYPE)||i.type===THREE.FloatType&&gb.get("WEBGL_color_buffer_float")||i.type===THREE.HalfFloatType&&gb.get("EXT_color_buffer_half_float")))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");cb.checkFramebufferStatus(cb.FRAMEBUFFER)===cb.FRAMEBUFFER_COMPLETE?
// the following if statement ensures valid read requests (no out-of-bounds pixels, see #8604)
b>0&&b<=a.width-d&&c>0&&c<=a.height-e&&cb.readPixels(b,c,d,e,ea(i.format),ea(i.type),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{h&&cb.bindFramebuffer(cb.FRAMEBUFFER,ya)}}}},
// File:src/renderers/WebGLRenderTarget.js
/**
 * @author szimek / https://github.com/szimek/
 * @author alteredq / http://alteredqualia.com/
 * @author Marius Kintel / https://github.com/kintel
 */
/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
THREE.WebGLRenderTarget=function(a,b,c){this.uuid=THREE.Math.generateUUID(),this.width=a,this.height=b,this.scissor=new THREE.Vector4(0,0,a,b),this.scissorTest=!1,this.viewport=new THREE.Vector4(0,0,a,b),c=c||{},void 0===c.minFilter&&(c.minFilter=THREE.LinearFilter),this.texture=new THREE.Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding),this.depthBuffer=void 0===c.depthBuffer||c.depthBuffer,this.stencilBuffer=void 0===c.stencilBuffer||c.stencilBuffer,this.depthTexture=null},THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width===a&&this.height===b||(this.width=a,this.height=b,this.dispose()),this.viewport.set(0,0,a,b),this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){return this.width=a.width,this.height=a.height,this.viewport.copy(a.viewport),this.texture=a.texture.clone(),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}},THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
// File:src/renderers/WebGLRenderTargetCube.js
/**
 * @author alteredq / http://alteredqualia.com
 */
THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c),this.activeCubeFace=0,// PX 0, NX 1, PY 2, NY 3, PZ 4, NZ 5
this.activeMipMapLevel=0},THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype),THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube,
// File:src/renderers/webgl/WebGLBufferRenderer.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLBufferRenderer=function(a,b,c){function d(a){g=a}function e(b,d){a.drawArrays(g,b,d),c.calls++,c.vertices+=d,g===a.TRIANGLES&&(c.faces+=d/3)}function f(d){var e=b.get("ANGLE_instanced_arrays");if(null===e)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");var f=d.attributes.position,h=0;f instanceof THREE.InterleavedBufferAttribute?(h=f.data.count,e.drawArraysInstancedANGLE(g,0,h,d.maxInstancedCount)):(h=f.count,e.drawArraysInstancedANGLE(g,0,h,d.maxInstancedCount)),c.calls++,c.vertices+=h*d.maxInstancedCount,g===a.TRIANGLES&&(c.faces+=d.maxInstancedCount*h/3)}var g;this.setMode=d,this.render=e,this.renderInstances=f},
// File:src/renderers/webgl/WebGLIndexedBufferRenderer.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLIndexedBufferRenderer=function(a,b,c){function d(a){h=a}function e(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(i=a.UNSIGNED_INT,j=4):(i=a.UNSIGNED_SHORT,j=2)}function f(b,d){a.drawElements(h,d,i,b*j),c.calls++,c.vertices+=d,h===a.TRIANGLES&&(c.faces+=d/3)}function g(d,e,f){var g=b.get("ANGLE_instanced_arrays");return null===g?void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(g.drawElementsInstancedANGLE(h,f,i,e*j,d.maxInstancedCount),c.calls++,c.vertices+=f*d.maxInstancedCount,void(h===a.TRIANGLES&&(c.faces+=d.maxInstancedCount*f/3)))}var h,i,j;this.setMode=d,this.setIndex=e,this.render=f,this.renderInstances=g},
// File:src/renderers/webgl/WebGLExtensions.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case"WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}return null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported."),b[c]=d,d}},
// File:src/renderers/webgl/WebGLCapabilities.js
THREE.WebGLCapabilities=function(a,b,c){function d(b){if("highp"===b){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return"mediump"===b&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}this.getMaxPrecision=d,this.precision=void 0!==c.precision?c.precision:"highp",this.logarithmicDepthBuffer=void 0!==c.logarithmicDepthBuffer&&c.logarithmicDepthBuffer,this.maxTextures=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),this.maxVertexTextures=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),this.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE),this.maxCubemapSize=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),this.maxAttributes=a.getParameter(a.MAX_VERTEX_ATTRIBS),this.maxVertexUniforms=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),this.maxVaryings=a.getParameter(a.MAX_VARYING_VECTORS),this.maxFragmentUniforms=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),this.vertexTextures=this.maxVertexTextures>0,this.floatFragmentTextures=!!b.get("OES_texture_float"),this.floatVertexTextures=this.vertexTextures&&this.floatFragmentTextures;var e=d(this.precision);e!==this.precision&&(console.warn("THREE.WebGLRenderer:",this.precision,"not supported, using",e,"instead."),this.precision=e),this.logarithmicDepthBuffer&&(this.logarithmicDepthBuffer=!!b.get("EXT_frag_depth"))},
// File:src/renderers/webgl/WebGLGeometries.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLGeometries=function(a,b,c){function d(a){var b=a.geometry;if(void 0!==j[b.id])return j[b.id];b.addEventListener("dispose",e);var d;return b instanceof THREE.BufferGeometry?d=b:b instanceof THREE.Geometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new THREE.BufferGeometry).setFromObject(a)),d=b._bufferGeometry),j[b.id]=d,c.memory.geometries++,d}function e(a){var d=a.target,f=j[d.id];null!==f.index&&g(f.index),h(f.attributes),d.removeEventListener("dispose",e),delete j[d.id];
// TODO
var i=b.get(d);i.wireframe&&g(i.wireframe),b.delete(d);var k=b.get(f);k.wireframe&&g(k.wireframe),b.delete(f),
//
c.memory.geometries--}function f(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer}function g(b){var c=f(b);void 0!==c&&(a.deleteBuffer(c),i(b))}function h(a){for(var b in a)g(a[b])}function i(a){a instanceof THREE.InterleavedBufferAttribute?b.delete(a.data):b.delete(a)}var j={};this.get=d},
// File:src/renderers/webgl/WebGLLights.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLLights=function(){var a={};this.get=function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case"DirectionalLight":c={direction:new THREE.Vector3,color:new THREE.Color,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2};break;case"SpotLight":c={position:new THREE.Vector3,direction:new THREE.Vector3,color:new THREE.Color,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2};break;case"PointLight":c={position:new THREE.Vector3,color:new THREE.Color,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2};break;case"HemisphereLight":c={direction:new THREE.Vector3,skyColor:new THREE.Color,groundColor:new THREE.Color}}return a[b.id]=c,c}},
// File:src/renderers/webgl/WebGLObjects.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLObjects=function(a,b,c){
//
function d(b){
// TODO: Avoid updating twice (when using shadowMap). Maybe add frame counter.
var c=k.get(b);b.geometry instanceof THREE.Geometry&&c.updateFromObject(b);var d=c.index,f=c.attributes;null!==d&&e(d,a.ELEMENT_ARRAY_BUFFER);for(var g in f)e(f[g],a.ARRAY_BUFFER);
// morph targets
var h=c.morphAttributes;for(var g in h)for(var i=h[g],j=0,l=i.length;j<l;j++)e(i[j],a.ARRAY_BUFFER);return c}function e(a,c){var d=a instanceof THREE.InterleavedBufferAttribute?a.data:a,e=b.get(d);void 0===e.__webglBuffer?f(e,d,c):e.version!==d.version&&g(e,d,c)}function f(b,c,d){b.__webglBuffer=a.createBuffer(),a.bindBuffer(d,b.__webglBuffer);var e=c.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW;a.bufferData(d,c.array,e),b.version=c.version}function g(b,c,d){a.bindBuffer(d,b.__webglBuffer),c.dynamic===!1||c.updateRange.count===-1?
// Not using update ranges
a.bufferSubData(d,0,c.array):0===c.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,c.updateRange.offset*c.array.BYTES_PER_ELEMENT,c.array.subarray(c.updateRange.offset,c.updateRange.offset+c.updateRange.count)),c.updateRange.count=0),b.version=c.version}function h(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer}function i(c){var d=b.get(c);if(void 0!==d.wireframe)return d.wireframe;var f=[],g=c.index,h=c.attributes,i=h.position;
// console.time( 'wireframe' );
if(null!==g)for(var k={},l=g.array,m=0,n=l.length;m<n;m+=3){var o=l[m+0],p=l[m+1],q=l[m+2];j(k,o,p)&&f.push(o,p),j(k,p,q)&&f.push(p,q),j(k,q,o)&&f.push(q,o)}else for(var l=h.position.array,m=0,n=l.length/3-1;m<n;m+=3){var o=m+0,p=m+1,q=m+2;f.push(o,p,p,q,q,o)}
// console.timeEnd( 'wireframe' );
var r=i.count>65535?Uint32Array:Uint16Array,s=new THREE.BufferAttribute(new r(f),1);return e(s,a.ELEMENT_ARRAY_BUFFER),d.wireframe=s,s}function j(a,b,c){if(b>c){var d=b;b=c,c=d}var e=a[b];return void 0===e?(a[b]=[c],!0):e.indexOf(c)===-1&&(e.push(c),!0)}var k=new THREE.WebGLGeometries(a,b,c);this.getAttributeBuffer=h,this.getWireframeAttribute=i,this.update=d},
// File:src/renderers/webgl/WebGLProgram.js
THREE.WebGLProgram=function(){function a(a){switch(a){case THREE.LinearEncoding:return["Linear","( value )"];case THREE.sRGBEncoding:return["sRGB","( value )"];case THREE.RGBEEncoding:return["RGBE","( value )"];case THREE.RGBM7Encoding:return["RGBM","( value, 7.0 )"];case THREE.RGBM16Encoding:return["RGBM","( value, 16.0 )"];case THREE.RGBDEncoding:return["RGBD","( value, 256.0 )"];case THREE.GammaEncoding:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+a)}}function b(b,c){var d=a(c);return"vec4 "+b+"( vec4 value ) { return "+d[0]+"ToLinear"+d[1]+"; }"}function c(b,c){var d=a(c);return"vec4 "+b+"( vec4 value ) { return LinearTo"+d[0]+d[1]+"; }"}function d(a,b){var c;switch(b){case THREE.LinearToneMapping:c="Linear";break;case THREE.ReinhardToneMapping:c="Reinhard";break;case THREE.Uncharted2ToneMapping:c="Uncharted2";break;case THREE.CineonToneMapping:c="OptimizedCineon";break;default:throw new Error("unsupported toneMapping: "+b)}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function e(a,b,c){a=a||{};var d=[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""];return d.filter(h).join("\n")}function f(a){var b=[];for(var c in a){var d=a[c];d!==!1&&b.push("#define "+c+" "+d)}return b.join("\n")}function g(a,b,c){for(var d={},e=a.getProgramParameter(b,a.ACTIVE_ATTRIBUTES),f=0;f<e;f++){var g=a.getActiveAttrib(b,f),h=g.name;
// console.log("THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:", name, i );
d[h]=a.getAttribLocation(b,h)}return d}function h(a){return""!==a}function i(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function j(a){function b(a,b){var c=THREE.ShaderChunk[b];if(void 0===c)throw new Error("Can not resolve #include <"+b+">");return j(c)}var c=/#include +<([\w\d.]+)>/g;return a.replace(c,b)}function k(a){function b(a,b,c,d){for(var e="",f=parseInt(b);f<parseInt(c);f++)e+=d.replace(/\[ i \]/g,"[ "+f+" ]");return e}var c=/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;return a.replace(c,b)}var l=0;return function(a,m,n,o){var p=a.context,q=n.extensions,r=n.defines,s=n.__webglShader.vertexShader,t=n.__webglShader.fragmentShader,u="SHADOWMAP_TYPE_BASIC";o.shadowMapType===THREE.PCFShadowMap?u="SHADOWMAP_TYPE_PCF":o.shadowMapType===THREE.PCFSoftShadowMap&&(u="SHADOWMAP_TYPE_PCF_SOFT");var v="ENVMAP_TYPE_CUBE",w="ENVMAP_MODE_REFLECTION",x="ENVMAP_BLENDING_MULTIPLY";if(o.envMap){switch(n.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:v="ENVMAP_TYPE_CUBE";break;case THREE.CubeUVReflectionMapping:case THREE.CubeUVRefractionMapping:v="ENVMAP_TYPE_CUBE_UV";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:v="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:v="ENVMAP_TYPE_SPHERE"}switch(n.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:w="ENVMAP_MODE_REFRACTION"}switch(n.combine){case THREE.MultiplyOperation:x="ENVMAP_BLENDING_MULTIPLY";break;case THREE.MixOperation:x="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:x="ENVMAP_BLENDING_ADD"}}var y,z,A=a.gammaFactor>0?a.gammaFactor:1,B=e(q,o,a.extensions),C=f(r),D=p.createProgram();n instanceof THREE.RawShaderMaterial?(y="",z=""):(y=["precision "+o.precision+" float;","precision "+o.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,C,o.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+A,"#define MAX_BONES "+o.maxBones,o.map?"#define USE_MAP":"",o.envMap?"#define USE_ENVMAP":"",o.envMap?"#define "+w:"",o.lightMap?"#define USE_LIGHTMAP":"",o.aoMap?"#define USE_AOMAP":"",o.emissiveMap?"#define USE_EMISSIVEMAP":"",o.bumpMap?"#define USE_BUMPMAP":"",o.normalMap?"#define USE_NORMALMAP":"",o.displacementMap&&o.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",o.specularMap?"#define USE_SPECULARMAP":"",o.roughnessMap?"#define USE_ROUGHNESSMAP":"",o.metalnessMap?"#define USE_METALNESSMAP":"",o.alphaMap?"#define USE_ALPHAMAP":"",o.vertexColors?"#define USE_COLOR":"",o.flatShading?"#define FLAT_SHADED":"",o.skinning?"#define USE_SKINNING":"",o.useVertexTexture?"#define BONE_TEXTURE":"",o.morphTargets?"#define USE_MORPHTARGETS":"",o.morphNormals&&o.flatShading===!1?"#define USE_MORPHNORMALS":"",o.doubleSided?"#define DOUBLE_SIDED":"",o.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+o.numClippingPlanes,o.shadowMapEnabled?"#define USE_SHADOWMAP":"",o.shadowMapEnabled?"#define "+u:"",o.sizeAttenuation?"#define USE_SIZEATTENUATION":"",o.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",o.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(h).join("\n"),z=[B,"precision "+o.precision+" float;","precision "+o.precision+" int;","#define SHADER_NAME "+n.__webglShader.name,C,o.alphaTest?"#define ALPHATEST "+o.alphaTest:"","#define GAMMA_FACTOR "+A,o.useFog&&o.fog?"#define USE_FOG":"",o.useFog&&o.fogExp?"#define FOG_EXP2":"",o.map?"#define USE_MAP":"",o.envMap?"#define USE_ENVMAP":"",o.envMap?"#define "+v:"",o.envMap?"#define "+w:"",o.envMap?"#define "+x:"",o.lightMap?"#define USE_LIGHTMAP":"",o.aoMap?"#define USE_AOMAP":"",o.emissiveMap?"#define USE_EMISSIVEMAP":"",o.bumpMap?"#define USE_BUMPMAP":"",o.normalMap?"#define USE_NORMALMAP":"",o.specularMap?"#define USE_SPECULARMAP":"",o.roughnessMap?"#define USE_ROUGHNESSMAP":"",o.metalnessMap?"#define USE_METALNESSMAP":"",o.alphaMap?"#define USE_ALPHAMAP":"",o.vertexColors?"#define USE_COLOR":"",o.flatShading?"#define FLAT_SHADED":"",o.doubleSided?"#define DOUBLE_SIDED":"",o.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+o.numClippingPlanes,o.shadowMapEnabled?"#define USE_SHADOWMAP":"",o.shadowMapEnabled?"#define "+u:"",o.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",o.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",o.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",o.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",o.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",o.toneMapping!==THREE.NoToneMapping?"#define TONE_MAPPING":"",o.toneMapping!==THREE.NoToneMapping?THREE.ShaderChunk.tonemapping_pars_fragment:"",// this code is required here because it is used by the toneMapping() function defined below
o.toneMapping!==THREE.NoToneMapping?d("toneMapping",o.toneMapping):"",o.outputEncoding||o.mapEncoding||o.envMapEncoding||o.emissiveMapEncoding?THREE.ShaderChunk.encodings_pars_fragment:"",// this code is required here because it is used by the various encoding/decoding function defined below
o.mapEncoding?b("mapTexelToLinear",o.mapEncoding):"",o.envMapEncoding?b("envMapTexelToLinear",o.envMapEncoding):"",o.emissiveMapEncoding?b("emissiveMapTexelToLinear",o.emissiveMapEncoding):"",o.outputEncoding?c("linearToOutputTexel",o.outputEncoding):"",o.depthPacking?"#define DEPTH_PACKING "+n.depthPacking:"","\n"].filter(h).join("\n")),s=j(s,o),s=i(s,o),t=j(t,o),t=i(t,o),n instanceof THREE.ShaderMaterial==!1&&(s=k(s),t=k(t));var E=y+s,F=z+t,G=THREE.WebGLShader(p,p.VERTEX_SHADER,E),H=THREE.WebGLShader(p,p.FRAGMENT_SHADER,F);p.attachShader(D,G),p.attachShader(D,H),
// Force a particular attribute to index 0.
void 0!==n.index0AttributeName?p.bindAttribLocation(D,0,n.index0AttributeName):o.morphTargets===!0&&
// programs with morphTargets displace position out of attribute 0
p.bindAttribLocation(D,0,"position"),p.linkProgram(D);var I=p.getProgramInfoLog(D),J=p.getShaderInfoLog(G),K=p.getShaderInfoLog(H),L=!0,M=!0;
// console.log( '**VERTEX**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
// console.log( '**FRAGMENT**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );
p.getProgramParameter(D,p.LINK_STATUS)===!1?(L=!1,console.error("THREE.WebGLProgram: shader error: ",p.getError(),"gl.VALIDATE_STATUS",p.getProgramParameter(D,p.VALIDATE_STATUS),"gl.getProgramInfoLog",I,J,K)):""!==I?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):""!==J&&""!==K||(M=!1),M&&(this.diagnostics={runnable:L,material:n,programLog:I,vertexShader:{log:J,prefix:y},fragmentShader:{log:K,prefix:z}}),
// clean up
p.deleteShader(G),p.deleteShader(H);
// set up caching for uniform locations
var N;this.getUniforms=function(){return void 0===N&&(N=new THREE.WebGLUniforms(p,D,a)),N};
// set up caching for attribute locations
var O;
// free resource
// DEPRECATED
//
return this.getAttributes=function(){return void 0===O&&(O=g(p,D)),O},this.destroy=function(){p.deleteProgram(D),this.program=void 0},Object.defineProperties(this,{uniforms:{get:function(){return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),this.getUniforms()}},attributes:{get:function(){return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),this.getAttributes()}}}),this.id=l++,this.code=m,this.usedTimes=1,this.program=D,this.vertexShader=G,this.fragmentShader=H,this}}(),
// File:src/renderers/webgl/WebGLPrograms.js
THREE.WebGLPrograms=function(a,b){function c(a){if(b.floatVertexTextures&&a&&a.skeleton&&a.skeleton.useVertexTexture)return 1024;
// default for when object is not specified
// ( for example when prebuilding shader to be used with multiple objects )
//
//  - leave some extra space for other uniforms
//  - limit here is ANGLE's 254 max uniform vectors
//    (up to 54 should be safe)
var c=b.maxVertexUniforms,d=Math.floor((c-20)/4),e=d;return void 0!==a&&a instanceof THREE.SkinnedMesh&&(e=Math.min(a.skeleton.bones.length,e),e<a.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+a.skeleton.bones.length+", this GPU supports just "+e+" (try OpenGL instead of ANGLE)")),e}function d(a,b){var c;
// add backwards compatibility for WebGLRenderer.gammaInput/gammaOutput parameter, should probably be removed at some point.
return a?a instanceof THREE.Texture?c=a.encoding:a instanceof THREE.WebGLRenderTarget&&(c=a.texture.encoding):c=THREE.LinearEncoding,c===THREE.LinearEncoding&&b&&(c=THREE.GammaEncoding),c}var e=[],f={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},g=["precision","supportsVertexTextures","map","mapEncoding","envMap","envMapMode","envMapEncoding","lightMap","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","displacementMap","specularMap","roughnessMap","metalnessMap","alphaMap","combine","vertexColors","fog","useFog","fogExp","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","depthPacking"];this.getParameters=function(e,g,h,i,j){var k=f[e.type],l=c(j),m=a.getPrecision();null!==e.precision&&(m=b.getMaxPrecision(e.precision),m!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",m,"instead."));var n={shaderID:k,precision:m,supportsVertexTextures:b.vertexTextures,outputEncoding:d(a.getCurrentRenderTarget(),a.gammaOutput),map:!!e.map,mapEncoding:d(e.map,a.gammaInput),envMap:!!e.envMap,envMapMode:e.envMap&&e.envMap.mapping,envMapEncoding:d(e.envMap,a.gammaInput),envMapCubeUV:!!e.envMap&&(e.envMap.mapping===THREE.CubeUVReflectionMapping||e.envMap.mapping===THREE.CubeUVRefractionMapping),lightMap:!!e.lightMap,aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:d(e.emissiveMap,a.gammaInput),bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,combine:e.combine,vertexColors:e.vertexColors,fog:h,useFog:e.fog,fogExp:h instanceof THREE.FogExp2,flatShading:e.shading===THREE.FlatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:e.skinning,maxBones:l,useVertexTexture:b.floatVertexTextures&&j&&j.skeleton&&j.skeleton.useVertexTexture,morphTargets:e.morphTargets,morphNormals:e.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numHemiLights:g.hemi.length,numClippingPlanes:i,shadowMapEnabled:a.shadowMap.enabled&&j.receiveShadow&&g.shadows.length>0,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:e.side===THREE.DoubleSide,flipSided:e.side===THREE.BackSide,depthPacking:void 0!==e.depthPacking&&e.depthPacking};return n},this.getProgramCode=function(a,b){var c=[];if(b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader)),void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(var e=0;e<g.length;e++)c.push(b[g[e]]);return c.join()},this.acquireProgram=function(b,c,d){
// Check if code has been already compiled
for(var f,g=0,h=e.length;g<h;g++){var i=e[g];if(i.code===d){f=i,++f.usedTimes;break}}return void 0===f&&(f=new THREE.WebGLProgram(a,d,b,c),e.push(f)),f},this.releaseProgram=function(a){if(0===--a.usedTimes){
// Remove from unordered set
var b=e.indexOf(a);e[b]=e[e.length-1],e.pop(),
// Free WebGL resources
a.destroy()}},
// Exposed for resource monitoring & error feedback via renderer.info:
this.programs=e},
// File:src/renderers/webgl/WebGLProperties.js
/**
* @author fordacious / fordacious.github.io
*/
THREE.WebGLProperties=function(){var a={};this.get=function(b){var c=b.uuid,d=a[c];return void 0===d&&(d={},a[c]=d),d},this.delete=function(b){delete a[b.uuid]},this.clear=function(){a={}}},
// File:src/renderers/webgl/WebGLShader.js
THREE.WebGLShader=function(){function a(a){for(var b=a.split("\n"),c=0;c<b.length;c++)b[c]=c+1+": "+b[c];return b.join("\n")}return function(b,c,d){var e=b.createShader(c);
// --enable-privileged-webgl-extension
// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );
return b.shaderSource(e,d),b.compileShader(e),b.getShaderParameter(e,b.COMPILE_STATUS)===!1&&console.error("THREE.WebGLShader: Shader couldn't compile."),""!==b.getShaderInfoLog(e)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",c===b.VERTEX_SHADER?"vertex":"fragment",b.getShaderInfoLog(e),a(d)),e}}(),
// File:src/renderers/webgl/WebGLShadowMap.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.WebGLShadowMap=function(a,b,c){function d(b,c,d,e){var f=b.geometry,g=null,h=r,i=b.customDepthMaterial;if(d&&(h=s,i=b.customDistanceMaterial),i)g=i;else{var j=void 0!==f.morphTargets&&f.morphTargets.length>0&&c.morphTargets,k=b instanceof THREE.SkinnedMesh&&c.skinning,l=0;j&&(l|=o),k&&(l|=p),g=h[l]}if(a.localClippingEnabled&&c.clipShadows===!0&&0!==c.clippingPlanes.length){
// in this case we need a unique material instance reflecting the
// appropriate state
var m=g.uuid,n=c.uuid,q=t[m];void 0===q&&(q={},t[m]=q);var u=q[n];void 0===u&&(u=g.clone(),q[n]=u),g=u}return g.visible=c.visible,g.wireframe=c.wireframe,g.side=c.side,g.clipShadows=c.clipShadows,g.clippingPlanes=c.clippingPlanes,g.wireframeLinewidth=c.wireframeLinewidth,g.linewidth=c.linewidth,d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e),g}function e(a,b,c){if(a.visible!==!1){if(a.layers.test(b.layers)&&(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&a.castShadow&&(a.frustumCulled===!1||h.intersectsObject(a)===!0)){var d=a.material;d.visible===!0&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),n.push(a))}for(var f=a.children,g=0,i=f.length;g<i;g++)e(f[g],b,c)}}var f=a.context,g=a.state,h=new THREE.Frustum,i=new THREE.Matrix4,j=b.shadows,k=new THREE.Vector2,l=new THREE.Vector3,m=new THREE.Vector3,n=[],o=1,p=2,q=(o|p)+1,r=new Array(q),s=new Array(q),t={},u=[new THREE.Vector3(1,0,0),new THREE.Vector3(-1,0,0),new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1),new THREE.Vector3(0,1,0),new THREE.Vector3(0,-1,0)],v=[new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1)],w=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],x=new THREE.MeshDepthMaterial;x.depthPacking=THREE.RGBADepthPacking,x.clipping=!0;for(var y=THREE.ShaderLib.distanceRGBA,z=THREE.UniformsUtils.clone(y.uniforms),A=0;A!==q;++A){var B=0!==(A&o),C=0!==(A&p),D=x.clone();D.morphTargets=B,D.skinning=C,r[A]=D;var E=new THREE.ShaderMaterial({defines:{USE_SHADOWMAP:""},uniforms:z,vertexShader:y.vertexShader,fragmentShader:y.fragmentShader,morphTargets:B,skinning:C,clipping:!0});s[A]=E}
//
var F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=THREE.PCFShadowMap,this.cullFace=THREE.CullFaceFront,this.render=function(b,o){if(F.enabled!==!1&&(F.autoUpdate!==!1||F.needsUpdate!==!1)&&0!==j.length){
// Set GL state for depth map.
g.clearColor(1,1,1,1),g.disable(f.BLEND),g.enable(f.CULL_FACE),f.frontFace(f.CCW),f.cullFace(F.cullFace===THREE.CullFaceFront?f.FRONT:f.BACK),g.setDepthTest(!0),g.setScissorTest(!1);for(var p,q,r=0,s=j.length;r<s;r++){var t=j[r],x=t.shadow,y=x.camera;if(k.copy(x.mapSize),t instanceof THREE.PointLight){p=6,q=!0;var z=k.x,A=k.y;
// These viewports map a cube-map onto a 2D texture with the
// following orientation:
//
//  xzXZ
//   y Y
//
// X - Positive x direction
// x - Negative x direction
// Y - Positive y direction
// y - Negative y direction
// Z - Positive z direction
// z - Negative z direction
// positive X
w[0].set(2*z,A,z,A),
// negative X
w[1].set(0,A,z,A),
// positive Z
w[2].set(3*z,A,z,A),
// negative Z
w[3].set(z,A,z,A),
// positive Y
w[4].set(3*z,0,z,A),
// negative Y
w[5].set(z,0,z,A),k.x*=4,k.y*=2}else p=1,q=!1;if(null===x.map){var B={minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,format:THREE.RGBAFormat};x.map=new THREE.WebGLRenderTarget(k.x,k.y,B),y.updateProjectionMatrix()}x instanceof THREE.SpotLightShadow&&x.update(t);var C=x.map,D=x.matrix;m.setFromMatrixPosition(t.matrixWorld),y.position.copy(m),a.setRenderTarget(C),a.clear();
// render shadow map for each cube face (if omni-directional) or
// run a single pass if not
for(var E=0;E<p;E++){if(q){l.copy(y.position),l.add(u[E]),y.up.copy(v[E]),y.lookAt(l);var G=w[E];g.viewport(G)}else l.setFromMatrixPosition(t.target.matrixWorld),y.lookAt(l);y.updateMatrixWorld(),y.matrixWorldInverse.getInverse(y.matrixWorld),
// compute shadow matrix
D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(y.projectionMatrix),D.multiply(y.matrixWorldInverse),
// update camera matrices and frustum
i.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),h.setFromMatrix(i),
// set object matrices & frustum culling
n.length=0,e(b,o,y);
// render shadow map
// render regular objects
for(var H=0,I=n.length;H<I;H++){var J=n[H],K=c.update(J),L=J.material;if(L instanceof THREE.MultiMaterial)for(var M=K.groups,N=L.materials,O=0,P=M.length;O<P;O++){var Q=M[O],R=N[Q.materialIndex];if(R.visible===!0){var S=d(J,R,q,m);a.renderBufferDirect(y,null,K,S,J,Q)}}else{var S=d(J,L,q,m);a.renderBufferDirect(y,null,K,S,J,null)}}}}
// Restore GL state.
var T=a.getClearColor(),U=a.getClearAlpha();a.setClearColor(T,U),g.enable(f.BLEND),F.cullFace===THREE.CullFaceFront&&f.cullFace(f.BACK),F.needsUpdate=!1}}},
// File:src/renderers/webgl/WebGLState.js
/**
* @author mrdoob / http://mrdoob.com/
*/
THREE.WebGLState=function(a,b,c){var d=this,e=new THREE.Vector4,f=a.getParameter(a.MAX_VERTEX_ATTRIBS),g=new Uint8Array(f),h=new Uint8Array(f),i=new Uint8Array(f),j={},k=null,l=null,m=null,n=null,o=null,p=null,q=null,r=null,s=!1,t=null,u=null,v=null,w=null,x=null,y=null,z=null,A=null,B=null,C=null,D=null,E=null,F=null,G=null,H=null,I=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),J=void 0,K={},L=new THREE.Vector4,M=null,N=null,O=new THREE.Vector4,P=new THREE.Vector4;this.init=function(){this.clearColor(0,0,0,1),this.clearDepth(1),this.clearStencil(0),this.enable(a.DEPTH_TEST),a.depthFunc(a.LEQUAL),a.frontFace(a.CCW),a.cullFace(a.BACK),this.enable(a.CULL_FACE),this.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA)},this.initAttributes=function(){for(var a=0,b=g.length;a<b;a++)g[a]=0},this.enableAttribute=function(c){if(g[c]=1,0===h[c]&&(a.enableVertexAttribArray(c),h[c]=1),0!==i[c]){var d=b.get("ANGLE_instanced_arrays");d.vertexAttribDivisorANGLE(c,0),i[c]=0}},this.enableAttributeAndDivisor=function(b,c,d){g[b]=1,0===h[b]&&(a.enableVertexAttribArray(b),h[b]=1),i[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),i[b]=c)},this.disableUnusedAttributes=function(){for(var b=0,c=h.length;b<c;b++)h[b]!==g[b]&&(a.disableVertexAttribArray(b),h[b]=0)},this.enable=function(b){j[b]!==!0&&(a.enable(b),j[b]=!0)},this.disable=function(b){j[b]!==!1&&(a.disable(b),j[b]=!1)},this.getCompressedTextureFormats=function(){if(null===k&&(k=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)k.push(c[d]);return k},this.setBlending=function(b,d,e,f,g,h,i,j){b===THREE.NoBlending?this.disable(a.BLEND):this.enable(a.BLEND),b===l&&j===s||(b===THREE.AdditiveBlending?j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):b===THREE.SubtractiveBlending?j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):b===THREE.MultiplyBlending?j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.SRC_COLOR,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):j?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),l=b,s=j),b===THREE.CustomBlending?(g=g||d,h=h||e,i=i||f,d===m&&g===p||(a.blendEquationSeparate(c(d),c(g)),m=d,p=g),e===n&&f===o&&h===q&&i===r||(a.blendFuncSeparate(c(e),c(f),c(h),c(i)),n=e,o=f,q=h,r=i)):(m=null,n=null,o=null,p=null,q=null,r=null)},this.setDepthFunc=function(b){if(t!==b){if(b)switch(b){case THREE.NeverDepth:a.depthFunc(a.NEVER);break;case THREE.AlwaysDepth:a.depthFunc(a.ALWAYS);break;case THREE.LessDepth:a.depthFunc(a.LESS);break;case THREE.LessEqualDepth:a.depthFunc(a.LEQUAL);break;case THREE.EqualDepth:a.depthFunc(a.EQUAL);break;case THREE.GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case THREE.GreaterDepth:a.depthFunc(a.GREATER);break;case THREE.NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);t=b}},this.setDepthTest=function(b){b?this.enable(a.DEPTH_TEST):this.disable(a.DEPTH_TEST)},this.setDepthWrite=function(b){
// TODO: Rename to setDepthMask
u!==b&&(a.depthMask(b),u=b)},this.setColorWrite=function(b){
// TODO: Rename to setColorMask
v!==b&&(a.colorMask(b,b,b,b),v=b)},this.setStencilFunc=function(b,c,d){x===b&&y===c&&z===d||(a.stencilFunc(b,c,d),x=b,y=c,z=d)},this.setStencilOp=function(b,c,d){A===b&&B===c&&C===d||(a.stencilOp(b,c,d),A=b,B=c,C=d)},this.setStencilTest=function(b){b?this.enable(a.STENCIL_TEST):this.disable(a.STENCIL_TEST)},this.setStencilWrite=function(b){
// TODO: Rename to setStencilMask
w!==b&&(a.stencilMask(b),w=b)},this.setFlipSided=function(b){D!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),D=b)},this.setLineWidth=function(b){b!==E&&(a.lineWidth(b),E=b)},this.setPolygonOffset=function(b,c,d){b?this.enable(a.POLYGON_OFFSET_FILL):this.disable(a.POLYGON_OFFSET_FILL),!b||F===c&&G===d||(a.polygonOffset(c,d),F=c,G=d)},this.getScissorTest=function(){return H},this.setScissorTest=function(b){H=b,b?this.enable(a.SCISSOR_TEST):this.disable(a.SCISSOR_TEST)},
// texture
this.activeTexture=function(b){void 0===b&&(b=a.TEXTURE0+I-1),J!==b&&(a.activeTexture(b),J=b)},this.bindTexture=function(b,c){void 0===J&&d.activeTexture();var e=K[J];void 0===e&&(e={type:void 0,texture:void 0},K[J]=e),e.type===b&&e.texture===c||(a.bindTexture(b,c),e.type=b,e.texture=c)},this.compressedTexImage2D=function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}},this.texImage2D=function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}},
// clear values
this.clearColor=function(b,c,d,f){e.set(b,c,d,f),L.equals(e)===!1&&(a.clearColor(b,c,d,f),L.copy(e))},this.clearDepth=function(b){M!==b&&(a.clearDepth(b),M=b)},this.clearStencil=function(b){N!==b&&(a.clearStencil(b),N=b)},
//
this.scissor=function(b){O.equals(b)===!1&&(a.scissor(b.x,b.y,b.z,b.w),O.copy(b))},this.viewport=function(b){P.equals(b)===!1&&(a.viewport(b.x,b.y,b.z,b.w),P.copy(b))},
//
this.reset=function(){for(var b=0;b<h.length;b++)1===h[b]&&(a.disableVertexAttribArray(b),h[b]=0);j={},k=null,J=void 0,K={},l=null,v=null,u=null,w=null,D=null}},
// File:src/renderers/webgl/WebGLUniforms.js
/**
 *
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program, renderer )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [renderer] )
 *
 * 		uploads a uniform value(s)
 *  	the 'renderer' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (renderer factorizations):
 *
 * .upload( gl, seq, values, renderer )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 * .splitDynamic( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with dynamic entry and removes them from 'seq'
 *
 *
 * Methods of the top-level container (renderer factorizations):
 *
 * .setValue( gl, name, value )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .set( gl, obj, prop )
 *
 * 		sets uniform from object and property with same name than uniform
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 *
 * @author tschw
 *
 */
THREE.WebGLUniforms=function(){// scope
// --- Base for inner nodes (including the root) ---
var a=function(){this.seq=[],this.map={}},
// --- Utilities ---
// Array Caches (provide typed arrays for temporary by size)
b=[],c=[],
// Flattening for arrays of vectors and matrices
d=function(a,c,d){var e=a[0];if(e<=0||e>0)return a;
// unoptimized: ! isNaN( firstElem )
// see http://jacksondunstan.com/articles/983
var f=c*d,g=b[f];if(void 0===g&&(g=new Float32Array(f),b[f]=g),0!==c){e.toArray(g,0);for(var h=1,i=0;h!==c;++h)i+=d,a[h].toArray(g,i)}return g},
// Texture unit allocation
e=function(a,b){var d=c[b];void 0===d&&(d=new Int32Array(b),c[b]=d);for(var e=0;e!==b;++e)d[e]=a.allocTextureUnit();return d},
// --- Setters ---
// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.
// Single scalar
f=function(a,b){a.uniform1f(this.addr,b)},g=function(a,b){a.uniform1i(this.addr,b)},
// Single float vector (from flat array or THREE.VectorN)
h=function(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)},i=function(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)},j=function(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)},
// Single matrix (from flat array or MatrixN)
k=function(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)},l=function(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)},m=function(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b)},
// Single texture (2D / Cube)
n=function(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d),b&&c.setTexture2D(b,d)},o=function(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d),b&&c.setTextureCube(b,d)},
// Integer / Boolean vectors or arrays thereof (always flat arrays)
p=function(a,b){a.uniform2iv(this.addr,b)},q=function(a,b){a.uniform3iv(this.addr,b)},r=function(a,b){a.uniform4iv(this.addr,b)},
// Helper to pick the right setter for the singular case
s=function(a){switch(a){case 5126:return f;// FLOAT
case 35664:return h;// _VEC2
case 35665:return i;// _VEC3
case 35666:return j;// _VEC4
case 35674:return k;// _MAT2
case 35675:return l;// _MAT3
case 35676:return m;// _MAT4
case 35678:return n;// SAMPLER_2D
case 35680:return o;// SAMPLER_CUBE
case 5124:case 35670:return g;// INT, BOOL
case 35667:case 35671:return p;// _VEC2
case 35668:case 35672:return q;// _VEC3
case 35669:case 35673:return r}},
// Array of scalars
t=function(a,b){a.uniform1fv(this.addr,b)},u=function(a,b){a.uniform1iv(this.addr,b)},
// Array of vectors (flat or from THREE classes)
v=function(a,b){a.uniform2fv(this.addr,d(b,this.size,2))},w=function(a,b){a.uniform3fv(this.addr,d(b,this.size,3))},x=function(a,b){a.uniform4fv(this.addr,d(b,this.size,4))},
// Array of matrices (flat or from THREE clases)
y=function(a,b){a.uniformMatrix2fv(this.addr,!1,d(b,this.size,4))},z=function(a,b){a.uniformMatrix3fv(this.addr,!1,d(b,this.size,9))},A=function(a,b){a.uniformMatrix4fv(this.addr,!1,d(b,this.size,16))},
// Array of textures (2D / Cube)
B=function(a,b,c){var d=b.length,f=e(c,d);a.uniform1iv(this.addr,f);for(var g=0;g!==d;++g){var h=b[g];h&&c.setTexture2D(h,f[g])}},C=function(a,b,c){var d=b.length,f=e(c,d);a.uniform1iv(this.addr,f);for(var g=0;g!==d;++g){var h=b[g];h&&c.setTextureCube(h,f[g])}},
// Helper to pick the right setter for a pure (bottom-level) array
D=function(a){switch(a){case 5126:return t;// FLOAT
case 35664:return v;// _VEC2
case 35665:return w;// _VEC3
case 35666:return x;// _VEC4
case 35674:return y;// _MAT2
case 35675:return z;// _MAT3
case 35676:return A;// _MAT4
case 35678:return B;// SAMPLER_2D
case 35680:return C;// SAMPLER_CUBE
case 5124:case 35670:return u;// INT, BOOL
case 35667:case 35671:return p;// _VEC2
case 35668:case 35672:return q;// _VEC3
case 35669:case 35673:return r}},
// --- Uniform Classes ---
E=function(a,b,c){this.id=a,this.addr=c,this.setValue=s(b.type)},F=function(a,b,c){this.id=a,this.addr=c,this.size=b.size,this.setValue=D(b.type)},G=function(b){this.id=b,a.call(this)};G.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};
// --- Top-level ---
// Parser - builds up the property tree from the path strings
var H=/([\w\d_]+)(\])?(\[|\.)?/g,
// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.
I=function(a,b){a.seq.push(b),a.map[b.id]=b},J=function(a,b,c){var d=a.name,e=d.length;for(
// reset RegExp object, because of the early exit of a previous run
H.lastIndex=0;;){var f=H.exec(d),g=H.lastIndex,h=f[1],i="]"===f[2],j=f[3];// convert to integer
if(i&&(h=0|h),void 0===j||"["===j&&g+2===e){
// bare name or "pure" bottom-level array "[0]" suffix
I(c,void 0===j?new E(h,a,b):new F(h,a,b));break}
// step into inner node / create it in case it doesn't exist
var k=c.map,l=k[h];void 0===l&&(l=new G(h),I(c,l)),c=l}},
// Root Container
K=function(b,c,d){a.call(this),this.renderer=d;for(var e=b.getProgramParameter(c,b.ACTIVE_UNIFORMS),f=0;f!==e;++f){var g=b.getActiveUniform(c,f),h=g.name,i=b.getUniformLocation(c,h);J(g,i,this)}};
// Static interface
return K.prototype.setValue=function(a,b,c){var d=this.map[b];void 0!==d&&d.setValue(a,c,this.renderer)},K.prototype.set=function(a,b,c){var d=this.map[c];void 0!==d&&d.setValue(a,b[c],this.renderer)},K.prototype.setOptional=function(a,b,c){var d=b[c];void 0!==d&&this.setValue(a,c,d)},K.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];h.needsUpdate!==!1&&
// note: always updating when .needsUpdate is undefined
g.setValue(a,h.value,d)}},K.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c},K.splitDynamic=function(a,b){for(var c=null,d=a.length,e=0,f=0;f!==d;++f){var g=a[f],h=b[g.id];h&&h.dynamic===!0?(null===c&&(c=[]),c.push(g)):(
// in-place compact 'seq', removing the matches
e<f&&(a[e]=g),++e)}return e<d&&(a.length=e),c},K.evalDynamic=function(a,b,c,d){for(var e=0,f=a.length;e!==f;++e){var g=b[a[e].id],h=g.onUpdateCallback;void 0!==h&&h.call(g,c,d)}},K}(),
// File:src/renderers/webgl/plugins/LensFlarePlugin.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.LensFlarePlugin=function(a,b){function c(){var a=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),b=new Uint16Array([0,1,2,0,2,3]);
// buffers
e=m.createBuffer(),f=m.createBuffer(),m.bindBuffer(m.ARRAY_BUFFER,e),m.bufferData(m.ARRAY_BUFFER,a,m.STATIC_DRAW),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,f),m.bufferData(m.ELEMENT_ARRAY_BUFFER,b,m.STATIC_DRAW),
// textures
k=m.createTexture(),l=m.createTexture(),n.bindTexture(m.TEXTURE_2D,k),m.texImage2D(m.TEXTURE_2D,0,m.RGB,16,16,0,m.RGB,m.UNSIGNED_BYTE,null),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST),n.bindTexture(m.TEXTURE_2D,l),m.texImage2D(m.TEXTURE_2D,0,m.RGBA,16,16,0,m.RGBA,m.UNSIGNED_BYTE,null),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST),g={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if ( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {",
// pink square
"if ( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",
// restore
"} else if ( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );",
// flare
"} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join("\n")},h=d(g),i={vertex:m.getAttribLocation(h,"position"),uv:m.getAttribLocation(h,"uv")},j={renderType:m.getUniformLocation(h,"renderType"),map:m.getUniformLocation(h,"map"),occlusionMap:m.getUniformLocation(h,"occlusionMap"),opacity:m.getUniformLocation(h,"opacity"),color:m.getUniformLocation(h,"color"),scale:m.getUniformLocation(h,"scale"),rotation:m.getUniformLocation(h,"rotation"),screenPosition:m.getUniformLocation(h,"screenPosition")}}function d(b){var c=m.createProgram(),d=m.createShader(m.FRAGMENT_SHADER),e=m.createShader(m.VERTEX_SHADER),f="precision "+a.getPrecision()+" float;\n";return m.shaderSource(d,f+b.fragmentShader),m.shaderSource(e,f+b.vertexShader),m.compileShader(d),m.compileShader(e),m.attachShader(c,d),m.attachShader(c,e),m.linkProgram(c),c}var e,f,g,h,i,j,k,l,m=a.context,n=a.state;/*
	 * Render lens flares
	 * Method: renders 16x16 0xff00ff-colored points scattered over the light source area,
	 *         reads these back and calculates occlusion.
	 */
this.render=function(d,g,o){if(0!==b.length){var p=new THREE.Vector3,q=o.w/o.z,r=.5*o.z,s=.5*o.w,t=16/o.w,u=new THREE.Vector2(t*q,t),v=new THREE.Vector3(1,1,0),w=new THREE.Vector2(1,1),x=new THREE.Box2;x.min.set(0,0),x.max.set(o.z-16,o.w-16),void 0===h&&c(),m.useProgram(h),n.initAttributes(),n.enableAttribute(i.vertex),n.enableAttribute(i.uv),n.disableUnusedAttributes(),
// loop through all lens flares to update their occlusion and positions
// setup gl and common used attribs/uniforms
m.uniform1i(j.occlusionMap,0),m.uniform1i(j.map,1),m.bindBuffer(m.ARRAY_BUFFER,e),m.vertexAttribPointer(i.vertex,2,m.FLOAT,!1,16,0),m.vertexAttribPointer(i.uv,2,m.FLOAT,!1,16,8),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,f),n.disable(m.CULL_FACE),n.setDepthWrite(!1);for(var y=0,z=b.length;y<z;y++){t=16/o.w,u.set(t*q,t);
// calc object screen position
var A=b[y];
// screen cull
if(p.set(A.matrixWorld.elements[12],A.matrixWorld.elements[13],A.matrixWorld.elements[14]),p.applyMatrix4(g.matrixWorldInverse),p.applyProjection(g.projectionMatrix),
// setup arrays for gl programs
v.copy(p),
// horizontal and vertical coordinate of the lower left corner of the pixels to copy
w.x=o.x+v.x*r+r-8,w.y=o.y+v.y*s+s-8,x.containsPoint(w)===!0){
// save current RGB to temp texture
n.activeTexture(m.TEXTURE0),n.bindTexture(m.TEXTURE_2D,null),n.activeTexture(m.TEXTURE1),n.bindTexture(m.TEXTURE_2D,k),m.copyTexImage2D(m.TEXTURE_2D,0,m.RGB,w.x,w.y,16,16,0),
// render pink quad
m.uniform1i(j.renderType,0),m.uniform2f(j.scale,u.x,u.y),m.uniform3f(j.screenPosition,v.x,v.y,v.z),n.disable(m.BLEND),n.enable(m.DEPTH_TEST),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0),
// copy result to occlusionMap
n.activeTexture(m.TEXTURE0),n.bindTexture(m.TEXTURE_2D,l),m.copyTexImage2D(m.TEXTURE_2D,0,m.RGBA,w.x,w.y,16,16,0),
// restore graphics
m.uniform1i(j.renderType,1),n.disable(m.DEPTH_TEST),n.activeTexture(m.TEXTURE1),n.bindTexture(m.TEXTURE_2D,k),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0),
// update object positions
A.positionScreen.copy(v),A.customUpdateCallback?A.customUpdateCallback(A):A.updateLensFlares(),
// render flares
m.uniform1i(j.renderType,2),n.enable(m.BLEND);for(var B=0,C=A.lensFlares.length;B<C;B++){var D=A.lensFlares[B];D.opacity>.001&&D.scale>.001&&(v.x=D.x,v.y=D.y,v.z=D.z,t=D.size*D.scale/o.w,u.x=t*q,u.y=t,m.uniform3f(j.screenPosition,v.x,v.y,v.z),m.uniform2f(j.scale,u.x,u.y),m.uniform1f(j.rotation,D.rotation),m.uniform1f(j.opacity,D.opacity),m.uniform3f(j.color,D.color.r,D.color.g,D.color.b),n.setBlending(D.blending,D.blendEquation,D.blendSrc,D.blendDst),a.setTexture2D(D.texture,1),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0))}}}
// restore gl
n.enable(m.CULL_FACE),n.enable(m.DEPTH_TEST),n.setDepthWrite(!0),a.resetGLState()}}},
// File:src/renderers/webgl/plugins/SpritePlugin.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */
THREE.SpritePlugin=function(a,b){function c(){var a=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),b=new Uint16Array([0,1,2,0,2,3]);f=l.createBuffer(),g=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,f),l.bufferData(l.ARRAY_BUFFER,a,l.STATIC_DRAW),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,g),l.bufferData(l.ELEMENT_ARRAY_BUFFER,b,l.STATIC_DRAW),h=d(),i={position:l.getAttribLocation(h,"position"),uv:l.getAttribLocation(h,"uv")},j={uvOffset:l.getUniformLocation(h,"uvOffset"),uvScale:l.getUniformLocation(h,"uvScale"),rotation:l.getUniformLocation(h,"rotation"),scale:l.getUniformLocation(h,"scale"),color:l.getUniformLocation(h,"color"),map:l.getUniformLocation(h,"map"),opacity:l.getUniformLocation(h,"opacity"),modelViewMatrix:l.getUniformLocation(h,"modelViewMatrix"),projectionMatrix:l.getUniformLocation(h,"projectionMatrix"),fogType:l.getUniformLocation(h,"fogType"),fogDensity:l.getUniformLocation(h,"fogDensity"),fogNear:l.getUniformLocation(h,"fogNear"),fogFar:l.getUniformLocation(h,"fogFar"),fogColor:l.getUniformLocation(h,"fogColor"),alphaTest:l.getUniformLocation(h,"alphaTest")};var c=document.createElement("canvas");c.width=8,c.height=8;var e=c.getContext("2d");e.fillStyle="white",e.fillRect(0,0,8,8),k=new THREE.Texture(c),k.needsUpdate=!0}function d(){var b=l.createProgram(),c=l.createShader(l.VERTEX_SHADER),d=l.createShader(l.FRAGMENT_SHADER);return l.shaderSource(c,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join("\n")),l.shaderSource(d,["precision "+a.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join("\n")),l.compileShader(c),l.compileShader(d),l.attachShader(b,c),l.attachShader(b,d),l.linkProgram(b),b}function e(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var f,g,h,i,j,k,l=a.context,m=a.state,n=new THREE.Vector3,o=new THREE.Quaternion,p=new THREE.Vector3;this.render=function(d,q){if(0!==b.length){
// setup gl
void 0===h&&c(),l.useProgram(h),m.initAttributes(),m.enableAttribute(i.position),m.enableAttribute(i.uv),m.disableUnusedAttributes(),m.disable(l.CULL_FACE),m.enable(l.BLEND),l.bindBuffer(l.ARRAY_BUFFER,f),l.vertexAttribPointer(i.position,2,l.FLOAT,!1,16,0),l.vertexAttribPointer(i.uv,2,l.FLOAT,!1,16,8),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,g),l.uniformMatrix4fv(j.projectionMatrix,!1,q.projectionMatrix.elements),m.activeTexture(l.TEXTURE0),l.uniform1i(j.map,0);var r=0,s=0,t=d.fog;t?(l.uniform3f(j.fogColor,t.color.r,t.color.g,t.color.b),t instanceof THREE.Fog?(l.uniform1f(j.fogNear,t.near),l.uniform1f(j.fogFar,t.far),l.uniform1i(j.fogType,1),r=1,s=1):t instanceof THREE.FogExp2&&(l.uniform1f(j.fogDensity,t.density),l.uniform1i(j.fogType,2),r=2,s=2)):(l.uniform1i(j.fogType,0),r=0,s=0);
// update positions and sort
for(var u=0,v=b.length;u<v;u++){var w=b[u];w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.z=-w.modelViewMatrix.elements[14]}b.sort(e);for(var x=[],u=0,v=b.length;u<v;u++){var w=b[u],y=w.material;l.uniform1f(j.alphaTest,y.alphaTest),l.uniformMatrix4fv(j.modelViewMatrix,!1,w.modelViewMatrix.elements),w.matrixWorld.decompose(n,o,p),x[0]=p.x,x[1]=p.y;var z=0;d.fog&&y.fog&&(z=s),r!==z&&(l.uniform1i(j.fogType,z),r=z),null!==y.map?(l.uniform2f(j.uvOffset,y.map.offset.x,y.map.offset.y),l.uniform2f(j.uvScale,y.map.repeat.x,y.map.repeat.y)):(l.uniform2f(j.uvOffset,0,0),l.uniform2f(j.uvScale,1,1)),l.uniform1f(j.opacity,y.opacity),l.uniform3f(j.color,y.color.r,y.color.g,y.color.b),l.uniform1f(j.rotation,y.rotation),l.uniform2fv(j.scale,x),m.setBlending(y.blending,y.blendEquation,y.blendSrc,y.blendDst),m.setDepthTest(y.depthTest),m.setDepthWrite(y.depthWrite),y.map?a.setTexture2D(y.map,0):a.setTexture2D(k,0),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)}
// restore gl
m.enable(l.CULL_FACE),a.resetGLState()}}},
// File:src/Three.Legacy.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
Object.defineProperties(THREE.Box2.prototype,{empty:{value:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()}},isIntersectionBox:{value:function(a){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)}}}),Object.defineProperties(THREE.Box3.prototype,{empty:{value:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()}},isIntersectionBox:{value:function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)}},isIntersectionSphere:{value:function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)}}}),Object.defineProperties(THREE.Matrix3.prototype,{multiplyVector3:{value:function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)}},multiplyVector3Array:{value:function(a){return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(a)}}}),Object.defineProperties(THREE.Matrix4.prototype,{extractPosition:{value:function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)}},setRotationFromQuaternion:{value:function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)}},multiplyVector3:{value:function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),a.applyProjection(this)}},multiplyVector4:{value:function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)}},multiplyVector3Array:{value:function(a){return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),this.applyToVector3Array(a)}},rotateAxis:{value:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)}},crossVector:{value:function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)}},translate:{value:function(a){console.error("THREE.Matrix4: .translate() has been removed.")}},rotateX:{value:function(a){console.error("THREE.Matrix4: .rotateX() has been removed.")}},rotateY:{value:function(a){console.error("THREE.Matrix4: .rotateY() has been removed.")}},rotateZ:{value:function(a){console.error("THREE.Matrix4: .rotateZ() has been removed.")}},rotateByAxis:{value:function(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")}}}),Object.defineProperties(THREE.Plane.prototype,{isIntersectionLine:{value:function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)}}}),Object.defineProperties(THREE.Quaternion.prototype,{multiplyVector3:{value:function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)}}}),Object.defineProperties(THREE.Ray.prototype,{isIntersectionBox:{value:function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)}},isIntersectionPlane:{value:function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)}},isIntersectionSphere:{value:function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)}}}),Object.defineProperties(THREE.Vector3.prototype,{setEulerFromRotationMatrix:{value:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")}},setEulerFromQuaternion:{value:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")}},getPositionFromMatrix:{value:function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)}},getScaleFromMatrix:{value:function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)}},getColumnFromMatrix:{value:function(a,b){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(a,b)}}}),
//
THREE.Face4=function(a,b,c,d,e,f,g){return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),new THREE.Face3(a,b,c,e,f,g)},THREE.Vertex=function(a,b,c){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new THREE.Vector3(a,b,c)},
//
Object.defineProperties(THREE.Object3D.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},getChildByName:{value:function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)}},renderDepth:{set:function(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")}},translate:{value:function(a,b){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(b,a)}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),
//
Object.defineProperties(THREE,{PointCloud:{value:function(a,b){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new THREE.Points(a,b)}},ParticleSystem:{value:function(a,b){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new THREE.Points(a,b)}}}),
//
Object.defineProperties(THREE.Light.prototype,{onlyShadow:{set:function(a){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(a){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(a){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}}),
//
Object.defineProperties(THREE.BufferAttribute.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),this.array.length}}}),Object.defineProperties(THREE.BufferGeometry.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}},addIndex:{value:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)}},addDrawCall:{value:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,b)}},clearDrawCalls:{value:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()}},computeTangents:{value:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")}},computeOffsets:{value:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}}}),
//
Object.defineProperties(THREE.Material.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(a){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE."+this.type+": .wrapRGB has been removed."),new THREE.Color}}}),Object.defineProperties(THREE,{PointCloudMaterial:{value:function(a){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new THREE.PointsMaterial(a)}},ParticleBasicMaterial:{value:function(a){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new THREE.PointsMaterial(a)}},ParticleSystemMaterial:{value:function(a){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new THREE.PointsMaterial(a)}}}),Object.defineProperties(THREE.MeshPhongMaterial.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(a){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}}),Object.defineProperties(THREE.ShaderMaterial.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}}),
//
Object.defineProperties(THREE.WebGLRenderer.prototype,{supportsFloatTextures:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")}},supportsHalfFloatTextures:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")}},supportsStandardDerivatives:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")}},supportsCompressedTextureS3TC:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")}},supportsCompressedTexturePVRTC:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")}},supportsBlendMinMax:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")}},supportsVertexTextures:{value:function(){return this.capabilities.vertexTextures}},supportsInstancedArrays:{value:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")}},enableScissorTest:{value:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)}},initMaterial:{value:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")}},addPrePlugin:{value:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")}},addPostPlugin:{value:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")}},updateShadowMap:{value:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}},shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),this.shadowMap.cullFace=a}}}),
//
Object.defineProperties(THREE.WebGLRenderTarget.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}}),
//
Object.defineProperties(THREE.Audio.prototype,{load:{value:function(a){console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");var b=this,c=new THREE.AudioLoader;return c.load(a,function(a){b.setBuffer(a)}),this}}}),
//
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry),a.merge(b,d,c)},center:function(a){return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),a.center()}},THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new THREE.TextureLoader;e.setCrossOrigin(this.crossOrigin);var f=e.load(a,c,void 0,d);return b&&(f.mapping=b),f},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new THREE.CubeTextureLoader;e.setCrossOrigin(this.crossOrigin);var f=e.load(a,c,void 0,d);return b&&(f.mapping=b),f},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}},
//
THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project()."),a.project(b)},this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),a.unproject(b)},this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}},
//
THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),this.domElement=document.createElement("canvas"),this.clear=function(){},this.render=function(){},this.setClearColor=function(){},this.setSize=function(){}},
//
THREE.MeshFaceMaterial=THREE.MultiMaterial,
//
Object.defineProperties(THREE.LOD.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}}),
// File:src/extras/CurveUtils.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
THREE.CurveUtils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},
// Puay Bing, thanks for helping with this derivative!
tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){
// To check if my formulas are correct
var f=6*a*a-6*a,g=3*a*a-4*a+1,h=-6*a*a+6*a,i=3*a*a-2*a;// t3 − t2
return f+g+h+i},
// Catmull-Rom
interpolate:function(a,b,c,d,e){var f=.5*(c-a),g=.5*(d-b),h=e*e,i=e*h;return(2*b-2*c+f+g)*i+(-3*b+3*c-2*f-g)*h+f*e+b}},
// File:src/extras/SceneUtils.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Group,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld),b.remove(a),c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld),a.applyMatrix(d),b.remove(a),c.add(a)}},
// File:src/extras/ShapeUtils.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */
THREE.ShapeUtils={
// calculate area of the contour polygon
area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){/**
		 * This code is a quick port of code written in C++ which was submitted to
		 * flipcode.com by John W. Ratcliff  // July 22, 2000
		 * See original code and more information here:
		 * http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml
		 *
		 * ported to actionscript by Zevan Rosser
		 * www.actionsnippet.com
		 *
		 * ported to javascript by Joshua Koo
		 * http://www.lab4games.net/zz85/blog
		 *
		 */
function a(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;if(h=a[f[b]].x,i=a[f[b]].y,j=a[f[c]].x,k=a[f[c]].y,l=a[f[d]].x,m=a[f[d]].y,Number.EPSILON>(j-h)*(m-i)-(k-i)*(l-h))return!1;var p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;for(p=l-j,q=m-k,r=h-l,s=i-m,t=j-h,u=k-i,g=0;g<e;g++)if(n=a[f[g]].x,o=a[f[g]].y,!(n===h&&o===i||n===j&&o===k||n===l&&o===m)&&(v=n-h,w=o-i,x=n-j,y=o-k,z=n-l,A=o-m,
// see if p is inside triangle abc
D=p*y-q*x,B=t*w-u*v,C=r*A-s*z,D>=-Number.EPSILON&&C>=-Number.EPSILON&&B>=-Number.EPSILON))return!1;return!0}
// takes in an contour array and returns
return function(b,c){var d=b.length;if(d<3)return null;var e,f,g,h=[],i=[],j=[];if(THREE.ShapeUtils.area(b)>0)for(f=0;f<d;f++)i[f]=f;else for(f=0;f<d;f++)i[f]=d-1-f;var k=d,l=2*k;/* error detection */
for(f=k-1;k>2;){/* if we loop, it is probably a non-simple polygon */
if(l--<=0)
//** Triangulate: ERROR - probable bad polygon!
//throw ( "Warning, unable to triangulate polygon!" );
//return null;
// Sometimes warning is fine, especially polygons are triangulated in reverse.
return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),c?j:h;/* next     */
if(/* three consecutive vertices in current polygon, <u,v,w> */
e=f,k<=e&&(e=0),/* previous */
f=e+1,k<=f&&(f=0),/* new v    */
g=f+1,k<=g&&(g=0),a(b,e,f,g,k,i)){var m,n,o,p,q;/* remove v from the remaining polygon */
for(/* true names of the vertices */
m=i[e],n=i[f],o=i[g],/* output Triangle */
h.push([b[m],b[n],b[o]]),j.push([i[e],i[f],i[g]]),p=f,q=f+1;q<k;p++,q++)i[p]=i[q];k--,/* reset error detection counter */
l=2*k}}return c?j:h}}(),triangulateShape:function(a,b){function c(a,b,c){
// inOtherPt needs to be collinear to the inSegment
// inOtherPt needs to be collinear to the inSegment
return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,i=e.x-d.x,j=e.y-d.y,k=a.x-d.x,l=a.y-d.y,m=h*i-g*j,n=h*k-g*l;if(Math.abs(m)>Number.EPSILON){
// not parallel
var o;if(m>0){if(n<0||n>m)return[];if(o=j*k-i*l,o<0||o>m)return[]}else{if(n>0||n<m)return[];if(o=j*k-i*l,o>0||o<m)return[]}
// i.e. to reduce rounding errors
// intersection at endpoint of segment#1?
if(0===o)return!f||0!==n&&n!==m?[a]:[];if(o===m)return!f||0!==n&&n!==m?[b]:[];
// intersection at endpoint of segment#2?
if(0===n)return[d];if(n===m)return[e];
// return real intersection point
var p=o/m;return[{x:a.x+p*g,y:a.y+p*h}]}
// parallel or collinear
if(0!==n||j*k!==i*l)return[];
// they are collinear or degenerate
var q=0===g&&0===h,r=0===i&&0===j;// segment2 is just a point?
// both segments are points
if(q&&r)return a.x!==d.x||a.y!==d.y?[]:[a];
// segment#1  is a single point
if(q)return c(d,e,a)?[a]:[];
// segment#2  is a single point
if(r)return c(a,b,d)?[d]:[];
// they are collinear segments, which might overlap
var s,t,u,v,w,x,y,z;
// the segments are NOT on a vertical line
// the segments are on a vertical line
return 0!==g?(a.x<b.x?(s=a,u=a.x,t=b,v=b.x):(s=b,u=b.x,t=a,v=a.x),d.x<e.x?(w=d,y=d.x,x=e,z=e.x):(w=e,y=e.x,x=d,z=d.x)):(a.y<b.y?(s=a,u=a.y,t=b,v=b.y):(s=b,u=b.y,t=a,v=a.y),d.y<e.y?(w=d,y=d.y,x=e,z=e.y):(w=e,y=e.y,x=d,z=d.y)),u<=y?v<y?[]:v===y?f?[]:[w]:v<=z?[w,t]:[w,x]:u>z?[]:u===z?f?[]:[s]:v<=z?[s,t]:[s,x]}function e(a,b,c,d){
// The order of legs is important
// translation of all points, so that Vertex is at (0,0)
var e=b.x-a.x,f=b.y-a.y,g=c.x-a.x,h=c.y-a.y,i=d.x-a.x,j=d.y-a.y,k=e*h-f*g,l=e*j-f*i;if(Math.abs(k)>Number.EPSILON){
// angle != 180 deg.
var m=i*h-j*g;
// console.log( "from2to: " + from2toAngle + ", from2other: " + from2otherAngle + ", other2to: " + other2toAngle );
// console.log( "from2to: " + from2toAngle + ", from2other: " + from2otherAngle + ", other2to: " + other2toAngle );
return k>0?l>=0&&m>=0:l>=0||m>=0}
// angle == 180 deg.
// console.log( "from2to: 180 deg., from2other: " + from2otherAngle  );
return l>0}function f(a,b){function c(a,b){
// Check if hole point lies within angle around shape point
var c=s.length-1,d=a-1;d<0&&(d=c);var f=a+1;f>c&&(f=0);var g=e(s[a],s[d],s[f],h[b]);if(!g)
// console.log( "Vertex (Shape): " + inShapeIdx + ", Point: " + hole[inHoleIdx].x + "/" + hole[inHoleIdx].y );
return!1;
// Check if shape point lies within angle around hole point
var i=h.length-1,j=b-1;j<0&&(j=i);var k=b+1;return k>i&&(k=0),g=e(h[b],h[j],h[k],s[a]),!!g}function f(a,b){
// checks for intersections with shape edges
var c,e,f;for(c=0;c<s.length;c++)if(e=c+1,e%=s.length,f=d(a,b,s[c],s[e],!0),f.length>0)return!0;return!1}function g(a,c){
// checks for intersections with hole edges
var e,f,g,h,i;for(e=0;e<t.length;e++)for(f=b[t[e]],g=0;g<f.length;g++)if(h=g+1,h%=f.length,i=d(a,c,f[g],f[h],!0),i.length>0)return!0;return!1}for(var h,i,j,k,l,m,n,o,p,q,r,s=a.concat(),t=[],u=[],v=0,w=b.length;v<w;v++)t.push(v);for(var x=0,y=2*t.length;t.length>0;){if(y--,y<0){console.log("Infinite Loop! Holes left:"+t.length+", Probably Hole outside Shape!");break}
// search for shape-vertex and hole-vertex,
// which can be connected without intersections
for(j=x;j<s.length;j++){k=s[j],i=-1;
// search for hole which can be reached without intersections
for(var v=0;v<t.length;v++)if(m=t[v],
// prevent multiple checks
n=k.x+":"+k.y+":"+m,void 0===u[n]){h=b[m];for(var z=0;z<h.length;z++)if(l=h[z],c(j,z)&&!f(k,l)&&!g(k,l)){i=z,t.splice(v,1),o=s.slice(0,j+1),p=s.slice(j),q=h.slice(i),r=h.slice(0,i+1),s=o.concat(q).concat(r).concat(p),x=j;
// Debug only, to show the selected cuts
// glob_CutLines.push( [ shapePt, holePt ] );
break}if(i>=0)break;// hole-vertex found
u[n]=!0}if(i>=0)break}}return s}for(var g,h,i,j,k,l,m={},n=a.concat(),o=0,p=b.length;o<p;o++)Array.prototype.push.apply(n,b[o]);
//console.log( "allpoints",allpoints, allpoints.length );
// prepare all points map
for(g=0,h=n.length;g<h;g++)k=n[g].x+":"+n[g].y,void 0!==m[k]&&console.warn("THREE.Shape: Duplicate point",k),m[k]=g;
// remove holes by cutting paths to holes and adding them to the shape
var q=f(a,b),r=THREE.ShapeUtils.triangulate(q,!1);// True returns indices for points of spooled shape
//console.log( "triangles",triangles, triangles.length );
// check all face vertices against all points map
for(g=0,h=r.length;g<h;g++)for(j=r[g],i=0;i<3;i++)k=j[i].x+":"+j[i].y,l=m[k],void 0!==l&&(j[i]=l);return r.concat()},isClockWise:function(a){return THREE.ShapeUtils.area(a)<0},
// Bezier Curves formulas obtained from
// http://en.wikipedia.org/wiki/B%C3%A9zier_curve
// Quad Bezier Functions
b2:function(){function a(a,b){var c=1-a;return c*c*b}function b(a,b){return 2*(1-a)*a*b}function c(a,b){return a*a*b}return function(d,e,f,g){return a(d,e)+b(d,f)+c(d,g)}}(),
// Cubic Bezier Functions
b3:function(){function a(a,b){var c=1-a;return c*c*c*b}function b(a,b){var c=1-a;return 3*c*c*a*b}function c(a,b){var c=1-a;return 3*c*a*a*b}function d(a,b){return a*a*a*b}return function(e,f,g,h,i){return a(e,f)+b(e,g)+c(e,h)+d(e,i)}}()},
// File:src/extras/core/Curve.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Extensible curve object
 *
 * Some common of Curve methods
 * .getPoint(t), getTangent(t)
 * .getPointAt(u), getTagentAt(u)
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following classes subclasses THREE.Curve:
 *
 * -- 2d classes --
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.CubicBezierCurve
 * THREE.SplineCurve
 * THREE.ArcCurve
 * THREE.EllipseCurve
 *
 * -- 3d classes --
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 * THREE.CubicBezierCurve3
 * THREE.SplineCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath
 *
 **/
/**************************************************************
 *	Abstract Curve base class
 **************************************************************/
THREE.Curve=function(){},THREE.Curve.prototype={constructor:THREE.Curve,
// Virtual base class method to overwrite and implement in subclasses
//	- t [0 .. 1]
getPoint:function(a){return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),null},
// Get point at relative position in curve according to arc length
// - u [0 .. 1]
getPointAt:function(a){var b=this.getUtoTmapping(a);return this.getPoint(b)},
// Get sequence of points using getPoint( t )
getPoints:function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c},
// Get sequence of points using getPointAt( u )
getSpacedPoints:function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c},
// Get total curve arc length
getLength:function(){var a=this.getLengths();return a[a.length-1]},
// Get list of cumulative segment lengths
getLengths:function(a){if(a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200),this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)
//console.log( "cached", this.cacheArcLengths );
return this.cacheArcLengths;this.needsUpdate=!1;var b,c,d=[],e=this.getPoint(0),f=0;for(d.push(0),c=1;c<=a;c++)b=this.getPoint(c/a),f+=b.distanceTo(e),d.push(f),e=b;return this.cacheArcLengths=d,d},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},
// Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
getUtoTmapping:function(a,b){var c,d=this.getLengths(),e=0,f=d.length;// The targeted u distance value to get
c=b?b:a*d[f-1];for(
//var time = Date.now();
// binary search for the index with largest value smaller than target u distance
var g,h=0,i=f-1;h<=i;)if(e=Math.floor(h+(i-h)/2),// less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats
g=d[e]-c,g<0)h=e+1;else{if(!(g>0)){i=e;break}i=e-1}
//console.log('b' , i, low, high, Date.now()- time);
if(e=i,d[e]===c){var j=e/(f-1);return j}
// we could get finer grain at lengths, or use simple interpolation between two points
var k=d[e],l=d[e+1],m=l-k,n=(c-k)/m,j=(e+n)/(f-1);return j},
// Returns a unit vector tangent at t
// In case any sub curve does not implement its tangent derivation,
// 2 points a small delta apart will be used to find its gradient
// which seems to give a reasonable approximation
getTangent:function(a){var b=1e-4,c=a-b,d=a+b;
// Capping in case of danger
c<0&&(c=0),d>1&&(d=1);var e=this.getPoint(c),f=this.getPoint(d),g=f.clone().sub(e);return g.normalize()},getTangentAt:function(a){var b=this.getUtoTmapping(a);return this.getTangent(b)}},
// TODO: Transformation for Curves?
/**************************************************************
 *	3D Curves
 **************************************************************/
// A Factory method for creating new curve subclasses
THREE.Curve.create=function(a,b){return a.prototype=Object.create(THREE.Curve.prototype),a.prototype.constructor=a,a.prototype.getPoint=b,a},
// File:src/extras/core/CurvePath.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 **/
/**************************************************************
 *	Curved Path - a curve path is simply a array of connected
 *  curves, but retains the api of a curve
 **************************************************************/
THREE.CurvePath=function(){this.curves=[],this.autoClose=!1},THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype),THREE.CurvePath.prototype.constructor=THREE.CurvePath,THREE.CurvePath.prototype.add=function(a){this.curves.push(a)},/*
THREE.CurvePath.prototype.checkConnection = function() {
	// TODO
	// If the ending of curve is not connected to the starting
	// or the next curve, then, this is not a real path
};
*/
THREE.CurvePath.prototype.closePath=function(){
// TODO Test
// and verify for vector3 (needs to implement equals)
// Add a line curve if start and end of lines are not connected
var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))},
// To get accurate point with reference to
// entire path distance at time t,
// following has to be done:
// 1. Length of each sub path have to be known
// 2. Locate and identify type of curve
// 3. Get t for the curve
// 4. Return curve.getPointAt(t')
THREE.CurvePath.prototype.getPoint=function(a){
// To think about boundaries points.
for(var b=a*this.getLength(),c=this.getCurveLengths(),d=0;d<c.length;){if(c[d]>=b){var e=c[d]-b,f=this.curves[d],g=1-e/f.getLength();return f.getPointAt(g)}d++}return null},/*
THREE.CurvePath.prototype.getTangent = function( t ) {
};
*/
// We cannot use the default THREE.Curve getPoint() with getLength() because in
// THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
// getPoint() depends on getLength
THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]},
// Compute lengths and cache them
// We cannot overwrite getLengths() because UtoT mapping uses it.
THREE.CurvePath.prototype.getCurveLengths=function(){
// We use cache values if curves and cache array are same length
if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a,a},/**************************************************************
 *	Create Geometries Helpers
 **************************************************************/
/// Generate geometry from path points (for Line or Points objects)
THREE.CurvePath.prototype.createPointsGeometry=function(a){var b=this.getPoints(a);return this.createGeometry(b)},
// Generate geometry from equidistant sampling along the path
THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){var b=this.getSpacedPoints(a);return this.createGeometry(b)},THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new THREE.Vector3(e.x,e.y,e.z||0))}return b},
// File:src/extras/core/Font.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author mrdoob / http://mrdoob.com/
 */
THREE.Font=function(a){this.data=a},THREE.Font.prototype={constructor:THREE.Font,generateShapes:function(a,b,c){function d(a){for(var c=String(a).split(""),d=b/f.resolution,g=0,h=[],i=0;i<c.length;i++){var j=e(c[i],d,g);g+=j.offset,h.push(j.path)}return h}function e(a,b,d){var e=f.glyphs[a]||f.glyphs["?"];if(e){var g,h,i,j,k,l,m,n,o,p,q,r=new THREE.Path,s=[],t=THREE.ShapeUtils.b2,u=THREE.ShapeUtils.b3;if(e.o)for(var v=e._cachedOutline||(e._cachedOutline=e.o.split(" ")),w=0,x=v.length;w<x;){var y=v[w++];switch(y){case"m":// moveTo
g=v[w++]*b+d,h=v[w++]*b,r.moveTo(g,h);break;case"l":// lineTo
g=v[w++]*b+d,h=v[w++]*b,r.lineTo(g,h);break;case"q":if(// quadraticCurveTo
i=v[w++]*b+d,j=v[w++]*b,m=v[w++]*b+d,n=v[w++]*b,r.quadraticCurveTo(m,n,i,j),q=s[s.length-1]){k=q.x,l=q.y;for(var z=1;z<=c;z++){var A=z/c;t(A,k,m,i),t(A,l,n,j)}}break;case"b":if(// bezierCurveTo
i=v[w++]*b+d,j=v[w++]*b,m=v[w++]*b+d,n=v[w++]*b,o=v[w++]*b+d,p=v[w++]*b,r.bezierCurveTo(m,n,o,p,i,j),q=s[s.length-1]){k=q.x,l=q.y;for(var z=1;z<=c;z++){var A=z/c;u(A,k,m,o,i),u(A,l,n,p,j)}}}}return{offset:e.ha*b,path:r}}}
//
void 0===b&&(b=100),void 0===c&&(c=4);for(var f=this.data,g=d(a),h=[],i=0,j=g.length;i<j;i++)Array.prototype.push.apply(h,g[i].toShapes());return h}},
// File:src/extras/core/Path.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Creates free form 2d path using series of points, lines or curves.
 *
 **/
THREE.Path=function(a){THREE.CurvePath.call(this),this.actions=[],a&&this.fromPoints(a)},THREE.Path.prototype=Object.create(THREE.CurvePath.prototype),THREE.Path.prototype.constructor=THREE.Path,
// TODO Clean up PATH API
// Create path using straight lines to connect all points
// - vectors: array of Vector2
THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},
// startPath() endPath()?
THREE.Path.prototype.moveTo=function(a,b){this.actions.push({action:"moveTo",args:[a,b]})},THREE.Path.prototype.lineTo=function(a,b){var c=this.actions[this.actions.length-1].args,d=c[c.length-2],e=c[c.length-1],f=new THREE.LineCurve(new THREE.Vector2(d,e),new THREE.Vector2(a,b));this.curves.push(f),this.actions.push({action:"lineTo",args:[a,b]})},THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=this.actions[this.actions.length-1].args,f=e[e.length-2],g=e[e.length-1],h=new THREE.QuadraticBezierCurve(new THREE.Vector2(f,g),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(h),this.actions.push({action:"quadraticCurveTo",args:[a,b,c,d]})},THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args,h=g[g.length-2],i=g[g.length-1],j=new THREE.CubicBezierCurve(new THREE.Vector2(h,i),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(j),this.actions.push({action:"bezierCurveTo",args:[a,b,c,d,e,f]})},THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,d=c[c.length-2],e=c[c.length-1],f=[new THREE.Vector2(d,e)];Array.prototype.push.apply(f,a);var g=new THREE.SplineCurve(f);this.curves.push(g),this.actions.push({action:"splineThru",args:b})},
// FUTURE: Change the API or follow canvas API?
THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args,h=g[g.length-2],i=g[g.length-1];this.absarc(a+h,b+i,c,d,e,f)},THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g,h){var i=this.actions[this.actions.length-1].args,j=i[i.length-2],k=i[i.length-1];this.absellipse(a+j,b+k,c,d,e,f,g,h)},THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g,h){var i=[a,b,c,d,e,f,g,h||0],j=new THREE.EllipseCurve(a,b,c,d,e,f,g,h);this.curves.push(j);var k=j.getPoint(1);i.push(k.x),i.push(k.y),this.actions.push({action:"ellipse",args:i})},THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return this.autoClose&&b.push(b[0]),b},/* Return an array of vectors based on contour of the path */
THREE.Path.prototype.getPoints=function(a){a=a||12;for(var b,c,d,e,f,g,h,i,j,k,l,m=THREE.ShapeUtils.b2,n=THREE.ShapeUtils.b3,o=[],p=0,q=this.actions.length;p<q;p++){var r=this.actions[p],s=r.action,t=r.args;switch(s){case"moveTo":o.push(new THREE.Vector2(t[0],t[1]));break;case"lineTo":o.push(new THREE.Vector2(t[0],t[1]));break;case"quadraticCurveTo":b=t[2],c=t[3],f=t[0],g=t[1],o.length>0?(j=o[o.length-1],h=j.x,i=j.y):(j=this.actions[p-1].args,h=j[j.length-2],i=j[j.length-1]);for(var u=1;u<=a;u++){var v=u/a;k=m(v,h,f,b),l=m(v,i,g,c),o.push(new THREE.Vector2(k,l))}break;case"bezierCurveTo":b=t[4],c=t[5],f=t[0],g=t[1],d=t[2],e=t[3],o.length>0?(j=o[o.length-1],h=j.x,i=j.y):(j=this.actions[p-1].args,h=j[j.length-2],i=j[j.length-1]);for(var u=1;u<=a;u++){var v=u/a;k=n(v,h,f,d,b),l=n(v,i,g,e,c),o.push(new THREE.Vector2(k,l))}break;case"splineThru":j=this.actions[p-1].args;var w=new THREE.Vector2(j[j.length-2],j[j.length-1]),x=[w],y=a*t[0].length;x=x.concat(t[0]);for(var z=new THREE.SplineCurve(x),u=1;u<=y;u++)o.push(z.getPointAt(u/y));break;case"arc":for(var A,B=t[0],C=t[1],D=t[2],E=t[3],F=t[4],G=!!t[5],H=F-E,I=2*a,u=1;u<=I;u++){var v=u/I;G||(v=1-v),A=E+v*H,k=B+D*Math.cos(A),l=C+D*Math.sin(A),
//console.log('t', t, 'angle', angle, 'tx', tx, 'ty', ty);
o.push(new THREE.Vector2(k,l))}
//console.log(points);
break;case"ellipse":var A,J,K,B=t[0],C=t[1],L=t[2],M=t[3],E=t[4],F=t[5],G=!!t[6],N=t[7],H=F-E,I=2*a;0!==N&&(J=Math.cos(N),K=Math.sin(N));for(var u=1;u<=I;u++){var v=u/I;if(G||(v=1-v),A=E+v*H,k=B+L*Math.cos(A),l=C+M*Math.sin(A),0!==N){var O=k,P=l;
// Rotate the point about the center of the ellipse.
k=(O-B)*J-(P-C)*K+B,l=(O-B)*K+(P-C)*J+C}
//console.log('t', t, 'angle', angle, 'tx', tx, 'ty', ty);
o.push(new THREE.Vector2(k,l))}}}
// Normalize to remove the closing point by default.
var Q=o[o.length-1];return Math.abs(Q.x-o[0].x)<Number.EPSILON&&Math.abs(Q.y-o[0].y)<Number.EPSILON&&o.splice(o.length-1,1),this.autoClose&&o.push(o[0]),o},
//
// Breaks path into shapes
//
//	Assumptions (if parameter isCCW==true the opposite holds):
//	- solid shapes are defined clockwise (CW)
//	- holes are defined counterclockwise (CCW)
//
//	If parameter noHoles==true:
//  - all subPaths are regarded as solid shapes
//  - definition order CW/CCW has no relevance
//
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=new THREE.Path,d=0,e=a.length;d<e;d++){var f=a[d],g=f.args,h=f.action;"moveTo"===h&&0!==c.actions.length&&(b.push(c),c=new THREE.Path),c[h].apply(c,g)}
// console.log(subPaths);
return 0!==c.actions.length&&b.push(c),b}function d(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions,f.curves=e.curves,b.push(f)}
//console.log("shape", shapes);
return b}function e(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],i=h.x-g.x,j=h.y-g.y;if(Math.abs(j)>Number.EPSILON){if(
// not parallel
j<0&&(g=b[f],i=-i,h=b[e],j=-j),a.y<g.y||a.y>h.y)continue;if(a.y===g.y){if(a.x===g.x)return!0}else{var k=j*(a.x-g.x)-i*(a.y-g.y);if(0===k)return!0;// inPt is on contour ?
if(k<0)continue;d=!d}}else{
// parallel or collinear
if(a.y!==g.y)continue;// parallel
// edge lies on the same horizontal line as inPt
if(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x)return!0}}return d}var f=THREE.ShapeUtils.isClockWise,g=c(this.actions);if(0===g.length)return[];if(b===!0)return d(g);var h,i,j,k=[];if(1===g.length)return i=g[0],j=new THREE.Shape,j.actions=i.actions,j.curves=i.curves,k.push(j),k;var l=!f(g[0].getPoints());l=a?!l:l;
// console.log("Holes first", holesFirst);
var m,n=[],o=[],p=[],q=0;o[q]=void 0,p[q]=[];for(var r=0,s=g.length;r<s;r++)i=g[r],m=i.getPoints(),h=f(m),h=a?!h:h,h?(!l&&o[q]&&q++,o[q]={s:new THREE.Shape,p:m},o[q].s.actions=i.actions,o[q].s.curves=i.curves,l&&q++,p[q]=[]):p[q].push({h:i,p:m[0]});
// only Holes? -> probably all Shapes with wrong orientation
if(!o[0])return d(g);if(o.length>1){for(var t=!1,u=[],v=0,w=o.length;v<w;v++)n[v]=[];for(var v=0,w=o.length;v<w;v++)for(var x=p[v],y=0;y<x.length;y++){for(var z=x[y],A=!0,B=0;B<o.length;B++)e(z.p,o[B].p)&&(v!==B&&u.push({froms:v,tos:B,hole:y}),A?(A=!1,n[B].push(z)):t=!0);A&&n[v].push(z)}
// console.log("ambiguous: ", ambiguous);
u.length>0&&(
// console.log("to change: ", toChange);
t||(p=n))}for(var C,r=0,D=o.length;r<D;r++){j=o[r].s,k.push(j),C=p[r];for(var E=0,F=C.length;E<F;E++)j.holes.push(C[E].h)}
//console.log("shape", shapes);
return k},
// File:src/extras/core/Shape.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Defines a 2d shape plane using paths.
 **/
// STEP 1 Create a path.
// STEP 2 Turn path into shape.
// STEP 3 ExtrudeGeometry takes in Shape/Shapes
// STEP 3a - Extract points from each shape, turn to vertices
// STEP 3b - Triangulate each shape, add faces.
THREE.Shape=function(){THREE.Path.apply(this,arguments),this.holes=[]},THREE.Shape.prototype=Object.create(THREE.Path.prototype),THREE.Shape.prototype.constructor=THREE.Shape,
// Convenience method to return ExtrudeGeometry
THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)},
// Convenience method to return ShapeGeometry
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)},
// Get points of holes
THREE.Shape.prototype.getPointsHoles=function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},
// Get points of shape and holes (keypoints based on segments parameter)
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},THREE.Shape.prototype.extractPoints=function(a){return this.extractAllPoints(a)},
// File:src/extras/curves/LineCurve.js
/**************************************************************
 *	Line
 **************************************************************/
THREE.LineCurve=function(a,b){this.v1=a,this.v2=b},THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype),THREE.LineCurve.prototype.constructor=THREE.LineCurve,THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);return b.multiplyScalar(a).add(this.v1),b},
// Line curve is linear, so we can overwrite default getPointAt
THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)},THREE.LineCurve.prototype.getTangent=function(a){var b=this.v2.clone().sub(this.v1);return b.normalize()},
// File:src/extras/curves/QuadraticBezierCurve.js
/**************************************************************
 *	Quadratic Bezier curve
 **************************************************************/
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a,this.v1=b,this.v2=c},THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype),THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve,THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))},THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentQuadraticBezier;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y)).normalize()},
// File:src/extras/curves/CubicBezierCurve.js
/**************************************************************
 *	Cubic Bezier curve
 **************************************************************/
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a,this.v1=b,this.v2=c,this.v3=d},THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype),THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve,THREE.CubicBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))},THREE.CubicBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentCubicBezier;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y)).normalize()},
// File:src/extras/curves/SplineCurve.js
/**************************************************************
 *	Spline curve
 **************************************************************/
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a},THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype),THREE.SplineCurve.prototype.constructor=THREE.SplineCurve,THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points,c=(b.length-1)*a,d=Math.floor(c),e=c-d,f=b[0===d?d:d-1],g=b[d],h=b[d>b.length-2?b.length-1:d+1],i=b[d>b.length-3?b.length-1:d+2],j=THREE.CurveUtils.interpolate;return new THREE.Vector2(j(f.x,g.x,h.x,i.x,e),j(f.y,g.y,h.y,i.y,e))},
// File:src/extras/curves/EllipseCurve.js
/**************************************************************
 *	Ellipse curve
 **************************************************************/
THREE.EllipseCurve=function(a,b,c,d,e,f,g,h){this.aX=a,this.aY=b,this.xRadius=c,this.yRadius=d,this.aStartAngle=e,this.aEndAngle=f,this.aClockwise=g,this.aRotation=h||0},THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype),THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve,THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;b<0&&(b+=2*Math.PI),b>2*Math.PI&&(b-=2*Math.PI);var c;c=this.aClockwise===!0?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;var d=this.aX+this.xRadius*Math.cos(c),e=this.aY+this.yRadius*Math.sin(c);if(0!==this.aRotation){var f=Math.cos(this.aRotation),g=Math.sin(this.aRotation),h=d,i=e;
// Rotate the point about the center of the ellipse.
d=(h-this.aX)*f-(i-this.aY)*g+this.aX,e=(h-this.aX)*g+(i-this.aY)*f+this.aY}return new THREE.Vector2(d,e)},
// File:src/extras/curves/ArcCurve.js
/**************************************************************
 *	Arc curve
 **************************************************************/
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)},THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype),THREE.ArcCurve.prototype.constructor=THREE.ArcCurve,
// File:src/extras/curves/LineCurve3.js
/**************************************************************
 *	Line3D
 **************************************************************/
THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a,this.v2=b},function(a){var b=new THREE.Vector3;// diff
return b.subVectors(this.v2,this.v1),b.multiplyScalar(a),b.add(this.v1),b}),
// File:src/extras/curves/QuadraticBezierCurve3.js
/**************************************************************
 *	Quadratic Bezier 3D curve
 **************************************************************/
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a,this.v1=b,this.v2=c},function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y),b(a,this.v0.z,this.v1.z,this.v2.z))});
// File:src/extras/curves/CubicBezierCurve3.js
/**************************************************************
 *	Cubic Bezier 3D curve
 **************************************************************/
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a,this.v1=b,this.v2=c,this.v3=d},function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y),b(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z))});
// File:src/extras/curves/SplineCurve3.js
/**************************************************************
 *	Spline 3D curve
 **************************************************************/
THREE.SplineCurve3=THREE.Curve.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),this.points=void 0==a?[]:a},function(a){var b=this.points,c=(b.length-1)*a,d=Math.floor(c),e=c-d,f=b[0==d?d:d-1],g=b[d],h=b[d>b.length-2?b.length-1:d+1],i=b[d>b.length-3?b.length-1:d+2],j=THREE.CurveUtils.interpolate;return new THREE.Vector3(j(f.x,g.x,h.x,i.x,e),j(f.y,g.y,h.y,i.y,e),j(f.z,g.z,h.z,i.z,e))}),
// File:src/extras/curves/CatmullRomCurve3.js
/**
 * @author zz85 https://github.com/zz85
 *
 * Centripetal CatmullRom Curve - which is useful for avoiding
 * cusps and self-intersections in non-uniform catmull rom curves.
 * http://www.cemyuksel.com/research/catmullrom_param/catmullrom.pdf
 *
 * curve.type accepts centripetal(default), chordal and catmullrom
 * curve.tension is used for catmullrom which defaults to 0.5
 */
THREE.CatmullRomCurve3=function(){/*
	Based on an optimized c++ solution in
	 - http://stackoverflow.com/questions/9489736/catmull-rom-curve-with-no-cusps-and-no-self-intersections/
	 - http://ideone.com/NoEbVM

	This CubicPoly class could be used for reusing some variables and calculations,
	but for three.js curve use, it could be possible inlined and flatten into a single function call
	which can be placed in CurveUtils.
	*/
function a(){}var b=new THREE.Vector3,c=new a,d=new a,e=new a;
// Subclass Three.js curve
/*
	 * Compute coefficients for a cubic polynomial
	 *   p(s) = c0 + c1*s + c2*s^2 + c3*s^3
	 * such that
	 *   p(0) = x0, p(1) = x1
	 *  and
	 *   p'(0) = t0, p'(1) = t1.
	 */
// standard Catmull-Rom spline: interpolate between x1 and x2 with previous/following points x1/x4
return a.prototype.init=function(a,b,c,d){this.c0=a,this.c1=c,this.c2=-3*a+3*b-2*c-d,this.c3=2*a-2*b+c+d},a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,f,g){
// compute tangents when parameterized in [t1,t2]
var h=(b-a)/e-(c-a)/(e+f)+(c-b)/f,i=(c-b)/f-(d-b)/(f+g)+(d-c)/g;
// rescale tangents for parametrization in [0,1]
h*=f,i*=f,
// initCubicPoly
this.init(b,c,h,i)},a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))},a.prototype.calc=function(a){var b=a*a,c=b*a;return this.c0+this.c1*a+this.c2*b+this.c3*c},THREE.Curve.create(function(a){this.points=a||[],this.closed=!1},function(a){var f,g,h,i,j=this.points;i=j.length,i<2&&console.log("duh, you need at least 2 points"),f=(i-(this.closed?0:1))*a,g=Math.floor(f),h=f-g,this.closed?g+=g>0?0:(Math.floor(Math.abs(g)/j.length)+1)*j.length:0===h&&g===i-1&&(g=i-2,h=1);var k,l,m,n;if(// 4 points
this.closed||g>0?k=j[(g-1)%i]:(
// extrapolate first point
b.subVectors(j[0],j[1]).add(j[0]),k=b),l=j[g%i],m=j[(g+1)%i],this.closed||g+2<i?n=j[(g+2)%i]:(
// extrapolate last point
b.subVectors(j[i-1],j[i-2]).add(j[i-1]),n=b),void 0===this.type||"centripetal"===this.type||"chordal"===this.type){
// init Centripetal / Chordal Catmull-Rom
var o="chordal"===this.type?.5:.25,p=Math.pow(k.distanceToSquared(l),o),q=Math.pow(l.distanceToSquared(m),o),r=Math.pow(m.distanceToSquared(n),o);
// safety check for repeated points
q<1e-4&&(q=1),p<1e-4&&(p=q),r<1e-4&&(r=q),c.initNonuniformCatmullRom(k.x,l.x,m.x,n.x,p,q,r),d.initNonuniformCatmullRom(k.y,l.y,m.y,n.y,p,q,r),e.initNonuniformCatmullRom(k.z,l.z,m.z,n.z,p,q,r)}else if("catmullrom"===this.type){var s=void 0!==this.tension?this.tension:.5;c.initCatmullRom(k.x,l.x,m.x,n.x,s),d.initCatmullRom(k.y,l.y,m.y,n.y,s),e.initCatmullRom(k.z,l.z,m.z,n.z,s)}var t=new THREE.Vector3(c.calc(h),d.calc(h),e.calc(h));return t})}(),
// File:src/extras/curves/ClosedSplineCurve3.js
/**************************************************************
 *	Closed Spline 3D curve
 **************************************************************/
THREE.ClosedSplineCurve3=function(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),THREE.CatmullRomCurve3.call(this,a),this.type="catmullrom",this.closed=!0},THREE.ClosedSplineCurve3.prototype=Object.create(THREE.CatmullRomCurve3.prototype),
// File:src/extras/geometries/BoxGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Cube.as
 */
THREE.BoxGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this),this.type="BoxGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f},this.fromBufferGeometry(new THREE.BoxBufferGeometry(a,b,c,d,e,f)),this.mergeVertices()},THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry,THREE.CubeGeometry=THREE.BoxGeometry,
// File:src/extras/geometries/BoxBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
THREE.BoxBufferGeometry=function(a,b,c,d,e,f){
// helper functions
function g(a,b,c){var d=0;// zy
// calculate the amount of segments for each side
// xy
// xz
return d+=a*b*2,d+=a*c*2,d+=c*b*2,4*d}function h(a,b,c,d,e,f,g,h,j,k,u){
// generate vertices, normals and uvs
for(var v=f/j,w=g/k,x=f/2,y=g/2,z=h/2,A=j+1,B=k+1,C=0,D=0,E=new THREE.Vector3,F=0;F<B;F++)for(var G=F*w-y,H=0;H<A;H++){var I=H*v-x;
// set values to correct vector component
E[a]=I*d,E[b]=G*e,E[c]=z,
// now apply vector to vertex buffer
m[p]=E.x,m[p+1]=E.y,m[p+2]=E.z,
// set values to correct vector component
E[a]=0,E[b]=0,E[c]=h>0?1:-1,
// now apply vector to normal buffer
n[p]=E.x,n[p+1]=E.y,n[p+2]=E.z,
// uvs
o[q]=H/j,o[q+1]=1-F/k,
// update offsets and counters
p+=3,q+=2,C+=1}
// 1. you need three indices to draw a single face
// 2. a single segment consists of two faces
// 3. so we need to generate six (2*3) indices per segment
for(F=0;F<k;F++)for(H=0;H<j;H++){
// indices
var J=s+H+A*F,K=s+H+A*(F+1),L=s+(H+1)+A*(F+1),M=s+(H+1)+A*F;
// face one
l[r]=J,l[r+1]=K,l[r+2]=M,
// face two
l[r+3]=K,l[r+4]=L,l[r+5]=M,
// update offsets and counters
r+=6,D+=6}
// add a group to the geometry. this will ensure multi material support
i.addGroup(t,D,u),
// calculate new start value for groups
t+=D,
// update total number of vertices
s+=C}THREE.BufferGeometry.call(this),this.type="BoxBufferGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var i=this;
// segments
d=Math.floor(d)||1,e=Math.floor(e)||1,f=Math.floor(f)||1;
// these are used to calculate buffer length
var j=g(d,e,f),k=j/4*6,l=new(k>65535?Uint32Array:Uint16Array)(k),m=new Float32Array(3*j),n=new Float32Array(3*j),o=new Float32Array(2*j),p=0,q=0,r=0,s=0,t=0;
// build each side of the box geometry
h("z","y","x",-1,-1,c,b,a,f,e,0),// px
h("z","y","x",1,-1,c,b,-a,f,e,1),// nx
h("x","z","y",1,1,a,c,b,d,f,2),// py
h("x","z","y",1,-1,a,c,-b,d,f,3),// ny
h("x","y","z",1,-1,a,b,c,d,e,4),// pz
h("x","y","z",-1,-1,a,b,-c,d,e,5),// nz
// build geometry
this.setIndex(new THREE.BufferAttribute(l,1)),this.addAttribute("position",new THREE.BufferAttribute(m,3)),this.addAttribute("normal",new THREE.BufferAttribute(n,3)),this.addAttribute("uv",new THREE.BufferAttribute(o,2))},THREE.BoxBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.BoxBufferGeometry.prototype.constructor=THREE.BoxBufferGeometry,
// File:src/extras/geometries/CircleGeometry.js
/**
 * @author hughes
 */
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this),this.type="CircleGeometry",this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d},this.fromBufferGeometry(new THREE.CircleBufferGeometry(a,b,c,d))},THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry,
// File:src/extras/geometries/CircleBufferGeometry.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 */
THREE.CircleBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this),this.type="CircleBufferGeometry",this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d},a=a||50,b=void 0!==b?Math.max(3,b):8,c=void 0!==c?c:0,d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),h=new Float32Array(2*e);
// center data is already zero, but need to set a few extras
g[2]=1,h[0]=.5,h[1]=.5;for(var i=0,j=3,k=2;i<=b;i++,j+=3,k+=2){var l=c+i/b*d;f[j]=a*Math.cos(l),f[j+1]=a*Math.sin(l),g[j+2]=1,// normal z
h[k]=(f[j]/a+1)/2,h[k+1]=(f[j+1]/a+1)/2}for(var m=[],j=1;j<=b;j++)m.push(j,j+1,0);this.setIndex(new THREE.BufferAttribute(new Uint16Array(m),1)),this.addAttribute("position",new THREE.BufferAttribute(f,3)),this.addAttribute("normal",new THREE.BufferAttribute(g,3)),this.addAttribute("uv",new THREE.BufferAttribute(h,2)),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)},THREE.CircleBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.CircleBufferGeometry.prototype.constructor=THREE.CircleBufferGeometry,
// File:src/extras/geometries/CylinderBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
THREE.CylinderBufferGeometry=function(a,b,c,d,e,f,g,h){
// helper functions
function i(){var a=(d+1)*(e+1);return f===!1&&(a+=2*(d+1)+2*d),a}function j(){var a=d*e*2*3;return f===!1&&(a+=2*d*3),a}function k(){var f,i,j=new THREE.Vector3,k=new THREE.Vector3,l=0,n=(b-a)/c;
// generate vertices, normals and uvs
for(i=0;i<=e;i++){var o=[],y=i/e,z=y*(b-a)+a;for(f=0;f<=d;f++){var A=f/d;
// vertex
k.x=z*Math.sin(A*h+g),k.y=-y*c+w,k.z=z*Math.cos(A*h+g),q.setXYZ(t,k.x,k.y,k.z),
// normal
j.copy(k),
// handle special case if radiusTop/radiusBottom is zero
(0===a&&0===i||0===b&&i===e)&&(j.x=Math.sin(A*h+g),j.z=Math.cos(A*h+g)),j.setY(Math.sqrt(j.x*j.x+j.z*j.z)*n).normalize(),r.setXYZ(t,j.x,j.y,j.z),
// uv
s.setXY(t,A,1-y),
// save index of vertex in respective row
o.push(t),
// increase index
t++}
// now save vertices of the row in our index array
v.push(o)}
// generate indices
for(f=0;f<d;f++)for(i=0;i<e;i++){
// we use the index array to access the correct indices
var B=v[i][f],C=v[i+1][f],D=v[i+1][f+1],E=v[i][f+1];
// face one
p.setX(u,B),u++,p.setX(u,C),u++,p.setX(u,E),u++,
// face two
p.setX(u,C),u++,p.setX(u,D),u++,p.setX(u,E),u++,
// update counters
l+=6}
// add a group to the geometry. this will ensure multi material support
m.addGroup(x,l,0),
// calculate new start value for groups
x+=l}function l(c){var e,f,i,j=new THREE.Vector2,k=new THREE.Vector3,l=0,n=c===!0?a:b,o=c===!0?1:-1;
// first we generate the center vertex data of the cap.
// because the geometry needs one set of uvs per face,
// we must generate a center vertex per face/segment
for(
// save the index of the first center vertex
f=t,e=1;e<=d;e++)
// vertex
q.setXYZ(t,0,w*o,0),
// normal
r.setXYZ(t,0,o,0),
// uv
c===!0?(j.x=e/d,j.y=0):(j.x=(e-1)/d,j.y=1),s.setXY(t,j.x,j.y),
// increase index
t++;
// now we generate the surrounding vertices, normals and uvs
for(
// save the index of the last center vertex
i=t,e=0;e<=d;e++){var v=e/d;
// vertex
k.x=n*Math.sin(v*h+g),k.y=w*o,k.z=n*Math.cos(v*h+g),q.setXYZ(t,k.x,k.y,k.z),
// normal
r.setXYZ(t,0,o,0),
// uv
s.setXY(t,v,c===!0?1:0),
// increase index
t++}
// generate indices
for(e=0;e<d;e++){var y=f+e,z=i+e;c===!0?(
// face top
p.setX(u,z),u++,p.setX(u,z+1),u++,p.setX(u,y),u++):(
// face bottom
p.setX(u,z+1),u++,p.setX(u,z),u++,p.setX(u,y),u++),
// update counters
l+=3}
// add a group to the geometry. this will ensure multi material support
m.addGroup(x,l,c===!0?1:2),
// calculate new start value for groups
x+=l}THREE.BufferGeometry.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:20,b=void 0!==b?b:20,c=void 0!==c?c:100,d=Math.floor(d)||8,e=Math.floor(e)||1,f=void 0!==f&&f,g=void 0!==g?g:0,h=void 0!==h?h:2*Math.PI;
// used to calculate buffer length
var n=i(),o=j(),p=new THREE.BufferAttribute(new(o>65535?Uint32Array:Uint16Array)(o),1),q=new THREE.BufferAttribute(new Float32Array(3*n),3),r=new THREE.BufferAttribute(new Float32Array(3*n),3),s=new THREE.BufferAttribute(new Float32Array(2*n),2),t=0,u=0,v=[],w=c/2,x=0;
// generate geometry
k(),f===!1&&(a>0&&l(!0),b>0&&l(!1)),
// build geometry
this.setIndex(p),this.addAttribute("position",q),this.addAttribute("normal",r),this.addAttribute("uv",s)},THREE.CylinderBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.CylinderBufferGeometry.prototype.constructor=THREE.CylinderBufferGeometry,
// File:src/extras/geometries/CylinderGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h},this.fromBufferGeometry(new THREE.CylinderBufferGeometry(a,b,c,d,e,f,g,h)),this.mergeVertices()},THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry,
// File:src/extras/geometries/EdgesGeometry.js
/**
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.EdgesGeometry=function(a,b){function c(a,b){return a-b}THREE.BufferGeometry.call(this),b=void 0!==b?b:1;var d,e=Math.cos(THREE.Math.DEG2RAD*b),f=[0,0],g={},h=["a","b","c"];a instanceof THREE.BufferGeometry?(d=new THREE.Geometry,d.fromBufferGeometry(a)):d=a.clone(),d.mergeVertices(),d.computeFaceNormals();for(var i=d.vertices,j=d.faces,k=0,l=j.length;k<l;k++)for(var m=j[k],n=0;n<3;n++){f[0]=m[h[n]],f[1]=m[h[(n+1)%3]],f.sort(c);var o=f.toString();void 0===g[o]?g[o]={vert1:f[0],vert2:f[1],face1:k,face2:void 0}:g[o].face2=k}var p=[];for(var o in g){var q=g[o];if(void 0===q.face2||j[q.face1].normal.dot(j[q.face2].normal)<=e){var r=i[q.vert1];p.push(r.x),p.push(r.y),p.push(r.z),r=i[q.vert2],p.push(r.x),p.push(r.y),p.push(r.z)}}this.addAttribute("position",new THREE.BufferAttribute(new Float32Array(p),3))},THREE.EdgesGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.EdgesGeometry.prototype.constructor=THREE.EdgesGeometry,
// File:src/extras/geometries/ExtrudeGeometry.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Creates extruded geometry from a path shape.
 *
 * parameters = {
 *
 *  curveSegments: <int>, // number of points on the curves
 *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
 *  amount: <int>, // Depth to extrude the shape
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into the original shape bevel goes
 *  bevelSize: <float>, // how far from shape outline is bevel
 *  bevelSegments: <int>, // number of bevel layers
 *
 *  extrudePath: <THREE.CurvePath> // 3d spline path to extrude shape along. (creates Frames if .frames aren't defined)
 *  frames: <THREE.TubeGeometry.FrenetFrames> // containing arrays of tangents, normals, binormals
 *
 *  uvGenerator: <Object> // object that provides UV generator functions
 *
 * }
 **/
THREE.ExtrudeGeometry=function(a,b){return"undefined"==typeof a?void(a=[]):(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),void this.computeFaceNormals())},THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry,THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++){var e=a[d];this.addShape(e,b)}},THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().multiplyScalar(c).add(a)}
// Find directions for point movement
function d(a,b,c){
// computes for inPt the corresponding point inPt' on a new contour
//   shifted by 1 unit (length of normalized vector) to the left
// if we walk along contour clockwise, this new contour is outside the old one
//
// inPt' is the intersection of the two lines parallel to the two
//  adjacent edges of inPt at a distance of 1 unit on the left side.
var d,e,f=1,g=a.x-b.x,h=a.y-b.y,i=c.x-a.x,j=c.y-a.y,k=g*g+h*h,l=g*j-h*i;if(Math.abs(l)>Number.EPSILON){
// not collinear
// length of vectors for normalizing
var m=Math.sqrt(k),n=Math.sqrt(i*i+j*j),o=b.x-h/m,p=b.y+g/m,q=c.x-j/n,r=c.y+i/n,s=((q-o)*j-(r-p)*i)/(g*j-h*i);
// vector from inPt to intersection point
d=o+g*s-a.x,e=p+h*s-a.y;
// Don't normalize!, otherwise sharp corners become ugly
//  but prevent crazy spikes
var t=d*d+e*e;if(t<=2)return new THREE.Vector2(d,e);f=Math.sqrt(t/2)}else{
// handle special case of collinear edges
var u=!1;// assumes: opposite
g>Number.EPSILON?i>Number.EPSILON&&(u=!0):g<-Number.EPSILON?i<-Number.EPSILON&&(u=!0):Math.sign(h)===Math.sign(j)&&(u=!0),u?(
// console.log("Warning: lines are a straight sequence");
d=-h,e=g,f=Math.sqrt(k)):(
// console.log("Warning: lines are a straight spike");
d=g,e=h,f=Math.sqrt(k/2))}return new THREE.Vector2(d/f,e/f)}
/////  Internal functions
function e(){if(t){var a=0,b=Q*a;
// Bottom faces
for(T=0;T<R;T++)P=I[T],i(P[2]+b,P[1]+b,P[0]+b);
// Top faces
for(a=v+2*s,b=Q*a,T=0;T<R;T++)P=I[T],i(P[0]+b,P[1]+b,P[2]+b)}else{
// Bottom faces
for(T=0;T<R;T++)P=I[T],i(P[2],P[1],P[0]);
// Top faces
for(T=0;T<R;T++)P=I[T],i(P[0]+Q*v,P[1]+Q*v,P[2]+Q*v)}}
// Create faces for the z-sides of the shape
function f(){var a=0;for(g(J,a),a+=J.length,A=0,B=G.length;A<B;A++)z=G[A],g(z,a),
//, true
a+=z.length}function g(a,b){var c,d;for(T=a.length;--T>=0;){c=T,d=T-1,d<0&&(d=a.length-1);
//console.log('b', i,j, i-1, k,vertices.length);
var e=0,f=v+2*s;for(e=0;e<f;e++){var g=Q*e,h=Q*(e+1),i=b+c+g,k=b+d+g,l=b+d+h,m=b+c+h;j(i,k,l,m,a,e,f,c,d)}}}function h(a,b,c){C.vertices.push(new THREE.Vector3(a,b,c))}function i(a,b,c){a+=D,b+=D,c+=D,C.faces.push(new THREE.Face3(a,b,c,null,null,0));var d=y.generateTopUV(C,a,b,c);C.faceVertexUvs[0].push(d)}function j(a,b,c,d,e,f,g,h,i){a+=D,b+=D,c+=D,d+=D,C.faces.push(new THREE.Face3(a,b,d,null,null,1)),C.faces.push(new THREE.Face3(b,c,d,null,null,1));var j=y.generateSideWallUV(C,a,b,c,d);C.faceVertexUvs[0].push([j[0],j[1],j[3]]),C.faceVertexUvs[0].push([j[1],j[2],j[3]])}var k,l,m,n,o,p=void 0!==b.amount?b.amount:100,q=void 0!==b.bevelThickness?b.bevelThickness:6,r=void 0!==b.bevelSize?b.bevelSize:q-2,s=void 0!==b.bevelSegments?b.bevelSegments:3,t=void 0===b.bevelEnabled||b.bevelEnabled,u=void 0!==b.curveSegments?b.curveSegments:12,v=void 0!==b.steps?b.steps:1,w=b.extrudePath,x=!1,y=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator;w&&(k=w.getSpacedPoints(v),x=!0,t=!1,// bevels not supported for path extrusion
// SETUP TNB variables
// Reuse TNB from TubeGeomtry for now.
// TODO1 - have a .isClosed in spline?
l=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(w,v,!1),
// console.log(splineTube, 'splineTube', splineTube.normals.length, 'steps', steps, 'extrudePts', extrudePts.length);
m=new THREE.Vector3,n=new THREE.Vector3,o=new THREE.Vector3),
// Safeguards if bevels are not enabled
t||(s=0,q=0,r=0);
// Variables initialization
var z,A,B,C=this,D=this.vertices.length,E=a.extractPoints(u),F=E.shape,G=E.holes,H=!THREE.ShapeUtils.isClockWise(F);if(H){
// Maybe we should also check if holes are in the opposite direction, just to be safe ...
for(F=F.reverse(),A=0,B=G.length;A<B;A++)z=G[A],THREE.ShapeUtils.isClockWise(z)&&(G[A]=z.reverse());H=!1}var I=THREE.ShapeUtils.triangulateShape(F,G),J=F;// vertices has all points but contour has only points of circumference
for(A=0,B=G.length;A<B;A++)z=G[A],F=F.concat(z);for(var K,L,M,N,O,P,Q=F.length,R=I.length,S=[],T=0,U=J.length,V=U-1,W=T+1;T<U;T++,V++,W++)V===U&&(V=0),W===U&&(W=0),
//  (j)---(i)---(k)
// console.log('i,j,k', i, j , k)
S[T]=d(J[T],J[V],J[W]);var X,Y=[],Z=S.concat();for(A=0,B=G.length;A<B;A++){for(z=G[A],X=[],T=0,U=z.length,V=U-1,W=T+1;T<U;T++,V++,W++)V===U&&(V=0),W===U&&(W=0),
//  (j)---(i)---(k)
X[T]=d(z[T],z[V],z[W]);Y.push(X),Z=Z.concat(X)}
// Loop bevelSegments, 1 for the front, 1 for the back
for(K=0;K<s;K++){// curved
//bs = bevelSize * t; // linear
// contract shape
for(
//for ( b = bevelSegments; b > 0; b -- ) {
M=K/s,N=q*(1-M),
//z = bevelThickness * t;
L=r*Math.sin(M*Math.PI/2),T=0,U=J.length;T<U;T++)O=c(J[T],S[T],L),h(O.x,O.y,-N);
// expand holes
for(A=0,B=G.length;A<B;A++)for(z=G[A],X=Y[A],T=0,U=z.length;T<U;T++)O=c(z[T],X[T],L),h(O.x,O.y,-N)}
// Back facing vertices
for(L=r,T=0;T<Q;T++)O=t?c(F[T],Z[T],L):F[T],x?(
// v( vert.x, vert.y + extrudePts[ 0 ].y, extrudePts[ 0 ].x );
n.copy(l.normals[0]).multiplyScalar(O.x),m.copy(l.binormals[0]).multiplyScalar(O.y),o.copy(k[0]).add(n).add(m),h(o.x,o.y,o.z)):h(O.x,O.y,0);
// Add stepped vertices...
// Including front facing vertices
var $;for($=1;$<=v;$++)for(T=0;T<Q;T++)O=t?c(F[T],Z[T],L):F[T],x?(
// v( vert.x, vert.y + extrudePts[ s - 1 ].y, extrudePts[ s - 1 ].x );
n.copy(l.normals[$]).multiplyScalar(O.x),m.copy(l.binormals[$]).multiplyScalar(O.y),o.copy(k[$]).add(n).add(m),h(o.x,o.y,o.z)):h(O.x,O.y,p/v*$);
// Add bevel segments planes
//for ( b = 1; b <= bevelSegments; b ++ ) {
for(K=s-1;K>=0;K--){
// contract shape
for(M=K/s,N=q*(1-M),
//bs = bevelSize * ( 1-Math.sin ( ( 1 - t ) * Math.PI/2 ) );
L=r*Math.sin(M*Math.PI/2),T=0,U=J.length;T<U;T++)O=c(J[T],S[T],L),h(O.x,O.y,p+N);
// expand holes
for(A=0,B=G.length;A<B;A++)for(z=G[A],X=Y[A],T=0,U=z.length;T<U;T++)O=c(z[T],X[T],L),x?h(O.x,O.y+k[v-1].y,k[v-1].x+N):h(O.x,O.y,p+N)}/* Faces */
// Top and bottom faces
e(),
// Sides faces
f()},THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){var e=a.vertices,f=e[b],g=e[c],h=e[d];return[new THREE.Vector2(f.x,f.y),new THREE.Vector2(g.x,g.y),new THREE.Vector2(h.x,h.y)]},generateSideWallUV:function(a,b,c,d,e){var f=a.vertices,g=f[b],h=f[c],i=f[d],j=f[e];return Math.abs(g.y-h.y)<.01?[new THREE.Vector2(g.x,1-g.z),new THREE.Vector2(h.x,1-h.z),new THREE.Vector2(i.x,1-i.z),new THREE.Vector2(j.x,1-j.z)]:[new THREE.Vector2(g.y,1-g.z),new THREE.Vector2(h.y,1-h.z),new THREE.Vector2(i.y,1-i.z),new THREE.Vector2(j.y,1-j.z)]}},
// File:src/extras/geometries/ShapeGeometry.js
/**
 * @author jonobr1 / http://jonobr1.com
 *
 * Creates a one-sided polygonal geometry from a path shape. Similar to
 * ExtrudeGeometry.
 *
 * parameters = {
 *
 *	curveSegments: <int>, // number of points on the curves. NOT USED AT THE MOMENT.
 *
 *	material: <int> // material index for front and back faces
 *	uvGenerator: <Object> // object that provides UV generator functions
 *
 * }
 **/
THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this),this.type="ShapeGeometry",Array.isArray(a)===!1&&(a=[a]),this.addShapeList(a,b),this.computeFaceNormals()},THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry,/**
 * Add an array of shapes to THREE.ShapeGeometry.
 */
THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this},/**
 * Adds a shape to THREE.ShapeGeometry, based on THREE.ExtrudeGeometry.
 */
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c,d,e,f=void 0!==b.curveSegments?b.curveSegments:12,g=b.material,h=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,i=this.vertices.length,j=a.extractPoints(f),k=j.shape,l=j.holes,m=!THREE.ShapeUtils.isClockWise(k);if(m){
// Maybe we should also check if holes are in the opposite direction, just to be safe...
for(k=k.reverse(),c=0,d=l.length;c<d;c++)e=l[c],THREE.ShapeUtils.isClockWise(e)&&(l[c]=e.reverse());m=!1}var n=THREE.ShapeUtils.triangulateShape(k,l);
// Vertices
for(c=0,d=l.length;c<d;c++)e=l[c],k=k.concat(e);
//
var o,p,q=k.length,r=n.length;for(c=0;c<q;c++)o=k[c],this.vertices.push(new THREE.Vector3(o.x,o.y,0));for(c=0;c<r;c++){p=n[c];var s=p[0]+i,t=p[1]+i,u=p[2]+i;this.faces.push(new THREE.Face3(s,t,u,null,null,g)),this.faceVertexUvs[0].push(h.generateTopUV(this,s,t,u))}},
// File:src/extras/geometries/LatheBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
// points - to create a closed torus, one must use a set of points
//    like so: [ a, b, c, d, a ], see first is the same as last.
// segments - the number of circumference segments to create
// phiStart - the starting radian
// phiLength - the radian (0 to 2PI) range of the lathed section
//    2PI is a closed lathe, less than 2PI is a portion.
THREE.LatheBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this),this.type="LatheBufferGeometry",this.parameters={points:a,segments:b,phiStart:c,phiLength:d},b=Math.floor(b)||12,c=c||0,d=d||2*Math.PI,
// clamp phiLength so it's in range of [ 0, 2PI ]
d=THREE.Math.clamp(d,0,2*Math.PI);
// these are used to calculate buffer length
var e,f,g,h=(b+1)*a.length,i=b*a.length*2*3,j=new THREE.BufferAttribute(new(i>65535?Uint32Array:Uint16Array)(i),1),k=new THREE.BufferAttribute(new Float32Array(3*h),3),l=new THREE.BufferAttribute(new Float32Array(2*h),2),m=0,n=0,o=(1/(a.length-1),1/b),p=new THREE.Vector3,q=new THREE.Vector2;
// generate vertices and uvs
for(f=0;f<=b;f++){var r=c+f*o*d,s=Math.sin(r),t=Math.cos(r);for(g=0;g<=a.length-1;g++)
// vertex
p.x=a[g].x*s,p.y=a[g].y,p.z=a[g].x*t,k.setXYZ(m,p.x,p.y,p.z),
// uv
q.x=f/b,q.y=g/(a.length-1),l.setXY(m,q.x,q.y),
// increase index
m++}
// generate indices
for(f=0;f<b;f++)for(g=0;g<a.length-1;g++){e=g+f*a.length;
// indices
var u=e,v=e+a.length,w=e+a.length+1,x=e+1;
// face one
j.setX(n,u),n++,j.setX(n,v),n++,j.setX(n,x),n++,
// face two
j.setX(n,v),n++,j.setX(n,w),n++,j.setX(n,x),n++}
// if the geometry is closed, we need to average the normals along the seam.
// because the corresponding vertices are identical (but still have different UVs).
if(
// build geometry
this.setIndex(j),this.addAttribute("position",k),this.addAttribute("uv",l),
// generate normals
this.computeVertexNormals(),d===2*Math.PI){var y=this.attributes.normal.array,z=new THREE.Vector3,A=new THREE.Vector3,B=new THREE.Vector3;for(
// this is the buffer offset for the last line of vertices
e=b*a.length*3,f=0,g=0;f<a.length;f++,g+=3)
// select the normal of the vertex in the first line
z.x=y[g+0],z.y=y[g+1],z.z=y[g+2],
// select the normal of the vertex in the last line
A.x=y[e+g+0],A.y=y[e+g+1],A.z=y[e+g+2],
// average normals
B.addVectors(z,A).normalize(),
// assign the new values to both normals
y[g+0]=y[e+g+0]=B.x,y[g+1]=y[e+g+1]=B.y,y[g+2]=y[e+g+2]=B.z}},THREE.LatheBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.LatheBufferGeometry.prototype.constructor=THREE.LatheBufferGeometry,
// File:src/extras/geometries/LatheGeometry.js
/**
 * @author astrodud / http://astrodud.isgreat.org/
 * @author zz85 / https://github.com/zz85
 * @author bhouston / http://clara.io
 */
// points - to create a closed torus, one must use a set of points
//    like so: [ a, b, c, d, a ], see first is the same as last.
// segments - the number of circumference segments to create
// phiStart - the starting radian
// phiLength - the radian (0 to 2PI) range of the lathed section
//    2PI is a closed lathe, less than 2PI is a portion.
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this),this.type="LatheGeometry",this.parameters={points:a,segments:b,phiStart:c,phiLength:d},this.fromBufferGeometry(new THREE.LatheBufferGeometry(a,b,c,d)),this.mergeVertices()},THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry,
// File:src/extras/geometries/PlaneGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this),this.type="PlaneGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))},THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry,
// File:src/extras/geometries/PlaneBufferGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 * based on http://papervision3d.googlecode.com/svn/trunk/as3/trunk/src/org/papervision3d/objects/primitives/Plane.as
 */
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this),this.type="PlaneBufferGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};for(var e=a/2,f=b/2,g=Math.floor(c)||1,h=Math.floor(d)||1,i=g+1,j=h+1,k=a/g,l=b/h,m=new Float32Array(i*j*3),n=new Float32Array(i*j*3),o=new Float32Array(i*j*2),p=0,q=0,r=0;r<j;r++)for(var s=r*l-f,t=0;t<i;t++){var u=t*k-e;m[p]=u,m[p+1]=-s,n[p+2]=1,o[q]=t/g,o[q+1]=1-r/h,p+=3,q+=2}p=0;for(var v=new(m.length/3>65535?Uint32Array:Uint16Array)(g*h*6),r=0;r<h;r++)for(var t=0;t<g;t++){var w=t+i*r,x=t+i*(r+1),y=t+1+i*(r+1),z=t+1+i*r;v[p]=w,v[p+1]=x,v[p+2]=z,v[p+3]=x,v[p+4]=y,v[p+5]=z,p+=6}this.setIndex(new THREE.BufferAttribute(v,1)),this.addAttribute("position",new THREE.BufferAttribute(m,3)),this.addAttribute("normal",new THREE.BufferAttribute(n,3)),this.addAttribute("uv",new THREE.BufferAttribute(o,2))},THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry,
// File:src/extras/geometries/RingBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
THREE.RingBufferGeometry=function(a,b,c,d,e,f){THREE.BufferGeometry.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f},a=a||20,b=b||50,e=void 0!==e?e:0,f=void 0!==f?f:2*Math.PI,c=void 0!==c?Math.max(3,c):8,d=void 0!==d?Math.max(1,d):1;
// these are used to calculate buffer length
var g,h,i,j=(c+1)*(d+1),k=c*d*2*3,l=new THREE.BufferAttribute(new(k>65535?Uint32Array:Uint16Array)(k),1),m=new THREE.BufferAttribute(new Float32Array(3*j),3),n=new THREE.BufferAttribute(new Float32Array(3*j),3),o=new THREE.BufferAttribute(new Float32Array(2*j),2),p=0,q=0,r=a,s=(b-a)/d,t=new THREE.Vector3,u=new THREE.Vector2;
// generate vertices, normals and uvs
// values are generate from the inside of the ring to the outside
for(h=0;h<=d;h++){for(i=0;i<=c;i++)g=e+i/c*f,
// vertex
t.x=r*Math.cos(g),t.y=r*Math.sin(g),m.setXYZ(p,t.x,t.y,t.z),
// normal
n.setXYZ(p,0,0,1),
// uv
u.x=(t.x/b+1)/2,u.y=(t.y/b+1)/2,o.setXY(p,u.x,u.y),
// increase index
p++;
// increase the radius for next row of vertices
r+=s}
// generate indices
for(h=0;h<d;h++){var v=h*(c+1);for(i=0;i<c;i++){g=i+v;
// indices
var w=g,x=g+c+1,y=g+c+2,z=g+1;
// face one
l.setX(q,w),q++,l.setX(q,x),q++,l.setX(q,y),q++,
// face two
l.setX(q,w),q++,l.setX(q,y),q++,l.setX(q,z),q++}}
// build geometry
this.setIndex(l),this.addAttribute("position",m),this.addAttribute("normal",n),this.addAttribute("uv",o)},THREE.RingBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.RingBufferGeometry.prototype.constructor=THREE.RingBufferGeometry,
// File:src/extras/geometries/RingGeometry.js
/**
 * @author Kaleb Murphy
 */
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this),this.type="RingGeometry",this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f},this.fromBufferGeometry(new THREE.RingBufferGeometry(a,b,c,d,e,f))},THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.RingGeometry.prototype.constructor=THREE.RingGeometry,
// File:src/extras/geometries/SphereGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this),this.type="SphereGeometry",this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g},this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,f,g))},THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry,
// File:src/extras/geometries/SphereBufferGeometry.js
/**
 * @author benaadams / https://twitter.com/ben_a_adams
 * based on THREE.SphereGeometry
 */
THREE.SphereBufferGeometry=function(a,b,c,d,e,f,g){THREE.BufferGeometry.call(this),this.type="SphereBufferGeometry",this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g},a=a||50,b=Math.max(3,Math.floor(b)||8),c=Math.max(2,Math.floor(c)||6),d=void 0!==d?d:0,e=void 0!==e?e:2*Math.PI,f=void 0!==f?f:0,g=void 0!==g?g:Math.PI;for(var h=f+g,i=(b+1)*(c+1),j=new THREE.BufferAttribute(new Float32Array(3*i),3),k=new THREE.BufferAttribute(new Float32Array(3*i),3),l=new THREE.BufferAttribute(new Float32Array(2*i),2),m=0,n=[],o=new THREE.Vector3,p=0;p<=c;p++){for(var q=[],r=p/c,s=0;s<=b;s++){var t=s/b,u=-a*Math.cos(d+t*e)*Math.sin(f+r*g),v=a*Math.cos(f+r*g),w=a*Math.sin(d+t*e)*Math.sin(f+r*g);o.set(u,v,w).normalize(),j.setXYZ(m,u,v,w),k.setXYZ(m,o.x,o.y,o.z),l.setXY(m,t,1-r),q.push(m),m++}n.push(q)}for(var x=[],p=0;p<c;p++)for(var s=0;s<b;s++){var y=n[p][s+1],z=n[p][s],A=n[p+1][s],B=n[p+1][s+1];(0!==p||f>0)&&x.push(y,z,B),(p!==c-1||h<Math.PI)&&x.push(z,A,B)}this.setIndex(new(j.count>65535?THREE.Uint32Attribute:THREE.Uint16Attribute)(x,1)),this.addAttribute("position",j),this.addAttribute("normal",k),this.addAttribute("uv",l),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)},THREE.SphereBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.SphereBufferGeometry.prototype.constructor=THREE.SphereBufferGeometry,
// File:src/extras/geometries/TextGeometry.js
/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author alteredq / http://alteredqualia.com/
 *
 * Text = 3D Text
 *
 * parameters = {
 *  font: <THREE.Font>, // font
 *
 *  size: <float>, // size of the text
 *  height: <float>, // thickness to extrude text
 *  curveSegments: <int>, // number of points on the curves
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into text bevel goes
 *  bevelSize: <float> // how far from text outline is bevel
 * }
 */
THREE.TextGeometry=function(a,b){b=b||{};var c=b.font;if(c instanceof THREE.Font==!1)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new THREE.Geometry;var d=c.generateShapes(a,b.size,b.curveSegments);
// translate parameters to ExtrudeGeometry API
b.amount=void 0!==b.height?b.height:50,
// defaults
void 0===b.bevelThickness&&(b.bevelThickness=10),void 0===b.bevelSize&&(b.bevelSize=8),void 0===b.bevelEnabled&&(b.bevelEnabled=!1),THREE.ExtrudeGeometry.call(this,d,b),this.type="TextGeometry"},THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype),THREE.TextGeometry.prototype.constructor=THREE.TextGeometry,
// File:src/extras/geometries/TorusBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 */
THREE.TorusBufferGeometry=function(a,b,c,d,e){THREE.BufferGeometry.call(this),this.type="TorusBufferGeometry",this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e},a=a||100,b=b||40,c=Math.floor(c)||8,d=Math.floor(d)||6,e=e||2*Math.PI;
// used to calculate buffer length
var f,g,h=(c+1)*(d+1),i=c*d*2*3,j=new(i>65535?Uint32Array:Uint16Array)(i),k=new Float32Array(3*h),l=new Float32Array(3*h),m=new Float32Array(2*h),n=0,o=0,p=0,q=new THREE.Vector3,r=new THREE.Vector3,s=new THREE.Vector3;
// generate vertices, normals and uvs
for(f=0;f<=c;f++)for(g=0;g<=d;g++){var t=g/d*e,u=f/c*Math.PI*2;
// vertex
r.x=(a+b*Math.cos(u))*Math.cos(t),r.y=(a+b*Math.cos(u))*Math.sin(t),r.z=b*Math.sin(u),k[n]=r.x,k[n+1]=r.y,k[n+2]=r.z,
// this vector is used to calculate the normal
q.x=a*Math.cos(t),q.y=a*Math.sin(t),
// normal
s.subVectors(r,q).normalize(),l[n]=s.x,l[n+1]=s.y,l[n+2]=s.z,
// uv
m[o]=g/d,m[o+1]=f/c,
// update offsets
n+=3,o+=2}
// generate indices
for(f=1;f<=c;f++)for(g=1;g<=d;g++){
// indices
var v=(d+1)*f+g-1,w=(d+1)*(f-1)+g-1,x=(d+1)*(f-1)+g,y=(d+1)*f+g;
// face one
j[p]=v,j[p+1]=w,j[p+2]=y,
// face two
j[p+3]=w,j[p+4]=x,j[p+5]=y,
// update offset
p+=6}
// build geometry
this.setIndex(new THREE.BufferAttribute(j,1)),this.addAttribute("position",new THREE.BufferAttribute(k,3)),this.addAttribute("normal",new THREE.BufferAttribute(l,3)),this.addAttribute("uv",new THREE.BufferAttribute(m,2))},THREE.TorusBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.TorusBufferGeometry.prototype.constructor=THREE.TorusBufferGeometry,
// File:src/extras/geometries/TorusGeometry.js
/**
 * @author oosmoxiecode
 * @author mrdoob / http://mrdoob.com/
 * based on http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3DLite/src/away3dlite/primitives/Torus.as?r=2888
 */
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this),this.type="TorusGeometry",this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e},this.fromBufferGeometry(new THREE.TorusBufferGeometry(a,b,c,d,e))},THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry,
// File:src/extras/geometries/TorusKnotBufferGeometry.js
/**
 * @author Mugen87 / https://github.com/Mugen87
 *
 * see: http://www.blackpawn.com/texts/pqtorus/
 */
THREE.TorusKnotBufferGeometry=function(a,b,c,d,e,f){
// this function calculates the current position on the torus curve
function g(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a),h=c/b*a,i=Math.cos(h);e.x=d*(2+i)*.5*f,e.y=d*(2+i)*g*.5,e.z=d*Math.sin(h)*.5}THREE.BufferGeometry.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f},a=a||100,b=b||40,c=Math.floor(c)||64,d=Math.floor(d)||8,e=e||2,f=f||3;
// used to calculate buffer length
var h,i,j=(d+1)*(c+1),k=d*c*2*3,l=new THREE.BufferAttribute(new(k>65535?Uint32Array:Uint16Array)(k),1),m=new THREE.BufferAttribute(new Float32Array(3*j),3),n=new THREE.BufferAttribute(new Float32Array(3*j),3),o=new THREE.BufferAttribute(new Float32Array(2*j),2),p=0,q=0,r=new THREE.Vector3,s=new THREE.Vector3,t=new THREE.Vector2,u=new THREE.Vector3,v=new THREE.Vector3,w=new THREE.Vector3,x=new THREE.Vector3,y=new THREE.Vector3;
// generate vertices, normals and uvs
for(h=0;h<=c;++h){
// the radian "u" is used to calculate the position on the torus curve of the current tubular segement
var z=h/c*e*Math.PI*2;for(
// now we calculate two points. P1 is our current position on the curve, P2 is a little farther ahead.
// these points are used to create a special "coordinate space", which is necessary to calculate the correct vertex positions
g(z,e,f,a,u),g(z+.01,e,f,a,v),
// calculate orthonormal basis
x.subVectors(v,u),y.addVectors(v,u),w.crossVectors(x,y),y.crossVectors(w,x),
// normalize B, N. T can be ignored, we don't use it
w.normalize(),y.normalize(),i=0;i<=d;++i){
// now calculate the vertices. they are nothing more than an extrusion of the torus curve.
// because we extrude a shape in the xy-plane, there is no need to calculate a z-value.
var A=i/d*Math.PI*2,B=-b*Math.cos(A),C=b*Math.sin(A);
// now calculate the final vertex position.
// first we orient the extrusion with our basis vectos, then we add it to the current position on the curve
r.x=u.x+(B*y.x+C*w.x),r.y=u.y+(B*y.y+C*w.y),r.z=u.z+(B*y.z+C*w.z),
// vertex
m.setXYZ(p,r.x,r.y,r.z),
// normal (P1 is always the center/origin of the extrusion, thus we can use it to calculate the normal)
s.subVectors(r,u).normalize(),n.setXYZ(p,s.x,s.y,s.z),
// uv
t.x=h/c,t.y=i/d,o.setXY(p,t.x,t.y),
// increase index
p++}}
// generate indices
for(i=1;i<=c;i++)for(h=1;h<=d;h++){
// indices
var D=(d+1)*(i-1)+(h-1),E=(d+1)*i+(h-1),F=(d+1)*i+h,G=(d+1)*(i-1)+h;
// face one
l.setX(q,D),q++,l.setX(q,E),q++,l.setX(q,G),q++,
// face two
l.setX(q,E),q++,l.setX(q,F),q++,l.setX(q,G),q++}
// build geometry
this.setIndex(l),this.addAttribute("position",m),this.addAttribute("normal",n),this.addAttribute("uv",o)},THREE.TorusKnotBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.TorusKnotBufferGeometry.prototype.constructor=THREE.TorusKnotBufferGeometry,
// File:src/extras/geometries/TorusKnotGeometry.js
/**
 * @author oosmoxiecode
 */
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this),this.type="TorusKnotGeometry",this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f},void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(a,b,c,d,e,f)),this.mergeVertices()},THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry,
// File:src/extras/geometries/TubeGeometry.js
/**
 * @author WestLangley / https://github.com/WestLangley
 * @author zz85 / https://github.com/zz85
 * @author miningold / https://github.com/miningold
 * @author jonobr1 / https://github.com/jonobr1
 *
 * Modified from the TorusKnotGeometry by @oosmoxiecode
 *
 * Creates a tube which extrudes along a 3d spline
 *
 * Uses parallel transport frames as described in
 * http://www.cs.indiana.edu/pub/techreports/TR425.pdf
 */
THREE.TubeGeometry=function(a,b,c,d,e,f){function g(a,b,c){return D.vertices.push(new THREE.Vector3(a,b,c))-1}THREE.Geometry.call(this),this.type="TubeGeometry",this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e,taper:f},b=b||64,c=c||1,d=d||8,e=e||!1,f=f||THREE.TubeGeometry.NoTaper;var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C=[],D=this,E=b+1,F=new THREE.Vector3,G=new THREE.TubeGeometry.FrenetFrames(a,b,e),H=G.tangents,I=G.normals,J=G.binormals;
// construct the grid
for(
// proxy internals
this.tangents=H,this.normals=I,this.binormals=J,q=0;q<E;q++)for(C[q]=[],k=q/(E-1),p=a.getPointAt(k),h=H[q],i=I[q],j=J[q],m=c*f(k),r=0;r<d;r++)l=r/d*2*Math.PI,n=-m*Math.cos(l),// TODO: Hack: Negating it so it faces outside.
o=m*Math.sin(l),F.copy(p),F.x+=n*i.x+o*j.x,F.y+=n*i.y+o*j.y,F.z+=n*i.z+o*j.z,C[q][r]=g(F.x,F.y,F.z);
// construct the mesh
for(q=0;q<b;q++)for(r=0;r<d;r++)s=e?(q+1)%b:q+1,t=(r+1)%d,u=C[q][r],// *** NOT NECESSARILY PLANAR ! ***
v=C[s][r],w=C[s][t],x=C[q][t],y=new THREE.Vector2(q/b,r/d),z=new THREE.Vector2((q+1)/b,r/d),A=new THREE.Vector2((q+1)/b,(r+1)/d),B=new THREE.Vector2(q/b,(r+1)/d),this.faces.push(new THREE.Face3(u,v,x)),this.faceVertexUvs[0].push([y,z,B]),this.faces.push(new THREE.Face3(v,w,x)),this.faceVertexUvs[0].push([z.clone(),A,B.clone()]);this.computeFaceNormals(),this.computeVertexNormals()},THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry,THREE.TubeGeometry.NoTaper=function(a){return 1},THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)},
// For computing of Frenet frames, exposing the tangents, normals and binormals the spline
THREE.TubeGeometry.FrenetFrames=function(a,b,c){/*
	function initialNormal1(lastBinormal) {
		// fixed start binormal. Has dangers of 0 vectors
		normals[ 0 ] = new THREE.Vector3();
		binormals[ 0 ] = new THREE.Vector3();
		if (lastBinormal===undefined) lastBinormal = new THREE.Vector3( 0, 0, 1 );
		normals[ 0 ].crossVectors( lastBinormal, tangents[ 0 ] ).normalize();
		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] ).normalize();
	}

	function initialNormal2() {

		// This uses the Frenet-Serret formula for deriving binormal
		var t2 = path.getTangentAt( epsilon );

		normals[ 0 ] = new THREE.Vector3().subVectors( t2, tangents[ 0 ] ).normalize();
		binormals[ 0 ] = new THREE.Vector3().crossVectors( tangents[ 0 ], normals[ 0 ] );

		normals[ 0 ].crossVectors( binormals[ 0 ], tangents[ 0 ] ).normalize(); // last binormal x tangent
		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] ).normalize();

	}
	*/
function d(){
// select an initial normal vector perpendicular to the first tangent vector,
// and in the direction of the smallest tangent xyz component
n[0]=new THREE.Vector3,o[0]=new THREE.Vector3,f=Number.MAX_VALUE,g=Math.abs(m[0].x),h=Math.abs(m[0].y),i=Math.abs(m[0].z),g<=f&&(f=g,l.set(1,0,0)),h<=f&&(f=h,l.set(0,1,0)),i<=f&&l.set(0,0,1),p.crossVectors(m[0],l).normalize(),n[0].crossVectors(m[0],p),o[0].crossVectors(m[0],n[0])}var e,f,g,h,i,j,k,l=new THREE.Vector3,m=[],n=[],o=[],p=new THREE.Vector3,q=new THREE.Matrix4,r=b+1;
// compute the tangent vectors for each segment on the path
for(
// expose internals
this.tangents=m,this.normals=n,this.binormals=o,j=0;j<r;j++)k=j/(r-1),m[j]=a.getTangentAt(k),m[j].normalize();
// compute the slowly-varying normal and binormal vectors for each segment on the path
for(d(),j=1;j<r;j++)n[j]=n[j-1].clone(),o[j]=o[j-1].clone(),p.crossVectors(m[j-1],m[j]),p.length()>Number.EPSILON&&(p.normalize(),e=Math.acos(THREE.Math.clamp(m[j-1].dot(m[j]),-1,1)),// clamp for floating pt errors
n[j].applyMatrix4(q.makeRotationAxis(p,e))),o[j].crossVectors(m[j],n[j]);
// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same
if(c)for(e=Math.acos(THREE.Math.clamp(n[0].dot(n[r-1]),-1,1)),e/=r-1,m[0].dot(p.crossVectors(n[0],n[r-1]))>0&&(e=-e),j=1;j<r;j++)
// twist a little...
n[j].applyMatrix4(q.makeRotationAxis(m[j],e*j)),o[j].crossVectors(m[j],n[j])},
// File:src/extras/geometries/PolyhedronGeometry.js
/**
 * @author clockworkgeek / https://github.com/clockworkgeek
 * @author timothypratley / https://github.com/timothypratley
 * @author WestLangley / http://github.com/WestLangley
*/
THREE.PolyhedronGeometry=function(a,b,c,d){
// Project vector onto sphere's surface
function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;
// Texture coords are equivalent to map coords, calculate angle and convert to fraction of a circle.
var c=h(a)/2/Math.PI+.5,d=i(a)/Math.PI+.5;return b.uv=new THREE.Vector2(c,1-d),b}
// Approximate a curved face with recursively sub-divided triangles.
function f(a,b,c,d){var e=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()],void 0,d);k.faces.push(e),t.copy(a).add(b).add(c).divideScalar(3);var f=h(t);k.faceVertexUvs[0].push([j(a.uv,a,f),j(b.uv,b,f),j(c.uv,c,f)])}
// Analytically subdivide a face to the required detail level.
function g(a,b){
// Construct all of the vertices for this subdivision.
for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),i=[],j=a.materialIndex,l=0;l<=c;l++){i[l]=[];for(var m=e(d.clone().lerp(h,l/c)),n=e(g.clone().lerp(h,l/c)),o=c-l,p=0;p<=o;p++)0===p&&l===c?i[l][p]=m:i[l][p]=e(m.clone().lerp(n,p/o))}
// Construct all of the faces.
for(var l=0;l<c;l++)for(var p=0;p<2*(c-l)-1;p++){var q=Math.floor(p/2);p%2===0?f(i[l][q+1],i[l+1][q],i[l][q],j):f(i[l][q+1],i[l+1][q+1],i[l+1][q],j)}}
// Angle around the Y axis, counter-clockwise when looking from above.
function h(a){return Math.atan2(a.z,-a.x)}
// Angle above the XZ plane.
function i(a){return Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))}
// Texture fixing helper. Spheres have some odd behaviours.
function j(a,b,c){return c<0&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y)),0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,a.y)),a.clone()}THREE.Geometry.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:a,indices:b,radius:c,detail:d},c=c||1,d=d||0;for(var k=this,l=0,m=a.length;l<m;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));for(var n=this.vertices,o=[],l=0,p=0,m=b.length;l<m;l+=3,p++){var q=n[b[l]],r=n[b[l+1]],s=n[b[l+2]];o[p]=new THREE.Face3(q.index,r.index,s.index,[q.clone(),r.clone(),s.clone()],void 0,p)}for(var t=new THREE.Vector3,l=0,m=o.length;l<m;l++)g(o[l],d);
// Handle case when face straddles the seam
for(var l=0,m=this.faceVertexUvs[0].length;l<m;l++){var u=this.faceVertexUvs[0][l],v=u[0].x,w=u[1].x,x=u[2].x,y=Math.max(v,w,x),z=Math.min(v,w,x);y>.9&&z<.1&&(
// 0.9 is somewhat arbitrary
v<.2&&(u[0].x+=1),w<.2&&(u[1].x+=1),x<.2&&(u[2].x+=1))}
// Apply radius
for(var l=0,m=this.vertices.length;l<m;l++)this.vertices[l].multiplyScalar(c);
// Merge vertices
this.mergeVertices(),this.computeFaceNormals(),this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)},THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry,
// File:src/extras/geometries/DodecahedronGeometry.js
/**
 * @author Abe Pazos / https://hamoid.com
 */
THREE.DodecahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=1/c,e=[
// (±1, ±1, ±1)
-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,
// (0, ±1/φ, ±φ)
0,-d,-c,0,-d,c,0,d,-c,0,d,c,
// (±1/φ, ±φ, 0)
-d,-c,0,-d,c,0,d,-c,0,d,c,0,
// (±φ, 0, ±1/φ)
-c,0,-d,c,0,-d,-c,0,d,c,0,d],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];THREE.PolyhedronGeometry.call(this,e,f,a,b),this.type="DodecahedronGeometry",this.parameters={radius:a,detail:b}},THREE.DodecahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype),THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry,
// File:src/extras/geometries/IcosahedronGeometry.js
/**
 * @author timothypratley / https://github.com/timothypratley
 */
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],e=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];THREE.PolyhedronGeometry.call(this,d,e,a,b),this.type="IcosahedronGeometry",this.parameters={radius:a,detail:b}},THREE.IcosahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype),THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry,
// File:src/extras/geometries/OctahedronGeometry.js
/**
 * @author timothypratley / https://github.com/timothypratley
 */
THREE.OctahedronGeometry=function(a,b){var c=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],d=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];THREE.PolyhedronGeometry.call(this,c,d,a,b),this.type="OctahedronGeometry",this.parameters={radius:a,detail:b}},THREE.OctahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype),THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry,
// File:src/extras/geometries/TetrahedronGeometry.js
/**
 * @author timothypratley / https://github.com/timothypratley
 */
THREE.TetrahedronGeometry=function(a,b){var c=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],d=[2,1,0,0,3,2,1,3,0,2,3,1];THREE.PolyhedronGeometry.call(this,c,d,a,b),this.type="TetrahedronGeometry",this.parameters={radius:a,detail:b}},THREE.TetrahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype),THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry,
// File:src/extras/geometries/ParametricGeometry.js
/**
 * @author zz85 / https://github.com/zz85
 * Parametric Surfaces Geometry
 * based on the brilliant article by @prideout http://prideout.net/blog/?p=44
 *
 * new THREE.ParametricGeometry( parametricFunction, uSegments, ySegements );
 *
 */
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this),this.type="ParametricGeometry",this.parameters={func:a,slices:b,stacks:c};var d,e,f,g,h,i=this.vertices,j=this.faces,k=this.faceVertexUvs[0],l=b+1;for(d=0;d<=c;d++)for(h=d/c,e=0;e<=b;e++)g=e/b,f=a(g,h),i.push(f);var m,n,o,p,q,r,s,t;for(d=0;d<c;d++)for(e=0;e<b;e++)m=d*l+e,n=d*l+e+1,o=(d+1)*l+e+1,p=(d+1)*l+e,q=new THREE.Vector2(e/b,d/c),r=new THREE.Vector2((e+1)/b,d/c),s=new THREE.Vector2((e+1)/b,(d+1)/c),t=new THREE.Vector2(e/b,(d+1)/c),j.push(new THREE.Face3(m,n,p)),k.push([q,r,t]),j.push(new THREE.Face3(n,o,p)),k.push([r.clone(),s,t.clone()]);
// console.log(this);
// magic bullet
// var diff = this.mergeVertices();
// console.log('removed ', diff, ' vertices by merging');
this.computeFaceNormals(),this.computeVertexNormals()},THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype),THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry,
// File:src/extras/geometries/WireframeGeometry.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.WireframeGeometry=function(a){function b(a,b){return a-b}THREE.BufferGeometry.call(this);var c=[0,0],d={},e=["a","b","c"];if(a instanceof THREE.Geometry){for(var f=a.vertices,g=a.faces,h=0,i=new Uint32Array(6*g.length),j=0,k=g.length;j<k;j++)for(var l=g[j],m=0;m<3;m++){c[0]=l[e[m]],c[1]=l[e[(m+1)%3]],c.sort(b);var n=c.toString();void 0===d[n]&&(i[2*h]=c[0],i[2*h+1]=c[1],d[n]=!0,h++)}for(var o=new Float32Array(2*h*3),j=0,k=h;j<k;j++)for(var m=0;m<2;m++){var p=f[i[2*j+m]],q=6*j+3*m;o[q+0]=p.x,o[q+1]=p.y,o[q+2]=p.z}this.addAttribute("position",new THREE.BufferAttribute(o,3))}else if(a instanceof THREE.BufferGeometry)if(null!==a.index){
// Indexed BufferGeometry
var r=a.index.array,f=a.attributes.position,s=a.groups,h=0;0===s.length&&a.addGroup(0,r.length);for(var i=new Uint32Array(2*r.length),t=0,u=s.length;t<u;++t)for(var v=s[t],w=v.start,x=v.count,j=w,y=w+x;j<y;j+=3)for(var m=0;m<3;m++){c[0]=r[j+m],c[1]=r[j+(m+1)%3],c.sort(b);var n=c.toString();void 0===d[n]&&(i[2*h]=c[0],i[2*h+1]=c[1],d[n]=!0,h++)}for(var o=new Float32Array(2*h*3),j=0,k=h;j<k;j++)for(var m=0;m<2;m++){var q=6*j+3*m,z=i[2*j+m];o[q+0]=f.getX(z),o[q+1]=f.getY(z),o[q+2]=f.getZ(z)}this.addAttribute("position",new THREE.BufferAttribute(o,3))}else{for(var f=a.attributes.position.array,h=f.length/3,A=h/3,o=new Float32Array(2*h*3),j=0,k=A;j<k;j++)for(var m=0;m<3;m++){var q=18*j+6*m,B=9*j+3*m;o[q+0]=f[B],o[q+1]=f[B+1],o[q+2]=f[B+2];var z=9*j+3*((m+1)%3);o[q+3]=f[z],o[q+4]=f[z+1],o[q+5]=f[z+2]}this.addAttribute("position",new THREE.BufferAttribute(o,3))}},THREE.WireframeGeometry.prototype=Object.create(THREE.BufferGeometry.prototype),THREE.WireframeGeometry.prototype.constructor=THREE.WireframeGeometry,
// File:src/extras/helpers/AxisHelper.js
/**
 * @author sroucheray / http://sroucheray.org/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]),d=new THREE.BufferGeometry;d.addAttribute("position",new THREE.BufferAttribute(b,3)),d.addAttribute("color",new THREE.BufferAttribute(c,3));var e=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,d,e)},THREE.AxisHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.AxisHelper.prototype.constructor=THREE.AxisHelper,
// File:src/extras/helpers/ArrowHelper.js
/**
 * @author WestLangley / http://github.com/WestLangley
 * @author zz85 / http://github.com/zz85
 * @author bhouston / http://clara.io
 *
 * Creates an arrow for visualizing directions
 *
 * Parameters:
 *  dir - Vector3
 *  origin - Vector3
 *  length - Number
 *  color - color in hex value
 *  headLength - Number
 *  headWidth - Number
 */
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);return b.translate(0,-.5,0),function(c,d,e,f,g,h){
// dir is assumed to be normalized
THREE.Object3D.call(this),void 0===f&&(f=16776960),void 0===e&&(e=1),void 0===g&&(g=.2*e),void 0===h&&(h=.2*g),this.position.copy(d),this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(c),this.setLength(e,g,h)}}(),THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper,THREE.ArrowHelper.prototype.setDirection=function(){var a,b=new THREE.Vector3;return function(c){
// dir is assumed to be normalized
c.y>.99999?this.quaternion.set(0,0,0,1):c.y<-.99999?this.quaternion.set(1,0,0,0):(b.set(c.z,0,-c.x).normalize(),a=Math.acos(c.y),this.quaternion.setFromAxisAngle(b,a))}}(),THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a),void 0===c&&(c=.2*b),this.line.scale.set(1,Math.max(0,a-b),1),this.line.updateMatrix(),this.cone.scale.set(c,b,c),this.cone.position.y=a,this.cone.updateMatrix()},THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a),this.cone.material.color.set(a)},
// File:src/extras/helpers/BoxHelper.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.BoxHelper=function(a){var b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),c=new Float32Array(24),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(b,1)),d.addAttribute("position",new THREE.BufferAttribute(c,3)),THREE.LineSegments.call(this,d,new THREE.LineBasicMaterial({color:16776960})),void 0!==a&&this.update(a)},THREE.BoxHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.BoxHelper.prototype.constructor=THREE.BoxHelper,THREE.BoxHelper.prototype.update=function(){var a=new THREE.Box3;return function(b){if(b instanceof THREE.Box3?a.copy(b):a.setFromObject(b),!a.isEmpty()){var c=a.min,d=a.max,e=this.geometry.attributes.position,f=e.array;f[0]=d.x,f[1]=d.y,f[2]=d.z,f[3]=c.x,f[4]=d.y,f[5]=d.z,f[6]=c.x,f[7]=c.y,f[8]=d.z,f[9]=d.x,f[10]=c.y,f[11]=d.z,f[12]=d.x,f[13]=d.y,f[14]=c.z,f[15]=c.x,f[16]=d.y,f[17]=c.z,f[18]=c.x,f[19]=c.y,f[20]=c.z,f[21]=d.x,f[22]=c.y,f[23]=c.z,e.needsUpdate=!0,this.geometry.computeBoundingSphere()}}}(),
// File:src/extras/helpers/BoundingBoxHelper.js
/**
 * @author WestLangley / http://github.com/WestLangley
 */
// a helper to show the world-axis-aligned bounding box for an object
THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a,this.box=new THREE.Box3,THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))},THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype),THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper,THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object),this.box.size(this.scale),this.box.center(this.position)},
// File:src/extras/helpers/CameraHelper.js
/**
 * @author alteredq / http://alteredqualia.com/
 *
 *	- shows frustum, line of sight and up of the camera
 *	- suitable for fast updates
 * 	- based on frustum visualization in lightgl.js shadowmap example
 *		http://evanw.github.com/lightgl.js/tests/shadowmap.html
 */
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d),c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3),d.colors.push(new THREE.Color(b)),void 0===f[a]&&(f[a]=[]),f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={},g=16755200,h=16711680,i=43775,j=16777215,k=3355443;
// near
b("n1","n2",g),b("n2","n4",g),b("n4","n3",g),b("n3","n1",g),
// far
b("f1","f2",g),b("f2","f4",g),b("f4","f3",g),b("f3","f1",g),
// sides
b("n1","f1",g),b("n2","f2",g),b("n3","f3",g),b("n4","f4",g),
// cone
b("p","n1",h),b("p","n2",h),b("p","n3",h),b("p","n4",h),
// up
b("u1","u2",i),b("u2","u3",i),b("u3","u1",i),
// target
b("c","t",j),b("p","c",k),
// cross
b("cn1","cn2",k),b("cn3","cn4",k),b("cf1","cf2",k),b("cf3","cf4",k),THREE.LineSegments.call(this,d,e),this.camera=a,this.camera.updateProjectionMatrix(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=f,this.update()},THREE.CameraHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.CameraHelper.prototype.constructor=THREE.CameraHelper,THREE.CameraHelper.prototype.update=function(){function a(a,f,g,h){d.set(f,g,h).unproject(e);var i=c[a];if(void 0!==i)for(var j=0,k=i.length;j<k;j++)b.vertices[i[j]].copy(d)}var b,c,d=new THREE.Vector3,e=new THREE.Camera;return function(){b=this.geometry,c=this.pointMap;var d=1,f=1;
// we need just camera projection matrix
// world matrix must be identity
e.projectionMatrix.copy(this.camera.projectionMatrix),
// center / target
a("c",0,0,-1),a("t",0,0,1),
// near
a("n1",-d,-f,-1),a("n2",d,-f,-1),a("n3",-d,f,-1),a("n4",d,f,-1),
// far
a("f1",-d,-f,1),a("f2",d,-f,1),a("f3",-d,f,1),a("f4",d,f,1),
// up
a("u1",.7*d,1.1*f,-1),a("u2",.7*-d,1.1*f,-1),a("u3",0,2*f,-1),
// cross
a("cf1",-d,0,1),a("cf2",d,0,1),a("cf3",0,-f,1),a("cf4",0,f,1),a("cn1",-d,0,-1),a("cn2",d,0,-1),a("cn3",0,-f,-1),a("cn4",0,f,-1),b.verticesNeedUpdate=!0}}(),
// File:src/extras/helpers/DirectionalLightHelper.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 */
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.lightPlane=new THREE.Line(c,d),this.add(this.lightPlane),c=new THREE.Geometry,c.vertices.push(new THREE.Vector3,new THREE.Vector3),d=new THREE.LineBasicMaterial({fog:!1}),d.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.targetLine=new THREE.Line(c,d),this.add(this.targetLine),this.update()},THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper,THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()},THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld),b.setFromMatrixPosition(this.light.target.matrixWorld),c.subVectors(b,a),this.lightPlane.lookAt(c),this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),this.targetLine.geometry.vertices[1].copy(c),this.targetLine.geometry.verticesNeedUpdate=!0,this.targetLine.material.color.copy(this.lightPlane.material.color)}}(),
// File:src/extras/helpers/EdgesHelper.js
/**
 * @author WestLangley / http://github.com/WestLangley
 * @param object THREE.Mesh whose geometry will be used
 * @param hex line color
 * @param thresholdAngle the minimum angle (in degrees),
 * between the face normals of adjacent faces,
 * that is required to render an edge. A value of 10 means
 * an edge is only rendered if the angle is at least 10 degrees.
 */
THREE.EdgesHelper=function(a,b,c){var d=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.EdgesGeometry(a.geometry,c),new THREE.LineBasicMaterial({color:d})),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1},THREE.EdgesHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper,
// File:src/extras/helpers/FaceNormalsHelper.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
THREE.FaceNormalsHelper=function(a,b,c,d){
// FaceNormalsHelper only supports THREE.Geometry
this.object=a,this.size=void 0!==b?b:1;var e=void 0!==c?c:16776960,f=void 0!==d?d:1,g=0,h=this.object.geometry;h instanceof THREE.Geometry?g=h.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
//
var i=new THREE.BufferGeometry,j=new THREE.Float32Attribute(2*g*3,3);i.addAttribute("position",j),THREE.LineSegments.call(this,i,new THREE.LineBasicMaterial({color:e,linewidth:f})),
//
this.matrixAutoUpdate=!1,this.update()},THREE.FaceNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper,THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){this.object.updateMatrixWorld(!0),c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,h=f.faces,i=0,j=0,k=h.length;j<k;j++){var l=h[j],m=l.normal;a.copy(g[l.a]).add(g[l.b]).add(g[l.c]).divideScalar(3).applyMatrix4(d),b.copy(m).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),e.setXYZ(i,a.x,a.y,a.z),i+=1,e.setXYZ(i,b.x,b.y,b.z),i+=1}return e.needsUpdate=!0,this}}(),
// File:src/extras/helpers/GridHelper.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924),this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.LineSegments.call(this,c,d)},THREE.GridHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.GridHelper.prototype.constructor=THREE.GridHelper,THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a),this.color2.set(b),this.geometry.colorsNeedUpdate=!0},
// File:src/extras/helpers/HemisphereLightHelper.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.rotateX(-Math.PI/2);for(var d=0,e=8;d<e;d++)c.faces[d].color=this.colors[d<4?0:1];var f=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,f),this.add(this.lightSphere),this.update()},THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper,THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose(),this.lightSphere.material.dispose()},THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate()),this.lightSphere.geometry.colorsNeedUpdate=!0}}(),
// File:src/extras/helpers/PointLightHelper.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */
THREE.PointLightHelper=function(a,b){this.light=a,this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity),THREE.Mesh.call(this,c,d),this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1},THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype),THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper,THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()},THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)},
// File:src/extras/helpers/SkeletonHelper.js
/**
 * @author Sean Griffin / http://twitter.com/sgrif
 * @author Michael Guerrero / http://realitymeltdown.com
 * @author mrdoob / http://mrdoob.com/
 * @author ikerr / http://verold.com
 */
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++){var d=this.bones[c];d.parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)))}b.dynamic=!0;var e=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.LineSegments.call(this,b,e),this.root=a,this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.update()},THREE.SkeletonHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper,THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b},THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0,a.computeBoundingSphere()},
// File:src/extras/helpers/SpotLightHelper.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1;for(var b=new THREE.BufferGeometry,c=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],d=0,e=1,f=32;d<f;d++,e++){var g=d/f*Math.PI*2,h=e/f*Math.PI*2;c.push(Math.cos(g),Math.sin(g),1,Math.cos(h),Math.sin(h),1)}b.addAttribute("position",new THREE.Float32Attribute(c,3));var i=new THREE.LineBasicMaterial({fog:!1});this.cone=new THREE.LineSegments(b,i),this.add(this.cone),this.update()},THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype),THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper,THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()},THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1e3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c),a.setFromMatrixPosition(this.light.matrixWorld),b.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(b.sub(a)),this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}(),
// File:src/extras/helpers/VertexNormalsHelper.js
/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
*/
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a,this.size=void 0!==b?b:1;var e=void 0!==c?c:16711680,f=void 0!==d?d:1,g=0,h=this.object.geometry;h instanceof THREE.Geometry?g=3*h.faces.length:h instanceof THREE.BufferGeometry&&(g=h.attributes.normal.count);
//
var i=new THREE.BufferGeometry,j=new THREE.Float32Attribute(2*g*3,3);i.addAttribute("position",j),THREE.LineSegments.call(this,i,new THREE.LineBasicMaterial({color:e,linewidth:f})),
//
this.matrixAutoUpdate=!1,this.update()},THREE.VertexNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper,THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0),c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g instanceof THREE.Geometry)for(var h=g.vertices,i=g.faces,j=0,k=0,l=i.length;k<l;k++)for(var m=i[k],n=0,o=m.vertexNormals.length;n<o;n++){var p=h[m[d[n]]],q=m.vertexNormals[n];a.copy(p).applyMatrix4(e),b.copy(q).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(j,a.x,a.y,a.z),j+=1,f.setXYZ(j,b.x,b.y,b.z),j+=1}else if(g instanceof THREE.BufferGeometry)
// for simplicity, ignore index and drawcalls, and render every normal
for(var r=g.attributes.position,s=g.attributes.normal,j=0,n=0,o=r.count;n<o;n++)a.set(r.getX(n),r.getY(n),r.getZ(n)).applyMatrix4(e),b.set(s.getX(n),s.getY(n),s.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(j,a.x,a.y,a.z),j+=1,f.setXYZ(j,b.x,b.y,b.z),j+=1;return f.needsUpdate=!0,this}}(),
// File:src/extras/helpers/WireframeHelper.js
/**
 * @author mrdoob / http://mrdoob.com/
 */
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.WireframeGeometry(a.geometry),new THREE.LineBasicMaterial({color:c})),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1},THREE.WireframeHelper.prototype=Object.create(THREE.LineSegments.prototype),THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper,
// File:src/extras/objects/ImmediateRenderObject.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.ImmediateRenderObject=function(a){THREE.Object3D.call(this),this.material=a,this.render=function(a){}},THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype),THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject,
// File:src/extras/objects/MorphBlendMesh.js
/**
 * @author alteredq / http://alteredqualia.com/
 */
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b),this.animationsMap={},this.animationsList=[];
// prepare default animation
// (all frames played together in 1 second)
var c=this.geometry.morphTargets.length,d="__default",e=0,f=c-1,g=c/1;this.createAnimation(d,e,f,g),this.setAnimationWeight(d,1)},THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype),THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh,THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){var e={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=e,this.animationsList.push(e)},THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b,c=/([a-z]+)_?(\d+)/i,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f],i=h.name.match(c);if(i&&i.length>1){var j=i[1];d[j]||(d[j]={start:1/0,end:-(1/0)});var k=d[j];f<k.start&&(k.start=f),f>k.end&&(k.end=f),b||(b=j)}}for(var j in d){var k=d[j];this.createAnimation(j,k.start,k.end,a)}this.firstAnimation=b},THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){var b=this.animationsMap[a];b&&(b.direction=1,b.directionBackwards=!1)},THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){var b=this.animationsMap[a];b&&(b.direction=-1,b.directionBackwards=!0)},THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)},THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)},THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)},THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)},THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0,c=this.animationsMap[a];return c&&(b=c.time),b},THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1,c=this.animationsMap[a];return c&&(b=c.duration),b},THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")},THREE.MorphBlendMesh.prototype.stopAnimation=function(a){var b=this.animationsMap[a];b&&(b.active=!1)},THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a,d.mirroredLoop?(d.time>d.duration||d.time<0)&&(d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),d.time<0&&(d.time=0,d.directionBackwards=!1)):(d.time=d.time%d.duration,d.time<0&&(d.time+=d.duration));var f=d.start+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);var h=d.time%e/e;d.directionBackwards&&(h=1-h),d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=h*g,this.morphTargetInfluences[d.lastFrame]=(1-h)*g):this.morphTargetInfluences[d.currentFrame]=g}}};