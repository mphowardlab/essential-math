---
numbering:
    heading_2: false
---
# First-order ordinary differential equations

## Motivation

Differential equations relate the derivatives of an unknown function to the
function, the function's derivatives, and other variables. They arise frequently
in physics and engineering. For example, Newton's second law, $\vv{F} = m
\vv{a}$, is a differential equation because the acceleration $\vv{a} = \vv{x}''$
is the second derivative of the position $\vv{x}$ with respect to time $t$. The
force $\vv{F}$ may be a function of $t$, $\vv{x}$, and velocity
$\vv{v} = \vv{x}'$, depending on the physics:

\begin{equation}
m \vv{x}'' = \vv{F}(t, \vv{x}, \vv{v})
\end{equation}

In chemical engineering, differential equations are often used to model the rate
of change of quantities with respect to time or how they vary in space.
Differential equations are needed to:

- Model unsteady processes, such as batch reactors, where process variables are
  expected to change over time.

- Model the startup of a process as it comes to steady state, as well as how it
  behaves if it departs from steady state. The latter case is especially
  important for control theory!

- Model how transport processes cause mass or energy to distribute in space.
  For example, differential equations are needed to model transport phenomena,
  such as diffusion and heat transfer, as well as to design certain types of
  process equipment, such as plug flow reactors.

```{example} Batch reactor
A **batch reactor** is a closed reaction vessel: no mass enters or exits after
the reaction is started and before it is stopped. Hence, the concentrations of
the reactants and products in a batch reactor continuously change as the
reaction progresses.

The first-order reaction ${\rm A} \to {\rm B}$ occurs in a batch reactor. The
rate of reaction of A per unit volume is $-r_{\rm A} = k c_{\rm A}$, where
$k$ is the rate constant. The liquid volume in the reactor is $V$, and it can
be assumed to be constant density regardless of composition. How does the
concentration $c_{\rm A}$ change over time $t$ from its initial value of 1 M?

---

The total number of moles of A, $n_{\rm A}$, is related to the concentration and
the volume $V$ by $n_{\rm A} = c_{\rm A} V$. Write the unsteady mole balance for
A:

\begin{equation}
\dd{}{n_{\rm A}}{t} = \dot{n}_{{\rm A}, {\rm in}} - \dot{n}_{{\rm A}, {\rm out}}
+ r_{\rm A} V
\end{equation}

Then substitute this relationship, the given rate of reaction, and that there
are no flows in or out of a batch reactor:

\begin{equation}
\dd{}{(c_{\rm A} V)}{t} = - k c_{\rm A} V
\end{equation}

Last, since the volume is constant, it can be removed from the derivative:

\begin{equation}
\dd{}{c_{\rm A}}{t} = -k c_{\rm A}
\end{equation}

This model is a **first-order ordindary differential equation** for
$c_{\rm A}$. It describes the rate of change of $c_{\rm A}$ over time. We also
know that $c_{\rm A}(0) = 1\,{\rm M}$ initially.

We will learn how to solve for $c_{\rm A}(t)$ in this chapter!
```

## Learning goals

1. Define a first-order ordinary differential equation and explain its
   significance in chemical engineering.
2. Select between analytical and numerical methods for solving first-order
   ordinary differential equations.
3. Solve unsteady mass and mole balances such as those involving tanks and
   reactors and unsteady energy balances such as those found in heat-transfer
   applications.

## Preqrequisite knowledge

You should make sure you are comfortable with the following:

- Integration techniques, including
  [substitution](../calculus/integration-substitution.md),
  [by parts](../calculus/integration-by-parts.md), and
  [partial fraction decomposition](../calculus/integration-partial-fractions.md).
- Evaluating [limits](../calculus/limits.md).
