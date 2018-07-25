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

function resizeHandler() {
   "use strict";
   setCanvasSize();
   fillGradientBack();
}

function createLine(x, y) {
   "use strict";
   var p = {};
   p.x = x;
   p.y = y;
   p.len = 1;
   p.color = "#ddf8ff";
   p.alpha = 0;
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

//function renderLines(anim) {
//   "use strict";
//   var i;
//   for (i = 0; i < anim.animatables.length; i += 1) {
//      anim.animatables[i].target.draw();
//   }
//}
//
//function animateLines(x, y) {
//   "use strict";
//   var line = createLine(x, y);
//
//   anime({
//      targets: line,
//      alpha: {
//         value: 1,
//         duration: 3000,
//         easing: 'easeInOutSine'
//      },
//      len: {
//         value: 1,
//         duration: 3000,
//         easing: 'linear'
//      },
//      easing: 'linear',
//      update: renderLines
//   });}

//var render = anime({
//   duration: Infinity,
//   update: function () {
//      "use strict";
//      ctx.clearRect(0, 0, canvas.width, canvas.height);
//   }
//});
//
//var centerX = window.innerWidth / 2;
//var centerY = window.innerHeight / 2;
//
//function autoClick() {
//   "use strict";
//   animateLines(
//      anime.random(centerX - 300, centerX + 300),
//      anime.random(centerY - 300, centerY + 300)
//   );
//   anime({
//      duration: 1
//   }).finished.then(autoClick);
//}

setCanvasSize();
fillGradientBack();
window.addEventListener('resize', resizeHandler, false);

anime({
   targets: 'svg line',
   x2: {
      value: '+=16',
      duration: 400,
      easing: 'linear'
   },
   x1: {
      value: '+=16',
      duration: 400,
      easing: 'linear',
      delay: 400
   },
   direction: 'forward',
   loop: true,
   autoplay: true
});

anime({
   targets: 'svg',
   top: {
      value: '+=160',
      duration: 4000,
      easing: 'linear'
   },
   left: {
      value: '+=160',
      duration: 4000,
      easing: 'linear'
   },
   direction: 'forward',
   loop: true,
   autoplay: true
});

setCanvasSize();
fillGradientBack();

//animateLines(16, 8);
//autoClick();
