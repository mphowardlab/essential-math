import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4.5.1/auto/+esm';

export function render({ el }) {
    el.innerHTML = `
    <div class="ode-plot-card">
      <canvas width="480" height="360" style="width: 100%; height: auto"></canvas>
      <label><span><i>k</i> (h<sup>&minus;1</sup>)</span>
        <input type="range" min="0.1" max="1" step="0.01" value="0.36"><output></output></label>
      <label><span><i>c</i><sub>A,0</sub> (M)</span>
        <input type="range" min="0" max="2" step="0.1" value="1"><output></output></label>
    </div>`;
    const [k, c0] = el.querySelectorAll('input');
    const t = Array.from({ length: 101 }, (_, i) => i / 10);

    // Fixed-size chart scaled by CSS, so Chart.js never has to track the page layout
    const chart = new Chart(el.querySelector('canvas'), {
        type: 'line',
        data: { labels: t, datasets: [{ borderColor: '#2563eb', pointRadius: 0 }] },
        options: {
            responsive: false,
            animation: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { type: 'linear', title: { display: true, text: 'Time (h)' } },
                y: { min: 0, max: 2, title: { display: true, text: 'Concentration of A (M)' } },
            },
        },
    });

    // Analytical solution cA(t) = cA0 exp(-k t)
    function update() {
        chart.data.datasets[0].data = t.map((ti) => c0.value * Math.exp(-k.value * ti));
        chart.update();
        k.nextElementSibling.value = k.value;
        c0.nextElementSibling.value = c0.value;
    }
    k.oninput = c0.oninput = update;
    update();

    return () => chart.destroy();
}

export default { render };
