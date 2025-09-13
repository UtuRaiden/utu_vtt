function generateHexagonPoints(centerX, centerY, radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angleDeg = 60 * i - 30; // pointy-top hex
        const angleRad = (Math.PI / 180) * angleDeg;
        const x = centerX + radius * Math.cos(angleRad);
        const y = centerY + radius * Math.sin(angleRad);
        points.push(`${x},${y}`);
    }
    return points.join(" ");
}

function hexagon(svg, centerX, centerY, radius) {
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", generateHexagonPoints(centerX, centerY, radius));
    polygon.setAttribute("fill", "lightblue");
    polygon.setAttribute("stroke", "darkblue");
    polygon.setAttribute("stroke-width", "2");

    svg.appendChild(polygon);
}

export { hexagon };
