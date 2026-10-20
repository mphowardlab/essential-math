import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4/auto/+esm';

// first-order kinetics in a batch reactor
function render({ model, el }) {
    el.insertAdjacentHTML('beforeend', `
    <div class="widget">
      <div class="canvas-container">
        <canvas></canvas>
      </div>
      <label>
        <span class="math"><i>k</i> (h<sup>&minus;1</sup>)</span>
        <input type="range" min="0.1" max="1" step="0.01" value="0.36">
        <output></output>
      </label>
      <label>
        <span class="math"><i>c</i><sub>A,0</sub> (M)</span>
        <input type="range" min="0" max="2" step="0.1" value="1">
        <output></output>
      </label>
    </div>`);
    const [k, c0] = el.querySelectorAll('input');

    // time points for plotting curve, every 0.1 from 0 to 10
    const t = Array.from({ length: 101 }, (_, i) => i / 10);

    const chart = new Chart(el.querySelector('canvas'), {
        type: 'line',
        data: {
            labels: t,
            datasets: [
                { borderColor: '#377eb8', pointRadius: 0, order: 1 },
            ],
        },
        options: {
            responsive: true,
            animation: false,
            plugins: { legend: { display: false } },
            scales: {
                x: {
                    type: "linear",
                    min: 0,
                    max: 10,
                    ticks: { stepSize: 2 },
                    grid: { drawTicks: false },
                    title: { display: true, text: 'time (h)' }
                },
                y: {
                    type: "linear",
                    min: 0,
                    max: 2,
                    ticks: { stepSize: 0.5 },
                    grid: { drawTicks: false },
                    title: { display: true, text: 'concentration of A (M)' }
                },
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
