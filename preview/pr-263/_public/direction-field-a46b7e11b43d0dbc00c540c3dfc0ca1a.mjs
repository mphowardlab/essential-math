import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4/auto/+esm';

// Direction field of y' = xy with the particular solution y = c exp(x^2 / 2)
function render({ model, el }) {
    el.insertAdjacentHTML('beforeend', `
    <div class="widget">
      <div class="canvas-container">
        <canvas style="touch-action: none"></canvas>
      </div>
      <label>
        <span class="math"><i>x</i><sub>0</sub></span>
        <input type="range" min="-2" max="2" step="0.05" value="0">
        <output></output>
      </label>
      <label>
        <span class="math"><i>y</i><sub>0</sub></span>
        <input type="range" min="-2" max="2" step="0.05" value="1">
        <output></output>
      </label>
      <p style="text-align: center">
        <span class="math"><i>c</i> =</span> <output></output>
      </p>
    </div>`);
    const canvas = el.querySelector('canvas');
    const [x0, y0] = el.querySelectorAll('input');

    // grid of points for slope field
    const grid = [];
    for (let x = -2; x <= 2; x += 0.25) {
        for (let y = -2; y <= 2; y += 0.25) grid.push({ x, y });
    }

    // sample points for analytical solution
    const xs = Array.from({ length: 201 }, (_, i) => -2 + i / 50);

    // chart
    const chart = new Chart(canvas, {
        type: 'scatter',
        data: {
            datasets: [
                // Short segments rotated to the slope xy (corrected for the plot's aspect ratio)
                {
                    data: grid, pointStyle: 'line', radius: 6, borderColor: '#377eb8', borderWidth: 1.2, order: 2,
                    rotation: ({ raw, chart: { scales } }) =>
                        raw && -Math.atan((raw.x * raw.y * scales.y.height) / scales.x.width) * (180 / Math.PI),
                },
                { showLine: true, pointRadius: 0, borderColor: '#e41a1c', borderWidth: 2.5, order: 1 },
                { backgroundColor: '#e41a1c', pointRadius: 5, clip: false, order: 0 },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            animation: false,
            events: [],
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    type: "linear",
                    min: -2,
                    max: 2,
                    ticks: { stepSize: 1 },
                    grid: { display: false },
                    position: { y: 0 },
                    border: { color: '#64748b', width: 1.5 },
                },
                y: {
                    type: "linear",
                    min: -2,
                    max: 2,
                    ticks: { stepSize: 1 },
                    grid: { display: false },
                    position: { x: 0 },
                    border: { color: '#64748b', width: 1.5 },
                }
                // ...axis, position: { y: 0 } }, y: { ...axis, position: { x: 0 } }
            },
        },
    });

    // Particular solution through the initial condition (x0, y0)
    function update() {
        const c = y0.value * Math.exp(-(x0.value ** 2) / 2);
        chart.data.datasets[1].data = xs.map((x) => ({ x, y: c * Math.exp(x ** 2 / 2) }));
        chart.data.datasets[2].data = [{ x: x0.value, y: y0.value }];
        chart.update();
        x0.nextElementSibling.value = x0.value;
        y0.nextElementSibling.value = y0.value;
        el.querySelector('p output').value = c.toFixed(3);
    }
    x0.oninput = y0.oninput = update;
    update();

    // Click or drag on the plot to move the initial condition (sliders clamp the values)
    canvas.onpointermove = (e) => {
        if (!e.buttons) return;
        const scale = chart.width / canvas.clientWidth;
        x0.value = chart.scales.x.getValueForPixel(e.offsetX * scale);
        y0.value = chart.scales.y.getValueForPixel(e.offsetY * scale);
        update();
    };
    canvas.onpointerdown = (e) => {
        canvas.setPointerCapture(e.pointerId);
        canvas.onpointermove(e);
    };

    return () => chart.destroy();
}

export default { render };
