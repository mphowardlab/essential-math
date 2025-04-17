# Series expansion

**Skill Builder**

Expand the following to two terms:

(a) $f(x)=\cos(x)$ at $x=0$

The derivatives are:

\begin{align}
f'(x)&=-\sin(x)\\
f''(x)&=-\cos(x)
\end{align}

Evaluating everything at $x=0$:

\begin{align}
f(0)=1\\
f'(0)=0\\
f''(0)=-1
\end{align}

So:

\begin{equation}
f(x) \approx 1-\frac{x^2}{2}
\end{equation}

(b) $f(x)=\sin(x)$ at $x=0$

The derivatives are:

\begin{align}
f(x)&=\sin(x)\\
f'(x)&=\cos(x)\\
f''(x)&=-\sin(x)\\
f^{(3)}(x)&=-\cos(x)
\end{align}

Evaluating at $x=0$:
\begin{align}
f(0)=0\\
f'(0)=1\\
f''(0)=0\\
f^{3}(0)=-1
\end{align}

So:

\begin{equation}
f(x) \approx x-\frac{x^3}{6}
\end{equation}

(c) $f(x)=e^x$ at $x=0$

Derive and evaluate:

\begin{align}
f(x)&=e^x \rightarrow f(0)=1\\
f'(x)&=e^x \rightarrow f'(0)=1
\end{align}

So:

\begin{equation}
f(x) \approx 1+x
\end{equation}

(d) $f(x)=\ln(1+x)$ at $x=0$

Derive and Evaluate:

\begin{align}
f(x)&=\ln(1+x) \rightarrow f(0)=0\\
f'(x)&=\frac{1}{1+x} \rightarrow f'(0)=1\\
f''(x)&=-\frac{1}{(1+x)^2} \rightarrow f''(0)=-1
\end{align}

So:

\begin{equation}
f(x) \approx x-\frac{x^2}{2}
\end{equation}

(e) $f(x)=\frac{1}{1+x}$ at $x=0$

Derive and Evaluate:

\begin{align}
f(x)&=\frac{1}{1+x} \rightarrow f(0)=1\\
f'(x)&=-\frac{1}{(1+x)^2} \rightarrow f'(0)=1
\end{align}

So:

\begin{equation}
f(x) \approx 1-x
\end{equation}

(f) $f(x)=\cos(4x)$ at $x=0$

From part (a) we found... 

\begin{equation}
f(x)=cos(x) \approx 1-\frac{x^2}{2}
\end{equation}

We can find the Taylor series of a function $f(ax)$ by substituting $ax$ for $x$ in the Taylor series for $f(x)$.

So:

\begin{equation}
f(x)=\cos(4x) \approx 1-\frac{(4x)^2}{2} \approx 1-8x^2
\end{equation}

(g) $f(x)=\cos(x-\pi)$ at $x=\pi$

We can use the same method used to solve part (f).

\begin{equation}
f(x)=cos(x) \approx 1-\frac{x^2}{2}
\end{equation}

So:

\begin{equation}
f(x)=\cos(x-\pi) \approx 1-\frac{(x-\pi)^2}{2}
\end{equation}

Note: There is a constant shift of $x$ and $x_0$

(h) $f(x)=e^x \sin(x)$ at $x=0$

To find the Taylor expansion of the product of two functions, f(x)·g(x), you may multiply their individual Taylor series expansions.

Recall:

The Taylor expansion of $f(x)=e^x$ is $f(x) \approx 1+x$

The Taylor expansion of $f(x)=\sin(x)$ is $f(x) \approx x-\frac{x^3}{6}$

So:

\begin{equation}
f(x) \approx (1+x+\dots)(x-\frac{x^3}{6}+\dots) \approx x+x^2
\end{equation}

(i) $f(x)=\cos(x)$ at $x=\pi$

Note: Reuse derivatives from part (a) but evaluate at $\pi$ instead of zero.
    
\begin{align}
f(\pi)=-1\\
f'(\pi)=0\\
f''(\pi)=1
\end{align}

\begin{equation}
f(x) \approx -1+\frac{1}{2}(x-\pi)^2
\end{equation}

(j) $f(x)=7x^2-6x+1$ at $x=2$

\begin{align}
f(x)&=7x^2-6x+1 \rightarrow f(2)=17\\
f'(x)&=14x-6 \rightarrow f'(2)=22
\end{align}

\begin{equation}
f(x) \approx 17+22(x-2)
\end{equation}