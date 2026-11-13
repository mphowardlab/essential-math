# Linearity

A system of first-oder ODEs is linear if it can be written in the form:

\begin{equation}
\vv{y}' = \vv{A}(t) \vv{y} + \vv{g}(t)
\end{equation}

Linear systems have unique solutions and special properties we will discuss
later. An important special case is the homogeneous linear system with constant
coefficients:

\begin{equation}
\vv{y}' = \vv{A} \vv{y}
\end{equation}

Note that **A** is now constant and $\vv{g} = \vv{0}$. We will focus on solving
these types of problems because they come up a lot in chemical engineering
analysis (e.g., controls).

# Systems of First Order ODEs with Successive Substitution

As previously discussed, systems of first order ODEs can include multiple unknown variables, making them ineligible to be solved through previous methods (i.e. integrating factor, La'place transform). Consider the reaction network problem from the background page.

\begin{equation}
{\rm A} \xrightarrow{k_1} {\rm B} \xrightarrow{k_2} {\rm C}
\end{equation}

This network creates the following system of first order ODEs:

\begin{align}
\frac{dc_{\rm A}}{dt} &= -k_1 c_{\rm A} \\
\frac{dc_{\rm B}}{dt} &= k_1 c_{\rm A} - k_2 c_{\rm B} \\
\frac{dc_{\rm C}}{dt} &= k_2 c_{\rm B}
\end{align}

The independent variable in this network is $t$, and there are three unknown variables, $c_A$, $c_B$, and $c_C$. The derivative of $c_B$ and $c_C$ with respect to time includes two unknown variables, $c_A$ and $c_B$, and $c_B$ and $c_C$, respectively. The presence of two unknown variables in each of these expressions makes them impossible to solve with previous methods. Attempting to integrate the derivative of $c_C$ as a separable function yields:

\begin{align}
c_{\rm C} &= k_2 c_{\rm B} t +C
\end{align}

The operation shown above is invalid because $c_B$ is not a constant, it is an unknown function of *t*. 

Despite the challenges in evaluating $c_B$ and $c_C$, what do you notice about the derivative expression for $c_A$? 
It has an independent variable, t, and one unknown variable, $c_A$. $c_A$ matches the criteria for a linear first order differential ODE. This means we can solve for $c_A$ as a separable function. 

````{trythis}

Find the explicit solution for $c_A$.

---

First, evaluate $c_A$ as a separable ODE

```{dropdown} Check your work
\begin{align}
\int \frac{\d{c_{\rm A}}}{c_{\rm A}} &= \int -k_1 \d{t} \\
\ln c_{\rm A} &= -k_1 t + K
\end{align}
```
Then, apply the initial condition $c_A$(0) = $c_{A0}$ to solve for the explicit solution:

```{dropdown} Check your work
\begin{equation}
c_{\rm A} &= Ke^{-k_1 t}\\
c_{\rm A}(t=0) &= K = c_{\rm A0}\\
c_{\rm A} &= c_{{\rm A}, 0} e^{-k_1 t}
\end{equation}
```
````
Because we have $c_A$ in terms of t, we can substitute $c_A$ into the derivative expression of $c_B$. Now, we have made the derivative expression of $c_B$ with one unknown variable, $c_B$.

\begin{align}
\dd{}{c_{\rm B}}{t} &= k_1 c_{{\rm A}, 0} e^{-k_1 t} - k_2  c_{\rm B}
\end{align}

 We can solve for the expression of $c_B$ using the integrating factor method.

````{trythis}

Find the explicit solution for $c_B$.

---

First, find $p(x)$ and $r(x)$.

```{dropdown} Check your work
\begin{align}
\frac{dc_{\rm B}}{dt} + k_2 c_{\rm B} &= k_1 c_{\rm A,0} e^{-k_1 t}\\
p &= k_2 \qquad r =k_1 c_{\rm A,0}e^{-k_1 t}
\end{align}
```
Next, use $p$ and $r$ to evaluate the integral:

```{dropdown} Check your work
\begin{align}
F &= e^{\int k_2 \d{t}} = e^{k_2 t} \\
\int F r \d{t} &= \int e^{k_2 t} k_1 c_{\rm A,0} e^{-k_1 t} \d{t} \\
  &= k_1 c_{\rm A,0} \int e^{(k_2 -k_1)t} \d{t} \\
  &= c_{\rm A,0} \frac{k_1}{k_2 -k_1} e^{(k_2 -k_1)t}
\end{align}

Hence,

\begin{align}
c_{\rm B} &= \frac{1}{F}\left(\int Fr\d{t} + K \right) \\
  &= c_{\rm A,0} \frac{k_1}{k_2 - k_1} e^{-k_1 t} + K e^{-k_2 t}
\end{align}
```
Lastly, apply initial condition $c_B(0)=c_{B0}$ to find explicit solution.
```{dropdown} Check your work

\begin{align}
c_{\rm B}(0) &= c_{\rm A,0} \frac{k_1}{k_2 - k_1} + K = 0 \\
K &= -c_{\rm A,0} \frac{k_1}{k_2 - k_1}
\end{align}

Hence,

\begin{equation}
c_{\rm B}  = c_{\rm A,0} \frac{k_1}{k_2 -k_1} \left(e^{-k_1 t} - e^{-k_2 t} \right)
\end{equation}
```
````
We have now solved for $c_A$ as a separable function, and we were able to solve for $c_B$ through **successive substitution**. Solving $c_A$ first removed an unknown from our expression for $c_B$, which allowed us to evaluate $c_B$ as a function of *t*.

---
Successive substitution is a great way to solve sequential ODEs by eliminating unknown variables. The graph below is a visual representation of the reaction network. It shows the concentration values over time.

````{trythis}
1. Predict what will happen if you make $k_1$>>$k_2$? What if $k_2$>>$k_1$?
2. Predict how an increase or decrease in each of the initial concentrations will affect the reaction progress. What effect does $c_{A0}$ have on $c_B$ and $c_C$? What about $c_C$? Confirm your thinking with the graph.
---

*Figure of reaction network over time with ability to input different k values and initial concentrations.*


Suppose there is an unknown side reaction occurring. 
\begin{equation}
{\rm C} \xrightarrow{k_3} {\rm A}
\end{equation}
How would that affect the graph above (assuming $k_1=k_2=k_3$)?
How would the presence of the side reaction affect how we solve the problem? Could we still use successive substitution?
````

## Skill builder problems
```{exercise}
:label: systems-first-order-odes-definition-sb-1
Solve the IVP

\begin{align}
y_1' &= 1-2y_1, & y_1(0) &= 0\\
y_2' &= 2y_1 - y_1y_2, & y_2(0) &= 0
\end{align}
```

```{solution} systems-first-order-odes-definition-sb-1
:class: dropdown
We begin by solving for $y_1$ in terms of *x*. The ODE is separable and
therefore can be solved using separation of variables.

\begin{align}
\int \frac{dy_1}{1-2y_1} &= \int dx \\
-\frac{1}{2} \ln{\left(1-2y_1\right)} &= x + c_0 \\
\ln{\left(1-2y_1\right)} &= -2x + c_1 \\
1 - 2y_1 &= c_2 e^{-2x} \\
y_1 &= \frac{1}{2} \left(1- c_2 e^{-2x}\right) \\
\end{align}

Now, use the initial condition $y_1(0)= 0$ to solve for $c_2$:

\begin{equation}
y_1(0) = \frac{1}{2}\left(1-c_2\right) = 0
\end{equation}

so $c_2 = 1$ and

\begin{equation}
y_1 = \frac{1}{2} \left(1-e^{-2x}\right)
\end{equation}

Now, we can solve for $y_2$ knowing $y_1$ and recognizing that $y_2$ can also
be solved via separation of variables
\begin{align}
y_2' &= y_1\left(2-y_2\right) \\
\int \frac{dy_2}{2-y_2} &= \int \frac{1}{2}\left(1-e^{-2x}\right) \d{x} \\
-\ln{\left(2-y_2\right)} &= \frac{1}{2}\left(x + \frac{1}{2}e^{-2x}\right) + c_0\\
2 - y_2
    &= c_1 \exp\left[-\frac{1}{2}\left(x+ \frac{1}{2}e^{-2x}\right)\right] \\
y_2
    &= 2 - c_1 \exp\left[-\frac{1}{2}\left(x+\frac{1}{2}e^{-2x}\right)\right] \\
\end{align}

Again, use the initial condition $y_2(0)= 0$ to solve for $c_1$:

\begin{align}
y_2(0) &= 2 - c_1 e^{-1/4} = 0 \\
c_1 &= 2e^{1/4}
\end{align}

Therefore,

\begin{equation}
y_2 = 2\left[1-\exp\left(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x}\right)\right]
\end{equation}
```














% The text below is just math stuff I want to remove from intro, thinking it will go on this page with new title.

I AM KEEPING THIS (info below) FOR REFERENCE. It should not be here on final draft.

For example, consider two tanks. Tank 1 has concentration $c_1$ of a solute and
Tank 2 has concentration $c_2$. Tank 1 flows into Tank 2, which is then passed
through a pump and recycled back to Tank 1.

```{image} ./_images/tank-system.jpg
:alt: Concentrations in two tanks
:width: 300px
:align: center
```

Eventually, the two concentrations should equalize, but how do they evolve to
over time? $c_1$ and $c_2$ can be modeled using unsteady mass balances. This
is a *system* of first-order ODEs that can be solved simultaneously.

## Example: Reaction network

We are analyzing a simple reaction sequence occuring in a batch reactor:

\begin{equation}
{\rm A} \xrightarrow{k_1} {\rm B} \xrightarrow{k_2} {\rm C}
\end{equation}

where $k_1$ and $k_2$ are reaction rate constants. At $t = 0$, only species A is
present at concentration $c_{{\rm A},0}$. Determine the concentration of B
as a function of time. What happens in the special case $k_1 = k_2$?

---

Unsteady mole balances give

\begin{align}
\dd{}{c_{\rm A}}{t} &= -k_1 c_{\rm A} \\
\dd{}{c_{\rm B}}{t} &= k_1 c_{\rm A} - k_2  c_{\rm B} \\
\dd{}{c_{\rm C}}{t} &= k_2  c_{\rm B}
\end{align}

These ODES can be solved by first finding $c_{\rm A}$, then $c_{\rm B}$, and
last $c_{\rm C}$! The ODE for $c_{\rm A}$ is separable:

\begin{align}
\int \frac{\d{c_{\rm A}}}{c_{\rm A}} &= \int -k_1 \d{t} \\
\ln c_{\rm A} &= -k_1 t + K
\end{align}

Applying the initial condition $c_{\rm A}(0) = c_{{\rm A},0}$ gives:

\begin{equation}
c_{\rm A} = c_{{\rm A}, 0} e^{-k_1 t}
\end{equation}

Next, use the solution for $c_{\rm A}$ to solve $c_{\rm B}$:

\begin{align}
\dd{}{c_{\rm B}}{t} &= k_1 c_{\rm A,0}e^{-k_1 t} -k_2 c_{\rm B} \\
\dd{}{c_{\rm B}}{t} &+ k_2 c_{\rm B} = k_1 c_{\rm A,0}e^{-k_1 t}
\end{align}

This is a linear first-order ODE with

\begin{equation}
p = k_2 \qquad r =k_1 c_{\rm A,0}e^{-k_1 t}
\end{equation}

that can be solved using an integrating factor:

\begin{align}
F &= e^{\int k_2 \d{t}} = e^{k_2 t} \\
\int F r \d{t} &= \int e^{k_2 t} k_1 c_{\rm A,0} e^{-k_1 t} \d{t} \\
  &= k_1 c_{\rm A,0} \int e^{(k_2 -k_1)t} \d{t} \\
  &= c_{\rm A,0} \frac{k_1}{k_2 -k_1} e^{(k_2 -k_1)t}
\end{align}

Hence,

\begin{align}
c_{\rm B} &= \frac{1}{F}\left(\int Fr\d{t} + K \right) \\
  &= c_{\rm A,0} \frac{k_1}{k_2 - k_1} e^{-k_1 t} + K e^{-k_2 t}
\end{align}

Applying the initial condition

\begin{align}
c_{\rm B}(0) &= c_{\rm A,0} \frac{k_1}{k_2 - k_1} + K = 0 \\
K &= -c_{\rm A,0} \frac{k_1}{k_2 - k_1}
\end{align}

Hence,

\begin{equation}
c_{\rm B}  = c_{\rm A,0} \frac{k_1}{k_2 -k_1} \left(e^{-k_1 t} - e^{-k_2 t} \right)
\end{equation}

If $k_1 = k_2$, the solution appears to have an issue because there is a
"divide by zero". However, we can actually evaluate this behavior as a limit!
Let's set $k_1 = k$, and take the limit as $k_2 \to k$:

\begin{align}
\lim_{k_2 \to k} c_{\rm B} &=
  c_{{\rm A},0} k \lim_{k_2  \to k} \frac{e^{-k t} - e^{-k_2 t}}{k_2 -k_1} \\
  &= c_{{\rm A},0} k \lim_{k_2 \to k} \frac{t e^{-k_2 t}}{1} \\
  &= c_{{\rm A},0} k t e^{-k t}
\end{align}

where in the second line, we made use of L'Hopital's rule to evaluate the limit.

## Skill builder problems

```{exercise}
:label: systems-first-order-odes-definition-sb-1
Solve the IVP

\begin{align}
y_1' &= 1-2y_1, & y_1(0) &= 0\\
y_2' &= 2y_1 - y_1y_2, & y_2(0) &= 0
\end{align}
```

```{solution} systems-first-order-odes-definition-sb-1
:class: dropdown
We begin by solving for $y_1$ in terms of *x*. The ODE is separable and
therefore can be solved using separation of variables.

\begin{align}
\int \frac{dy_1}{1-2y_1} &= \int dx \\
-\frac{1}{2} \ln{\left(1-2y_1\right)} &= x + c_0 \\
\ln{\left(1-2y_1\right)} &= -2x + c_1 \\
1 - 2y_1 &= c_2 e^{-2x} \\
y_1 &= \frac{1}{2} \left(1- c_2 e^{-2x}\right) \\
\end{align}

Now, use the initial condition $y_1(0)= 0$ to solve for $c_2$:

\begin{equation}
y_1(0) = \frac{1}{2}\left(1-c_2\right) = 0
\end{equation}

so $c_2 = 1$ and

\begin{equation}
y_1 = \frac{1}{2} \left(1-e^{-2x}\right)
\end{equation}

Now, we can solve for $y_2$ knowing $y_1$ and recognizing that $y_2$ can also
be solved via separation of variables
\begin{align}
y_2' &= y_1\left(2-y_2\right) \\
\int \frac{dy_2}{2-y_2} &= \int \frac{1}{2}\left(1-e^{-2x}\right) \d{x} \\
-\ln{\left(2-y_2\right)} &= \frac{1}{2}\left(x + \frac{1}{2}e^{-2x}\right) + c_0\\
2 - y_2
    &= c_1 \exp\left[-\frac{1}{2}\left(x+ \frac{1}{2}e^{-2x}\right)\right] \\
y_2
    &= 2 - c_1 \exp\left[-\frac{1}{2}\left(x+\frac{1}{2}e^{-2x}\right)\right] \\
\end{align}

Again, use the initial condition $y_2(0)= 0$ to solve for $c_1$:

\begin{align}
y_2(0) &= 2 - c_1 e^{-1/4} = 0 \\
c_1 &= 2e^{1/4}
\end{align}

Therefore,

\begin{equation}
y_2 = 2\left[1-\exp\left(\frac{1}{4}-\frac{x}{2}-\frac{1}{4}e^{-2x}\right)\right]
\end{equation}
```