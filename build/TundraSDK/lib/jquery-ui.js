!function(a,b){
// selectors
function c(b,c){var e,f,g,h=b.nodeName.toLowerCase();
// the element and all of its ancestors must be visible
return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap=#"+f+"]")[0],!!g&&d(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&d(b)}function d(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}var e=0,f=/^ui-id-\d+$/;
// $.ui might exist from components with no dependencies, e.g., $.ui.position
a.ui=a.ui||{},a.extend(a.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),
// plugins
a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),scrollParent:function(){var b;return b=a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length)for(var d,e,f=a(this[0]);f.length&&f[0]!==document;){if(
// Ignore z-index if position is set to a value where z-index is ignored by the browser
// This makes behavior of this function consistent across browsers
// WebKit always returns auto if the element is positioned
d=f.css("position"),("absolute"===d||"relative"===d||"fixed"===d)&&(
// IE returns 0 when zIndex is not specified
// other browsers return a string
// we ignore the case of nested elements with an explicit value of 0
// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
e=parseInt(f.css("zIndex"),10),!isNaN(e)&&0!==e))return e;f=f.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})},removeUniqueId:function(){return this.each(function(){f.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):
// support: jQuery <1.8
function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),
// support: jQuery <1.8
a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function e(b,c,d,e){return a.each(f,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),e&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var f="Width"===d?["Left","Right"]:["Top","Bottom"],g=d.toLowerCase(),h={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?h["inner"+d].call(this):this.each(function(){a(this).css(g,e(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return"number"!=typeof b?h["outer"+d].call(this,b):this.each(function(){a(this).css(g,e(this,b,!0,c)+"px")})}}),
// support: jQuery <1.8
a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),
// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),
// deprecated
a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{
// $.ui.plugin is deprecated. Use $.widget() extensions instead.
plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(e&&a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType)for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},
// only used by resizable
hasScroll:function(b,c){
//If overflow is hidden, the element might have extra content, but the user wants to hide it
if("hidden"===a(b).css("overflow"))return!1;var d=c&&"left"===c?"scrollLeft":"scrollTop",e=!1;
// TODO: determine which cases actually cause this to happen
// if the element doesn't have the scroll set, see if it's possible to
// set the scroll
return b[d]>0||(b[d]=1,e=b[d]>0,b[d]=0,e)}})}(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c,d=0;null!=(c=b[d]);d++)try{a(c).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,
// proxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
i={},j=b.split(".")[0];b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),
// create selector for plugin
a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){
// allow instantiation without "new" keyword
// allow instantiation without "new" keyword
// allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
return this._createWidget?void(arguments.length&&this._createWidget(a,b)):new g(a,b)},
// extend with the existing constructor to carry over any static properties
a.extend(g,f,{version:d.version,
// copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:a.extend({},d),
// track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),h=new c,
// we need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
h.options=a.widget.extend({},h.options),a.each(d,function(b,d){return a.isFunction(d)?void(i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b,c=this._super,f=this._superApply;return this._super=a,this._superApply=e,b=d.apply(this,arguments),this._super=c,this._superApply=f,b}}()):void(i[b]=d)}),g.prototype=a.widget.extend(h,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:f?h.widgetEventPrefix:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;
// redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),
// remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){for(var e,f,g=d.call(arguments,1),h=0,i=g.length;h<i;h++)for(e in g[h])f=g[h][e],g[h].hasOwnProperty(e)&&f!==b&&(
// Clone objects
a.isPlainObject(f)?c[e]=a.isPlainObject(c[e])?a.widget.extend({},c[e],f):
// Don't extend strings, arrays, etc. with objects
a.widget.extend({},f):c[e]=f);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h="string"==typeof g,i=d.call(arguments,1),j=this;
// allow multiple hashes to be passed on init
return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);return e?a.isFunction(e[g])&&"_"!==g.charAt(0)?(d=e[g].apply(e,i),d!==e&&d!==b?(j=d&&d.jquery?j.pushStack(d.get()):d,!1):void 0):a.error("no such method '"+g+"' for "+c+" widget instance"):a.error("cannot call methods on "+c+" prior to initialization; attempted to call method '"+g+"'")}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,
// callbacks
create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?
// element within the document
d.ownerDocument:
// element is window or document
d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),
// we can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),
// clean up events and states
this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e,f,g,h=c;if(0===arguments.length)
// don't return a reference to the internal hash
return a.widget.extend({},this.options);if("string"==typeof c)if(
// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
h={},e=c.split("."),c=e.shift(),e.length){for(f=h[c]=a.widget.extend({},this.options[c]),g=0;g<e.length-1;g++)f[e[g]]=f[e[g]]||{},f=f[e[g]];if(c=e.pop(),d===b)return f[c]===b?null:f[c];f[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];h[c]=d}return this._setOptions(h),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;
// no suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof b&&(d=c,c=b,b=!1),
// no element argument, shuffle and use this.element
d?(
// accept selectors, DOM elements
c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){
// allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(b||f.options.disabled!==!0&&!a(this).hasClass("ui-state-disabled"))return("string"==typeof g?f[g]:g).apply(f,arguments)}
// copy the guid so direct unbinding works
"string"!=typeof g&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return("string"==typeof a?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];if(d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),
// the original event may come from any element
// so we need to reset the target on the new event
c.target=this.element[0],
// copy original event properties over to the new event
f=c.originalEvent)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){"string"==typeof e&&(e={effect:e});var g,h=e?e===!0||"number"==typeof e?c:e.effect||c:b;e=e||{},"number"==typeof e&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(){c=!1}),a.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){
// don't let more than one widget handle mouseStart
if(!c){
// we may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=1===b.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
f=!("string"!=typeof this.options.cancel||!b.target.nodeName)&&a(b.target).closest(this.options.cancel).length;
// Click event may never have fired (Gecko & Opera)
// these delegates are required to keep context
return!(e&&!f&&this._mouseCapture(b))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0))}},_mouseMove:function(b){
// IE mouseup check - mouseup happened when mouse was out of window
// IE mouseup check - mouseup happened when mouse was out of window
return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,
// callbacks
drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;
// among others, prevent a drag on a resizable-handle
// among others, prevent a drag on a resizable-handle
//Quit if we're not on a valid handle
return!(this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(b),!!this.handle&&(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0))},_mouseStart:function(b){var c=this.options;
//Trigger event + callbacks
//Create and append the visible helper
//Cache the helper size
//If ddmanager is used for droppables, set the global draggable
/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
//Store the helper's css position
//The element's absolute position on the page minus margins
//Reset scroll cache
//Generate the original position
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
//Set a containment if given in the options
//Trigger event + callbacks
//Recache the helper size
//Prepare the droppable offsets
//Execute the drag once - this causes the helper not to be visible before getting its correct position
//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,a.extend(this.offset,{click:{//Where the click happened, relative to the element
left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){
//Call plugins and callbacks and use the resulting position if something is returned
if(
// reset any necessary cached properties (see #5009)
"fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),
//Compute the helpers position
this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){
//If we are using droppables, inform the manager about the drop
var c=this,d=!1;
//if the original element is no longer in the DOM don't bother to continue (see #8269)
//if a drop comes from outside (a sortable)
//if the original element is no longer in the DOM don't bother to continue (see #8269)
return a.ui.ddmanager&&!this.options.dropBehaviour&&(d=a.ui.ddmanager.drop(this,b)),this.dropped&&(d=this.dropped,this.dropped=!1),!("original"===this.options.helper&&!a.contains(this.element[0].ownerDocument,this.element[0]))&&("invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",b)!==!1&&c._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1)},_mouseUp:function(b){
//Remove frame helpers
//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){return!this.options.handle||!!a(b.target).closest(this.element.find(this.options.handle)).length},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){
//Get the offsetParent and cache its position
var b=this.offsetParent.offset();
// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
//This needs to be actually done for all browsers, since pageX/pageY includes this information
//Ugly IE fix
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;return e.containment?"window"===e.containment?void(this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===e.containment?void(this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):e.containment.constructor===Array?void(this.containment=e.containment):("parent"===e.containment&&(e.containment=this.helper[0].parentNode),c=a(e.containment),d=c[0],void(d&&(b="hidden"!==c.css("overflow"),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c))):void(this.containment=null)},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;
//Cache the scroll
return this.offset.scroll||(this.offset.scroll={top:e.scrollTop(),left:e.scrollLeft()}),{top:c.top+// The absolute mouse position
this.offset.relative.top*d+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*d-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*d,left:c.left+// The absolute mouse position
this.offset.relative.left*d+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*d-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*d}},_generatePosition:function(b){var c,d,e,f,g=this.options,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=b.pageX,j=b.pageY;
//Cache the scroll
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
// If we are not dragging yet, we won't check for options
//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
return this.offset.scroll||(this.offset.scroll={top:h.scrollTop(),left:h.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(d=this.relative_container.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,b.pageX-this.offset.click.left<c[0]&&(i=c[0]+this.offset.click.left),b.pageY-this.offset.click.top<c[1]&&(j=c[1]+this.offset.click.top),b.pageX-this.offset.click.left>c[2]&&(i=c[2]+this.offset.click.left),b.pageY-this.offset.click.top>c[3]&&(j=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((j-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,j=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((i-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,i=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f)),{top:j-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:i-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},
// From now on bulk stuff - mainly helpers
_trigger:function(b,c,d){
//The absolute position has to be recalculated after plugins
return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),"drag"===b&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("ui-draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"ui-sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
c._trigger("activate",b,f))})},stop:function(b,c){
//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
var d=a(this).data("ui-draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,//Don't remove the helper in the draggable instance
this.instance.cancelHelperRemoval=!1,//Remove it in the sortable instance (so sortable plugins like revert still work)
//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: "valid/invalid"
this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),
//Trigger the stop of the sortable
this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,
//If the helper has been the original item, restore properties in the sortable
"original"===d.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,//Remove the helper in the sortable instance
this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("ui-draggable"),e=this;a.each(d.sortables,function(){var f=!1,g=this;
//Copy over some variables to allow calling the sortable's native _intersectsWith
this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f})),f?(
//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
this.instance.isOver||(this.instance.isOver=1,
//Now we fake the start of dragging for the sortable instance,
//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,//Store helper option to later restore it
this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),
//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,//draggable revert needs that
//hack so receive/update callbacks work (mostly)
d.currentItem=d.element,this.instance.fromOutside=d),
//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
this.instance.currentItem&&this.instance._mouseDrag(b)):
//If it doesn't intersect with the sortable, and it intersected before,
//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,
//Prevent reverting on this forced stop
this.instance.options.revert=!1,
// The out event needs to be triggered independently
this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,
//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(){var b=a("body"),c=a(this).data("ui-draggable").options;b.css("cursor")&&(c._cursor=b.css("cursor")),b.css("cursor",c.cursor)},stop:function(){var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&"HTML"!==b.scrollParent[0].tagName&&(b.overflowOffset=b.scrollParent.offset())},drag:function(b){var c=a(this).data("ui-draggable"),d=c.options,e=!1;c.scrollParent[0]!==document&&"HTML"!==c.scrollParent[0].tagName?(d.axis&&"x"===d.axis||(c.overflowOffset.top+c.scrollParent[0].offsetHeight-b.pageY<d.scrollSensitivity?c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop+d.scrollSpeed:b.pageY-c.overflowOffset.top<d.scrollSensitivity&&(c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop-d.scrollSpeed)),d.axis&&"y"===d.axis||(c.overflowOffset.left+c.scrollParent[0].offsetWidth-b.pageX<d.scrollSensitivity?c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft+d.scrollSpeed:b.pageX-c.overflowOffset.left<d.scrollSensitivity&&(c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft-d.scrollSpeed))):(d.axis&&"x"===d.axis||(b.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed))),d.axis&&"y"===d.axis||(b.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed)))),e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,b)}}),a.ui.plugin.add("draggable","snap",{start:function(){var b=a(this).data("ui-draggable"),c=b.options;b.snapElements=[],a(c.snap.constructor!==String?c.snap.items||":data(ui-draggable)":c.snap).each(function(){var c=a(this),d=c.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:d.top,left:d.left})})},drag:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=a(this).data("ui-draggable"),o=n.options,p=o.snapTolerance,q=c.offset.left,r=q+n.helperProportions.width,s=c.offset.top,t=s+n.helperProportions.height;for(l=n.snapElements.length-1;l>=0;l--)h=n.snapElements[l].left,i=h+n.snapElements[l].width,j=n.snapElements[l].top,k=j+n.snapElements[l].height,r<h-p||q>i+p||t<j-p||s>k+p||!a.contains(n.snapElements[l].item.ownerDocument,n.snapElements[l].item)?(n.snapElements[l].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=!1):("inner"!==o.snapMode&&(d=Math.abs(j-t)<=p,e=Math.abs(k-s)<=p,f=Math.abs(h-r)<=p,g=Math.abs(i-q)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j-n.helperProportions.height,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i}).left-n.margins.left)),m=d||e||f||g,"outer"!==o.snapMode&&(d=Math.abs(j-s)<=p,e=Math.abs(k-t)<=p,f=Math.abs(h-q)<=p,g=Math.abs(i-r)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k-n.helperProportions.height,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i-n.helperProportions.width}).left-n.margins.left)),!n.snapElements[l].snapping&&(d||e||f||g||m)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=d||e||f||g||m)}}),a.ui.plugin.add("draggable","stack",{start:function(){var b,c=this.data("ui-draggable").options,d=a.makeArray(a(c.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});d.length&&(b=parseInt(a(d[0]).css("zIndex"),10)||0,a(d).each(function(c){a(this).css("zIndex",b+c)}),this.css("zIndex",b+d.length))}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}a.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",
// callbacks
activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b=this.options,c=b.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},
//Store the droppable's proportions
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},
// Add the reference and positions to the manager
a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var b=0,c=a.ui.ddmanager.droppables[this.options.scope];b<c.length;b++)c[b]===this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){"accept"===b&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;
// Bail if draggable and droppable are same element
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;
// Bail if draggable and droppable are same element
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;
// Bail if draggable and droppable are same element
// Bail if draggable and droppable are same element
return!(!d||(d.currentItem||d.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"ui-droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope===d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),!e&&(!!this.accept.call(this.element[0],d.currentItem||d.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element)))},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(a,b,d){if(!b.offset)return!1;var e,f,g=(a.positionAbs||a.position.absolute).left,h=g+a.helperProportions.width,i=(a.positionAbs||a.position.absolute).top,j=i+a.helperProportions.height,k=b.offset.left,l=k+b.proportions.width,m=b.offset.top,n=m+b.proportions.height;switch(d){case"fit":return k<=g&&h<=l&&m<=i&&j<=n;case"intersect":// Right Half
// Left Half
// Bottom Half
return k<g+a.helperProportions.width/2&&h-a.helperProportions.width/2<l&&m<i+a.helperProportions.height/2&&j-a.helperProportions.height/2<n;// Top Half
case"pointer":return e=(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,f=(a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,c(f,m,b.proportions.height)&&c(e,k,b.proportions.width);case"touch":// Top edge touching
// Bottom edge touching
// Left edge touching
// Right edge touching
return(i>=m&&i<=n||j>=m&&j<=n||i<m&&j>n)&&(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l);default:return!1}},/*
	This manager tracks offsets of draggables and droppables
*/
a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,// workaround for #2317
h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();a:for(d=0;d<f.length;d++)
//No disabled and non-accepted
if(!(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))){
// Filter out elements in the current dragged item
for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions.height=0;continue a}f[d].visible="none"!==f[d].element.css("display"),f[d].visible&&(
//Activate the droppable if used directly from draggables
"mousedown"===g&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight})}},drop:function(b,c){var d=!1;
// Create a copy of the droppables in case the list changes during the drop (#9116)
return a.each((a.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))}),d},dragStart:function(b,c){
//Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){
//If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),
//Run through all droppables and check their positions based on specific tolerance options
a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;h&&(this.options.greedy&&(
// find droppable parents with same scope
e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e}),f.length&&(d=a.data(f[0],"ui-droppable"),d.greedyChild="isover"===h)),
// we just moved into a greedy child
d&&"isover"===h&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this["isout"===h?"isover":"isout"]=!1,this["isover"===h?"_over":"_out"].call(this,c),
// we just moved out of a greedy child
d&&"isout"===h&&(d.isout=!1,d.isover=!0,d._over.call(d,c)))}})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),
//Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery),function(a,b){function c(a){return parseInt(a,10)||0}function d(a){return!isNaN(parseInt(a,10))}a.widget("ui.resizable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,
// See #7960
zIndex:90,
// callbacks
resize:null,start:null,stop:null},_create:function(){var b,c,d,e,f,g=this,h=this.options;if(this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),
//Wrap the element if it cannot hold child nodes
this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(
//Create a wrapper element and set the wrapper to the new current internal element
this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),
//Overwrite the original this.element
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,
//Move margins to the wrapper
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),
//Prevent Safari textarea resize
this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),
//Push the actual element to our proportionallyResize internal array
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),
// avoid IE jump (hard set the margin)
this.originalElement.css({margin:this.originalElement.css("margin")}),
// fix handlers offset
this._proportionallyResize()),this.handles=h.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),b=this.handles.split(","),this.handles={},c=0;c<b.length;c++)d=a.trim(b[c]),f="ui-resizable-"+d,e=a("<div class='ui-resizable-handle "+f+"'></div>"),
// Apply zIndex to all handles - see #7960
e.css({zIndex:h.zIndex}),
//TODO : What's going on here?
"se"===d&&e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
//Insert into internal handles object and append to element
this.handles[d]=".ui-resizable-"+d,this.element.append(e);this._renderAxis=function(b){var c,d,e,f;b=b||this.element;for(c in this.handles)this.handles[c].constructor===String&&(this.handles[c]=a(this.handles[c],this.element).show()),
//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(d=a(this.handles[c],this.element),
//Checking the correct pad and border
f=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth(),
//The padding type i have to apply...
e=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join(""),b.css(e,f),this._proportionallyResize()),a(this.handles[c]).length},
//TODO: make renderAxis a prototype function
this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),
//Matching axis name
this._handles.mouseover(function(){g.resizing||(this.className&&(e=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
//Axis, default = se
g.axis=e&&e[1]?e[1]:"se")}),
//If we want to auto hide the elements
h.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(a(this).removeClass("ui-resizable-autohide"),g._handles.show())}).mouseleave(function(){h.disabled||g.resizing||(a(this).addClass("ui-resizable-autohide"),g._handles.hide())})),
//Initialize the mouse interaction
this._mouseInit()},_destroy:function(){this._mouseDestroy();var b,c=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
//TODO: Unwrap at same DOM position
return this.elementIsWrapper&&(c(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this},_mouseCapture:function(b){var c,d,e=!1;for(c in this.handles)d=a(this.handles[c])[0],(d===b.target||a.contains(d,b.target))&&(e=!0);return!this.options.disabled&&e},_mouseStart:function(b){var d,e,f,g=this.options,h=this.element.position(),i=this.element;
// bugfix for http://dev.jquery.com/ticket/1749
//Store needed variables
//Aspect Ratio
return this.resizing=!0,/absolute/.test(i.css("position"))?i.css({position:"absolute",top:i.css("top"),left:i.css("left")}):i.is(".ui-draggable")&&i.css({position:"absolute",top:h.top,left:h.left}),this._renderProxy(),d=c(this.helper.css("left")),e=c(this.helper.css("top")),g.containment&&(d+=a(g.containment).scrollLeft()||0,e+=a(g.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:e},this.size=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalSize=this._helper?{width:i.outerWidth(),height:i.outerHeight()}:{width:i.width(),height:i.height()},this.originalPosition={left:d,top:e},this.sizeDiff={width:i.outerWidth()-i.width(),height:i.outerHeight()-i.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio="number"==typeof g.aspectRatio?g.aspectRatio:this.originalSize.width/this.originalSize.height||1,f=a(".ui-resizable-"+this.axis).css("cursor"),a("body").css("cursor","auto"===f?this.axis+"-resize":f),i.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){
//Increase performance, avoid regex
var c,d=this.helper,e={},f=this.originalMousePosition,g=this.axis,h=this.position.top,i=this.position.left,j=this.size.width,k=this.size.height,l=b.pageX-f.left||0,m=b.pageY-f.top||0,n=this._change[g];
// Calculate the attrs that will be change
// Put this in the mouseDrag handler since the user can start pressing shift while resizing
// plugins callbacks need to be called first
// Call the user callback if the element was resized
return!!n&&(c=n.apply(this,[b,l,m]),this._updateVirtualBoundaries(b.shiftKey),(this._aspectRatio||b.shiftKey)&&(c=this._updateRatio(c,b)),c=this._respectSize(c,b),this._updateCache(c),this._propagate("resize",b),this.position.top!==h&&(e.top=this.position.top+"px"),this.position.left!==i&&(e.left=this.position.left+"px"),this.size.width!==j&&(e.width=this.size.width+"px"),this.size.height!==k&&(e.height=this.size.height+"px"),d.css(e),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),a.isEmptyObject(e)||this._trigger("resize",b,this.ui()),!1)},_mouseStop:function(b){this.resizing=!1;var c,d,e,f,g,h,i,j=this.options,k=this;return this._helper&&(c=this._proportionallyResizeElements,d=c.length&&/textarea/i.test(c[0].nodeName),e=d&&a.ui.hasScroll(c[0],"left")?0:k.sizeDiff.height,f=d?0:k.sizeDiff.width,g={width:k.helper.width()-f,height:k.helper.height()-e},h=parseInt(k.element.css("left"),10)+(k.position.left-k.originalPosition.left)||null,i=parseInt(k.element.css("top"),10)+(k.position.top-k.originalPosition.top)||null,j.animate||this.element.css(a.extend(g,{top:i,left:h})),k.helper.height(k.size.height),k.helper.width(k.size.width),this._helper&&!j.animate&&this._proportionallyResize()),a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b,c,e,f,g,h=this.options;g={minWidth:d(h.minWidth)?h.minWidth:0,maxWidth:d(h.maxWidth)?h.maxWidth:1/0,minHeight:d(h.minHeight)?h.minHeight:0,maxHeight:d(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||a)&&(
// We want to create an enclosing box whose aspect ration is the requested one
// First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
b=g.minHeight*this.aspectRatio,e=g.minWidth/this.aspectRatio,c=g.maxHeight*this.aspectRatio,f=g.maxWidth/this.aspectRatio,b>g.minWidth&&(g.minWidth=b),e>g.minHeight&&(g.minHeight=e),c<g.maxWidth&&(g.maxWidth=c),f<g.maxHeight&&(g.maxHeight=f)),this._vBoundaries=g},_updateCache:function(a){this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a){var b=this.position,c=this.size,e=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),"sw"===e&&(a.left=b.left+(c.width-a.width),a.top=null),"nw"===e&&(a.top=b.top+(c.height-a.height),a.left=b.left+(c.width-a.width)),a},_respectSize:function(a){var b=this._vBoundaries,c=this.axis,e=d(a.width)&&b.maxWidth&&b.maxWidth<a.width,f=d(a.height)&&b.maxHeight&&b.maxHeight<a.height,g=d(a.width)&&b.minWidth&&b.minWidth>a.width,h=d(a.height)&&b.minHeight&&b.minHeight>a.height,i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,k=/sw|nw|w/.test(c),l=/nw|ne|n/.test(c);
// fixing jump error on top/left - bug #2330
return g&&(a.width=b.minWidth),h&&(a.height=b.minHeight),e&&(a.width=b.maxWidth),f&&(a.height=b.maxHeight),g&&k&&(a.left=i-b.minWidth),e&&k&&(a.left=i-b.maxWidth),h&&l&&(a.top=j-b.minHeight),f&&l&&(a.top=j-b.maxHeight),a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null,a},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var a,b,c,d,e,f=this.helper||this.element;for(a=0;a<this._proportionallyResizeElements.length;a++){if(e=this._proportionallyResizeElements[a],!this.borderDif)for(this.borderDif=[],c=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],d=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")],b=0;b<c.length;b++)this.borderDif[b]=(parseInt(c[b],10)||0)+(parseInt(d[b],10)||0);e.css({height:f.height()-this.borderDif[0]-this.borderDif[2]||0,width:f.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||a("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(a,b){return{width:this.originalSize.width+b}},w:function(a,b){var c=this.originalSize,d=this.originalPosition;return{left:d.left+b,width:c.width-b}},n:function(a,b,c){var d=this.originalSize,e=this.originalPosition;return{top:e.top+c,height:d.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),"resize"!==b&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),/*
 * Resizable Extensions
 */
a.ui.plugin.add("resizable","animate",{stop:function(b){var c=a(this).data("ui-resizable"),d=c.options,e=c._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:c.sizeDiff.height,h=f?0:c.sizeDiff.width,i={width:c.size.width-h,height:c.size.height-g},j=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,k=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;c.element.animate(a.extend(i,k&&j?{top:k,left:j}:{}),{duration:d.animateDuration,easing:d.animateEasing,step:function(){var d={width:parseInt(c.element.css("width"),10),height:parseInt(c.element.css("height"),10),top:parseInt(c.element.css("top"),10),left:parseInt(c.element.css("left"),10)};e&&e.length&&a(e[0]).css({width:d.width,height:d.height}),
// propagating resize, and updating values for each animation step
c._updateCache(d),c._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(){var b,d,e,f,g,h,i,j=a(this).data("ui-resizable"),k=j.options,l=j.element,m=k.containment,n=m instanceof a?m.get(0):/parent/.test(m)?l.parent().get(0):m;n&&(j.containerElement=a(n),/document/.test(m)||m===document?(j.containerOffset={left:0,top:0},j.containerPosition={left:0,top:0},j.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight}):(b=a(n),d=[],a(["Top","Right","Left","Bottom"]).each(function(a,e){d[a]=c(b.css("padding"+e))}),j.containerOffset=b.offset(),j.containerPosition=b.position(),j.containerSize={height:b.innerHeight()-d[3],width:b.innerWidth()-d[1]},e=j.containerOffset,f=j.containerSize.height,g=j.containerSize.width,h=a.ui.hasScroll(n,"left")?n.scrollWidth:g,i=a.ui.hasScroll(n)?n.scrollHeight:f,j.parentData={element:n,left:e.left,top:e.top,width:h,height:i}))},resize:function(b){var c,d,e,f,g=a(this).data("ui-resizable"),h=g.options,i=g.containerOffset,j=g.position,k=g._aspectRatio||b.shiftKey,l={top:0,left:0},m=g.containerElement;m[0]!==document&&/static/.test(m.css("position"))&&(l=i),j.left<(g._helper?i.left:0)&&(g.size.width=g.size.width+(g._helper?g.position.left-i.left:g.position.left-l.left),k&&(g.size.height=g.size.width/g.aspectRatio),g.position.left=h.helper?i.left:0),j.top<(g._helper?i.top:0)&&(g.size.height=g.size.height+(g._helper?g.position.top-i.top:g.position.top),k&&(g.size.width=g.size.height*g.aspectRatio),g.position.top=g._helper?i.top:0),g.offset.left=g.parentData.left+g.position.left,g.offset.top=g.parentData.top+g.position.top,c=Math.abs((g._helper?g.offset.left-l.left:g.offset.left-l.left)+g.sizeDiff.width),d=Math.abs((g._helper?g.offset.top-l.top:g.offset.top-i.top)+g.sizeDiff.height),e=g.containerElement.get(0)===g.element.parent().get(0),f=/relative|absolute/.test(g.containerElement.css("position")),e&&f&&(c-=g.parentData.left),c+g.size.width>=g.parentData.width&&(g.size.width=g.parentData.width-c,k&&(g.size.height=g.size.width/g.aspectRatio)),d+g.size.height>=g.parentData.height&&(g.size.height=g.parentData.height-d,k&&(g.size.width=g.size.height*g.aspectRatio))},stop:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.containerOffset,e=b.containerPosition,f=b.containerElement,g=a(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width,j=g.outerHeight()-b.sizeDiff.height;b._helper&&!c.animate&&/relative/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j}),b._helper&&!c.animate&&/static/.test(f.css("position"))&&a(this).css({left:h.left-e.left-d.left,width:i,height:j})}}),a.ui.plugin.add("resizable","alsoResize",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=function(b){a(b).each(function(){var b=a(this);b.data("ui-resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};"object"!=typeof c.alsoResize||c.alsoResize.parentNode?d(c.alsoResize):c.alsoResize.length?(c.alsoResize=c.alsoResize[0],d(c.alsoResize)):a.each(c.alsoResize,function(a){d(a)})},resize:function(b,c){var d=a(this).data("ui-resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("ui-resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};"object"!=typeof e.alsoResize||e.alsoResize.nodeType?i(e.alsoResize):a.each(e.alsoResize,function(a,b){i(a,b)})},stop:function(){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","ghost",{start:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size;b.ghost=b.originalElement.clone(),b.ghost.css({opacity:.25,display:"block",position:"relative",height:d.height,width:d.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof c.ghost?c.ghost:""),b.ghost.appendTo(b.helper)},resize:function(){var b=a(this).data("ui-resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=a(this).data("ui-resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(){var b=a(this).data("ui-resizable"),c=b.options,d=b.size,e=b.originalSize,f=b.originalPosition,g=b.axis,h="number"==typeof c.grid?[c.grid,c.grid]:c.grid,i=h[0]||1,j=h[1]||1,k=Math.round((d.width-e.width)/i)*i,l=Math.round((d.height-e.height)/j)*j,m=e.width+k,n=e.height+l,o=c.maxWidth&&c.maxWidth<m,p=c.maxHeight&&c.maxHeight<n,q=c.minWidth&&c.minWidth>m,r=c.minHeight&&c.minHeight>n;c.grid=h,q&&(m+=i),r&&(n+=j),o&&(m-=i),p&&(n-=j),/^(se|s|e)$/.test(g)?(b.size.width=m,b.size.height=n):/^(ne)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.top=f.top-l):/^(sw)$/.test(g)?(b.size.width=m,b.size.height=n,b.position.left=f.left-k):(b.size.width=m,b.size.height=n,b.position.top=f.top-l,b.position.left=f.left-k)}})}(jQuery),function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",
// callbacks
selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass("ui-selectable"),this.dragged=!1,
// cache selectee children based on filter
this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass("ui-selectee"),b.each(function(){var b=a(this),c=b.offset();a.data(this,"selectable-item",{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass("ui-selected"),selecting:b.hasClass("ui-selecting"),unselecting:b.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger("start",b),a(d.appendTo).append(this.helper),
// position helper (lasso)
this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=a.data(this,"selectable-item");d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,
// selectable UNSELECTING callback
c._trigger("unselecting",b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,"selectable-item");if(e)
// selectable (UN)SELECTING callback
return d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger("selecting",b,{selecting:e.element}):c._trigger("unselecting",b,{unselecting:e.element}),!1}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f>h&&(c=h,h=f,f=c),g>i&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,"selectable-item"),j=!1;
//prevent helper from being selected if appendTo: selectable
c&&c.element!==d.element[0]&&("touch"===e.tolerance?j=!(c.left>h||c.right<f||c.top>i||c.bottom<g):"fit"===e.tolerance&&(j=c.left>f&&c.right<h&&c.top>g&&c.bottom<i),j?(
// SELECT
c.selected&&(c.$element.removeClass("ui-selected"),c.selected=!1),c.unselecting&&(c.$element.removeClass("ui-unselecting"),c.unselecting=!1),c.selecting||(c.$element.addClass("ui-selecting"),c.selecting=!0,
// selectable SELECTING callback
d._trigger("selecting",b,{selecting:c.element}))):(
// UNSELECT
c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.$element.addClass("ui-selected"),c.selected=!0):(c.$element.removeClass("ui-selecting"),c.selecting=!1,c.startselected&&(c.$element.addClass("ui-unselecting"),c.unselecting=!0),
// selectable UNSELECTING callback
d._trigger("unselecting",b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass("ui-selected"),c.selected=!1,c.$element.addClass("ui-unselecting"),c.unselecting=!0,
// selectable UNSELECTING callback
d._trigger("unselecting",b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(".ui-unselecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-unselecting"),d.unselecting=!1,d.startselected=!1,c._trigger("unselected",b,{unselected:d.element})}),a(".ui-selecting",this.element[0]).each(function(){var d=a.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected"),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger("selected",b,{selected:d.element})}),this._trigger("stop",b),this.helper.remove(),!1}})}(jQuery),function(a,b){/*jshint loopfunc: true */
function c(a,b,c){return a>b&&a<b+c}function d(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))}a.widget("ui.sortable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,
// callbacks
activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var a=this.options;this.containerCache={},this.element.addClass("ui-sortable"),
//Get the items
this.refresh(),
//Let's determine if the items are being displayed horizontally
this.floating=!!this.items.length&&("x"===a.axis||d(this.items[0].item)),
//Let's determine the parent's offset
this.offset=this.element.offset(),
//Initialize mouse events for interaction
this._mouseInit(),
//We're ready to go
this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData(this.widgetName+"-item");return this},_setOption:function(b,c){"disabled"===b?(this.options[b]=c,this.widget().toggleClass("ui-sortable-disabled",!!c)):
// Don't call widget base _setOption for disable as it adds ui-state-disabled class
a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(b,c){var d=null,e=!1,f=this;
//We have to refresh the items data once first
//Find out if the clicked node (or one of its parents) is a actual item in this.items
return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(b),a(b.target).parents().each(function(){if(a.data(this,f.widgetName+"-item")===f)return d=a(this),!1}),a.data(b.target,f.widgetName+"-item")===f&&(d=a(b.target)),!!d&&(!(this.options.handle&&!c&&(a(this.options.handle,d).find("*").addBack().each(function(){this===b.target&&(e=!0)}),!e))&&(this.currentItem=d,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(b,c,d){var e,f,g=this.options;
//Post "activate" events to possible containers
if(this.currentContainer=this,
//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
this.refreshPositions(),
//Create and append the visible helper
this.helper=this._createHelper(b),
//Cache the helper size
this._cacheHelperProportions(),/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */
//Cache the margins of the original element
this._cacheMargins(),
//Get the next scrolling parent
this.scrollParent=this.helper.scrollParent(),
//The element's absolute position on the page minus margins
this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{//Where the click happened, relative to the element
left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),
// Only after we got the offset, we can change the helper's position to absolute
// TODO: Still need to figure out a way to make relative sorting possible
this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),
//Generate the original position
this.originalPosition=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,
//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt),
//Cache the former DOM position
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},
//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),
//Create the placeholder
this._createPlaceholder(),
//Set a containment if given in the options
g.containment&&this._setContainment(),g.cursor&&"auto"!==g.cursor&&(// cursor option
f=this.document.find("body"),
// support: IE
this.storedCursor=f.css("cursor"),f.css("cursor",g.cursor),this.storedStylesheet=a("<style>*{ cursor: "+g.cursor+" !important; }</style>").appendTo(f)),g.opacity&&(// opacity option
this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",g.opacity)),g.zIndex&&(// zIndex option
this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",g.zIndex)),
//Prepare scrolling
this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),
//Call callbacks
this._trigger("start",b,this._uiHash()),
//Recache the helper size
this._preserveHelperProportions||this._cacheHelperProportions(),!d)for(e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("activate",b,this._uiHash(this));//Execute the drag once - this causes the helper not to be visible before getting its correct position
//Prepare possible droppables
return a.ui.ddmanager&&(a.ui.ddmanager.current=this),a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(b),!0},_mouseDrag:function(b){var c,d,e,f,g=this.options,h=!1;
//Rearrange
for(
//Compute the helpers position
this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),
//Do scrolling
this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-b.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+g.scrollSpeed:b.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-b.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+g.scrollSpeed:b.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(b.pageY-a(document).scrollTop()<g.scrollSensitivity?h=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<g.scrollSensitivity&&(h=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed)),b.pageX-a(document).scrollLeft()<g.scrollSensitivity?h=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<g.scrollSensitivity&&(h=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed))),h!==!1&&a.ui.ddmanager&&!g.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b)),
//Regenerate the absolute position used for position checks
this.positionAbs=this._convertPositionTo("absolute"),
//Set the helper position
this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;c>=0;c--)if(
//Cache variables and intersection, continue if no intersection
d=this.items[c],e=d.item[0],f=this._intersectsWithPointer(d),f&&d.instance===this.currentContainer&&!(e===this.currentItem[0]||this.placeholder[1===f?"next":"prev"]()[0]===e||a.contains(this.placeholder[0],e)||"semi-dynamic"===this.options.type&&a.contains(this.element[0],e))){if(this.direction=1===f?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(d))break;this._rearrange(b,d),this._trigger("change",b,this._uiHash());break}
//Post events to containers
//Interconnect with droppables
//Call callbacks
return this._contactContainers(b),a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),this._trigger("sort",b,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(b,c){if(b){if(
//If we are using droppables, inform the manager about the drop
a.ui.ddmanager&&!this.options.dropBehaviour&&a.ui.ddmanager.drop(this,b),this.options.revert){var d=this,e=this.placeholder.offset(),f=this.options.axis,g={};f&&"x"!==f||(g.left=e.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),f&&"y"!==f||(g.top=e.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,a(this.helper).animate(g,parseInt(this.options.revert,10)||500,function(){d._clear(b)})}else this._clear(b,c);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
//Post deactivating events to containers
for(var b=this.containers.length-1;b>=0;b--)this.containers[b]._trigger("deactivate",null,this._uiHash(this)),this.containers[b].containerCache.over&&(this.containers[b]._trigger("out",null,this._uiHash(this)),this.containers[b].containerCache.over=0)}
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),a.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?a(this.domPosition.prev).after(this.currentItem):a(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},a(c).each(function(){var c=(a(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);c&&d.push((b.key||c[1]+"[]")+"="+(b.key&&b.expression?c[1]:c[2]))}),!d.length&&b.key&&d.push(b.key+"="),d.join("&")},toArray:function(b){var c=this._getItemsAsjQuery(b&&b.connected),d=[];return b=b||{},c.each(function(){d.push(a(b.item||this).attr(b.attribute||"id")||"")}),d},/* Be careful with the following core functions */
_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,d=this.positionAbs.top,e=d+this.helperProportions.height,f=a.left,g=f+a.width,h=a.top,i=h+a.height,j=this.offset.click.top,k=this.offset.click.left,l="x"===this.options.axis||d+j>h&&d+j<i,m="y"===this.options.axis||b+k>f&&b+k<g,n=l&&m;// Right Half
// Left Half
// Bottom Half
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?n:f<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<g&&h<d+this.helperProportions.height/2&&e-this.helperProportions.height/2<i},_intersectsWithPointer:function(a){var b="x"===this.options.axis||c(this.positionAbs.top+this.offset.click.top,a.top,a.height),d="y"===this.options.axis||c(this.positionAbs.left+this.offset.click.left,a.left,a.width),e=b&&d,f=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();return!!e&&(this.floating?g&&"right"===g||"down"===f?2:1:f&&("down"===f?2:1))},_intersectsWithSides:function(a){var b=c(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height),d=c(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width),e=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();return this.floating&&f?"right"===f&&d||"left"===f&&!d:e&&("down"===e&&b||"up"===e&&!b)},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return 0!==a&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return 0!==a&&(a>0?"right":"left")},refresh:function(a){return this._refreshItems(a),this.refreshPositions(),this},_connectWith:function(){var a=this.options;return a.connectWith.constructor===String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(b){var c,d,e,f,g=[],h=[],i=this._connectWith();if(i&&b)for(c=i.length-1;c>=0;c--)for(e=a(i[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&h.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),f]);for(h.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),c=h.length-1;c>=0;c--)h[c][0].each(function(){g.push(this)});return a(g)},_removeCurrentsFromItems:function(){var b=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(a){for(var c=0;c<b.length;c++)if(b[c]===a.item[0])return!1;return!0})},_refreshItems:function(b){this.items=[],this.containers=[this];var c,d,e,f,g,h,i,j,k=this.items,l=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]],m=this._connectWith();if(m&&this.ready)//Shouldn't be run the first time through due to massive slow-down
for(c=m.length-1;c>=0;c--)for(e=a(m[c]),d=e.length-1;d>=0;d--)f=a.data(e[d],this.widgetFullName),f&&f!==this&&!f.options.disabled&&(l.push([a.isFunction(f.options.items)?f.options.items.call(f.element[0],b,{item:this.currentItem}):a(f.options.items,f.element),f]),this.containers.push(f));for(c=l.length-1;c>=0;c--)for(g=l[c][1],h=l[c][0],d=0,j=h.length;d<j;d++)i=a(h[d]),i.data(this.widgetName+"-item",g),// Data for target checking (mouse manager)
k.push({item:i,instance:g,width:0,height:0,left:0,top:0})},refreshPositions:function(b){
//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var c,d,e,f;for(c=this.items.length-1;c>=0;c--)d=this.items[c],
//We ignore calculating positions of all connected containers when we're not over them
d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(e=this.options.toleranceElement?a(this.options.toleranceElement,d.item):d.item,b||(d.width=e.outerWidth(),d.height=e.outerHeight()),f=e.offset(),d.left=f.left,d.top=f.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(c=this.containers.length-1;c>=0;c--)f=this.containers[c].element.offset(),this.containers[c].containerCache.left=f.left,this.containers[c].containerCache.top=f.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight();return this},_createPlaceholder:function(b){b=b||this;var c,d=b.options;d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=a("<"+d+">",b.document[0]).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===d?b.currentItem.children().each(function(){a("<td>&#160;</td>",b.document[0]).attr("colspan",a(this).attr("colspan")||1).appendTo(e)}):"img"===d&&e.attr("src",b.currentItem.attr("src")),c||e.css("visibility","hidden"),e},update:function(a,e){
// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
c&&!d.forcePlaceholderSize||(
//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
e.height()||e.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),e.width()||e.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))}}),
//Create the placeholder
b.placeholder=a(d.placeholder.element.call(b.element,b.currentItem)),
//Append it after the actual current item
b.currentItem.after(b.placeholder),
//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
d.placeholder.update(b,b.placeholder)},_contactContainers:function(b){var e,f,g,h,i,j,k,l,m,n,o=null,p=null;
// get innermost container that intersects with item
for(e=this.containers.length-1;e>=0;e--)
// never consider a container that's located within the item itself
if(!a.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){
// if we've already found a container and it's more "inner" than this, then continue
if(o&&a.contains(this.containers[e].element[0],o.element[0]))continue;o=this.containers[e],p=e}else
// container doesn't intersect. trigger "out" event if necessary
this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",b,this._uiHash(this)),this.containers[e].containerCache.over=0);
// if no intersecting containers found, return
if(o)
// move the item into the container if it's not there already
if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(
//When entering a new container, we will find the item with the least distance and append our item near it
g=1e4,h=null,n=o.floating||d(this.currentItem),i=n?"left":"top",j=n?"width":"height",k=this.positionAbs[i]+this.offset.click[i],f=this.items.length-1;f>=0;f--)a.contains(this.containers[p].element[0],this.items[f].item[0])&&this.items[f].item[0]!==this.currentItem[0]&&(n&&!c(this.positionAbs.top+this.offset.click.top,this.items[f].top,this.items[f].height)||(l=this.items[f].item.offset()[i],m=!1,Math.abs(l-k)>Math.abs(l+this.items[f][j]-k)&&(m=!0,l+=this.items[f][j]),Math.abs(l-k)<g&&(g=Math.abs(l-k),h=this.items[f],this.direction=m?"up":"down")));
//Check if dropOnEmpty is enabled
if(!h&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return;h?this._rearrange(b,h,null,!0):this._rearrange(b,null,this.containers[p].element,!0),this._trigger("change",b,this._uiHash()),this.containers[p]._trigger("change",b,this._uiHash(this)),this.currentContainer=this.containers[p],
//Update the placeholder
this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",b,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;
//Add the helper to the DOM if that didn't happen already
return d.parents("body").length||a("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),d[0].style.width&&!c.forceHelperSize||d.width(this.currentItem.width()),d[0].style.height&&!c.forceHelperSize||d.height(this.currentItem.height()),d},_adjustOffsetFromHelper:function(b){"string"==typeof b&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){
//Get the offsetParent and cache its position
this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();
// This is a special case where we need to modify a offset calculated on start, since the following happened:
// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
// This needs to be actually done for all browsers, since pageX/pageY includes this information
// with an ugly IE fix
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&a.ui.ie)&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;"parent"===e.containment&&(e.containment=this.helper[0].parentNode),"document"!==e.containment&&"window"!==e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a("document"===e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(a("document"===e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(e.containment)||(b=a(e.containment)[0],c=a(e.containment).offset(),d="hidden"!==a(b).css("overflow"),this.containment=[c.left+(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(b,c){c||(c=this.position);var d="absolute"===b?1:-1,e="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+// The absolute mouse position
this.offset.relative.top*d+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top*d-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+// The absolute mouse position
this.offset.relative.left*d+// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left*d-// The offsetParent's offset without borders (offset + border)
("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e=this.options,f=b.pageX,g=b.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName);
// This is another very weird special case that only happens for relative elements:
// 1. If the css position is relative
// 2. and the scroll parent is the document or similar to the offset parent
// we have to refresh the relative offset during the scroll so there are no jumps
/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */
//If we are not dragging yet, we won't check for options
return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(b.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),b.pageY-this.offset.click.top<this.containment[1]&&(g=this.containment[1]+this.offset.click.top),b.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),b.pageY-this.offset.click.top>this.containment[3]&&(g=this.containment[3]+this.offset.click.top)),e.grid&&(c=this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1],g=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-e.grid[1]:c+e.grid[1]:c,d=this.originalPageX+Math.round((f-this.originalPageX)/e.grid[0])*e.grid[0],f=this.containment?d-this.offset.click.left>=this.containment[0]&&d-this.offset.click.left<=this.containment[2]?d:d-this.offset.click.left>=this.containment[0]?d-e.grid[0]:d+e.grid[0]:d)),{top:g-// The absolute mouse position
this.offset.click.top-// Click offset (relative to the element)
this.offset.relative.top-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.top+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:f-// The absolute mouse position
this.offset.click.left-// Click offset (relative to the element)
this.offset.relative.left-// Only for relative positioned nodes: Relative offset from element to offset parent
this.offset.parent.left+(// The offsetParent's offset without borders (offset + border)
"fixed"===this.cssPosition?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_rearrange:function(a,b,c,d){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),
//Various things done here to improve the performance:
// 1. we create a setTimeout, that calls refreshPositions
// 2. on the instance, we have a counter variable, that get's higher after every append
// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
// 4. this lets only the last addition to the timeout stack through
this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){e===this.counter&&this.refreshPositions(!d)})},_clear:function(a,b){this.reverting=!1;
// We delay all events that have to be triggered to after the point where the placeholder has been removed and
// everything else normalized again
var c,d=[];if(
// We first have to update the dom position of the actual currentItem
// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(c in this._storedCSS)"auto"!==this._storedCSS[c]&&"static"!==this._storedCSS[c]||(this._storedCSS[c]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
//Post events to containers
for(this.fromOutside&&!b&&d.push(function(a){this._trigger("receive",a,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||d.push(function(a){this._trigger("update",a,this._uiHash())}),
// Check if the items Container has Changed and trigger appropriate
// events.
this!==this.currentContainer&&(b||(d.push(function(a){this._trigger("remove",a,this._uiHash())}),d.push(function(a){return function(b){a._trigger("receive",b,this._uiHash(this))}}.call(this,this.currentContainer)),d.push(function(a){return function(b){a._trigger("update",b,this._uiHash(this))}}.call(this,this.currentContainer)))),c=this.containers.length-1;c>=0;c--)b||d.push(function(a){return function(b){a._trigger("deactivate",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over&&(d.push(function(a){return function(b){a._trigger("out",b,this._uiHash(this))}}.call(this,this.containers[c])),this.containers[c].containerCache.over=0);if(
//Do what was originally in plugins
this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!b){for(this._trigger("beforeStop",a,this._uiHash()),c=0;c<d.length;c++)d[c].call(this,a);//Trigger all delayed events
this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!1}if(b||this._trigger("beforeStop",a,this._uiHash()),
//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!b){for(c=0;c<d.length;c++)d[c].call(this,a);//Trigger all delayed events
this._trigger("stop",a,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){a.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(b){var c=b||this;return{helper:c.helper,placeholder:c.placeholder||a([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:b?b.element:null}}})}(jQuery),function(a,b){var c="ui-effects-";a.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(a,b){function c(a,b,c){var d=l[b.type]||{};
// ~~ is an short way of doing floor for positive numbers
// IE will pass in empty strings as value for alpha,
// which will hit this case
return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];
// Found a stringParser that handled it
// Found a stringParser that handled it
// if this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";if(h)
// exit each( stringParsers ) here because we matched
// if this was an rgba parse the assignment might happen twice
// oh well....
return f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}
// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function e(a,b,c){return c=(c+1)%1,6*c<1?a+(b-a)*c*6:2*c<1?b:3*c<2?a+(b-a)*(2/3-c)*6:a}var
// colors = jQuery.Color.names
f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
// plusequals test for += 100 -= 100
h=/^([\-+])=\s*(\d+\.?\d*)/,
// a set of RE's that can match strings and generate color tuples.
i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{
// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{
// this regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],
// jQuery.Color( )
j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},
// element for support tests
n=a("<p>")[0],
// local aliases of functions called often
o=a.each;
// determine rgba support immediately
n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,
// define cache name and alpha properties
// for rgba and hsla spaces
o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];
// more than 1 argument specified - assume ( red, green, blue, alpha )
return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){
// if the cache doesn't exist, and we know how to convert
if(!l[f]&&d.to){
// if the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}
// this is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
l[f][b.idx]=c(e[a],b,!0)}),
// everything defined but alpha?
l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(
// use the default of 1
l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};
// if null, don't override start value
null!==j&&(
// if null - use end
null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){
// if we are already opaque - return ourself
if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){
// catch 1 and 2
return null==a&&(a=b>2?1:0),b&&b<3&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){
// default to 0 when nulls exist
return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;
// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:l<=.5?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=d<=.5?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;
// makes rgba() and hsla()
j.fn[d]=function(d){if(
// generate a cache for this space if it doesn't exist
i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},
// makes red() green() blue() alpha() hue() saturation() lightness()
o(f,function(b,c){
// alpha is included in more than one space
j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),
// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
f=a.Color.names={
// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",
// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
function(){function c(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],"string"==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)"string"==typeof e[c]&&(f[c]=e[c]);return f}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||!a.fx.step[d]&&isNaN(parseFloat(e))||(g[d]=e));return g}var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(b,c){a.fx.step[c]=function(a){("none"!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(jQuery.style(a.elem,c,a.end),a.setAttr=!0)}}),
// support: jQuery <1.8
a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(b,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr("class")||"",j=i.children?g.find("*").addBack():g;
// map the animated objects to store the original styles.
j=j.map(function(){var b=a(this);return{el:b,start:c(this)}}),
// apply class change
f=function(){a.each(e,function(a,c){b[c]&&g[c+"Class"](b[c])})},f(),
// map all animated objects again - calculate new styles and diff
j=j.map(function(){return this.end=c(this.el[0]),this.diff=d(this.start,this.end),this}),
// apply original class
g.attr("class",h),
// map all animated objects again - this time collecting a promise
j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),
// once all animations have completed:
a.when.apply(a,j.get()).done(function(){
// set the final class
f(),
// for each animated element,
// clear all css properties that were animated
a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,"")})}),
// this is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length>1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(c){return function(d,e,f,g,h){return"boolean"==typeof e||e===b?f?a.effects.animateClass.call(this,e?{add:d}:{remove:d},f,g,h):c.apply(this,arguments):a.effects.animateClass.call(this,{toggle:d},e,f,g)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
function(){
// return an effect options object for the given parameters:
function d(b,c,d,e){
// allow passing all options as the first parameter
// convert to an object
// catch (effect, null, ...)
// catch (effect, callback)
// catch (effect, speed, ?)
// catch (effect, options, callback)
// add options to effect
return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),("number"==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:"number"==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function e(b){
// Valid standard speeds (nothing, number, named speed)
// Valid standard speeds (nothing, number, named speed)
// Invalid strings - treat as "normal" speed
// Complete callback
return!(b&&"number"!=typeof b&&!a.fx.speeds[b])||("string"==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||"object"==typeof b&&!b.effect))}a.extend(a.effects,{version:"1.10.3",
// Saves a set of properties in a data storage
save:function(a,b){for(var d=0;d<b.length;d++)null!==b[d]&&a.data(c+b[d],a[0].style[b[d]])},
// Restores a set of previously saved properties from a data storage
restore:function(a,d){var e,f;for(f=0;f<d.length;f++)null!==d[f]&&(e=a.data(c+d[f]),
// support: jQuery 1.6.2
// http://bugs.jquery.com/ticket/9917
// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
// We can't differentiate between "" and 0 here, so we just assume
// empty string since it's likely to be a more common value...
e===b&&(e=""),a.css(d[f],e))},setMode:function(a,b){return"toggle"===b&&(b=a.is(":hidden")?"show":"hide"),b},
// Translates a [top,left] array into a baseline value
// this should be a little more flexible in the future to handle a string & hash
getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(b){
// if the element is already wrapped, return it
if(b.parent().is(".ui-effects-wrapper"))return b.parent();
// wrap the element
var c={width:b.outerWidth(!0),height:b.outerHeight(!0),float:b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
// Store the size in case width/height are defined in % - Fixes #5245
e={width:b.width(),height:b.height()},f=document.activeElement;
// support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{f.id}catch(g){f=document.body}
// Fixes #7595 - Elements lose focus when wrapped.
//Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element
// transfer positioning properties to the wrapper
return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),"static"===b.css("position")?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
return b.parent().is(".ui-effects-wrapper")&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function d(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=c.complete,h=c.mode;
// If the element already has the correct final state, delegate to
// the core methods so the internal tracking of "olddisplay" works.
(e.is(":hidden")?"hide"===h:"show"===h)?(e[h](),d()):g.call(e[0],c,d)}var c=d.apply(this,arguments),e=c.mode,f=c.queue,g=a.effects.effect[c.effect];
// delegate to the original method (e.g., .show()) if possible
return a.fx.off||!g?e?this[e](c.duration,c.complete):this.each(function(){c.complete&&c.complete.call(this)}):f===!1?this.each(b):this.queue(f||"fx",b)},show:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="show",this.effect.call(this,c)}}(a.fn.show),hide:function(a){return function(b){if(e(b))return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="hide",this.effect.call(this,c)}}(a.fn.hide),toggle:function(a){return function(b){if(e(b)||"boolean"==typeof b)return a.apply(this,arguments);var c=d.apply(this,arguments);return c.mode="toggle",this.effect.call(this,c)}}(a.fn.toggle),
// helper functions
cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}})}(),/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
function(){
// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)
var b={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a<((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing["easeIn"+b]=c,a.easing["easeOut"+b]=function(a){return 1-c(1-a)},a.easing["easeInOut"+b]=function(a){return a<.5?c(2*a)/2:1-c(a*-2+2)/2}})}()}(jQuery),function(a,b){var c=0,d={},e={};d.height=d.paddingTop=d.paddingBottom=d.borderTopWidth=d.borderBottomWidth="hide",e.height=e.paddingTop=e.paddingBottom=e.borderTopWidth=e.borderBottomWidth="show",a.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},
// callbacks
activate:null,beforeActivate:null},_create:function(){var b=this.options;this.prevShow=this.prevHide=a(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),
// don't allow collapsible: false and active: false / null
b.collapsible||b.active!==!1&&null!=b.active||(b.active=0),this._processPanels(),
// handle negative values
b.active<0&&(b.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():a(),content:this.active.length?this.active.next():a()}},_createIcons:function(){var b=this.options.icons;b&&(a("<span>").addClass("ui-accordion-header-icon ui-icon "+b.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var a;
// clean up main element
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),
// clean up headers
this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),
// clean up content panels
a=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&a.css("height","")},_setOption:function(a,b){
// _activate() will handle invalid values and update this.options
// setting collapsible: false while collapsed; open first panel
// #5332 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
return"active"===a?void this._activate(b):("event"===a&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(b)),this._super(a,b),"collapsible"!==a||b||this.options.active!==!1||this._activate(0),"icons"===a&&(this._destroyIcons(),b&&this._createIcons()),void("disabled"===a&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!b)))},_keydown:function(b){/*jshint maxcomplexity:15*/
if(!b.altKey&&!b.ctrlKey){var c=a.ui.keyCode,d=this.headers.length,e=this.headers.index(b.target),f=!1;switch(b.keyCode){case c.RIGHT:case c.DOWN:f=this.headers[(e+1)%d];break;case c.LEFT:case c.UP:f=this.headers[(e-1+d)%d];break;case c.SPACE:case c.ENTER:this._eventHandler(b);break;case c.HOME:f=this.headers[0];break;case c.END:f=this.headers[d-1]}f&&(a(b.target).attr("tabIndex",-1),a(f).attr("tabIndex",0),f.focus(),b.preventDefault())}},_panelKeyDown:function(b){b.keyCode===a.ui.keyCode.UP&&b.ctrlKey&&a(b.currentTarget).prev().focus()},refresh:function(){var b=this.options;this._processPanels(),
// was collapsed or no panel
b.active===!1&&b.collapsible===!0||!this.headers.length?(b.active=!1,this.active=a()):b.active===!1?this._activate(0):this.active.length&&!a.contains(this.element[0],this.active[0])?
// all remaining panel are disabled
this.headers.length===this.headers.find(".ui-state-disabled").length?(b.active=!1,this.active=a()):this._activate(Math.max(0,b.active-1)):
// make sure active index is correct
b.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var b,d=this.options,e=d.heightStyle,f=this.element.parent(),g=this.accordionId="ui-accordion-"+(this.element.attr("id")||++c);this.active=this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(b){var c=a(this),d=c.attr("id"),e=c.next(),f=e.attr("id");d||(d=g+"-header-"+b,c.attr("id",d)),f||(f=g+"-panel-"+b,e.attr("id",f)),c.attr("aria-controls",f),e.attr("aria-labelledby",d)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),
// make sure at least one header is in the tab order
this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(d.event),"fill"===e?(b=f.height(),this.element.siblings(":visible").each(function(){var c=a(this),d=c.css("position");"absolute"!==d&&"fixed"!==d&&(b-=c.outerHeight(!0))}),this.headers.each(function(){b-=a(this).outerHeight(!0)}),this.headers.next().each(function(){a(this).height(Math.max(0,b-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===e&&(b=0,this.headers.next().each(function(){b=Math.max(b,a(this).css("height","").height())}).height(b))},_activate:function(b){var c=this._findActive(b)[0];
// trying to activate the already active panel
c!==this.active[0]&&(
// trying to collapse, simulate a click on the currently active header
c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return"number"==typeof b?this.headers.eq(b):a()},_setupEvents:function(b){var c={keydown:"_keydown"};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e[0]===d[0],g=f&&c.collapsible,h=g?a():e.next(),i=d.next(),j={oldHeader:d,oldPanel:i,newHeader:g?a():e,newPanel:h};b.preventDefault(),
// click on active header, but not collapsible
f&&!c.collapsible||
// allow canceling activation
this._trigger("beforeActivate",b,j)===!1||(c.active=!g&&this.headers.index(e),
// when the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=f?a():e,this._toggle(j),
// switch classes
// corner classes on the previously active header stay after the animation
d.removeClass("ui-accordion-header-active ui-state-active"),c.icons&&d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header),f||(e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),c.icons&&e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader),e.next().addClass("ui-accordion-content-active")))},_toggle:function(b){var c=b.newPanel,d=this.prevShow.length?this.prevShow:b.oldPanel;
// handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,b):(d.hide(),c.show(),this._toggleComplete(b)),d.attr({"aria-expanded":"false","aria-hidden":"true"}),d.prev().attr("aria-selected","false"),
// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
c.length&&d.length?d.prev().attr("tabIndex",-1):c.length&&this.headers.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),c.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(a,b,c){var f,g,h,i=this,j=0,k=a.length&&(!b.length||a.index()<b.index()),l=this.options.animate||{},m=k&&l.down||l,n=function(){i._toggleComplete(c)};
// fall back from options to animation in case of partial down settings
return"number"==typeof m&&(h=m),"string"==typeof m&&(g=m),g=g||m.easing||l.easing,h=h||m.duration||l.duration,b.length?a.length?(f=a.show().outerHeight(),b.animate(d,{duration:h,easing:g,step:function(a,b){b.now=Math.round(a)}}),void a.hide().animate(e,{duration:h,easing:g,complete:n,step:function(a,c){c.now=Math.round(a),"height"!==c.prop?j+=c.now:"content"!==i.options.heightStyle&&(c.now=Math.round(f-b.outerHeight()-j),j=0)}})):b.animate(d,h,g,n):a.animate(e,h,g,n)},_toggleComplete:function(a){var b=a.oldPanel;b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),
// Work around for rendering bug in IE (#5421)
b.length&&(b.parent()[0].className=b.parent()[0].className),this._trigger("activate",null,a)}})}(jQuery),function(a,b){
// used to prevent race conditions with remote data sources
var c=0;a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,
// callbacks
change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){
// Some browsers only repeat keydown events, not keypress events,
// so we use the suppressKeyPress flag to determine if we've already
// handled the keydown event. #7269
// Unfortunately the code for & in keypress is the same as the up arrow,
// so we use the suppressKeyPressRepeat flag to avoid handling keypress
// events when we know the keydown event was used to modify the
// search term. #7799
var b,c,d,e=this.element[0].nodeName.toLowerCase(),f="textarea"===e,g="input"===e;this.isMultiLine=
// Textareas are always multi-line
!!f||
// Inputs are always single-line, even if inside a contentEditable element
// IE also treats inputs as contentEditable
!g&&
// All other element types are determined by whether or not they're contentEditable
this.element.prop("isContentEditable"),this.valueMethod=this.element[f||g?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(e){/*jshint maxcomplexity:15*/
if(this.element.prop("readOnly"))return b=!0,d=!0,void(c=!0);b=!1,d=!1,c=!1;var f=a.ui.keyCode;switch(e.keyCode){case f.PAGE_UP:b=!0,this._move("previousPage",e);break;case f.PAGE_DOWN:b=!0,this._move("nextPage",e);break;case f.UP:b=!0,this._keyEvent("previous",e);break;case f.DOWN:b=!0,this._keyEvent("next",e);break;case f.ENTER:case f.NUMPAD_ENTER:
// when menu is open and has focus
this.menu.active&&(
// #6055 - Opera still allows the keypress to occur
// which causes forms to submit
b=!0,e.preventDefault(),this.menu.select(e));break;case f.TAB:this.menu.active&&this.menu.select(e);break;case f.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(e),
// Different browsers have different default behavior for escape
// Single press can mean undo or clear
// Double press in IE means clear the whole form
e.preventDefault());break;default:c=!0,
// search timeout should be triggered before the input value is changed
this._searchTimeout(e)}},keypress:function(d){if(b)return b=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||d.preventDefault());if(!c){
// replicate some key handlers to allow them to repeat in Firefox and Opera
var e=a.ui.keyCode;switch(d.keyCode){case e.PAGE_UP:this._move("previousPage",d);break;case e.PAGE_DOWN:this._move("nextPage",d);break;case e.UP:this._keyEvent("previous",d);break;case e.DOWN:this._keyEvent("next",d)}}},input:function(a){return d?(d=!1,void a.preventDefault()):void this._searchTimeout(a)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(clearTimeout(this.searching),this.close(a),void this._change(a))}}),this._initSource(),this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
// disable ARIA support, the live region takes care of that
role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(b){
// prevent moving focus out of the text field
b.preventDefault(),
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});
// clicking on the scrollbar causes focus to shift to the body
// but we can't detect a mouseup or a click immediately afterward
// so we have to track the next mousedown and close the menu if
// the user clicks somewhere outside of the autocomplete
var c=this.menu.element[0];a(b.target).closest(".ui-menu-item").length||this._delay(function(){var b=this;this.document.one("mousedown",function(d){d.target===b.element[0]||d.target===c||a.contains(c,d.target)||b.close()})})},menufocus:function(b,c){
// support: Firefox
// Prevent accidental activation of menu items in Firefox (#7024 #9118)
if(this.isNewMenu&&(this.isNewMenu=!1,b.originalEvent&&/^mouse/.test(b.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){a(b.target).trigger(b.originalEvent)});var d=c.item.data("ui-autocomplete-item");!1!==this._trigger("focus",b,{item:d})?
// use value to match what will end up in the input, if it was a key event
b.originalEvent&&/^key/.test(b.originalEvent.type)&&this._value(d.value):
// Normally the input is populated with the item's value as the
// menu is navigated, causing screen readers to notice a change and
// announce the item. Since the focus event was canceled, this doesn't
// happen, so we update the live region so that screen readers can
// still notice the change and announce it.
this.liveRegion.text(d.value)},menuselect:function(a,b){var c=b.item.data("ui-autocomplete-item"),d=this.previous;
// only trigger when focus was lost (click on menu)
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=d,
// #6109 - IE triggers two focus events and the second
// is asynchronous, so we need to reset the previous
// term synchronously and asynchronously :-(
this._delay(function(){this.previous=d,this.selectedItem=c})),!1!==this._trigger("select",a,{item:c})&&this._value(c.value),
// reset the term after the select event
// this allows custom select handling to work properly
this.term=this._value(),this.close(a),this.selectedItem=c}}),this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),
// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(a,b){this._super(a,b),"source"===a&&this._initSource(),"appendTo"===a&&this.menu.element.appendTo(this._appendTo()),"disabled"===a&&b&&this.xhr&&this.xhr.abort()},_appendTo:function(){var b=this.options.appendTo;return b&&(b=b.jquery||b.nodeType?a(b):this.document.find(b).eq(0)),b||(b=this.element.closest(".ui-front")),b.length||(b=this.document[0].body),b},_initSource:function(){var b,c,d=this;a.isArray(this.options.source)?(b=this.options.source,this.source=function(c,d){d(a.ui.autocomplete.filter(b,c.term))}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(b,e){d.xhr&&d.xhr.abort(),d.xhr=a.ajax({url:c,data:b,dataType:"json",success:function(a){e(a)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){
// only search if the value has changed
this.term!==this._value()&&(this.selectedItem=null,this.search(null,a))},this.options.delay)},search:function(a,b){
// always save the actual value, not the one passed as an argument
return a=null!=a?a:this._value(),this.term=this._value(),a.length<this.options.minLength?this.close(b):this._trigger("search",b)!==!1?this._search(a):void 0},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())},_response:function(){var a=this,b=++c;return function(d){b===c&&a.__response(d),a.pending--,a.pending||a.element.removeClass("ui-autocomplete-loading")}},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):
// use ._close() instead of .close() so we don't cancel future searches
this._close()},close:function(a){this.cancelSearch=!0,this._close(a)},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(b){
// assume all items have the right format when the first item is complete
// assume all items have the right format when the first item is complete
return b.length&&b[0].label&&b[0].value?b:a.map(b,function(b){return"string"==typeof b?{label:b,value:b}:a.extend({label:b.label||b.value,value:b.value||b.label},b)})},_suggest:function(b){var c=this.menu.element.empty();this._renderMenu(c,b),this.isNewMenu=!0,this.menu.refresh(),
// size and position menu
c.show(),this._resizeMenu(),c.position(a.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(
// Firefox wraps long text (possibly a rounding bug)
// so we add 1px to avoid the wrapping (#7513)
a.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(b,c){var d=this;a.each(c,function(a,c){d._renderItemData(b,c)})},_renderItemData:function(a,b){return this._renderItem(a,b).data("ui-autocomplete-item",b)},_renderItem:function(b,c){return a("<li>").append(a("<a>").text(c.label)).appendTo(b)},_move:function(a,b){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(a)||this.menu.isLastItem()&&/^next/.test(a)?(this._value(this.term),void this.menu.blur()):void this.menu[a](b):void this.search(null,b)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(a,b){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(a,b),
// prevents moving cursor to beginning/end of the text field in some browsers
b.preventDefault())}}),a.extend(a.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(b,c){var d=new RegExp(a.ui.autocomplete.escapeRegex(c),"i");return a.grep(b,function(a){return d.test(a.label||a.value||a)})}}),
// live region extension, adding a `messages` option
// NOTE: This is an experimental API. We are still investigating
// a full solution for string manipulation and internationalization.
a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(a){var b;this._superApply(arguments),this.options.disabled||this.cancelSearch||(b=a&&a.length?this.options.messages.results(a.length):this.options.messages.noResults,this.liveRegion.text(b))}})}(jQuery),function(a,b){var c,d,e,f,g="ui-button ui-widget ui-state-default ui-corner-all",h="ui-state-hover ui-state-active ",i="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var b=a(this);setTimeout(function(){b.find(":ui-button").button("refresh")},1)},k=function(b){var c=b.name,d=b.form,e=a([]);return c&&(c=c.replace(/'/g,"\\'"),e=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form})),e};a.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var b=this,h=this.options,i="checkbox"===this.type||"radio"===this.type,l=i?"":"ui-state-active",m="ui-state-focus";null===h.label&&(h.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(g).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){h.disabled||this===c&&a(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){h.disabled||a(this).removeClass(l)}).bind("click"+this.eventNamespace,function(a){h.disabled&&(a.preventDefault(),a.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){
// no need to check disabled, focus won't be triggered anyway
b.buttonElement.addClass(m)}).bind("blur"+this.eventNamespace,function(){b.buttonElement.removeClass(m)}),i&&(this.element.bind("change"+this.eventNamespace,function(){f||b.refresh()}),
// if mouse moves between mousedown and mouseup (drag) set clickDragged flag
// prevents issue where button state changes but checkbox/radio checked state
// does not in Firefox (see ticket #6970)
this.buttonElement.bind("mousedown"+this.eventNamespace,function(a){h.disabled||(f=!1,d=a.pageX,e=a.pageY)}).bind("mouseup"+this.eventNamespace,function(a){h.disabled||d===a.pageX&&e===a.pageY||(f=!0)})),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(h.disabled||f)return!1;a(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");var c=b.element[0];k(c).not(c).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return!h.disabled&&(a(this).addClass("ui-state-active"),c=this,void b.document.one("mouseup",function(){c=null}))}).bind("mouseup"+this.eventNamespace,function(){return!h.disabled&&void a(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(b){return!h.disabled&&void(b.keyCode!==a.ui.keyCode.SPACE&&b.keyCode!==a.ui.keyCode.ENTER||a(this).addClass("ui-state-active"))}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){a(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(b){b.keyCode===a.ui.keyCode.SPACE&&
// TODO pass through original event correctly (just as 2nd argument doesn't work)
a(this).click()})),
// TODO: pull out $.Widget's handling for the disabled option into
// $.Widget.prototype._setOptionDisabled so it's easy to proxy and can
// be overridden by individual plugins
this._setOption("disabled",h.disabled),this._resetButton()},_determineButtonType:function(){var a,b,c;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(
// we don't search against the document in case the element
// is disconnected from the DOM
a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),c=this.element.is(":checked"),c&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",c)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(g+" "+h+" "+i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){return this._super(a,b),"disabled"===a?void(b?this.element.prop("disabled",!0):this.element.prop("disabled",!1)):void this._resetButton()},refresh:function(){
//See #8237 & #8828
var b=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");b!==this.options.disabled&&this._setOption("disabled",b),"radio"===this.type?k(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return void(this.options.label&&this.element.val(this.options.label));var b=this.buttonElement.removeClass(i),c=a("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,e=d.primary&&d.secondary,f=[];d.primary||d.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":d.primary?"-primary":"-secondary")),d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>"),d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||b.attr("title",a.trim(c)))):f.push("ui-button-text-only"),b.addClass(f.join(" "))}}),a.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,b){"disabled"===a&&this.buttons.button("option",a,b),this._super(a,b)},refresh:function(){var b="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(a,b){/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */
function c(){this._curInst=null,// The current instance in use
this._keyEvent=!1,// If the last event was a key event
this._disabledInputs=[],// List of date picker inputs that have been disabled
this._datepickerShowing=!1,// True if the popup picker is showing , false if not
this._inDialog=!1,// True if showing within a "dialog", false if not
this._mainDivId="ui-datepicker-div",// The ID of the main datepicker division
this._inlineClass="ui-datepicker-inline",// The name of the inline marker class
this._appendClass="ui-datepicker-append",// The name of the append marker class
this._triggerClass="ui-datepicker-trigger",// The name of the trigger marker class
this._dialogClass="ui-datepicker-dialog",// The name of the dialog marker class
this._disableClass="ui-datepicker-disabled",// The name of the disabled covering marker class
this._unselectableClass="ui-datepicker-unselectable",// The name of the unselectable cell marker class
this._currentClass="ui-datepicker-current-day",// The name of the current day marker class
this._dayOverClass="ui-datepicker-days-cell-over",// The name of the day hover marker class
this.regional=[],// Available regional settings, indexed by language code
this.regional[""]={// Default regional settings
closeText:"Done",// Display text for close link
prevText:"Prev",// Display text for previous month link
nextText:"Next",// Display text for next month link
currentText:"Today",// Display text for current month link
monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],// Names of months for drop-down and formatting
monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],// For formatting
dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],// For formatting
dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],// For formatting
dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],// Column headings for days starting at Sunday
weekHeader:"Wk",// Column header for week of the year
dateFormat:"mm/dd/yy",// See format options on parseDate
firstDay:0,// The first day of the week, Sun = 0, Mon = 1, ...
isRTL:!1,// True if right-to-left language, false if left-to-right
showMonthAfterYear:!1,// True if the year select precedes month, false for month then year
yearSuffix:""},this._defaults={// Global defaults for all the date picker instances
showOn:"focus",// "focus" for popup on focus,
// "button" for trigger button, or "both" for either
showAnim:"fadeIn",// Name of jQuery animation for popup
showOptions:{},// Options for enhanced animations
defaultDate:null,// Used when field is blank: actual date,
// +/-number for offset from today, null for today
appendText:"",// Display text following the input box, e.g. showing the format
buttonText:"...",// Text for trigger button
buttonImage:"",// URL for trigger button image
buttonImageOnly:!1,// True if the image appears alone, false if it appears on a button
hideIfNoPrevNext:!1,// True to hide next/previous month links
// if not applicable, false to just disable them
navigationAsDateFormat:!1,// True if date formatting applied to prev/today/next links
gotoCurrent:!1,// True if today link goes back to current selection instead
changeMonth:!1,// True if month can be selected directly, false if only prev/next
changeYear:!1,// True if year can be selected directly, false if only prev/next
yearRange:"c-10:c+10",// Range of years to display in drop-down,
// either relative to today's year (-nn:+nn), relative to currently displayed year
// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
showOtherMonths:!1,// True to show dates in other months, false to leave blank
selectOtherMonths:!1,// True to allow selection of dates in other months, false for unselectable
showWeek:!1,// True to show week of the year, false to not show it
calculateWeek:this.iso8601Week,// How to calculate the week of the year,
// takes a Date and returns the number of the week for it
shortYearCutoff:"+10",// Short year values < this are in the current century,
// > this are in the previous century,
// string value starting with "+" for current year + value
minDate:null,// The earliest selectable date, or null for no limit
maxDate:null,// The latest selectable date, or null for no limit
duration:"fast",// Duration of display/closure
beforeShowDay:null,// Function that takes a date and returns an array with
// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
// [2] = cell title (optional), e.g. $.datepicker.noWeekends
beforeShow:null,// Function that takes an input field and
// returns a set of custom settings for the date picker
onSelect:null,// Define a callback function when a date is selected
onChangeMonthYear:null,// Define a callback function when the month or year is changed
onClose:null,// Define a callback function when the datepicker is closed
numberOfMonths:1,// Number of months to show at a time
showCurrentAtPos:0,// The position in multipe months at which to show the current month (starting at 0)
stepMonths:1,// Number of months to step back/forward
stepBigMonths:12,// Number of months to step back/forward for the big links
altField:"",// Selector for an alternate field to store selected dates into
altFormat:"",// The date format to use for the alternate field
constrainInput:!0,// The input is constrained by the current date format
showButtonPanel:!1,// True to show button panel, false to not show it
autoSize:!1,// True to size the input for the date format, false to leave as is
disabled:!1},a.extend(this._defaults,this.regional[""]),this.dpDiv=d(a("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function d(b){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return b.delegate(c,"mouseout",function(){a(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).removeClass("ui-datepicker-next-hover")}).delegate(c,"mouseover",function(){a.datepicker._isDisabledDatepicker(f.inline?b.parent()[0]:f.input[0])||(a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),a(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&a(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&a(this).addClass("ui-datepicker-next-hover"))})}/* jQuery extend now ignores nulls! */
function e(b,c){a.extend(b,c);for(var d in c)null==c[d]&&(b[d]=c[d]);return b}a.extend(a.ui,{datepicker:{version:"1.10.3"}});var f,g="datepicker";a.extend(c.prototype,{/* Class name added to elements to indicate already configured with a date picker. */
markerClassName:"hasDatepicker",
//Keep track of the maximum number of rows displayed (see #7043)
maxRows:4,
// TODO rename to "widget" when switching to widget factory
_widgetDatepicker:function(){return this.dpDiv},/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
setDefaults:function(a){return e(this._defaults,a||{}),this},/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
_attachDatepicker:function(b,c){var d,e,f;d=b.nodeName.toLowerCase(),e="div"===d||"span"===d,b.id||(this.uuid+=1,b.id="dp"+this.uuid),f=this._newInst(a(b),e),f.settings=a.extend({},c||{}),"input"===d?this._connectDatepicker(b,f):e&&this._inlineDatepicker(b,f)},/* Create a new instance object. */
_newInst:function(b,c){var e=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");// escape jQuery meta chars
return{id:e,input:b,// associated target
selectedDay:0,selectedMonth:0,selectedYear:0,// current selection
drawMonth:0,drawYear:0,// month being drawn
inline:c,// is datepicker inline or not
dpDiv:c?// presentation div
d(a("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},/* Attach the date picker to an input field. */
_connectDatepicker:function(b,c){var d=a(b);c.append=a([]),c.trigger=a([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(c),a.data(b,g,c),
//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
c.settings.disabled&&this._disableDatepicker(b))},/* Make attachments based on settings. */
_attachments:function(b,c){var d,e,f,g=this._get(c,"appendText"),h=this._get(c,"isRTL");c.append&&c.append.remove(),g&&(c.append=a("<span class='"+this._appendClass+"'>"+g+"</span>"),b[h?"before":"after"](c.append)),b.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),d=this._get(c,"showOn"),"focus"!==d&&"both"!==d||// pop-up date picker when in the marked field
b.focus(this._showDatepicker),"button"!==d&&"both"!==d||(// pop-up date picker when button clicked
e=this._get(c,"buttonText"),f=this._get(c,"buttonImage"),c.trigger=a(this._get(c,"buttonImageOnly")?a("<img/>").addClass(this._triggerClass).attr({src:f,alt:e,title:e}):a("<button type='button'></button>").addClass(this._triggerClass).html(f?a("<img/>").attr({src:f,alt:e,title:e}):e)),b[h?"before":"after"](c.trigger),c.trigger.click(function(){return a.datepicker._datepickerShowing&&a.datepicker._lastInput===b[0]?a.datepicker._hideDatepicker():a.datepicker._datepickerShowing&&a.datepicker._lastInput!==b[0]?(a.datepicker._hideDatepicker(),a.datepicker._showDatepicker(b[0])):a.datepicker._showDatepicker(b[0]),!1}))},/* Apply the maximum length for the date format. */
_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b,c,d,e,f=new Date(2009,11,20),// Ensure double digits
g=this._get(a,"dateFormat");g.match(/[DM]/)&&(b=function(a){for(c=0,d=0,e=0;e<a.length;e++)a[e].length>c&&(c=a[e].length,d=e);return d},f.setMonth(b(this._get(a,g.match(/MM/)?"monthNames":"monthNamesShort"))),f.setDate(b(this._get(a,g.match(/DD/)?"dayNames":"dayNamesShort"))+20-f.getDay())),a.input.attr("size",this._formatDate(a,f).length)}},/* Attach an inline date picker to a div. */
_inlineDatepicker:function(b,c){var d=a(b);d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),a.data(b,g,c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),
//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
c.settings.disabled&&this._disableDatepicker(b),
// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
c.dpDiv.css("display","block"))},/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
_dialogDatepicker:function(b,c,d,f,h){var i,j,k,l,m,n=this._dialogInst;// internal instance
// should use actual width/height below
// move input on screen for focus, but hidden behind dialog
return n||(this.uuid+=1,i="dp"+this.uuid,this._dialogInput=a("<input type='text' id='"+i+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),a("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},a.data(this._dialogInput[0],g,n)),e(n.settings,f||{}),c=c&&c.constructor===Date?this._formatDate(n,c):c,this._dialogInput.val(c),this._pos=h?h.length?h:[h.pageX,h.pageY]:null,this._pos||(j=document.documentElement.clientWidth,k=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,m=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[j/2-100+l,k/2-150+m]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=d,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),a.blockUI&&a.blockUI(this.dpDiv),a.data(this._dialogInput[0],g,n),this},/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
_destroyDatepicker:function(b){var c,d=a(b),e=a.data(b,g);d.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),a.removeData(b,g),"input"===c?(e.append.remove(),e.trigger.remove(),d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):"div"!==c&&"span"!==c||d.removeClass(this.markerClassName).empty())},/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_enableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,g);e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!1,f.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}))},/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
_disableDatepicker:function(b){var c,d,e=a(b),f=a.data(b,g);e.hasClass(this.markerClassName)&&(c=b.nodeName.toLowerCase(),"input"===c?(b.disabled=!0,f.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):"div"!==c&&"span"!==c||(d=e.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=a.map(this._disabledInputs,function(a){return a===b?null:a}),// delete entry
this._disabledInputs[this._disabledInputs.length]=b)},/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]===a)return!0;return!1},/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
_getInst:function(b){try{return a.data(b,g)}catch(c){throw"Missing instance data for this datepicker"}},/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
_optionDatepicker:function(c,d,f){var g,h,i,j,k=this._getInst(c);
// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
return 2===arguments.length&&"string"==typeof d?"defaults"===d?a.extend({},a.datepicker._defaults):k?"all"===d?a.extend({},k.settings):this._get(k,d):null:(g=d||{},"string"==typeof d&&(g={},g[d]=f),void(k&&(this._curInst===k&&this._hideDatepicker(),h=this._getDateDatepicker(c,!0),i=this._getMinMaxDate(k,"min"),j=this._getMinMaxDate(k,"max"),e(k.settings,g),null!==i&&g.dateFormat!==b&&g.minDate===b&&(k.settings.minDate=this._formatDate(k,i)),null!==j&&g.dateFormat!==b&&g.maxDate===b&&(k.settings.maxDate=this._formatDate(k,j)),"disabled"in g&&(g.disabled?this._disableDatepicker(c):this._enableDatepicker(c)),this._attachments(a(c),k),this._autoSize(k),this._setDate(k,h),this._updateAlternate(k),this._updateDatepicker(k))))},
// change method deprecated
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},/* Handle keystrokes. */
_doKeyDown:function(b){var c,d,e,f=a.datepicker._getInst(b.target),g=!0,h=f.dpDiv.is(".ui-datepicker-rtl");if(f._keyEvent=!0,a.datepicker._datepickerShowing)switch(b.keyCode){case 9:a.datepicker._hideDatepicker(),g=!1;break;// hide on tab out
case 13:
// trigger custom callback
return e=a("td."+a.datepicker._dayOverClass+":not(."+a.datepicker._currentClass+")",f.dpDiv),e[0]&&a.datepicker._selectDay(b.target,f.selectedMonth,f.selectedYear,e[0]),c=a.datepicker._get(f,"onSelect"),c?(d=a.datepicker._formatDate(f),c.apply(f.input?f.input[0]:null,[d,f])):a.datepicker._hideDatepicker(),!1;// don't submit the form
case 27:a.datepicker._hideDatepicker();break;// hide on escape
case 33:a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");break;// previous month/year on page up/+ ctrl
case 34:a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");break;// next month/year on page down/+ ctrl
case 35:(b.ctrlKey||b.metaKey)&&a.datepicker._clearDate(b.target),g=b.ctrlKey||b.metaKey;break;// clear on ctrl or command +end
case 36:(b.ctrlKey||b.metaKey)&&a.datepicker._gotoToday(b.target),g=b.ctrlKey||b.metaKey;break;// current on ctrl or command +home
case 37:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?1:-1,"D"),g=b.ctrlKey||b.metaKey,
// -1 day on ctrl or command +left
b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?-a.datepicker._get(f,"stepBigMonths"):-a.datepicker._get(f,"stepMonths"),"M");
// next month/year on alt +left on Mac
break;case 38:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,-7,"D"),g=b.ctrlKey||b.metaKey;break;// -1 week on ctrl or command +up
case 39:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,h?-1:1,"D"),g=b.ctrlKey||b.metaKey,
// +1 day on ctrl or command +right
b.originalEvent.altKey&&a.datepicker._adjustDate(b.target,b.ctrlKey?+a.datepicker._get(f,"stepBigMonths"):+a.datepicker._get(f,"stepMonths"),"M");
// next month/year on alt +right
break;case 40:(b.ctrlKey||b.metaKey)&&a.datepicker._adjustDate(b.target,7,"D"),g=b.ctrlKey||b.metaKey;break;// +1 week on ctrl or command +down
default:g=!1}else 36===b.keyCode&&b.ctrlKey?// display the date picker on ctrl+home
a.datepicker._showDatepicker(this):g=!1;g&&(b.preventDefault(),b.stopPropagation())},/* Filter entered characters - based on date format. */
_doKeyPress:function(b){var c,d,e=a.datepicker._getInst(b.target);if(a.datepicker._get(e,"constrainInput"))return c=a.datepicker._possibleChars(a.datepicker._get(e,"dateFormat")),d=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||d<" "||!c||c.indexOf(d)>-1},/* Synchronise manual entry and field/alternate field. */
_doKeyUp:function(b){var c,d=a.datepicker._getInst(b.target);if(d.input.val()!==d.lastVal)try{c=a.datepicker.parseDate(a.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,a.datepicker._getFormatConfig(d)),c&&(// only if valid
a.datepicker._setDateFromField(d),a.datepicker._updateAlternate(d),a.datepicker._updateDatepicker(d))}catch(e){}return!0},/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
_showDatepicker:function(b){if(b=b.target||b,"input"!==b.nodeName.toLowerCase()&&(// find from button/image trigger
b=a("input",b.parentNode)[0]),!a.datepicker._isDisabledDatepicker(b)&&a.datepicker._lastInput!==b){var c,d,f,g,h,i,j;c=a.datepicker._getInst(b),a.datepicker._curInst&&a.datepicker._curInst!==c&&(a.datepicker._curInst.dpDiv.stop(!0,!0),c&&a.datepicker._datepickerShowing&&a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),d=a.datepicker._get(c,"beforeShow"),f=d?d.apply(b,[b,c]):{},f!==!1&&(e(c.settings,f),c.lastVal=null,a.datepicker._lastInput=b,a.datepicker._setDateFromField(c),a.datepicker._inDialog&&(// hide cursor
b.value=""),a.datepicker._pos||(// position below input
a.datepicker._pos=a.datepicker._findPos(b),a.datepicker._pos[1]+=b.offsetHeight),g=!1,a(b).parents().each(function(){return g|="fixed"===a(this).css("position"),!g}),h={left:a.datepicker._pos[0],top:a.datepicker._pos[1]},a.datepicker._pos=null,
//to avoid flashes on Firefox
c.dpDiv.empty(),
// determine sizing offscreen
c.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),a.datepicker._updateDatepicker(c),
// fix width for dynamic number of date pickers
// and adjust position before showing
h=a.datepicker._checkOffset(c,h,g),c.dpDiv.css({position:a.datepicker._inDialog&&a.blockUI?"static":g?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),c.inline||(i=a.datepicker._get(c,"showAnim"),j=a.datepicker._get(c,"duration"),c.dpDiv.zIndex(a(b).zIndex()+1),a.datepicker._datepickerShowing=!0,a.effects&&a.effects.effect[i]?c.dpDiv.show(i,a.datepicker._get(c,"showOptions"),j):c.dpDiv[i||"show"](i?j:null),a.datepicker._shouldFocusInput(c)&&c.input.focus(),a.datepicker._curInst=c))}},/* Generate the date picker content. */
_updateDatepicker:function(b){this.maxRows=4,//Reset the max number of rows being displayed (see #7043)
f=b,// for delegate hover events
b.dpDiv.empty().append(this._generateHTML(b)),this._attachHandlers(b),b.dpDiv.find("."+this._dayOverClass+" a").mouseover();var c,d=this._getNumberOfMonths(b),e=d[1],g=17;b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),e>1&&b.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",g*e+"em"),b.dpDiv[(1!==d[0]||1!==d[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),b.dpDiv[(this._get(b,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),b===a.datepicker._curInst&&a.datepicker._datepickerShowing&&a.datepicker._shouldFocusInput(b)&&b.input.focus(),
// deffered render of the years select (to avoid flashes on Firefox)
b.yearshtml&&(c=b.yearshtml,setTimeout(function(){
//assure that inst.yearshtml didn't change.
c===b.yearshtml&&b.yearshtml&&b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),c=b.yearshtml=null},0))},
// #6694 - don't focus the input if it's already focused
// this breaks the change event in IE
// Support: IE and jQuery <1.9
_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")},/* Check positioning to remain on screen. */
_checkOffset:function(b,c,d){var e=b.dpDiv.outerWidth(),f=b.dpDiv.outerHeight(),g=b.input?b.input.outerWidth():0,h=b.input?b.input.outerHeight():0,i=document.documentElement.clientWidth+(d?0:a(document).scrollLeft()),j=document.documentElement.clientHeight+(d?0:a(document).scrollTop());
// now check if datepicker is showing outside window viewport - move to a better place if so.
return c.left-=this._get(b,"isRTL")?e-g:0,c.left-=d&&c.left===b.input.offset().left?a(document).scrollLeft():0,c.top-=d&&c.top===b.input.offset().top+h?a(document).scrollTop():0,c.left-=Math.min(c.left,c.left+e>i&&i>e?Math.abs(c.left+e-i):0),c.top-=Math.min(c.top,c.top+f>j&&j>f?Math.abs(f+h):0),c},/* Find an object's position on the screen. */
_findPos:function(b){for(var c,d=this._getInst(b),e=this._get(d,"isRTL");b&&("hidden"===b.type||1!==b.nodeType||a.expr.filters.hidden(b));)b=b[e?"previousSibling":"nextSibling"];return c=a(b).offset(),[c.left,c.top]},/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
_hideDatepicker:function(b){var c,d,e,f,h=this._curInst;!h||b&&h!==a.data(b,g)||this._datepickerShowing&&(c=this._get(h,"showAnim"),d=this._get(h,"duration"),e=function(){a.datepicker._tidyDialog(h)},
// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
a.effects&&(a.effects.effect[c]||a.effects[c])?h.dpDiv.hide(c,a.datepicker._get(h,"showOptions"),d,e):h.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1,f=this._get(h,"onClose"),f&&f.apply(h.input?h.input[0]:null,[h.input?h.input.val():"",h]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),a.blockUI&&(a.unblockUI(),a("body").append(this.dpDiv))),this._inDialog=!1)},/* Tidy up after a dialog display. */
_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},/* Close date picker if clicked elsewhere. */
_checkExternalClick:function(b){if(a.datepicker._curInst){var c=a(b.target),d=a.datepicker._getInst(c[0]);(c[0].id===a.datepicker._mainDivId||0!==c.parents("#"+a.datepicker._mainDivId).length||c.hasClass(a.datepicker.markerClassName)||c.closest("."+a.datepicker._triggerClass).length||!a.datepicker._datepickerShowing||a.datepicker._inDialog&&a.blockUI)&&(!c.hasClass(a.datepicker.markerClassName)||a.datepicker._curInst===d)||a.datepicker._hideDatepicker()}},/* Adjust one of the date sub-fields. */
_adjustDate:function(b,c,d){var e=a(b),f=this._getInst(e[0]);this._isDisabledDatepicker(e[0])||(this._adjustInstDate(f,c+("M"===d?this._get(f,"showCurrentAtPos"):0),// undo positioning
d),this._updateDatepicker(f))},/* Action for current link. */
_gotoToday:function(b){var c,d=a(b),e=this._getInst(d[0]);this._get(e,"gotoCurrent")&&e.currentDay?(e.selectedDay=e.currentDay,e.drawMonth=e.selectedMonth=e.currentMonth,e.drawYear=e.selectedYear=e.currentYear):(c=new Date,e.selectedDay=c.getDate(),e.drawMonth=e.selectedMonth=c.getMonth(),e.drawYear=e.selectedYear=c.getFullYear()),this._notifyChange(e),this._adjustDate(d)},/* Action for selecting a new month/year. */
_selectMonthYear:function(b,c,d){var e=a(b),f=this._getInst(e[0]);f["selected"+("M"===d?"Month":"Year")]=f["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(f),this._adjustDate(e)},/* Action for selecting a day. */
_selectDay:function(b,c,d,e){var f,g=a(b);a(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(g[0])||(f=this._getInst(g[0]),f.selectedDay=f.currentDay=a("a",e).html(),f.selectedMonth=f.currentMonth=c,f.selectedYear=f.currentYear=d,this._selectDate(b,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear)))},/* Erase the input field and hide the date picker. */
_clearDate:function(b){var c=a(b);this._selectDate(c,"")},/* Update the input field with the selected date. */
_selectDate:function(b,c){var d,e=a(b),f=this._getInst(e[0]);c=null!=c?c:this._formatDate(f),f.input&&f.input.val(c),this._updateAlternate(f),d=this._get(f,"onSelect"),d?d.apply(f.input?f.input[0]:null,[c,f]):f.input&&f.input.trigger("change"),f.inline?this._updateDatepicker(f):(this._hideDatepicker(),this._lastInput=f.input[0],"object"!=typeof f.input[0]&&f.input.focus(),this._lastInput=null)},/* Update any alternate field to synchronise with the main field. */
_updateAlternate:function(b){var c,d,e,f=this._get(b,"altField");f&&(// update alternate field too
c=this._get(b,"altFormat")||this._get(b,"dateFormat"),d=this._getDate(b),e=this.formatDate(c,d,this._getFormatConfig(b)),a(f).each(function(){a(this).val(e)}))},/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
iso8601Week:function(a){var b,c=new Date(a.getTime());
// Find Thursday of this week starting on Monday
// Compare with Jan 1
return c.setDate(c.getDate()+4-(c.getDay()||7)),b=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((b-c)/864e5)/7)+1},/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
parseDate:function(b,c,d){if(null==b||null==c)throw"Invalid arguments";if(c="object"==typeof c?c.toString():c+"",""===c)return null;var e,f,g,h,i=0,j=(d?d.shortYearCutoff:null)||this._defaults.shortYearCutoff,k="string"!=typeof j?j:(new Date).getFullYear()%100+parseInt(j,10),l=(d?d.dayNamesShort:null)||this._defaults.dayNamesShort,m=(d?d.dayNames:null)||this._defaults.dayNames,n=(d?d.monthNamesShort:null)||this._defaults.monthNamesShort,o=(d?d.monthNames:null)||this._defaults.monthNames,p=-1,q=-1,r=-1,s=-1,t=!1,
// Check whether a format character is doubled
u=function(a){var c=e+1<b.length&&b.charAt(e+1)===a;return c&&e++,c},
// Extract a number from the string value
v=function(a){var b=u(a),d="@"===a?14:"!"===a?20:"y"===a&&b?4:"o"===a?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=c.substring(i).match(e);if(!f)throw"Missing number at position "+i;return i+=f[0].length,parseInt(f[0],10)},
// Extract a name from the string value and convert to an index
w=function(b,d,e){var f=-1,g=a.map(u(b)?e:d,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)});if(a.each(g,function(a,b){var d=b[1];if(c.substr(i,d.length).toLowerCase()===d.toLowerCase())return f=b[0],i+=d.length,!1}),f!==-1)return f+1;throw"Unknown name at position "+i},
// Confirm that a literal character matches the string value
x=function(){if(c.charAt(i)!==b.charAt(e))throw"Unexpected literal at position "+i;i++};for(e=0;e<b.length;e++)if(t)"'"!==b.charAt(e)||u("'")?x():t=!1;else switch(b.charAt(e)){case"d":r=v("d");break;case"D":w("D",l,m);break;case"o":s=v("o");break;case"m":q=v("m");break;case"M":q=w("M",n,o);break;case"y":p=v("y");break;case"@":h=new Date(v("@")),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"!":h=new Date((v("!")-this._ticksTo1970)/1e4),p=h.getFullYear(),q=h.getMonth()+1,r=h.getDate();break;case"'":u("'")?x():t=!0;break;default:x()}if(i<c.length&&(g=c.substr(i),!/^\s+/.test(g)))throw"Extra/unparsed characters found in date: "+g;if(p===-1?p=(new Date).getFullYear():p<100&&(p+=(new Date).getFullYear()-(new Date).getFullYear()%100+(p<=k?0:-100)),s>-1)for(q=1,r=s;;){if(f=this._getDaysInMonth(p,q-1),r<=f)break;q++,r-=f}if(h=this._daylightSavingAdjust(new Date(p,q-1,r)),h.getFullYear()!==p||h.getMonth()+1!==q||h.getDate()!==r)throw"Invalid date";return h},/* Standard date formats. */
ATOM:"yy-mm-dd",// RFC 3339 (ISO 8601)
COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",// RFC 822
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",// ISO 8601
_ticksTo1970:24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*60*60*1e7,/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
formatDate:function(a,b,c){if(!b)return"";var d,e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,
// Check whether a format character is doubled
i=function(b){var c=d+1<a.length&&a.charAt(d+1)===b;return c&&d++,c},
// Format a number, with leading zero if necessary
j=function(a,b,c){var d=""+b;if(i(a))for(;d.length<c;)d="0"+d;return d},
// Format a name, short or long as requested
k=function(a,b,c,d){return i(a)?d[b]:c[b]},l="",m=!1;if(b)for(d=0;d<a.length;d++)if(m)"'"!==a.charAt(d)||i("'")?l+=a.charAt(d):m=!1;else switch(a.charAt(d)){case"d":l+=j("d",b.getDate(),2);break;case"D":l+=k("D",b.getDay(),e,f);break;case"o":l+=j("o",Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime()-new Date(b.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=j("m",b.getMonth()+1,2);break;case"M":l+=k("M",b.getMonth(),g,h);break;case"y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":l+=b.getTime();break;case"!":l+=1e4*b.getTime()+this._ticksTo1970;break;case"'":i("'")?l+="'":m=!0;break;default:l+=a.charAt(d)}return l},/* Extract all possible characters from the date format. */
_possibleChars:function(a){var b,c="",d=!1,
// Check whether a format character is doubled
e=function(c){var d=b+1<a.length&&a.charAt(b+1)===c;return d&&b++,d};for(b=0;b<a.length;b++)if(d)"'"!==a.charAt(b)||e("'")?c+=a.charAt(b):d=!1;else switch(a.charAt(b)){case"d":case"m":case"y":case"@":c+="0123456789";break;case"D":case"M":return null;// Accept anything
case"'":e("'")?c+="'":d=!0;break;default:c+=a.charAt(b)}return c},/* Get a setting value, defaulting if necessary. */
_get:function(a,c){return a.settings[c]!==b?a.settings[c]:this._defaults[c]},/* Parse existing date and initialise date picker. */
_setDateFromField:function(a,b){if(a.input.val()!==a.lastVal){var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e=this._getDefaultDate(a),f=e,g=this._getFormatConfig(a);try{f=this.parseDate(c,d,g)||e}catch(h){d=b?"":d}a.selectedDay=f.getDate(),a.drawMonth=a.selectedMonth=f.getMonth(),a.drawYear=a.selectedYear=f.getFullYear(),a.currentDay=d?f.getDate():0,a.currentMonth=d?f.getMonth():0,a.currentYear=d?f.getFullYear():0,this._adjustInstDate(a)}},/* Retrieve the default date shown on opening. */
_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},/* A date may be specified as an exact value or a relative one. */
_determineDate:function(b,c,d){var e=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},f=function(c){try{return a.datepicker.parseDate(a.datepicker._get(b,"dateFormat"),c,a.datepicker._getFormatConfig(b))}catch(d){}for(var e=(c.toLowerCase().match(/^c/)?a.datepicker._getDate(b):null)||new Date,f=e.getFullYear(),g=e.getMonth(),h=e.getDate(),i=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,j=i.exec(c);j;){switch(j[2]||"d"){case"d":case"D":h+=parseInt(j[1],10);break;case"w":case"W":h+=7*parseInt(j[1],10);break;case"m":case"M":g+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g));break;case"y":case"Y":f+=parseInt(j[1],10),h=Math.min(h,a.datepicker._getDaysInMonth(f,g))}j=i.exec(c)}return new Date(f,g,h)},g=null==c||""===c?d:"string"==typeof c?f(c):"number"==typeof c?isNaN(c)?d:e(c):new Date(c.getTime());return g=g&&"Invalid Date"===g.toString()?d:g,g&&(g.setHours(0),g.setMinutes(0),g.setSeconds(0),g.setMilliseconds(0)),this._daylightSavingAdjust(g)},/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},/* Set the date(s) directly. */
_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),e===a.selectedMonth&&f===a.selectedYear||c||this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},/* Retrieve the date(s) directly. */
_getDate:function(a){var b=!a.currentYear||a.input&&""===a.input.val()?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
_attachHandlers:function(b){var c=this._get(b,"stepMonths"),d="#"+b.id.replace(/\\\\/g,"\\");b.dpDiv.find("[data-handler]").map(function(){var b={prev:function(){a.datepicker._adjustDate(d,-c,"M")},next:function(){a.datepicker._adjustDate(d,+c,"M")},hide:function(){a.datepicker._hideDatepicker()},today:function(){a.datepicker._gotoToday(d)},selectDay:function(){return a.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return a.datepicker._selectMonthYear(d,this,"M"),!1},selectYear:function(){return a.datepicker._selectMonthYear(d,this,"Y"),!1}};a(this).bind(this.getAttribute("data-event"),b[this.getAttribute("data-handler")])})},/* Generate the HTML for the current state of the date picker. */
_generateHTML:function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O=new Date,P=this._daylightSavingAdjust(new Date(O.getFullYear(),O.getMonth(),O.getDate())),// clear time
Q=this._get(a,"isRTL"),R=this._get(a,"showButtonPanel"),S=this._get(a,"hideIfNoPrevNext"),T=this._get(a,"navigationAsDateFormat"),U=this._getNumberOfMonths(a),V=this._get(a,"showCurrentAtPos"),W=this._get(a,"stepMonths"),X=1!==U[0]||1!==U[1],Y=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),Z=this._getMinMaxDate(a,"min"),$=this._getMinMaxDate(a,"max"),_=a.drawMonth-V,aa=a.drawYear;if(_<0&&(_+=12,aa--),$)for(b=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-U[0]*U[1]+1,$.getDate())),b=Z&&b<Z?Z:b;this._daylightSavingAdjust(new Date(aa,_,1))>b;)_--,_<0&&(_=11,aa--);for(a.drawMonth=_,a.drawYear=aa,c=this._get(a,"prevText"),c=T?this.formatDate(c,this._daylightSavingAdjust(new Date(aa,_-W,1)),this._getFormatConfig(a)):c,d=this._canAdjustMonth(a,-1,aa,_)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>":S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+c+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"e":"w")+"'>"+c+"</span></a>",e=this._get(a,"nextText"),e=T?this.formatDate(e,this._daylightSavingAdjust(new Date(aa,_+W,1)),this._getFormatConfig(a)):e,f=this._canAdjustMonth(a,1,aa,_)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>":S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+e+"'><span class='ui-icon ui-icon-circle-triangle-"+(Q?"w":"e")+"'>"+e+"</span></a>",g=this._get(a,"currentText"),h=this._get(a,"gotoCurrent")&&a.currentDay?Y:P,g=T?this.formatDate(g,h,this._getFormatConfig(a)):g,i=a.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(a,"closeText")+"</button>",j=R?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Q?i:"")+(this._isInRange(a,h)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+g+"</button>":"")+(Q?"":i)+"</div>":"",k=parseInt(this._get(a,"firstDay"),10),k=isNaN(k)?0:k,l=this._get(a,"showWeek"),m=this._get(a,"dayNames"),n=this._get(a,"dayNamesMin"),o=this._get(a,"monthNames"),p=this._get(a,"monthNamesShort"),q=this._get(a,"beforeShowDay"),r=this._get(a,"showOtherMonths"),s=this._get(a,"selectOtherMonths"),t=this._getDefaultDate(a),u="",w=0;w<U[0];w++){for(x="",this.maxRows=4,y=0;y<U[1];y++){if(z=this._daylightSavingAdjust(new Date(aa,_,a.selectedDay)),A=" ui-corner-all",B="",X){if(B+="<div class='ui-datepicker-group",U[1]>1)switch(y){case 0:B+=" ui-datepicker-group-first",A=" ui-corner-"+(Q?"right":"left");break;case U[1]-1:B+=" ui-datepicker-group-last",A=" ui-corner-"+(Q?"left":"right");break;default:B+=" ui-datepicker-group-middle",A=""}B+="'>"}for(B+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+A+"'>"+(/all|left/.test(A)&&0===w?Q?f:d:"")+(/all|right/.test(A)&&0===w?Q?d:f:"")+this._generateMonthYearHeader(a,_,aa,Z,$,w>0||y>0,o,p)+// draw month headers
"</div><table class='ui-datepicker-calendar'><thead><tr>",C=l?"<th class='ui-datepicker-week-col'>"+this._get(a,"weekHeader")+"</th>":"",v=0;v<7;v++)// days of the week
D=(v+k)%7,C+="<th"+((v+k+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+m[D]+"'>"+n[D]+"</span></th>";for(B+=C+"</tr></thead><tbody>",E=this._getDaysInMonth(aa,_),aa===a.selectedYear&&_===a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,E)),F=(this._getFirstDayOfMonth(aa,_)-k+7)%7,G=Math.ceil((F+E)/7),// calculate the number of rows to generate
H=X&&this.maxRows>G?this.maxRows:G,//If multiple months, use the higher number of rows (see #7043)
this.maxRows=H,I=this._daylightSavingAdjust(new Date(aa,_,1-F)),J=0;J<H;J++){for(// create date picker rows
B+="<tr>",K=l?"<td class='ui-datepicker-week-col'>"+this._get(a,"calculateWeek")(I)+"</td>":"",v=0;v<7;v++)// create date picker days
L=q?q.apply(a.input?a.input[0]:null,[I]):[!0,""],M=I.getMonth()!==_,N=M&&!s||!L[0]||Z&&I<Z||$&&I>$,K+="<td class='"+((v+k+6)%7>=5?" ui-datepicker-week-end":"")+(// highlight weekends
M?" ui-datepicker-other-month":"")+(// highlight days from other months
I.getTime()===z.getTime()&&_===a.selectedMonth&&a._keyEvent||// user pressed key
t.getTime()===I.getTime()&&t.getTime()===z.getTime()?
// or defaultDate is current printedDate and defaultDate is selectedDate
" "+this._dayOverClass:"")+(// highlight selected day
N?" "+this._unselectableClass+" ui-state-disabled":"")+(// highlight unselectable days
M&&!r?"":" "+L[1]+(// highlight custom dates
I.getTime()===Y.getTime()?" "+this._currentClass:"")+(// highlight selected day
I.getTime()===P.getTime()?" ui-datepicker-today":""))+"'"+(// highlight today (if different)
M&&!r||!L[2]?"":" title='"+L[2].replace(/'/g,"&#39;")+"'")+(// cell title
N?"":" data-handler='selectDay' data-event='click' data-month='"+I.getMonth()+"' data-year='"+I.getFullYear()+"'")+">"+(// actions
M&&!r?"&#xa0;":// display for other months
N?"<span class='ui-state-default'>"+I.getDate()+"</span>":"<a class='ui-state-default"+(I.getTime()===P.getTime()?" ui-state-highlight":"")+(I.getTime()===Y.getTime()?" ui-state-active":"")+(// highlight selected day
M?" ui-priority-secondary":"")+// distinguish dates from other months
"' href='#'>"+I.getDate()+"</a>")+"</td>",// display selectable date
I.setDate(I.getDate()+1),I=this._daylightSavingAdjust(I);B+=K+"</tr>"}_++,_>11&&(_=0,aa++),B+="</tbody></table>"+(X?"</div>"+(U[0]>0&&y===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=B}u+=x}return u+=j,a._keyEvent=!1,u},/* Generate the month and year header. */
_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q=this._get(a,"changeMonth"),r=this._get(a,"changeYear"),s=this._get(a,"showMonthAfterYear"),t="<div class='ui-datepicker-title'>",u="";
// month selection
if(f||!q)u+="<span class='ui-datepicker-month'>"+g[b]+"</span>";else{for(i=d&&d.getFullYear()===c,j=e&&e.getFullYear()===c,u+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",k=0;k<12;k++)(!i||k>=d.getMonth())&&(!j||k<=e.getMonth())&&(u+="<option value='"+k+"'"+(k===b?" selected='selected'":"")+">"+h[k]+"</option>");u+="</select>"}
// year selection
if(s||(t+=u+(!f&&q&&r?"":"&#xa0;")),!a.yearshtml)if(a.yearshtml="",f||!r)t+="<span class='ui-datepicker-year'>"+c+"</span>";else{for(
// determine range of years to display
l=this._get(a,"yearRange").split(":"),m=(new Date).getFullYear(),n=function(a){var b=a.match(/c[+\-].*/)?c+parseInt(a.substring(1),10):a.match(/[+\-].*/)?m+parseInt(a,10):parseInt(a,10);return isNaN(b)?m:b},o=n(l[0]),p=Math.max(o,n(l[1]||"")),o=d?Math.max(o,d.getFullYear()):o,p=e?Math.min(p,e.getFullYear()):p,a.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";o<=p;o++)a.yearshtml+="<option value='"+o+"'"+(o===c?" selected='selected'":"")+">"+o+"</option>";a.yearshtml+="</select>",t+=a.yearshtml,a.yearshtml=null}// Close datepicker_header
return t+=this._get(a,"yearSuffix"),s&&(t+=(!f&&q&&r?"":"&#xa0;")+u),t+="</div>"},/* Adjust one of the date sub-fields. */
_adjustInstDate:function(a,b,c){var d=a.drawYear+("Y"===c?b:0),e=a.drawMonth+("M"===c?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+("D"===c?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),"M"!==c&&"Y"!==c||this._notifyChange(a)},/* Ensure a date is within any min/max bounds. */
_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return d&&e>d?d:e},/* Notify change of month/year. */
_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},/* Determine the number of months to show. */
_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return null==b?[1,1]:"number"==typeof b?[1,b]:b},/* Determine the current maximum date - ensure no time components are set. */
_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},/* Find the number of days in a given month. */
_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},/* Find the day of the week of the first of a month. */
_getFirstDayOfMonth:function(a,b){return new Date(a,b,1).getDay()},/* Determines if we should allow a "next/prev" month display change. */
_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},/* Is the given date in the accepted range? */
_isInRange:function(a,b){var c,d,e=this._getMinMaxDate(a,"min"),f=this._getMinMaxDate(a,"max"),g=null,h=null,i=this._get(a,"yearRange");return i&&(c=i.split(":"),d=(new Date).getFullYear(),g=parseInt(c[0],10),h=parseInt(c[1],10),c[0].match(/[+\-].*/)&&(g+=d),c[1].match(/[+\-].*/)&&(h+=d)),(!e||b.getTime()>=e.getTime())&&(!f||b.getTime()<=f.getTime())&&(!g||b.getFullYear()>=g)&&(!h||b.getFullYear()<=h)},/* Provide the configuration settings for formatting/parsing. */
_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b="string"!=typeof b?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},/* Format the given date for display. */
_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
a.fn.datepicker=function(b){/* Verify an empty collection wasn't passed - Fixes #6976 */
if(!this.length)return this;/* Initialise the date picker. */
a.datepicker.initialized||(a(document).mousedown(a.datepicker._checkExternalClick),a.datepicker.initialized=!0),/* Append datepicker main container to body if not exist. */
0===a("#"+a.datepicker._mainDivId).length&&a("body").append(a.datepicker.dpDiv);var c=Array.prototype.slice.call(arguments,1);return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof b?a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this].concat(c)):a.datepicker._attachDatepicker(this,b)}):a.datepicker["_"+b+"Datepicker"].apply(a.datepicker,[this[0]].concat(c))},a.datepicker=new c,// singleton instance
a.datepicker.initialized=!1,a.datepicker.uuid=(new Date).getTime(),a.datepicker.version="1.10.3"}(jQuery),function(a,b){var c={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},d={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};a.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",
// Ensure the titlebar is always visible
using:function(b){var c=a(this).css(b).offset().top;c<0&&a(this).css("top",b.top-c)}},resizable:!0,show:null,title:null,width:300,
// callbacks
beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&a.fn.draggable&&this._makeDraggable(),this.options.resizable&&a.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var b=this.options.appendTo;return b&&(b.jquery||b.nodeType)?a(b):this.document.find(b||"body").eq(0)},_destroy:function(){var a,b=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),a=b.parent.children().eq(b.index),
// Don't try to place the dialog next to itself (#8613)
a.length&&a[0]!==this.element[0]?a.before(this.element):b.parent.append(this.element)},widget:function(){return this.uiDialog},disable:a.noop,enable:a.noop,close:function(b){var c=this;this._isOpen&&this._trigger("beforeClose",b)!==!1&&(this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||
// Hiding a focused element doesn't trigger blur in WebKit
// so in case we have nothing to focus on, explicitly blur the active element
// https://bugs.webkit.org/show_bug.cgi?id=47182
a(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(a,b){var c=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return c&&!b&&this._trigger("focus",a),c},open:function(){var b=this;return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=a(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){b._focusTabbable(),b._trigger("focus")}),void this._trigger("open"))},_focusTabbable:function(){
// Set focus to the first match:
// 1. First element inside the dialog matching [autofocus]
// 2. Tabbable element inside the content element
// 3. Tabbable element inside the buttonpane
// 4. The close button
// 5. The dialog itself
var a=this.element.find("[autofocus]");a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).focus()},_keepFocus:function(b){function c(){var b=this.document[0].activeElement,c=this.uiDialog[0]===b||a.contains(this.uiDialog[0],b);c||this._focusTabbable()}b.preventDefault(),c.call(this),
// support: IE
// IE <= 8 doesn't prevent moving focus even with event.preventDefault()
// so we check again later
this._delay(c)},_createWrapper:function(){this.uiDialog=a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({
// Setting tabIndex makes the div focusable
tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===a.ui.keyCode.ESCAPE)return b.preventDefault(),void this.close(b);
// prevent tabbing out of dialogs
if(b.keyCode===a.ui.keyCode.TAB){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),e=c.filter(":last");b.target!==e[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==d[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(e.focus(1),b.preventDefault()):(d.focus(1),b.preventDefault())}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()}}),
// We assume that any existing aria-describedby attribute means
// that the dialog content is marked up properly
// otherwise we brute force the content as the description
this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var b;this.uiDialogTitlebar=a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(b){
// Don't prevent click on close button (#8838)
// Focusing a dialog that is partially scrolled out of view
// causes the browser to scroll it into view, preventing the click event
a(b.target).closest(".ui-dialog-titlebar-close")||
// Dialog isn't getting focus when dragging (#8063)
this.uiDialog.focus()}}),this.uiDialogTitlebarClose=a("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(a){a.preventDefault(),this.close(a)}}),b=a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(b),this.uiDialog.attr({"aria-labelledby":b.attr("id")})},_title:function(a){this.options.title||a.html("&#160;"),a.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var b=this,c=this.options.buttons;
// if we already have a button pane, remove it
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),a.isEmptyObject(c)||a.isArray(c)&&!c.length?void this.uiDialog.removeClass("ui-dialog-buttons"):(a.each(c,function(c,d){var e,f;d=a.isFunction(d)?{click:d,text:c}:d,
// Default to a non-submitting button
d=a.extend({type:"button"},d),
// Change the context for the click callback to be the main element
e=d.click,d.click=function(){e.apply(b.element[0],arguments)},f={icons:d.icons,text:d.showText},delete d.icons,delete d.showText,a("<button></button>",d).button(f).appendTo(b.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function b(a){return{position:a.position,offset:a.offset}}var c=this,d=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){a(this).addClass("ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",d,b(e))},drag:function(a,d){c._trigger("drag",a,b(d))},stop:function(e,f){d.position=[f.position.left-c.document.scrollLeft(),f.position.top-c.document.scrollTop()],a(this).removeClass("ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",e,b(f))}})},_makeResizable:function(){function b(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}}var c=this,d=this.options,e=d.resizable,
// .ui-resizable has position: relative defined in the stylesheet
// but dialogs have to use absolute or fixed positioning
f=this.uiDialog.css("position"),g="string"==typeof e?e:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:d.maxWidth,maxHeight:d.maxHeight,minWidth:d.minWidth,minHeight:this._minHeight(),handles:g,start:function(d,e){a(this).addClass("ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",d,b(e))},resize:function(a,d){c._trigger("resize",a,b(d))},stop:function(e,f){d.height=a(this).height(),d.width=a(this).width(),a(this).removeClass("ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",e,b(f))}}).css("position",f)},_minHeight:function(){var a=this.options;return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(){
// Need to show the dialog to get the actual offset in the position plugin
var a=this.uiDialog.is(":visible");a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()},_setOptions:function(b){var e=this,f=!1,g={};a.each(b,function(a,b){e._setOption(a,b),a in c&&(f=!0),a in d&&(g[a]=b)}),f&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",g)},_setOption:function(a,b){/*jshint maxcomplexity:15*/
var c,d,e=this.uiDialog;"dialogClass"===a&&e.removeClass(this.options.dialogClass).addClass(b),"disabled"!==a&&(this._super(a,b),"appendTo"===a&&this.uiDialog.appendTo(this._appendTo()),"buttons"===a&&this._createButtons(),"closeText"===a&&this.uiDialogTitlebarClose.button({
// Ensure that we always pass a string
label:""+b}),"draggable"===a&&(c=e.is(":data(ui-draggable)"),c&&!b&&e.draggable("destroy"),!c&&b&&this._makeDraggable()),"position"===a&&this._position(),"resizable"===a&&(
// currently resizable, becoming non-resizable
d=e.is(":data(ui-resizable)"),d&&!b&&e.resizable("destroy"),
// currently resizable, changing handles
d&&"string"==typeof b&&e.resizable("option","handles",b),
// currently non-resizable, becoming resizable
d||b===!1||this._makeResizable()),"title"===a&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){
// If the user has resized the dialog, the .ui-dialog and .ui-dialog-content
// divs will both have width and height set, so we need to reset them
var a,b,c,d=this.options;
// Reset content sizing
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),d.minWidth>d.width&&(d.width=d.minWidth),
// reset wrapper sizing
// determine the height of all the non-content elements
a=this.uiDialog.css({height:"auto",width:d.width}).outerHeight(),b=Math.max(0,d.minHeight-a),c="number"==typeof d.maxHeight?Math.max(0,d.maxHeight-a):"none","auto"===d.height?this.element.css({minHeight:b,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,d.height-a)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var b=a(this);return a("<div>").css({position:"absolute",width:b.outerWidth(),height:b.outerHeight()}).appendTo(b.parent()).offset(b.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(b){return!!a(b.target).closest(".ui-dialog").length||!!a(b.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var b=this,c=this.widgetFullName;a.ui.dialog.overlayInstances||
// Prevent use of anchors and inputs.
// We use a delay in case the overlay is created from an
// event that we're going to be cancelling. (#2804)
this._delay(function(){
// Handle .dialog().dialog("close") (#4065)
a.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(d){b._allowInteraction(d)||(d.preventDefault(),a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())})}),this.overlay=a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),a.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(a.ui.dialog.overlayInstances--,a.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),a.ui.dialog.overlayInstances=0,
// DEPRECATED
a.uiBackCompat!==!1&&
// position option with array notation
// just override with old implementation
a.widget("ui.dialog",a.ui.dialog,{_position:function(){var b,c=this.options.position,d=[],e=[0,0];c?(("string"==typeof c||"object"==typeof c&&"0"in c)&&(d=c.split?c.split(" "):[c[0],c[1]],1===d.length&&(d[1]=d[0]),a.each(["left","top"],function(a,b){+d[a]===d[a]&&(e[a]=d[a],d[a]=b)}),c={my:d[0]+(e[0]<0?e[0]:"+"+e[0])+" "+d[1]+(e[1]<0?e[1]:"+"+e[1]),at:d.join(" ")}),c=a.extend({},a.ui.dialog.prototype.options.position,c)):c=a.ui.dialog.prototype.options.position,
// need to show the dialog to get the actual offset in the position plugin
b=this.uiDialog.is(":visible"),b||this.uiDialog.show(),this.uiDialog.position(c),b||this.uiDialog.hide()}})}(jQuery),function(a,b){var c=/up|down|vertical/,d=/up|left|vertical|horizontal/;a.effects.effect.blind=function(b,e){
// Create element
var f,g,h,i=a(this),j=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(i,b.mode||"hide"),l=b.direction||"up",m=c.test(l),n=m?"height":"width",o=m?"top":"left",p=d.test(l),q={},r="show"===k;
// if already wrapped, the wrapper's properties are my property. #6245
i.parent().is(".ui-effects-wrapper")?a.effects.save(i.parent(),j):a.effects.save(i,j),i.show(),f=a.effects.createWrapper(i).css({overflow:"hidden"}),g=f[n](),h=parseFloat(f.css(o))||0,q[n]=r?g:0,p||(i.css(m?"bottom":"right",0).css(m?"top":"left","auto").css({position:"absolute"}),q[o]=r?h:g+h),
// start at 0 if we are showing
r&&(f.css(n,0),p||f.css(o,h+g)),
// Animate
f.animate(q,{duration:b.duration,easing:b.easing,queue:!1,complete:function(){"hide"===k&&i.hide(),a.effects.restore(i,j),a.effects.removeWrapper(i),e()}})}}(jQuery),function(a,b){a.effects.effect.bounce=function(b,c){var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],
// defaults:
i=a.effects.setMode(g,b.mode||"effect"),j="hide"===i,k="show"===i,l=b.direction||"up",m=b.distance,n=b.times||5,
// number of internal animations
o=2*n+(k||j?1:0),p=b.duration/o,q=b.easing,
// utility:
r="up"===l||"down"===l?"top":"left",s="up"===l||"left"===l,
// we will need to re-assemble the queue to stack our animations in place
t=g.queue(),u=t.length;
// Bounces up/down/left/right then back to 0 -- times * 2 animations happen here
for(
// Avoid touching opacity to prevent clearType and PNG issues in IE
(k||j)&&h.push("opacity"),a.effects.save(g,h),g.show(),a.effects.createWrapper(g),// Create Wrapper
// default distance for the BIGGEST bounce is the outer Distance / 3
m||(m=g["top"===r?"outerHeight":"outerWidth"]()/3),k&&(f={opacity:1},f[r]=0,
// if we are showing, force opacity 0 and set the initial position
// then do the "first" animation
g.css("opacity",0).css(r,s?2*-m:2*m).animate(f,p,q)),
// start at the smallest distance if we are hiding
j&&(m/=Math.pow(2,n-1)),f={},f[r]=0,d=0;d<n;d++)e={},e[r]=(s?"-=":"+=")+m,g.animate(e,p,q).animate(f,p,q),m=j?2*m:m/2;
// Last Bounce when Hiding
j&&(e={opacity:0},e[r]=(s?"-=":"+=")+m,g.animate(e,p,q)),g.queue(function(){j&&g.hide(),a.effects.restore(g,h),a.effects.removeWrapper(g),c()}),
// inject all the animations we just queued to be first in line (after "inprogress")
u>1&&t.splice.apply(t,[1,0].concat(t.splice(u,o+1))),g.dequeue()}}(jQuery),function(a,b){a.effects.effect.clip=function(b,c){
// Create element
var d,e,f,g=a(this),h=["position","top","bottom","left","right","height","width"],i=a.effects.setMode(g,b.mode||"hide"),j="show"===i,k=b.direction||"vertical",l="vertical"===k,m=l?"height":"width",n=l?"top":"left",o={};
// Save & Show
a.effects.save(g,h),g.show(),
// Create Wrapper
d=a.effects.createWrapper(g).css({overflow:"hidden"}),e="IMG"===g[0].tagName?d:g,f=e[m](),
// Shift
j&&(e.css(m,0),e.css(n,f/2)),
// Create Animation Object:
o[m]=j?f:0,o[n]=j?0:f/2,
// Animate
e.animate(o,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){j||g.hide(),a.effects.restore(g,h),a.effects.removeWrapper(g),c()}})}}(jQuery),function(a,b){a.effects.effect.drop=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","opacity","height","width"],g=a.effects.setMode(e,b.mode||"hide"),h="show"===g,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i?"pos":"neg",l={opacity:h?1:0};
// Adjust
a.effects.save(e,f),e.show(),a.effects.createWrapper(e),d=b.distance||e["top"===j?"outerHeight":"outerWidth"](!0)/2,h&&e.css("opacity",0).css(j,"pos"===k?-d:d),
// Animation
l[j]=(h?"pos"===k?"+=":"-=":"pos"===k?"-=":"+=")+d,
// Animate
e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})}}(jQuery),function(a,b){a.effects.effect.explode=function(b,c){
// children animate complete:
function d(){t.push(this),t.length===l*m&&e()}function e(){n.css({visibility:"visible"}),a(t).remove(),p||n.hide(),c()}var
// loop
f,g,h,i,j,k,l=b.pieces?Math.round(Math.sqrt(b.pieces)):3,m=l,n=a(this),o=a.effects.setMode(n,b.mode||"hide"),p="show"===o,
// show and then visibility:hidden the element before calculating offset
q=n.show().css("visibility","hidden").offset(),
// width and height of a piece
r=Math.ceil(n.outerWidth()/m),s=Math.ceil(n.outerHeight()/l),t=[];
// clone the element for each row and cell.
for(f=0;f<l;f++)for(// ===>
i=q.top+f*s,k=f-(l-1)/2,g=0;g<m;g++)// |||
h=q.left+g*r,j=g-(m-1)/2,
// Create a clone of the now hidden main element that will be absolute positioned
// within a wrapper div off the -left and -top equal to size of our pieces
n.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-g*r,top:-f*s}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:r,height:s,left:h+(p?j*r:0),top:i+(p?k*s:0),opacity:p?0:1}).animate({left:h+(p?0:j*r),top:i+(p?0:k*s),opacity:p?1:0},b.duration||500,b.easing,d)}}(jQuery),function(a,b){a.effects.effect.fade=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"toggle");d.animate({opacity:e},{queue:!1,duration:b.duration,easing:b.easing,complete:c})}}(jQuery),function(a,b){a.effects.effect.fold=function(b,c){
// Create element
var d,e,f=a(this),g=["position","top","bottom","left","right","height","width"],h=a.effects.setMode(f,b.mode||"hide"),i="show"===h,j="hide"===h,k=b.size||15,l=/([0-9]+)%/.exec(k),m=!!b.horizFirst,n=i!==m,o=n?["width","height"]:["height","width"],p=b.duration/2,q={},r={};a.effects.save(f,g),f.show(),
// Create Wrapper
d=a.effects.createWrapper(f).css({overflow:"hidden"}),e=n?[d.width(),d.height()]:[d.height(),d.width()],l&&(k=parseInt(l[1],10)/100*e[j?0:1]),i&&d.css(m?{height:0,width:k}:{height:k,width:0}),
// Animation
q[o[0]]=i?e[0]:k,r[o[1]]=i?e[1]:0,
// Animate
d.animate(q,p,b.easing).animate(r,p,b.easing,function(){j&&f.hide(),a.effects.restore(f,g),a.effects.removeWrapper(f),c()})}}(jQuery),function(a,b){a.effects.effect.highlight=function(b,c){var d=a(this),e=["backgroundImage","backgroundColor","opacity"],f=a.effects.setMode(d,b.mode||"show"),g={backgroundColor:d.css("backgroundColor")};"hide"===f&&(g.opacity=0),a.effects.save(d,e),d.show().css({backgroundImage:"none",backgroundColor:b.color||"#ffff99"}).animate(g,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===f&&d.hide(),a.effects.restore(d,e),c()}})}}(jQuery),function(a,b){a.effects.effect.pulsate=function(b,c){var d,e=a(this),f=a.effects.setMode(e,b.mode||"show"),g="show"===f,h="hide"===f,i=g||"hide"===f,
// showing or hiding leaves of the "last" animation
j=2*(b.times||5)+(i?1:0),k=b.duration/j,l=0,m=e.queue(),n=m.length;
// anims - 1 opacity "toggles"
for(!g&&e.is(":visible")||(e.css("opacity",0).show(),l=1),d=1;d<j;d++)e.animate({opacity:l},k,b.easing),l=1-l;e.animate({opacity:l},k,b.easing),e.queue(function(){h&&e.hide(),c()}),
// We just queued up "anims" animations, we need to put them next in the queue
n>1&&m.splice.apply(m,[1,0].concat(m.splice(n,j+1))),e.dequeue()}}(jQuery),function(a,b){a.effects.effect.puff=function(b,c){var d=a(this),e=a.effects.setMode(d,b.mode||"hide"),f="hide"===e,g=parseInt(b.percent,10)||150,h=g/100,i={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()};a.extend(b,{effect:"scale",queue:!1,fade:!0,mode:e,complete:c,percent:f?g:100,from:f?i:{height:i.height*h,width:i.width*h,outerHeight:i.outerHeight*h,outerWidth:i.outerWidth*h}}),d.effect(b)},a.effects.effect.scale=function(b,c){
// Create element
var d=a(this),e=a.extend(!0,{},b),f=a.effects.setMode(d,b.mode||"effect"),g=parseInt(b.percent,10)||(0===parseInt(b.percent,10)?0:"hide"===f?0:100),h=b.direction||"both",i=b.origin,j={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},k={y:"horizontal"!==h?g/100:1,x:"vertical"!==h?g/100:1};
// We are going to pass this effect to the size effect:
e.effect="size",e.queue=!1,e.complete=c,
// Set default origin and restore for show/hide
"effect"!==f&&(e.origin=i||["middle","center"],e.restore=!0),e.from=b.from||("show"===f?{height:0,width:0,outerHeight:0,outerWidth:0}:j),e.to={height:j.height*k.y,width:j.width*k.x,outerHeight:j.outerHeight*k.y,outerWidth:j.outerWidth*k.x},
// Fade option to support puff
e.fade&&("show"===f&&(e.from.opacity=0,e.to.opacity=1),"hide"===f&&(e.from.opacity=1,e.to.opacity=0)),
// Animate
d.effect(e)},a.effects.effect.size=function(b,c){
// Create element
var d,e,f,g=a(this),h=["position","top","bottom","left","right","width","height","overflow","opacity"],
// Always restore
i=["position","top","bottom","left","right","overflow","opacity"],
// Copy for children
j=["width","height","overflow"],k=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],m=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
// Set options
n=a.effects.setMode(g,b.mode||"effect"),o=b.restore||"effect"!==n,p=b.scale||"both",q=b.origin||["middle","center"],r=g.css("position"),s=o?h:i,t={height:0,width:0,outerHeight:0,outerWidth:0};"show"===n&&g.show(),d={height:g.height(),width:g.width(),outerHeight:g.outerHeight(),outerWidth:g.outerWidth()},"toggle"===b.mode&&"show"===n?(g.from=b.to||t,g.to=b.from||d):(g.from=b.from||("show"===n?t:d),g.to=b.to||("hide"===n?t:d)),
// Set scaling factor
f={from:{y:g.from.height/d.height,x:g.from.width/d.width},to:{y:g.to.height/d.height,x:g.to.width/d.width}},
// Scale the css box
"box"!==p&&"both"!==p||(
// Vertical props scaling
f.from.y!==f.to.y&&(s=s.concat(l),g.from=a.effects.setTransition(g,l,f.from.y,g.from),g.to=a.effects.setTransition(g,l,f.to.y,g.to)),
// Horizontal props scaling
f.from.x!==f.to.x&&(s=s.concat(m),g.from=a.effects.setTransition(g,m,f.from.x,g.from),g.to=a.effects.setTransition(g,m,f.to.x,g.to))),
// Scale the content
"content"!==p&&"both"!==p||
// Vertical props scaling
f.from.y!==f.to.y&&(s=s.concat(k).concat(j),g.from=a.effects.setTransition(g,k,f.from.y,g.from),g.to=a.effects.setTransition(g,k,f.to.y,g.to)),a.effects.save(g,s),g.show(),a.effects.createWrapper(g),g.css("overflow","hidden").css(g.from),
// Adjust
q&&(// Calculate baseline shifts
e=a.effects.getBaseline(q,d),g.from.top=(d.outerHeight-g.outerHeight())*e.y,g.from.left=(d.outerWidth-g.outerWidth())*e.x,g.to.top=(d.outerHeight-g.to.outerHeight)*e.y,g.to.left=(d.outerWidth-g.to.outerWidth)*e.x),g.css(g.from),// set top & left
// Animate
"content"!==p&&"both"!==p||(// Scale the children
// Add margins/font-size
l=l.concat(["marginTop","marginBottom"]).concat(k),m=m.concat(["marginLeft","marginRight"]),j=h.concat(l).concat(m),g.find("*[width]").each(function(){var c=a(this),d={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};o&&a.effects.save(c,j),c.from={height:d.height*f.from.y,width:d.width*f.from.x,outerHeight:d.outerHeight*f.from.y,outerWidth:d.outerWidth*f.from.x},c.to={height:d.height*f.to.y,width:d.width*f.to.x,outerHeight:d.height*f.to.y,outerWidth:d.width*f.to.x},
// Vertical props scaling
f.from.y!==f.to.y&&(c.from=a.effects.setTransition(c,l,f.from.y,c.from),c.to=a.effects.setTransition(c,l,f.to.y,c.to)),
// Horizontal props scaling
f.from.x!==f.to.x&&(c.from=a.effects.setTransition(c,m,f.from.x,c.from),c.to=a.effects.setTransition(c,m,f.to.x,c.to)),
// Animate children
c.css(c.from),c.animate(c.to,b.duration,b.easing,function(){
// Restore children
o&&a.effects.restore(c,j)})})),
// Animate
g.animate(g.to,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){0===g.to.opacity&&g.css("opacity",g.from.opacity),"hide"===n&&g.hide(),a.effects.restore(g,s),o||(
// we need to calculate our new positioning based on the scaling
"static"===r?g.css({position:"relative",top:g.to.top,left:g.to.left}):a.each(["top","left"],function(a,b){g.css(b,function(b,c){var d=parseInt(c,10),e=a?g.to.left:g.to.top;
// if original was "auto", recalculate the new value from wrapper
// if original was "auto", recalculate the new value from wrapper
return"auto"===c?e+"px":d+e+"px"})})),a.effects.removeWrapper(g),c()}})}}(jQuery),function(a,b){a.effects.effect.shake=function(b,c){var d,e=a(this),f=["position","top","bottom","left","right","height","width"],g=a.effects.setMode(e,b.mode||"effect"),h=b.direction||"left",i=b.distance||20,j=b.times||3,k=2*j+1,l=Math.round(b.duration/k),m="up"===h||"down"===h?"top":"left",n="up"===h||"left"===h,o={},p={},q={},
// we will need to re-assemble the queue to stack our animations in place
r=e.queue(),s=r.length;
// Shakes
for(a.effects.save(e,f),e.show(),a.effects.createWrapper(e),
// Animation
o[m]=(n?"-=":"+=")+i,p[m]=(n?"+=":"-=")+2*i,q[m]=(n?"-=":"+=")+2*i,
// Animate
e.animate(o,l,b.easing),d=1;d<j;d++)e.animate(p,l,b.easing).animate(q,l,b.easing);e.animate(p,l,b.easing).animate(o,l/2,b.easing).queue(function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}),
// inject all the animations we just queued to be first in line (after "inprogress")
s>1&&r.splice.apply(r,[1,0].concat(r.splice(s,k+1))),e.dequeue()}}(jQuery),function(a,b){a.effects.effect.slide=function(b,c){
// Create element
var d,e=a(this),f=["position","top","bottom","left","right","width","height"],g=a.effects.setMode(e,b.mode||"show"),h="show"===g,i=b.direction||"left",j="up"===i||"down"===i?"top":"left",k="up"===i||"left"===i,l={};
// Adjust
a.effects.save(e,f),e.show(),d=b.distance||e["top"===j?"outerHeight":"outerWidth"](!0),a.effects.createWrapper(e).css({overflow:"hidden"}),h&&e.css(j,k?isNaN(d)?"-"+d:-d:d),
// Animation
l[j]=(h?k?"+=":"-=":k?"-=":"+=")+d,
// Animate
e.animate(l,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){"hide"===g&&e.hide(),a.effects.restore(e,f),a.effects.removeWrapper(e),c()}})}}(jQuery),function(a,b){a.effects.effect.transfer=function(b,c){var d=a(this),e=a(b.to),f="fixed"===e.css("position"),g=a("body"),h=f?g.scrollTop():0,i=f?g.scrollLeft():0,j=e.offset(),k={top:j.top-h,left:j.left-i,height:e.innerHeight(),width:e.innerWidth()},l=d.offset(),m=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({top:l.top-h,left:l.left-i,height:d.innerHeight(),width:d.innerWidth(),position:f?"fixed":"absolute"}).animate(k,b.duration,b.easing,function(){m.remove(),c()})}}(jQuery),function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",
// callbacks
blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,
// flag used to prevent firing of the click handler
// as the event bubbles up through nested menus
this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(a){this.options.disabled&&a.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({
// Prevent focus from sticking to links inside menu after clicking
// them (focus should always stay on UL during navigation).
"mousedown .ui-menu-item > a":function(a){a.preventDefault()},"click .ui-state-disabled > a":function(a){a.preventDefault()},"click .ui-menu-item:has(a)":function(b){var c=a(b.target).closest(".ui-menu-item");!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(b),
// Open submenu on click
c.has(".ui-menu").length?this.expand(b):this.element.is(":focus")||(
// Redirect focus to the menu
this.element.trigger("focus",[!0]),
// If the active item is on the top level, let it stay active.
// Otherwise, blur the active item since it is no longer visible.
this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(b){var c=a(b.currentTarget);
// Remove ui-state-active class from siblings of the newly focused menu item
// to avoid a jump caused by adjacent elements both having a class with a border
c.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(b,c)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(a,b){
// If there's already an active item, keep it active
// If not, activate the first item
var c=this.active||this.element.children(".ui-menu-item").eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:"_keydown"}),this.refresh(),
// Clicks outside of a menu collapse any open menus
this._on(this.document,{click:function(b){a(b.target).closest(".ui-menu").length||this.collapseAll(b),
// Reset the mouseHandled flag
this.mouseHandled=!1}})},_destroy:function(){
// Destroy (sub)menus
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
// Destroy menu items
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var b=a(this);b.data("ui-menu-submenu-carat")&&b.remove()}),
// Destroy menu dividers
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(b){function c(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}/*jshint maxcomplexity:20*/
var d,e,f,g,h,i=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move("first","first",b);break;case a.ui.keyCode.END:this._move("last","last",b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:i=!1,e=this.previousFilter||"",f=String.fromCharCode(b.keyCode),g=!1,clearTimeout(this.filterTimer),f===e?g=!0:f=e+f,h=new RegExp("^"+c(f),"i"),d=this.activeMenu.children(".ui-menu-item").filter(function(){return h.test(a(this).children("a").text())}),d=g&&d.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):d,
// If no matches on the current filter, reset to the last character pressed
// to move down the menu to the first item that starts with that character
d.length||(f=String.fromCharCode(b.keyCode),h=new RegExp("^"+c(f),"i"),d=this.activeMenu.children(".ui-menu-item").filter(function(){return h.test(a(this).children("a").text())})),d.length?(this.focus(b,d),d.length>1?(this.previousFilter=f,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}i&&b.preventDefault()},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(a):this.select(a))},refresh:function(){var b,c=this.options.icons.submenu,d=this.element.find(this.options.menus);
// Initialize nested menus
d.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var b=a(this),d=b.prev("a"),e=a("<span>").addClass("ui-menu-icon ui-icon "+c).data("ui-menu-submenu-carat",!0);d.attr("aria-haspopup","true").prepend(e),b.attr("aria-labelledby",d.attr("id"))}),b=d.add(this.element),
// Don't refresh list items that are already adapted
b.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),
// Initialize unlinked menu-items containing spaces and/or dashes only as dividers
b.children(":not(.ui-menu-item)").each(function(){var b=a(this);
// hyphen, em dash, en dash
/[^\-\u2014\u2013\s]/.test(b.text())||b.addClass("ui-widget-content ui-menu-divider")}),
// Add aria-disabled attribute to any disabled menu item
b.children(".ui-state-disabled").attr("aria-disabled","true"),
// If the active item has been removed, blur the menu
this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(a,b){"icons"===a&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&"focus"===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.children("a").addClass("ui-state-focus"),
// Only update aria-activedescendant if there's a role
// otherwise we assume focus is managed elsewhere
this.options.role&&this.element.attr("aria-activedescendant",d.attr("id")),
// Highlight active parent menu item, if any
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),a&&"keydown"===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(".ui-menu"),c.length&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger("focus",a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,d=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.height(),e<0?this.activeMenu.scrollTop(f+e):e+h>g&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),
// Don't open if already open fixes a Firefox bug that caused a .5 pixel
// shift in the submenu position when mousing over the carat icon
"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){
// If we were passed an event, look for the submenu that contains the event
var d=c?this.element:a(b&&b.target).closest(this.element.find(".ui-menu"));
// If we found no valid submenu ancestor, use the main menu to close all sub menus anyway
d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},
// With no arguments, closes the currently active menu - if nothing is active
// it closes all menus.  If passed an argument, it will search for menus BELOW
_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(a){var b=this.active&&this.active.parent().closest(".ui-menu-item",this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();b&&b.length&&(this._open(b.parent()),
// Delay so Firefox will not hide activedescendant change in expanding submenu from AT
this._delay(function(){this.focus(a,b)}))},next:function(a){this._move("next","first",a)},previous:function(a){this._move("prev","last",a)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(a,b,c){var d;this.active&&(d="first"===a||"last"===a?this.active["first"===a?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[a+"All"](".ui-menu-item").eq(0)),d&&d.length&&this.active||(d=this.activeMenu.children(".ui-menu-item")[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d-e<0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=a(this),c.offset().top-d+e>0}),this.focus(b,c)):this.focus(b,this.activeMenu.children(".ui-menu-item").first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(b){
// TODO: It should never be possible to not have an active item at this
// point, but the tests don't trigger mouseenter before click.
this.active=this.active||a(b.target).closest(".ui-menu-item");var c={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,c)}})}(jQuery),function(a,b){function c(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function d(b,c){return parseInt(a.css(b,c),10)||0}function e(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(f!==b)return f;var c,d,e=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),g=e.children()[0];return a("body").append(e),c=g.offsetWidth,e.css("overflow","scroll"),d=g.offsetWidth,c===d&&(d=e[0].clientWidth),e.remove(),f=c-d},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]);return{element:c,isWindow:d,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d?c.width():c.outerWidth(),height:d?c.height():c.outerHeight()}}},a.fn.position=function(b){if(!b||!b.of)return o.apply(this,arguments);
// make a copy, we don't want to modify arguments
b=a.extend({},b);var f,n,p,q,r,s,t=a(b.of),u=a.position.getWithinInfo(b.within),v=a.position.getScrollInfo(u),w=(b.collision||"flip").split(" "),x={};
// force left top to allow flipping
// clone to reuse original targetOffset later
// force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
// normalize collision option
return s=e(t),t[0].preventDefault&&(b.at="left top"),n=s.width,p=s.height,q=s.offset,r=a.extend({},q),a.each(["my","at"],function(){var a,c,d=(b[this]||"").split(" ");1===d.length&&(d=j.test(d[0])?d.concat(["center"]):k.test(d[0])?["center"].concat(d):["center","center"]),d[0]=j.test(d[0])?d[0]:"center",d[1]=k.test(d[1])?d[1]:"center",
// calculate offsets
a=l.exec(d[0]),c=l.exec(d[1]),x[this]=[a?a[0]:0,c?c[0]:0],
// reduce to just the positions without the offsets
b[this]=[m.exec(d[0])[0],m.exec(d[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===b.at[0]?r.left+=n:"center"===b.at[0]&&(r.left+=n/2),"bottom"===b.at[1]?r.top+=p:"center"===b.at[1]&&(r.top+=p/2),f=c(x.at,n,p),r.left+=f[0],r.top+=f[1],this.each(function(){var e,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=d(this,"marginLeft"),s=d(this,"marginTop"),y=l+o+d(this,"marginRight")+v.width,z=m+s+d(this,"marginBottom")+v.height,A=a.extend({},r),B=c(x.my,k.outerWidth(),k.outerHeight());"right"===b.my[0]?A.left-=l:"center"===b.my[0]&&(A.left-=l/2),"bottom"===b.my[1]?A.top-=m:"center"===b.my[1]&&(A.top-=m/2),A.left+=B[0],A.top+=B[1],
// if the browser doesn't support fractions, then round for consistent results
a.support.offsetFractions||(A.left=i(A.left),A.top=i(A.top)),e={marginLeft:o,marginTop:s},a.each(["left","top"],function(c,d){a.ui.position[w[c]]&&a.ui.position[w[c]][d](A,{targetWidth:n,targetHeight:p,elemWidth:l,elemHeight:m,collisionPosition:e,collisionWidth:y,collisionHeight:z,offset:[f[0]+B[0],f[1]+B[1]],my:b.my,at:b.at,within:u,elem:k})}),b.using&&(
// adds feedback as second argument to using callback, if present
j=function(a){var c=q.left-A.left,d=c+n-l,e=q.top-A.top,f=e+p-m,i={target:{element:t,left:q.left,top:q.top,width:n,height:p},element:{element:k,left:A.left,top:A.top,width:l,height:m},horizontal:d<0?"left":c>0?"right":"center",vertical:f<0?"top":e>0?"bottom":"middle"};n<l&&h(c+d)<n&&(i.horizontal="center"),p<m&&h(e+f)<p&&(i.vertical="middle"),g(h(c),h(d))>g(h(e),h(f))?i.important="horizontal":i.important="vertical",b.using.call(this,a,i)}),k.offset(a.extend(A,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;
// element is wider than within
b.collisionWidth>f?
// element is initially over the left side of within
i>0&&j<=0?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+f-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;
// element is taller than within
b.collisionHeight>f?
// element is initially over the top of within
i>0&&j<=0?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+f-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-g-f,(c<0||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-g-f,a.top+n+o+p>k&&(d<0||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,a.top+n+o+p>l&&(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},
// fraction support test
function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");
//Create a "fake body" for testing based on method used in jQuery.support
b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}(jQuery),function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){
// Constrain initial value
this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
// Only set static values, aria-valuenow and aria-valuemax are
// set inside _refreshValue()
role:"progressbar","aria-valuemin":this.min}),this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(a){return a===b?this.options.value:(this.options.value=this._constrainedValue(a),void this._refreshValue())},_constrainedValue:function(a){
// sanitize value
return a===b&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,a))},_setOptions:function(a){
// Ensure "value" option is set after other values (like max)
var b=a.value;delete a.value,this._super(a),this.options.value=this._constrainedValue(b),this._refreshValue()},_setOption:function(a,b){"max"===a&&(
// Don't allow a max less than min
b=Math.max(this.min,b)),this._super(a,b)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var b=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(c.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")}})}(jQuery),function(a,b){
// number of pages in a slider
// (how many times can you page up/down to go through the whole range)
var c=5;a.widget("ui.slider",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,
// callbacks
change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=[];for(c=d.values&&d.values.length||1,e.length>c&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b<c;b++)g.push(f);this.handles=e.add(a(g.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data("ui-slider-handle-index",b)})},_createRange:function(){var b=this.options,c="";b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=a("<div></div>").appendTo(this.element),c="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(c+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):this.range=a([])},_setupEvents:function(){var a=this.handles.add(this.range).filter("a");this._off(a),this._on(a,this._handleEvents),this._hoverable(a),this._focusable(a)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e>c||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass("ui-state-active").focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,
// A slide can be canceled by returning false from the slide callback
f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(
// A slide can be canceled by returning false from the slide callback
f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),
//store the last changed value index for reference when handles overlap
this._lastChangedValue=b,this._trigger("change",a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch("range"===b&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},
//internal value getter
// _value() returns value trimmed by min and max, aligned by step
_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},
//internal values getter
// _values() returns array of values trimmed by min and max, aligned by step
// _values( index ) returns single value trimmed by min and max, aligned by step
_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(
// .slice() creates a copy of the array
// this copy gets trimmed by min and max and then returned
c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},
// returns the step-aligned value that val is closest to, between (inclusive) min and max
_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;
// Since JavaScript has problems with large floats, round
// the final value to 5 digits after the decimal point (see #4124)
return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=c+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:c-b+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:c+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:c-b+"%"},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===this.orientation?"left":"bottom"]=c+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:c+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-c+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:c+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-c+"%"},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){/*jshint maxcomplexity:25*/
var d,e,f,g,h=a(b.target).data("ui-slider-handle-index");switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass("ui-state-active"),d=this._start(b,h),d===!1))return}switch(g=this.options.step,e=f=this.options.values&&this.options.values.length?this.values(h):this.value(),b.keyCode){case a.ui.keyCode.HOME:f=this._valueMin();break;case a.ui.keyCode.END:f=this._valueMax();break;case a.ui.keyCode.PAGE_UP:f=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:f=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(e===this._valueMax())return;f=this._trimAlignValue(e+g);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(e===this._valueMin())return;f=this._trimAlignValue(e-g)}this._slide(b,h,f)},click:function(a){a.preventDefault()},keyup:function(b){var c=a(b.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass("ui-state-active"))}}})}(jQuery),function(a){function b(a){return function(){var b=this.element.val();a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")}}a.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){
// handle string values that need to be parsed
this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),
// format the value, but don't constrain
this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),
// turning off autocomplete prevents the browser from remembering the
// value when navigating through history, so we re-enable autocomplete
// if the page is unloaded before the widget is destroyed. #7790
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var b={},c=this.element;return a.each(["min","max","step"],function(a,d){var e=c.attr(d);void 0!==e&&e.length&&(b[d]=e)}),b},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(a){return this.cancelBlur?void delete this.cancelBlur:(this._stop(),this._refresh(),void(this.previous!==this.element.val()&&this._trigger("change",a)))},mousewheel:function(a,b){if(b){if(!this.spinning&&!this._start(a))return!1;this._spin((b>0?1:-1)*this.options.step,a),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(a)},100),a.preventDefault()}},"mousedown .ui-spinner-button":function(b){function c(){var a=this.element[0]===this.document[0].activeElement;a||(this.element.focus(),this.previous=d,
// support: IE
// IE sets focus asynchronously, so we need to check if focus
// moved off of the input because the user clicked on the button.
this._delay(function(){this.previous=d}))}var d;
// We never want the buttons to have focus; whenever the user is
// interacting with the spinner, the focus should be on the input.
// If the input is focused then this.previous is properly set from
// when the input first received focus. If the input is not focused
// then we need to set this.previous based on the value before spinning.
d=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),
// ensure focus is on (or stays on) the text field
b.preventDefault(),c.call(this),
// support: IE
// IE doesn't prevent moving focus even with event.preventDefault()
// so we set a flag to know when we should ignore the blur event
// and check (again) if focus moved off of the input.
this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)}),this._start(b)!==!1&&this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(b){
// button will add ui-state-active if mouse was down while mouseleave and kept down
if(a(b.currentTarget).hasClass("ui-state-active"))return this._start(b)!==!1&&void this._repeat(null,a(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)},
// TODO: do we really want to consider this a stop?
// shouldn't we just stop the repeater and wait until mouseup before
// we trigger the stop event?
"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),
// button bindings
this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),
// IE 6 doesn't understand height: 50% for the buttons
// unless the wrapper has an explicit height
this.buttons.height()>Math.ceil(.5*a.height())&&a.height()>0&&a.height(a.height()),
// disable spinner if element was already disabled
this.options.disabled&&this.disable()},_keydown:function(b){var c=this.options,d=a.ui.keyCode;switch(b.keyCode){case d.UP:return this._repeat(null,1,b),!0;case d.DOWN:return this._repeat(null,-1,b),!0;case d.PAGE_UP:return this._repeat(null,c.page,b),!0;case d.PAGE_DOWN:return this._repeat(null,-c.page,b),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(a){return!(!this.spinning&&this._trigger("start",a)===!1)&&(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(a,b,c){a=a||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,c)},a),this._spin(b*this.options.step,c)},_spin:function(a,b){var c=this.value()||0;this.counter||(this.counter=1),c=this._adjustValue(c+a*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:c})===!1||(this._value(c),this.counter++)},_increment:function(b){var c=this.options.incremental;return c?a.isFunction(c)?c(b):Math.floor(b*b*b/5e4-b*b/500+17*b/200+1):1},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(".");return c===-1?0:b.length-c-1},_adjustValue:function(a){var b,c,d=this.options;
// clamp the value
// make sure we're at a valid step
// - find out where we are relative to the base (min or 0)
// - round to the nearest step
// - rounding is based on 0, so adjust back to our base
// fix precision from bad JS floating point math
// clamp the value
return b=null!==d.min?d.min:0,c=a-b,c=Math.round(c/d.step)*d.step,a=b+c,a=parseFloat(a.toFixed(this._precision())),null!==d.max&&a>d.max?d.max:null!==d.min&&a<d.min?d.min:a},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))},_setOption:function(a,b){if("culture"===a||"numberFormat"===a){var c=this._parse(this.element.val());return this.options[a]=b,void this.element.val(this._format(c))}"max"!==a&&"min"!==a&&"step"!==a||"string"==typeof b&&(b=this._parse(b)),"icons"===a&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)),this._super(a,b),"disabled"===a&&(b?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:b(function(a){this._super(a),this._value(this.element.val())}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,
// TODO: what should we do with values that can't be parsed?
"aria-valuenow":this._parse(this.element.val())})},
// update the value without triggering change
_value:function(a,b){var c;""!==a&&(c=this._parse(a),null!==c&&(b||(c=this._adjustValue(c)),a=this._format(c))),this.element.val(a),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:b(function(a){this._stepUp(a)}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())},stepDown:b(function(a){this._stepDown(a)}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())},pageUp:b(function(a){this._stepUp((a||1)*this.options.page)}),pageDown:b(function(a){this._stepDown((a||1)*this.options.page)}),value:function(a){return arguments.length?void b(this._value).call(this,a):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(a,b){function c(){return++e}function d(a){return a.hash.length>1&&decodeURIComponent(a.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))}var e=0,f=/#.*$/;a.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,
// callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var b=this,c=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",c.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(b){a(this).is(".ui-state-disabled")&&b.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){a(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),c.active=this._initialActive(),
// Take disabling tabs via class attribute from HTML
// into account and update option properly.
a.isArray(c.disabled)&&(c.disabled=a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"),function(a){return b.tabs.index(a)}))).sort()),
// check for length avoids error when initializing empty list
this.options.active!==!1&&this.anchors.length?this.active=this._findActive(c.active):this.active=a(),this._refresh(),this.active.length&&this.load(c.active)},_initialActive:function(){var b=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);
// check the fragment identifier in the URL
// check for a tab marked active via a class
// no active tab, set to false
// handle numbers: negative, out of range
// don't allow collapsible: false and active: false
return null===b&&(d&&this.tabs.each(function(c,e){if(a(e).attr("aria-controls")===d)return b=c,!1}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),null!==b&&b!==-1||(b=!!this.tabs.length&&0)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),b===-1&&(b=!c&&0)),!c&&b===!1&&this.anchors.length&&(b=0),b},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):a()}},_tabKeydown:function(b){/*jshint maxcomplexity:15*/
var c=a(this.document[0].activeElement).closest("li"),d=this.tabs.index(c),e=!0;if(!this._handlePageNav(b)){switch(b.keyCode){case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:d++;break;case a.ui.keyCode.UP:case a.ui.keyCode.LEFT:e=!1,d--;break;case a.ui.keyCode.END:d=this.anchors.length-1;break;case a.ui.keyCode.HOME:d=0;break;case a.ui.keyCode.SPACE:
// Activate only, no collapsing
return b.preventDefault(),clearTimeout(this.activating),void this._activate(d);case a.ui.keyCode.ENTER:
// Toggle (cancel delayed activation, allow collapsing)
// Determine if we should collapse or activate
return b.preventDefault(),clearTimeout(this.activating),void this._activate(d!==this.options.active&&d);default:return}
// Focus the appropriate tab, based on which key was pressed
b.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,e),
// Navigating with control key will prevent automatic activation
b.ctrlKey||(
// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)},this.delay))}},_panelKeydown:function(b){this._handlePageNav(b)||
// Ctrl+up moves focus to the current tab
b.ctrlKey&&b.keyCode===a.ui.keyCode.UP&&(b.preventDefault(),this.active.focus())},
// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function(b){return b.altKey&&b.keyCode===a.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):b.altKey&&b.keyCode===a.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(b,c){function d(){return b>e&&(b=0),b<0&&(b=e),b}for(var e=this.tabs.length-1;a.inArray(d(),this.options.disabled)!==-1;)b=c?b+1:b-1;return b},_focusNextTab:function(a,b){return a=this._findNextTab(a,b),this.tabs.eq(a).focus(),a},_setOption:function(a,b){
// _activate() will handle invalid values and update this.options
// don't use the widget factory's disabled handling
// Setting collapsible: false while collapsed; open first panel
return"active"===a?void this._activate(b):"disabled"===a?void this._setupDisabled(b):(this._super(a,b),"collapsible"===a&&(this.element.toggleClass("ui-tabs-collapsible",b),b||this.options.active!==!1||this._activate(0)),"event"===a&&this._setupEvents(b),void("heightStyle"===a&&this._setupHeightStyle(b)))},_tabId:function(a){return a.attr("aria-controls")||"ui-tabs-"+c()},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var b=this.options,c=this.tablist.children(":has(a[href])");
// get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
b.disabled=a.map(c.filter(".ui-state-disabled"),function(a){return c.index(a)}),this._processTabs(),
// was collapsed or no tabs
b.active!==!1&&this.anchors.length?this.active.length&&!a.contains(this.tablist[0],this.active[0])?
// all remaining tabs are disabled
this.tabs.length===b.disabled.length?(b.active=!1,this.active=a()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):
// make sure active index is correct
b.active=this.tabs.index(this.active):(b.active=!1,this.active=a()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),
// Make sure one tab is in the tab order
this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var b=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return a("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=a(),this.anchors.each(function(c,e){var f,g,h,i=a(e).uniqueId().attr("id"),j=a(e).closest("li"),k=j.attr("aria-controls");
// inline tab
d(e)?(f=e.hash,g=b.element.find(b._sanitizeSelector(f))):(h=b._tabId(j),f="#"+h,g=b.element.find(f),g.length||(g=b._createPanel(h),g.insertAfter(b.panels[c-1]||b.tablist)),g.attr("aria-live","polite")),g.length&&(b.panels=b.panels.add(g)),k&&j.data("ui-tabs-aria-controls",k),j.attr({"aria-controls":f.substring(1),"aria-labelledby":i}),g.attr("aria-labelledby",i)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},
// allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(b){return a("<div>").attr("id",b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(b){a.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);
// disable tabs
for(var c,d=0;c=this.tabs[d];d++)b===!0||a.inArray(d,b)!==-1?a(c).addClass("ui-state-disabled").attr("aria-disabled","true"):a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=b},_setupEvents:function(b){var c={click:function(a){a.preventDefault()}};b&&a.each(b.split(" "),function(a,b){c[b]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(b){var c,d=this.element.parent();"fill"===b?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var b=a(this),d=b.css("position");"absolute"!==d&&"fixed"!==d&&(c-=b.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){c-=a(this).outerHeight(!0)}),this.panels.each(function(){a(this).height(Math.max(0,c-a(this).innerHeight()+a(this).height()))}).css("overflow","auto")):"auto"===b&&(c=0,this.panels.each(function(){c=Math.max(c,a(this).height("").height())}).height(c))},_eventHandler:function(b){var c=this.options,d=this.active,e=a(b.currentTarget),f=e.closest("li"),g=f[0]===d[0],h=g&&c.collapsible,i=h?a():this._getPanelForTab(f),j=d.length?this._getPanelForTab(d):a(),k={oldTab:d,oldPanel:j,newTab:h?a():f,newPanel:i};b.preventDefault(),f.hasClass("ui-state-disabled")||
// tab is already loading
f.hasClass("ui-tabs-loading")||
// can't switch durning an animation
this.running||
// click on active header, but not collapsible
g&&!c.collapsible||
// allow canceling activation
this._trigger("beforeActivate",b,k)===!1||(c.active=!h&&this.tabs.index(f),this.active=g?a():f,this.xhr&&this.xhr.abort(),j.length||i.length||a.error("jQuery UI Tabs: Mismatching fragment identifier."),i.length&&this.load(this.tabs.index(f),b),this._toggle(b,k))},
// handles show/hide for selecting tabs
_toggle:function(b,c){function d(){f.running=!1,f._trigger("activate",b,c)}function e(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&f.options.show?f._show(g,f.options.show,d):(g.show(),d())}var f=this,g=c.newPanel,h=c.oldPanel;this.running=!0,
// start out by hiding, then showing, then completing
h.length&&this.options.hide?this._hide(h,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),e()}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h.hide(),e()),h.attr({"aria-expanded":"false","aria-hidden":"true"}),c.oldTab.attr("aria-selected","false"),
// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
g.length&&h.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===a(this).attr("tabIndex")}).attr("tabIndex",-1),g.attr({"aria-expanded":"true","aria-hidden":"false"}),c.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(b){var c,d=this._findActive(b);
// trying to activate the already active panel
d[0]!==this.active[0]&&(
// trying to collapse, simulate a click on the current active header
d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:a.noop}))},_findActive:function(b){return b===!1?a():this.tabs.eq(b)},_getIndex:function(a){
// meta-function to give users option to provide a href string instead of a numerical index.
return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){a.data(this,"ui-tabs-destroy")?a(this).remove():a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var b=a(this),c=b.data("ui-tabs-aria-controls");c?b.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(c){var d=this.options.disabled;d!==!1&&(c===b?d=!1:(c=this._getIndex(c),d=a.isArray(d)?a.map(d,function(a){return a!==c?a:null}):a.map(this.tabs,function(a,b){return b!==c?b:null})),this._setupDisabled(d))},disable:function(c){var d=this.options.disabled;if(d!==!0){if(c===b)d=!0;else{if(c=this._getIndex(c),a.inArray(c,d)!==-1)return;d=a.isArray(d)?a.merge([c],d).sort():[c]}this._setupDisabled(d)}},load:function(b,c){b=this._getIndex(b);var e=this,f=this.tabs.eq(b),g=f.find(".ui-tabs-anchor"),h=this._getPanelForTab(f),i={tab:f,panel:h};
// not remote
d(g[0])||(this.xhr=a.ajax(this._ajaxSettings(g,c,i)),
// support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
this.xhr&&"canceled"!==this.xhr.statusText&&(f.addClass("ui-tabs-loading"),h.attr("aria-busy","true"),this.xhr.success(function(a){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){h.html(a),e._trigger("load",c,i)},1)}).complete(function(a,b){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout(function(){"abort"===b&&e.panels.stop(!1,!0),f.removeClass("ui-tabs-loading"),h.removeAttr("aria-busy"),a===e.xhr&&delete e.xhr},1)})))},_ajaxSettings:function(b,c,d){var e=this;return{url:b.attr("href"),beforeSend:function(b,f){return e._trigger("beforeLoad",c,a.extend({jqXHR:b,ajaxSettings:f},d))}}},_getPanelForTab:function(b){var c=a(b).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+c))}})}(jQuery),function(a){function b(b,c){var d=(b.attr("aria-describedby")||"").split(/\s+/);d.push(c),b.data("ui-tooltip-id",c).attr("aria-describedby",a.trim(d.join(" ")))}function c(b){var c=b.data("ui-tooltip-id"),d=(b.attr("aria-describedby")||"").split(/\s+/),e=a.inArray(c,d);e!==-1&&d.splice(e,1),b.removeData("ui-tooltip-id"),d=a.trim(d.join(" ")),d?b.attr("aria-describedby",d):b.removeAttr("aria-describedby")}var d=0;a.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){
// support: IE<9, Opera in jQuery <1.7
// .text() can't accept undefined, so coerce to a string
var b=a(this).attr("title")||"";
// Escape title, since we're going from an attribute to raw HTML
return a("<a>").text(b).html()},hide:!0,
// Disabled elements have inconsistent behavior across browsers (#8661)
items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,
// callbacks
close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),
// IDs of generated tooltips, needed for destroy
this.tooltips={},
// IDs of parent tooltips where we removed the title attribute
this.parents={},this.options.disabled&&this._disable()},_setOption:function(b,c){var d=this;return"disabled"===b?(this[c?"_disable":"_enable"](),void(this.options[b]=c)):(this._super(b,c),void("content"===b&&a.each(this.tooltips,function(a,b){d._updateContent(b)})))},_disable:function(){var b=this;
// close open tooltips
a.each(this.tooltips,function(c,d){var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0)}),
// remove title attributes to prevent native tooltips
this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).attr("title","")})},_enable:function(){
// restore title attributes
this.element.find(this.options.items).addBack().each(function(){var b=a(this);b.data("ui-tooltip-title")&&b.attr("title",b.data("ui-tooltip-title"))})},open:function(b){var c=this,d=a(b?b.target:this.element).closest(this.options.items);
// No element to show a tooltip for or the tooltip is already open
d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),
// kill parent tooltips, custom or native, for hover
b&&"mouseover"===b.type&&d.parents().each(function(){var b,d=a(this);d.data("ui-tooltip-open")&&(b=a.Event("blur"),b.target=b.currentTarget=this,c.close(b,!0)),d.attr("title")&&(d.uniqueId(),c.parents[this.id]={element:this,title:d.attr("title")},d.attr("title",""))}),this._updateContent(d,b))},_updateContent:function(a,b){var c,d=this.options.content,e=this,f=b?b.type:null;return"string"==typeof d?this._open(b,a,d):(c=d.call(a[0],function(c){
// ignore async response if tooltip was closed already
a.data("ui-tooltip-open")&&
// IE may instantly serve a cached response for ajax requests
// delay this call to _open so the other call to _open runs first
e._delay(function(){
// jQuery creates a special event for focusin when it doesn't
// exist natively. To improve performance, the native event
// object is reused and the type is changed. Therefore, we can't
// rely on the type being correct after the event finished
// bubbling, so we set it back to the previous value. (#8740)
b&&(b.type=f),this._open(b,a,c)})}),void(c&&this._open(b,a,c)))},_open:function(c,d,e){function f(a){j.of=a,g.is(":hidden")||g.position(j)}var g,h,i,j=a.extend({},this.options.position);if(e){if(
// Content can be updated multiple times. If the tooltip already
// exists, then just update the content and bail.
g=this._find(d),g.length)return void g.find(".ui-tooltip-content").html(e);
// if we have a title, clear it to prevent the native tooltip
// we have to check first to avoid defining a title if none exists
// (we don't want to cause an element to start matching [title])
//
// We use removeAttr only for key events, to allow IE to export the correct
// accessible attributes. For mouse events, set to empty string to avoid
// native tooltip showing up (happens only when removing inside mouseover).
d.is("[title]")&&(c&&"mouseover"===c.type?d.attr("title",""):d.removeAttr("title")),g=this._tooltip(d),b(d,g.attr("id")),g.find(".ui-tooltip-content").html(e),this.options.track&&c&&/^mouse/.test(c.type)?(this._on(this.document,{mousemove:f}),
// trigger once to override element-relative positioning
f(c)):g.position(a.extend({of:d},this.options.position)),g.hide(),this._show(g,this.options.show),
// Handle tracking tooltips that are shown with a delay (#8644). As soon
// as the tooltip is visible, position the tooltip using the most recent
// event.
this.options.show&&this.options.show.delay&&(i=this.delayedShow=setInterval(function(){g.is(":visible")&&(f(j.of),clearInterval(i))},a.fx.interval)),this._trigger("open",c,{tooltip:g}),h={keyup:function(b){if(b.keyCode===a.ui.keyCode.ESCAPE){var c=a.Event(b);c.currentTarget=d[0],this.close(c,!0)}},remove:function(){this._removeTooltip(g)}},c&&"mouseover"!==c.type||(h.mouseleave="close"),c&&"focusin"!==c.type||(h.focusout="close"),this._on(!0,d,h)}},close:function(b){var d=this,e=a(b?b.currentTarget:this.element),f=this._find(e);
// disabling closes the tooltip, so we need to track when we're closing
// to avoid an infinite loop in case the tooltip becomes disabled on close
this.closing||(
// Clear the interval for delayed tracking tooltips
clearInterval(this.delayedShow),
// only set title if we had one before (see comment in _open())
e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title")),c(e),f.stop(!0),this._hide(f,this.options.hide,function(){d._removeTooltip(a(this))}),e.removeData("ui-tooltip-open"),this._off(e,"mouseleave focusout keyup"),
// Remove 'remove' binding only on delegated targets
e[0]!==this.element[0]&&this._off(e,"remove"),this._off(this.document,"mousemove"),b&&"mouseleave"===b.type&&a.each(this.parents,function(b,c){a(c.element).attr("title",c.title),delete d.parents[b]}),this.closing=!0,this._trigger("close",b,{tooltip:f}),this.closing=!1)},_tooltip:function(b){var c="ui-tooltip-"+d++,e=a("<div>").attr({id:c,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return a("<div>").addClass("ui-tooltip-content").appendTo(e),e.appendTo(this.document[0].body),this.tooltips[c]=b,e},_find:function(b){var c=b.data("ui-tooltip-id");return c?a("#"+c):a()},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]},_destroy:function(){var b=this;
// close open tooltips
a.each(this.tooltips,function(c,d){
// Delegate to close method to handle common cleanup
var e=a.Event("blur");e.target=e.currentTarget=d[0],b.close(e,!0),
// Remove immediately; destroying an open tooltip doesn't use the
// hide animation
a("#"+c).remove(),
// Restore the title
d.data("ui-tooltip-title")&&(d.attr("title",d.data("ui-tooltip-title")),d.removeData("ui-tooltip-title"))})}})}(jQuery);