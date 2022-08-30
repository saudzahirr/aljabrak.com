import Interactive from "https://vectorjs.org/interactive.js";

let interactive = new Interactive("interactive");
interactive.border = false;

let ellipse = interactive.ellipse( 200, 200, 160, 80);
ellipse.style.fill = 'black';
ellipse.style.stroke = 'white';
ellipse.style.strokeWidth = '3px';

console.log(ellipse, interactive);
