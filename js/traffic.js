/*global $, anime */

var canvas = document.querySelector('.city');
var canvasBack = document.querySelector('.back');
var ctx = canvas.getContext('2d');
var ctxBack = canvasBack.getContext('2d');


function setCanvasSize() {
   "use strict";
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   canvasBack.width = window.innerWidth;
   canvasBack.height = window.innerHeight;
}

function fillGradientBack() {
   "use strict";
   var grd = ctxBack.createLinearGradient(0, canvasBack.height, 0, 0);
   grd.addColorStop(0, "#a8c0d0");
   grd.addColorStop(0.5, "#c0d0f0");
   grd.addColorStop(1, "#d0e0f0");

   ctxBack.fillStyle = grd;
   ctxBack.fillRect(0, 0, canvasBack.width, canvasBack.height);
}

function createLine(x, y) {
   "use strict";
   var p = {};
   p.x = x;
   p.y = y;
   p.len = 1;
   p.color = "#ddf8ff";
   p.alpha = 1;
   p.draw = function () {
      ctx.translate(0, 0.5);
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.len, p.y);
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.stroke();
      ctx.translate(-0, -0.5);
   };

   return p;
}

function renderLines(anim) {
   "use strict";
   var i;
   for (i = 0; i < anim.animatables.length; i += 1) {
      anim.animatables[i].target.draw();
   }
}

function animateLines(x, y) {
   "use strict";
   var line = createLine(x, y);

   anime.timeline().add({
      targets: line,
      len: anime.random(16, 24),
      alpha: anime.random(0, 1),
      duration: anime.random(1000, 2000),
      easing: 'easeOutExpo',
      update: renderLines,
      offset: 0
   });
}

var render = anime({
   duration: Infinity,
   update: function () {
      "use strict";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   }
});

var centerX = window.innerWidth / 2;
var centerY = window.innerHeight / 2;

function autoClick() {
   "use strict";
   animateLines(
      anime.random(centerX - 300, centerX + 300),
      anime.random(centerY - 300, centerY + 300)
   );
   anime({
      duration: 1
   }).finished.then(autoClick);
}

setCanvasSize();
fillGradientBack();

autoClick();
