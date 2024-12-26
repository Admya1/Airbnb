// swapper@1.1.6 downloaded from https://ga.jspm.io/npm:swapper@1.1.6/build/swapper.js

var e={};class Swapper{static obj(e,t){let a=new Object;Object.assign(a,e);Swapper.clean(e);Object.assign(e,t);Swapper.clean(t);Object.assign(t,a)}static elem(e,t,a){if("object"!==typeof e)throw"First argument must be an object!";"undefined"===typeof a&&([t,a]=Swapper.parseNames(t+" "+a));let s=e[t];e[t]=e[a];e[a]=s}static clean(e){for(let t in e)delete e[t];Array.isArray(e)&&(e.length=0)}static parseNames(e){let t=/[\s\t,;]+/;return e.split(t)}}e&&(e=Swapper);var t=e;export default t;

