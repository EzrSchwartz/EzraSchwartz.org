document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('tspCanvas');
    const ctx = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawTSP();
    }

    resizeCanvas();
    function generatePoints(n) {
        const points = [];
        for (let i = 0; i < n; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height
            });
        }
        return points;
    }

    function drawTSP() {
        const points = generatePoints(Math.floor(Math.random() * 30)); // Generate up to 50 random points
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        if (points.length > 0) {
            drawLines(points);
        }
    }

    function drawLines(points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }

        ctx.stroke();
    }

});
