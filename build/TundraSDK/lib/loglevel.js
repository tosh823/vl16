/*! loglevel - v0.5.0 - https://github.com/pimterry/loglevel - (c) 2013 Tim Perry - licensed MIT */
!function(a){var b="undefined";!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&"object"==typeof define.amd?define("lib/loglevel",b):this[a]=b()}("log",function(){function c(c){return typeof console===b?l:console[c]===a?console.log!==a?d(console,"log"):l:d(console,c)}function d(b,c){var d=b[c];if(d.bind!==a)return b[c].bind(b);if(Function.prototype.bind===a)return e(d,b);try{return Function.prototype.bind.call(b[c],b)}catch(f){
// In IE8 + Modernizr, the bind shim will reject the above, so we fall back to wrapping
return e(d,b)}}function e(a,b){return function(){Function.prototype.apply.apply(a,[b,arguments])}}function f(a){for(var b=0;b<m.length;b++)k[m[b]]=a(m[b])}function g(){return typeof window!==b&&window.document!==a&&window.document.cookie!==a}function h(){try{return typeof window!==b&&window.localStorage!==a}catch(c){return!1}}function i(a){var b;for(var c in k.levels)if(k.levels.hasOwnProperty(c)&&k.levels[c]===a){b=c;break}if(h())window.localStorage.loglevel=b;else{if(!g())return;window.document.cookie="loglevel="+b+";"}}function j(){var a;if(h()&&(a=window.localStorage.loglevel),!a&&g()){var b=n.exec(window.document.cookie)||[];a=b[1]}k.setLevel(k.levels[a]||k.levels.WARN)}var k={},l=function(){},m=["trace","debug","info","warn","error"],n=/loglevel=([^;]+)/;/*
         *
         * Public API
         *
         */
return k.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},k.setLevel=function(d){if("number"==typeof d&&d>=0&&d<=k.levels.SILENT){if(i(d),d===k.levels.SILENT)return void f(function(){return l});if(typeof console===b)return f(function(a){return function(){typeof console!==b&&(k.setLevel(d),k[a].apply(k,arguments))}}),"No console available for logging";f(function(a){return d<=k.levels[a.toUpperCase()]?c(a):l})}else{if("string"!=typeof d||k.levels[d.toUpperCase()]===a)throw"log.setLevel() called with invalid level: "+d;k.setLevel(k.levels[d.toUpperCase()])}},k.enableAll=function(){k.setLevel(k.levels.TRACE)},k.disableAll=function(){k.setLevel(k.levels.SILENT)},j(),k})}();