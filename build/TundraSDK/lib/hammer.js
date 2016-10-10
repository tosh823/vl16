/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function e(a,b,c){return setTimeout(k(a,c),b)}/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function f(a,b,c){return!!Array.isArray(a)&&(g(a,c[b],c),!0)}/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge]
 * @returns {Object} dest
 */
function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
function i(a,b){return h(a,b,!0)}/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function k(a,b){return function(){return a.apply(b,arguments)}}/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function m(a,b){return a===d?b:a}/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function q(a,b){return a.indexOf(b)>-1}/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function r(a){return a.trim().split(/\s+/g)}/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function t(a){return Array.prototype.slice.call(a,0)}/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,
// smaller wrapper around the handler, for the scope and the enabled state of the manager,
// so when disabled the input events are completely bypassed.
this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&d-e===0,g=b&(Aa|Ba)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),
// source event is the normalized value of the domEvents
// like 'touchstart, mouseup, pointerdown'
c.eventType=b,
// compute scale, rotation etc
B(a,c),
// emit secret event
a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function B(a,b){var c=a.session,d=b.pointers,e=d.length;
// store the first input to calculate the distance and direction
c.firstInput||(c.firstInput=E(b)),
// to compute scale and rotation we need to store the multiple touches
e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);
// find the correct target
var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==ya&&f.eventType!==Aa||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else
// use latest velocity info if it doesn't overtake a minimum period
c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function E(a){for(
// make a simple copy of the pointers because we will get a reference if we don't
// we only need clientXY for the calculations
var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function F(a){var b=a.length;
// no need to loop when only one touch
if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;e<b;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function G(a,b,c){return{x:b/a||0,y:c/a||0}}/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,// used by Input.TouchMouse to disable mouse events
this.pressed=!1,// mousedown state
y.apply(this,arguments)}/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function R(a,b){var c=t(a.touches),d=this.targetIds;
// when there is only one touch, the process can be simplified
if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;
// collect touches
if(
// get target touches from touches
f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(
// filter changed touches to only contain touches that exist in the collected target ids
e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),
// cleanup removed touches
b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[
// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
u(f.concat(h),"identifier",!0),h]:void 0}/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */
function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function T(a,b){this.manager=a,this.set(b)}/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function U(a){
// none
if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);
// pan-x and pan-y can be combined
// pan-x and pan-y can be combined
// pan-x OR pan-y
// manipulation
return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),
// default is enable true
this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function Y(a,b){var c=b.manager;return c?c.get(a):a}/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function Z(){V.apply(this,arguments)}/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function _(){Z.apply(this,arguments)}/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function aa(){V.apply(this,arguments),this._timer=null,this._input=null}/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function ba(){Z.apply(this,arguments)}/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function ca(){Z.apply(this,arguments)}/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function da(){V.apply(this,arguments),
// previous time and center,
// used for tap counting
this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}/**
 * Simple way to create an manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={/**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
handler:function(){},/**
     * bind the events
     */
init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},/**
     * unbind the events
     */
destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{/**
     * handle mouse events
     * @param {Object} ev
     */
handler:function(a){var b=Ma[a.type];
// on start we want to have the left mouse button down
b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),
// mouse must be down, and mouse events are allowed (see the TouchMouse input)
this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";
// IE10 has prefixed support, and case-sensitive
a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{/**
     * handle mouse events
     * @param {Object} ev
     */
handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");
// start and mouse must be down
e&ya&&(0===a.button||g)?h<0&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),
// it not found, so the pointer hasn't been down (so it's probably a hover)
h<0||(
// update the event in the store
b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&
// remove from the store
b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(
// should we handle the touch events?
b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);
// when done, reset the started state
b&(Aa|Ba)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{/**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;
// when we're in a touch event, so  block all upcoming mouse events
// most mobile browser also emit mouseevents, right after touchstart
if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;
// reset the allowMouse when we're done
b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},/**
     * remove the event listeners
     */
destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={/**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
set:function(a){
// find out the touch-action by the event handlers
a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},/**
     * just re-set the touchAction value
     */
update:function(){this.set(this.manager.options.touchAction)},/**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},/**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
preventDefaults:function(a){
// not needed with native support for the touchAction property
if(!Za){var b=a.srcEvent,c=a.offsetDirection;
// if the touch action did prevented once this session
if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},/**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={/**
     * @virtual
     * @type {Object}
     */
defaults:{},/**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
set:function(a){
// also update the touchAction, in case something changed about the directions/enabled state
return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},/**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},/**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},/**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),s(b,a)===-1&&(b.push(a),a.requireFailure(this)),this},/**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},/**
     * has require failures boolean
     * @returns {boolean}
     */
hasRequireFailures:function(){return this.requireFail.length>0},/**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
canRecognizeWith:function(a){return!!this.simultaneous[a.id]},/**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;
// 'panstart' and 'panmove'
d<hb&&b(!0),b(),// simple 'eventName' events
// panend and pancancel
d>=hb&&b(!0)},/**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
tryEmit:function(a){
// it's failing anyway
return this.canEmit()?this.emit(a):void(this.state=kb)},/**
     * can we emit?
     * @returns {boolean}
     */
canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},/**
     * update the recognizer
     * @param {Object} inputData
     */
recognize:function(a){
// make a new copy of the inputData
// so we can change the inputData without messing up the other recognizers
var b=h({},a);
// is is enabled and allow recognizing?
// is is enabled and allow recognizing?
// reset when we've reached the end
// the recognizer has recognized a gesture
// so trigger an event
return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},/**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
process:function(a){},// jshint ignore:line
/**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
getTouchAction:function(){},/**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
reset:function(){}},j(Z,V,{/**
     * @namespace
     * @memberof AttrRecognizer
     */
defaults:{/**
         * @type {Number}
         * @default 1
         */
pointers:1},/**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},/**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);
// on cancel input and we've recognized before, return STATE_CANCELLED
// on cancel input and we've recognized before, return STATE_CANCELLED
return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{/**
     * @namespace
     * @memberof PanRecognizer
     */
defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;
// lock to axis?
return e&b.direction||(b.direction&Ha?(e=0===f?Ca:f<0?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:g<0?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{/**
     * @namespace
     * @memberof PinchRecognizer
     */
defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{/**
     * @namespace
     * @memberof PressRecognizer
     */
defaults:{event:"press",pointers:1,time:500,// minimal time of the pointer to be pressed
threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;
// we only allow little movement
// and we've reached an end event, so a tap is possible
if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{/**
     * @namespace
     * @memberof RotateRecognizer
     */
defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{/**
     * @namespace
     * @memberof SwipeRecognizer
     */
defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{/**
     * @namespace
     * @memberof PinchRecognizer
     */
defaults:{event:"tap",pointers:1,taps:1,interval:300,// max time between the multi-tap taps
time:250,// max time of the pointer to be down (like finger on the screen)
threshold:2,// a minimal movement is ok, but keep it low
posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();
// we only allow little movement
// and we've reached an end event, so a tap is possible
if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=!this.pTime||a.timeStamp-this.pTime<b.interval,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;
// if tap count matches we have recognized it,
// else it has began recognizing...
var i=this.count%b.taps;if(0===i)
// no failing requirements, immediately trigger the tap event
// or wait as long as the multitap interval to trigger
// no failing requirements, immediately trigger the tap event
// or wait as long as the multitap interval to trigger
return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),/**
 * @const {string}
 */
ea.VERSION="2.0.4",/**
 * default settings
 * @namespace
 */
ea.defaults={/**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
domEvents:!1,/**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
touchAction:$a,/**
     * @type {Boolean}
     * @default true
     */
enable:!0,/**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
inputTarget:null,/**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
inputClass:null,/**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
preset:[
// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],/**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
cssProps:{/**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
userSelect:"none",/**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
touchSelect:"none",/**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
touchCallout:"none",/**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
contentZooming:"none",/**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
userDrag:"none",/**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={/**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
set:function(a){
// Options that need a little more setup
// Clean up existing event listeners and reinitialize
return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},/**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
stop:function(a){this.session.stopped=a?mb:lb},/**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
recognize:function(a){var b=this.session;if(!b.stopped){
// run the touch-action polyfill
this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;
// reset when the last recognizer is recognized
// or when we're in a new session
(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],
// find out if we are allowed try to recognize the input for this one.
// 1.   allow if the session is NOT forced stopped (see the .stop() method)
// 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
//      that is being recognized.
// 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
//      this can be setup with the `recognizeWith()` method on the recognizer.
b.stopped===mb||// 1
e&&c!=e&&// 2
!c.canRecognizeWith(e)?c.reset():// 3
c.recognize(a),
// if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
// current active recognizer. but only if we don't already have an active recognizer
!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},/**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},/**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
add:function(a){if(f(a,"add",this))return this;
// remove existing
var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},/**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},/**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},/**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},/**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
emit:function(a,b){
// we also want to trigger dom events
this.options.domEvents&&ha(a,b);
// no handlers, so skip it all
var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},/**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define("lib/hammer",[],function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer");