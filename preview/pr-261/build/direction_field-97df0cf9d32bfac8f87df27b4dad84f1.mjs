export function render({ model, el }) {
    // Create container div inside the widget's Shadow DOM
    const container = document.createElement('div');
    container.className = 'ode-widget-container';
    container.innerHTML = `
    <div class="ode-plot-card">
      <div class="canvas-wrapper">
        <canvas id="odeCanvas" aria-label="Direction field plot for the differential equation y prime equals x y from x equals negative 2 to positive 2 and y equals negative 2 to positive 2, showing slope segments, an analytical solution curve, and an initial condition point marker that can be clicked or dragged." role="img"></canvas>
      </div>
      <div class="ode-controls" aria-label="Initial condition controls">
        <div class="control-group">
          <label for="x0Slider">
            <span class="math-symbol">x</span><sub>0</sub>: <span id="x0Val">0.00</span>
          </label>
          <input type="range" id="x0Slider" min="-2" max="2" step="0.05" value="0.0">
        </div>
        <div class="control-group">
          <label for="y0Slider">
            <span class="math-symbol">y</span><sub>0</sub>: <span id="y0Val">1.00</span>
          </label>
          <input type="range" id="y0Slider" min="-2" max="2" step="0.05" value="1.0">
        </div>
        <div class="control-info">
          <span><span class="math-symbol">C</span> = <span id="cVal">1.000</span></span>
          <button id="resetBtn" class="ode-btn" type="button">Reset</button>
        </div>
      </div>
    </div>
  `;
    el.appendChild(container);

    const canvas = container.querySelector('#odeCanvas');
    const ctx = canvas.getContext('2d');
    const x0Slider = container.querySelector('#x0Slider');
    const y0Slider = container.querySelector('#y0Slider');
    const x0ValSpan = container.querySelector('#x0Val');
    const y0ValSpan = container.querySelector('#y0Val');
    const cValSpan = container.querySelector('#cVal');
    const resetBtn = container.querySelector('#resetBtn');

    // State variables (Default initial condition: x0 = 0, y0 = 1)
    let x0 = 0.0;
    let y0 = 1.0;
    let isDragging = false;

    // Domain configuration
    const xMin = -2, xMax = 2;
    const yMin = -2, yMax = 2;

    function toScreenX(x, width) {
        return ((x - xMin) / (xMax - xMin)) * width;
    }

    function toScreenY(y, height) {
        return height - ((y - yMin) / (yMax - yMin)) * height;
    }

    function toMathX(px, width) {
        return xMin + (px / width) * (xMax - xMin);
    }

    function toMathY(py, height) {
        return yMin + ((height - py) / height) * (yMax - yMin);
    }

    function resizeCanvas() {
        const parentWidth = canvas.parentElement.clientWidth;
        const size = Math.min(parentWidth, 500);
        const dpr = window.devicePixelRatio || 1;

        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;

        ctx.scale(dpr, dpr);
        draw();
    }

    function drawBackgroundAndAxes(width, height) {
        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        // Axes x=0, y=0 (Grid lines removed)
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.5;
        const originX = toScreenX(0, width);
        const originY = toScreenY(0, height);

        ctx.beginPath();
        ctx.moveTo(0, originY);
        ctx.lineTo(width, originY);
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, height);
        ctx.stroke();

        // Tick labels on axes (every 1.0)
        ctx.fillStyle = '#475569';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        for (let x = -2; x <= 2; x += 1) {
            if (x !== 0) {
                const sx = toScreenX(x, width);
                ctx.fillText(x.toString(), sx, originY + 4);
            }
        }

        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        for (let y = -2; y <= 2; y += 1) {
            if (y !== 0) {
                const sy = toScreenY(y, height);
                ctx.fillText(y.toString(), originX - 6, sy);
            }
        }
    }

    function drawDirectionField(width, height) {
        const step = 0.25;
        const segLength = 12;

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.2;

        for (let x = xMin; x <= xMax; x += step) {
            for (let y = yMin; y <= yMax; y += step) {
                const slope = x * y;
                const angle = Math.atan(slope);

                const sx = toScreenX(x, width);
                const sy = toScreenY(y, height);

                const dx = (segLength / 2) * Math.cos(angle);
                const dy = (segLength / 2) * Math.sin(angle);

                ctx.beginPath();
                ctx.moveTo(sx - dx, sy + dy);
                ctx.lineTo(sx + dx, sy - dy);
                ctx.stroke();
            }
        }
    }

    function drawSolutionCurve(width, height, C_val) {
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        let started = false;
        const numPoints = 300;
        for (let i = 0; i <= numPoints; i++) {
            const x = xMin + (i / numPoints) * (xMax - xMin);
            const y = C_val * Math.exp((x * x) / 2);

            if (y >= yMin && y <= yMax) {
                const sx = toScreenX(x, width);
                const sy = toScreenY(y, height);
                if (!started) {
                    ctx.moveTo(sx, sy);
                    started = true;
                } else {
                    ctx.lineTo(sx, sy);
                }
            } else {
                started = false;
            }
        }
        ctx.stroke();
    }

    function drawInitialPoint(width, height) {
        const sx = toScreenX(x0, width);
        const sy = toScreenY(y0, height);

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

        const C_val = y0 * Math.exp(-(x0 * x0) / 2);

        drawBackgroundAndAxes(width, height);
        drawDirectionField(width, height);
        drawSolutionCurve(width, height, C_val);
        drawInitialPoint(width, height);
    }

    function updateValues(nx, ny) {
        x0 = Math.max(xMin, Math.min(xMax, nx));
        y0 = Math.max(yMin, Math.min(yMax, ny));

        const C_val = y0 * Math.exp(-(x0 * x0) / 2);

        x0Slider.value = x0;
        y0Slider.value = y0;
        x0ValSpan.textContent = x0.toFixed(2);
        y0ValSpan.textContent = y0.toFixed(2);
        cValSpan.textContent = C_val.toFixed(3);

        draw();
    }

    // Event Listeners for inputs
    x0Slider.addEventListener('input', (e) => {
        updateValues(parseFloat(e.target.value), y0);
    });

    y0Slider.addEventListener('input', (e) => {
        updateValues(x0, parseFloat(e.target.value));
    });

    resetBtn.addEventListener('click', () => {
        updateValues(0.0, 1.0);
    });

    // Mouse / Touch interaction for dragging the initial condition point
    function getCanvasCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        const coords = getCanvasCoords(e);
        updateValues(toMathX(coords.x, canvas.clientWidth), toMathY(coords.y, canvas.clientHeight));
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const coords = getCanvasCoords(e);
        updateValues(toMathX(coords.x, canvas.clientWidth), toMathY(coords.y, canvas.clientHeight));
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        const coords = getCanvasCoords(e);
        updateValues(toMathX(coords.x, canvas.clientWidth), toMathY(coords.y, canvas.clientHeight));
        e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const coords = getCanvasCoords(e);
        updateValues(toMathX(coords.x, canvas.clientWidth), toMathY(coords.y, canvas.clientHeight));
        e.preventDefault();
    }, { passive: false });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Initial setup
    window.addEventListener('resize', resizeCanvas);
    updateValues(x0, y0);
    resizeCanvas();
}

export default { render };
