import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@4.5.1/auto/+esm';

export function render({ model, el }) {
    // Create container div inside the widget's Shadow DOM
    const container = document.createElement('div');
    container.className = 'ode-widget-container';
    container.innerHTML = `
    <div class="ode-plot-card">
      <div class="canvas-wrapper">
        <canvas id="odeCanvas" aria-label="Plot of the concentration of A versus time for a first-order reaction in a batch reactor from t equals 0 to 10 hours, showing the analytical solution c A equals c A 0 times e to the negative k t." role="img"></canvas>
      </div>
      <div class="ode-controls" aria-label="Rate constant and initial concentration controls">
        <div class="control-group">
          <label for="kSlider">
            <span class="math-symbol">k</span>: <span id="kVal">0.36</span> h<sup>&minus;1</sup>
          </label>
          <input type="range" id="kSlider" min="0.1" max="1" step="0.01" value="0.36">
        </div>
        <div class="control-group">
          <label for="c0Slider">
            <span class="math-symbol">c</span><sub>A,0</sub>: <span id="c0Val">1.0</span> M
          </label>
          <input type="range" id="c0Slider" min="0" max="2" step="0.1" value="1.0">
        </div>
        <div class="control-info">
          <span><span class="math-symbol">t</span><sub>1/2</sub> = <span id="tHalfVal">1.93</span> h</span>
          <button id="resetBtn" class="ode-btn" type="button">Reset</button>
        </div>
      </div>
    </div>
  `;
    el.appendChild(container);

    const canvas = container.querySelector('#odeCanvas');
    const kSlider = container.querySelector('#kSlider');
    const c0Slider = container.querySelector('#c0Slider');
    const kValSpan = container.querySelector('#kVal');
    const c0ValSpan = container.querySelector('#c0Val');
    const tHalfValSpan = container.querySelector('#tHalfVal');
    const resetBtn = container.querySelector('#resetBtn');

    // State variables (Default from worked example: k = 0.36 1/h, cA0 = 1 M)
    const kDefault = 0.36, c0Default = 1.0;
    let k = kDefault;
    let c0 = c0Default;

    // Domain configuration
    const tMin = 0, tMax = 10;
    const cMin = 0, cMax = 2;

    // Analytical solution cA(t) = cA0 exp(-k t), sampled on [tMin, tMax]
    function analyticalSolution() {
        const numPoints = 200;
        const points = [];
        for (let i = 0; i <= numPoints; i++) {
            const t = tMin + (i / numPoints) * (tMax - tMin);
            points.push({ x: t, y: c0 * Math.exp(-k * t) });
        }
        return points;
    }

    // Plotted data, updated in place when the sliders change
    const data = {
        datasets: [
            {
                label: 'Solution',
                data: analyticalSolution(),
                borderColor: '#2563eb',
                borderWidth: 2.5,
                pointRadius: 0,
            },
            {
                label: 'Initial condition',
                data: [{ x: 0, y: c0 }],
                backgroundColor: '#dc2626',
                borderColor: '#ffffff',
                borderWidth: 2,
                pointRadius: 7,
                showLine: false,
            },
        ],
    };

    const options = {
        animation: false,
        maintainAspectRatio: false,
        clip: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
        },
        scales: {
            x: {
                type: 'linear',
                min: tMin,
                max: tMax,
                title: { display: true, text: 'Time (h)' },
                ticks: { stepSize: 2 },
            },
            y: {
                min: cMin,
                max: cMax,
                title: { display: true, text: 'Concentration of A (M)' },
                ticks: { stepSize: 0.5 },
            },
        },
    };

    // Chart.js cannot detect when a canvas inside a Shadow DOM is attached to the
    // page, so wait until the canvas is visible before creating the chart
    let chart = null;
    function createChart() {
        chart = new Chart(canvas, { type: 'line', data, options });
    }

    const attachObserver = new ResizeObserver(() => {
        if (canvas.isConnected) {
            attachObserver.disconnect();
            requestAnimationFrame(createChart);
        }
    });
    attachObserver.observe(canvas.parentElement);

    function updateValues(nk, nc0) {
        k = nk;
        c0 = nc0;

        kSlider.value = k;
        c0Slider.value = c0;
        kValSpan.textContent = k.toFixed(2);
        c0ValSpan.textContent = c0.toFixed(1);
        tHalfValSpan.textContent = (Math.LN2 / k).toFixed(2);

        data.datasets[0].data = analyticalSolution();
        data.datasets[1].data = [{ x: 0, y: c0 }];
        chart?.update();
    }

    // Event Listeners for inputs
    kSlider.addEventListener('input', (e) => {
        updateValues(parseFloat(e.target.value), c0);
    });

    c0Slider.addEventListener('input', (e) => {
        updateValues(k, parseFloat(e.target.value));
    });

    resetBtn.addEventListener('click', () => {
        updateValues(kDefault, c0Default);
    });

    // Clean up the chart when the widget is removed
    return () => {
        attachObserver.disconnect();
        chart?.destroy();
    };
}

export default { render };
