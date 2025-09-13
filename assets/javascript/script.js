import { hexagon } from './shapes.js';

function isodd(number) {
  return Math.abs(number % 2) === 1; 
}

const svg = document.getElementById("board");
const radius = 50;
const cols = 10;
const rows = 10;

const svgWidth = cols * Math.sqrt(3) * radius + radius * 2;
const svgHeight = rows * 1.5 * radius + radius * 2;
svg.setAttribute("width", svgWidth);
svg.setAttribute("height", svgHeight);

for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
        let x = col * (Math.sqrt(3) * radius) + radius;
        let y = row * (1.5 * radius) + radius;    
        console.log(row)
        console.log(isodd(row))

        if (isodd(row)){
            x +=.87*radius;
        }
        hexagon(svg, x, y, radius);
    }
}
