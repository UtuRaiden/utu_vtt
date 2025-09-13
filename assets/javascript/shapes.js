function hexagon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "200");
    svg.setAttribute("viewBox", "0 0 200 200");
    document.body.appendChild(svg);

    function generateHexagonPoints(centerX, centerY, radius) {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angleDeg = 60 * i - 30; // Flat-topped hex
            const angleRad = (Math.PI / 180) * angleDeg;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);
            points.push(`${x},${y}`);
        }
        return points.join(" ");
    }

    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    const hexagonPoints = generateHexagonPoints(centerX, centerY, radius);

    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", hexagonPoints);
    polygon.setAttribute("fill", "lightblue");
    polygon.setAttribute("stroke", "darkblue");
    polygon.setAttribute("stroke-width", "6");

    svg.appendChild(polygon);
}

export { hexagon };
