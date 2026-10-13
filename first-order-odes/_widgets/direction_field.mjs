import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4.5.1/auto/+esm';

// Direction field of y' = xy with the particular solution y = c exp(x^2 / 2)
export function render({ el }) {
    el.innerHTML = `
    <div class="ode-plot-card">
      <canvas width="480" height="480" style="width: 100%; height: auto; touch-action: none"></canvas>
      <label><span><i>x</i><sub>0</sub></span>
        <input type="range" min="-2" max="2" step="0.05" value="0"><output></output></label>
      <label><span><i>y</i><sub>0</sub></span>
        <input type="range" min="-2" max="2" step="0.05" value="1"><output></output></label>
      <p><i>c</i> = <output></output></p>
    </div>`;
    const canvas = el.querySelector('canvas');
    const [x0, y0] = el.querySelectorAll('input');
    const grid = [];
    for (let x = -2; x <= 2; x += 0.25) {
        for (let y = -2; y <= 2; y += 0.25) grid.push({ x, y });
    }
    const xs = Array.from({ length: 201 }, (_, i) => -2 + i / 50);
    // Axes through the origin, labeled every 1 (skipping 0) on a white backdrop
    const axis = {
        min: -2, max: 2, grid: { display: false }, border: { color: '#64748b', width: 1.5 },
        ticks: { stepSize: 1, callback: (v) => v || '', showLabelBackdrop: true },
    };

    // Fixed-size chart scaled by CSS, so Chart.js never has to track the page layout
    const chart = new Chart(canvas, {
        type: 'scatter',
        data: {
            datasets: [
                // Short segments rotated to the slope xy (corrected for the plot's aspect ratio)
                {
                    data: grid, pointStyle: 'line', radius: 6, borderColor: '#94a3b8', borderWidth: 1.2, order: 2,
                    rotation: ({ raw, chart: { scales } }) =>
                        raw && -Math.atan((raw.x * raw.y * scales.y.height) / scales.x.width) * (180 / Math.PI),
                },
                { showLine: true, pointRadius: 0, borderColor: '#2563eb', borderWidth: 2.5, order: 1 },
                { backgroundColor: '#dc2626', pointRadius: 5, clip: false, order: 0 },
            ],
        },
        options: {
            responsive: false,
            animation: false,
            events: [],
            plugins: { legend: { display: false } },
            scales: { x: { ...axis, position: { y: 0 } }, y: { ...axis, position: { x: 0 } } },
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
