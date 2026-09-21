---
numbering:
    heading_2: false
---
# First-order ordinary differential equations

## Motivation

Differential equations relate the derivatives of an unknown function to the
function, the function's derivatives, and other variables. They arise frequently
in physics and engineering. For example, Newton's second law, $\vv{F} = m
\vv{a}$, is a differential equation because the acceleration **a** is the second
time-derivative of the position **x**, with the force **F** often being a
function of the position **x**:

\begin{equation}
m \vv{x}'' = \vv{F}(\vv{x})
\end{equation}

In chemical engineering, differential equations are often used to model the rate
of change of quantities with respect to time. For example, differential
equations are needed to model unsteady processes, such as batch reactors, where
process variables are expected to change over time. Differential equations can
also be used to model the startup of a process as it comes to steady state, as
well as how it behaves if it departs from steady state. The latter case is
especially important for control theory!

Differential equations are also used to model how quantites change in space.
For example, differential equations are needed to model transport phenomena,
such as diffusion and heat transfer, as well as to design certain types of
process equipment, such as plug flow reactors.

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
