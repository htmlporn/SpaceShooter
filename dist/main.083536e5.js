parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sFhJ":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var s=0;s<i.length;s++){var a=i[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function s(t,s,a){return s&&i(t.prototype,s),a&&i(t,a),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var a=function(){function i(s,a){t(this,i),this.canvas=a,this.ctx=s,this.active=!0,this.x=Math.floor(Math.random()*this.canvas.width),this.y=0,this.dest=Math.random(),this.color="rgba(255, 255, 255, ".concat(this.dest,")"),this.xVelocity=0,this.yVelocity=this.dest>.7?20:this.dest>.5?10:5,this.active=!0,this.inBounds=function(){return this.x>=0&&this.x<=this.canvas.width&&this.y>=0&&this.y<=this.canvas.height}}return s(i,[{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.fillRect(this.x,this.y,3,3)}},{key:"update",value:function(){this.y+=this.yVelocity/10,this.active=this.active&&this.inBounds()}}]),i}(),h=function(){function i(s,a){t(this,i),this.canvas=a,this.ctx=s,this.color="black",this.width=this.canvas.width,this.height=this.canvas.height,this.stars=[]}return s(i,[{key:"drawStars",value:function(){1==Math.round(20*Math.random())&&this.stars.push(new a(this.ctx,this.canvas))}},{key:"draw",value:function(){this.ctx.fillStyle=this.color,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawStars(),this.stars.map(function(t){t.draw()})}},{key:"update",value:function(){this.stars.map(function(t){t.update()}),this.stars=this.stars.filter(function(t){return t.active})}}]),i}();exports.default=h;
},{}],"kSTB":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function i(e,s,h,a){t(this,i),this.ctx=e,this.x=s,this.y=h,this.age=Math.floor(128*Math.random()),this.xVelocity=0,this.yVelocity=1,this.width=32,this.height=32,this.active=!0,this.canvas=a,this.inBounds=function(){return this.x>=0&&this.x<=this.canvas.width&&this.y>=0&&this.y<=this.canvas.height}}return e(i,[{key:"draw",value:function(){this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)}},{key:"explode",value:function(){this.active=!1}},{key:"update",value:function(){this.x+=this.xVelocity,this.y+=this.yVelocity/2,this.xVelocity=3*Math.sin(this.age*Math.PI/64),this.age++,this.active=this.active&&this.inBounds()}}]),i}();exports.default=s;
},{}],"lO5B":[function(require,module,exports) {
"use strict";function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function i(e,s,h,n){t(this,i),this.active=!0,this.config=n,this.ctx=e,this.x=s,this.y=h,this.width=3,this.height=3,this.xVelocity=0,this.yVelocity=-5,this.inBounds=function(){return this.x>=0&&this.x<=this.config.width&&this.y>=0&&this.y<=this.config.height}}return e(i,[{key:"draw",value:function(){this.ctx.fillStyle="orange",this.ctx.fillRect(this.x,this.y,this.width,this.height+3)}},{key:"update",value:function(){this.y+=this.yVelocity,this.x+=this.xVelocity,this.active=this.active&&this.inBounds()}}]),i}();exports.default=s;
},{}],"ERFn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("./Person.js")),e=n(require("./Bullet.js"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=p();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(n){c(u,t.default);var r=l(u);function u(t,e,n,i,c){var f;return o(this,u),(f=r.call(this,t,e,n)).config=i,f.color="blue",f.width=21,f.height=21,f.active=!0,f.image=new Image,f.image.src=c,f.playerBullets=[],f.midpoint=function(){return{x:this.x+this.width/2,y:this.y}},console.log(f.image),f}return i(u,[{key:"shoot",value:function(){var t=this.midpoint();this.playerBullets.push(new e.default(this.ctx,t.x,t.y,this.config))}},{key:"explode",value:function(){this.active=!1}}]),u}(),b=h;exports.default=b;
},{"./Person.js":"kSTB","./Bullet.js":"lO5B"}],"d6sK":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n,r){e(this,t),this.ctx=n,this.config=r}return n(t,[{key:"draw",value:function(){}}]),t}();exports.default=r;
},{}],"nmYJ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./Person.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=s();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var n=f(o);function o(t,e,u,c,i){var f;return r(this,o),(f=n.call(this,t,e,u,t.canvas)).color="red",f.image=new Image,f.image.src=i,f.x=Math.round(t.canvas.width/4+Math.random()*t.canvas.width/2),f.yVelocity=3,f.width=16,f.height=16,f}return u(o,[{key:"explode",value:function(){this.active=!1}}]),o}(),b=y;exports.default=b;
},{"./Person.js":"kSTB"}],"dgmn":[function(require,module,exports) {
module.exports="/SpaceShooter/player.1b6a8ac9.png";
},{}],"e5f6":[function(require,module,exports) {
module.exports="/SpaceShooter/enemy.a0bac470.png";
},{}],"xCaP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./Background.js")),t=r(require("./Player.js")),i=r(require("./UI.js")),a=r(require("./Enemy.js")),n=r(require("../images/player.png")),s=r(require("../images/enemy.png"));function r(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,i){return t&&l(e.prototype,t),i&&l(e,i),e}var c={width:320,height:280},o={},d=function(){function i(){h(this,i),this.config=c,this.level=o,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ui=document.createElement("div"),this.ui.className="ui",this.keyboardController(),document.querySelector("#screen").appendChild(this.canvas),document.querySelector("#screen").appendChild(this.ui),this.canvas.width=this.config.width,this.canvas.height=this.config.height,this.enemies=[],this.score=0,this.bg=new e.default(this.ctx,this.config),this.player=new t.default(this.ctx,this.canvas.width/2,this.canvas.height-48,this.config,n.default)}return u(i,[{key:"keyboardController",value:function(){var e=this;document.addEventListener("keydown",function(t){switch(t.keyCode){case 87:e.player.y-=32;break;case 65:e.player.x-=32;break;case 83:e.player.y+=32;break;case 68:e.player.x+=32;break;case 32:e.player.shoot()}})}},{key:"isCollide",value:function(e,t){return e.x<t.x+t.width&&e.x+e.width>t.x&&e.y<t.y+t.height&&e.y+e.height>t.y}},{key:"handleCollision",value:function(){var e=this;this.player.playerBullets.map(function(t){e.enemies.map(function(i){e.isCollide(t,i)&&(i.explode(),e.score+=100,t.active=!1)})}),this.enemies.map(function(t){e.isCollide(t,e.player)&&(t.explode(),e.player.explode())})}},{key:"draw",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.bg.draw(),this.player.draw(),this.enemies.map(function(e){e.draw()}),this.player.playerBullets.map(function(e){e.draw()})}},{key:"update",value:function(){this.player.x+this.player.width>this.canvas.width&&(this.player.x=this.canvas.width-this.player.width),this.player.x<0&&(this.player.x=0),this.player.y+this.player.height>this.canvas.height&&(this.player.y=this.canvas.height-this.player.height),this.player.y<0&&(this.player.y=0),this.ui.textContent=this.score,this.handleCollision(),this.player.playerBullets.map(function(e){return e.update()}),this.enemies.map(function(e){return e.update()}),this.bg.update(),this.enemies=this.enemies.filter(function(e){return e.active}),this.player.playerBullets=this.player.playerBullets.filter(function(e){return e.active}),1==Math.round(90*Math.random())&&this.enemies.push(new a.default(this.ctx,0,0,this.config,s.default))}},{key:"run",value:function(){var e=this;this.draw(),this.update(),requestAnimationFrame(function(){return e.run()})}}]),i}();exports.default=d;
},{"./Background.js":"sFhJ","./Player.js":"ERFn","./UI.js":"d6sK","./Enemy.js":"nmYJ","../images/player.png":"dgmn","../images/enemy.png":"e5f6"}],"epB2":[function(require,module,exports) {
"use strict";var e=r(require("./js/Game.js"));function r(e){return e&&e.__esModule?e:{default:e}}var u=new e.default;u.run();
},{"./js/Game.js":"xCaP"}]},{},["epB2"], null)
//# sourceMappingURL=/SpaceShooter/main.083536e5.js.map