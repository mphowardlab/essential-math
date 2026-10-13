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
    const ctx = canvas.getContext('2d');
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

    // Plot margins (px) leave room for tick and axis labels
    const margin = { left: 52, right: 16, top: 16, bottom: 44 };

    function toScreenX(t, width) {
        const plotWidth = width - margin.left - margin.right;
        return margin.left + ((t - tMin) / (tMax - tMin)) * plotWidth;
    }

    function toScreenY(c, height) {
        const plotHeight = height - margin.top - margin.bottom;
        return margin.top + plotHeight - ((c - cMin) / (cMax - cMin)) * plotHeight;
    }

    function resizeCanvas() {
        const parentWidth = canvas.parentElement.clientWidth;
        const width = Math.min(parentWidth, 500);
        const height = Math.round(0.75 * width);
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
    }

    function drawBackgroundAndAxes(width, height) {
        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Axes along t = tMin and c = cMin
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.5;
        const originX = toScreenX(tMin, width);
        const originY = toScreenY(cMin, height);

        ctx.beginPath();
        ctx.moveTo(originX, toScreenY(cMax, height));
        ctx.lineTo(originX, originY);
        ctx.lineTo(toScreenX(tMax, width), originY);
        ctx.stroke();

        // Tick marks and labels
        ctx.fillStyle = '#475569';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        ctx.beginPath();
        for (let t = tMin; t <= tMax; t += 2) {
            const sx = toScreenX(t, width);
            ctx.moveTo(sx, originY);
            ctx.lineTo(sx, originY + 4);
            ctx.fillText(t.toString(), sx, originY + 6);
        }

        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        for (let c = cMin; c <= cMax + 1e-9; c += 0.5) {
            const sy = toScreenY(c, height);
            ctx.moveTo(originX, sy);
            ctx.lineTo(originX - 4, sy);
            ctx.fillText(c.toFixed(1), originX - 7, sy);
        }
        ctx.stroke();

        // Axis labels
        ctx.fillStyle = '#334155';
        ctx.font = 'italic 13px "Times New Roman", Times, serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        const tLabelX = (toScreenX(tMin, width) + toScreenX(tMax, width)) / 2;
        ctx.textAlign = 'right';
        ctx.fillText('t', tLabelX, height - 4);
        ctx.font = '13px "Times New Roman", Times, serif';
        ctx.textAlign = 'left';
        ctx.fillText(' (h)', tLabelX, height - 4);
        ctx.font = 'italic 13px "Times New Roman", Times, serif';
        ctx.textAlign = 'center';

        ctx.save();
        ctx.translate(14, (toScreenY(cMin, height) + toScreenY(cMax, height)) / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        const cWidth = ctx.measureText('c').width;
        ctx.font = '13px "Times New Roman", Times, serif';
        const subWidth = ctx.measureText('A').width * 0.8;
        const unitWidth = ctx.measureText(' (M)').width;
        const startX = -(cWidth + subWidth + unitWidth) / 2;
        ctx.font = 'italic 13px "Times New Roman", Times, serif';
        ctx.fillText('c', startX, 0);
        ctx.font = '10px "Times New Roman", Times, serif';
        ctx.fillText('A', startX + cWidth, 4);
        ctx.font = '13px "Times New Roman", Times, serif';
        ctx.fillText(' (M)', startX + cWidth + subWidth, 0);
        ctx.restore();
    }

    function drawSolutionCurve(width, height) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(
            margin.left, margin.top,
            width - margin.left - margin.right, height - margin.top - margin.bottom
        );
        ctx.clip();

        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        const numPoints = 300;
        for (let i = 0; i <= numPoints; i++) {
            const t = tMin + (i / numPoints) * (tMax - tMin);
            const c = c0 * Math.exp(-k * t);

            const sx = toScreenX(t, width);
            const sy = toScreenY(c, height);
            if (i === 0) {
                ctx.moveTo(sx, sy);
            } else {
                ctx.lineTo(sx, sy);
            }
        }
        ctx.stroke();
        ctx.restore();
    }

    function drawInitialPoint(width, height) {
        const sx = toScreenX(0, width);
        const sy = toScreenY(c0, height);

        // Outer glow / target ring
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctx.beginPath();
        ctx.arc(sx, sy, 12, 0, 2 * Math.PI);
        ctx.fill();

        // Center point marker
        ctx.fillStyle = '#dc2626';
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    function draw() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        if (width === 0 || height === 0) return;

        drawBackgroundAndAxes(width, height);
        drawSolutionCurve(width, height);
        drawInitialPoint(width, height);
    }

    function updateValues(nk, nc0) {
        k = Math.max(0.1, Math.min(1, nk));
        c0 = Math.max(cMin, Math.min(cMax, nc0));

        kSlider.value = k;
        c0Slider.value = c0;
        kValSpan.textContent = k.toFixed(2);
        c0ValSpan.textContent = c0.toFixed(1);
        tHalfValSpan.textContent = (Math.LN2 / k).toFixed(2);

        draw();
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

    // Initial setup
    window.addEventListener('resize', resizeCanvas);
    updateValues(k, c0);
    resizeCanvas();
}

export default { render };
