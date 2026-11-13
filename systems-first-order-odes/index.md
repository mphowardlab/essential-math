---
numbering:
    heading_2: false
---
# Systems of first-order ordinary differential equations

## Motivation

To illustrate this technique, we can observe a reaction network. Consider the
following reaction:

\begin{equation}
{\rm A} \xrightarrow{k_1} {\rm B} \xrightarrow{k_2} {\rm C}
\end{equation}

This network produces the following system of first order ODE.

\begin{align}
\dd{}{c_{\rm A}}{t} &= -k_1 c_{\rm A} \\
\dd{}{c_{\rm B}}{t} &= k_1 c_{\rm A} - k_2  c_{\rm B} \\
\dd{}{c_{\rm C}}{t} &= k_2  c_{\rm B}
\end{align}

````{trythis}
The graph below is a visual representation of the reaction
network. It shows the concentration values over time.

1. Predict what will happen if you make $k_1$>>$k_2$? What if $k_2$>>$k_1$?
2. Predict how an increase or decrease in each of the initial concentrations
   will affect the reaction progress. What effect does $c_{A0}$ have on $c_B$
   and $c_C$? What about $c_C$? Confirm your thinking with the graph.

---

*Figure of reaction network over time with ability to input different k values*
*and initial concentrations.*

````

## Learning goals

## Prerequisite knowledge

You should make sure you are comfortable with the following:

- Integration techniques, including
  [substitution](../calculus/integration-substitution.md),
  [integration by parts](../calculus/integration-by-parts.md), and
  [partial fraction decomposition](../calculus/integration-partial-fractions.md).
- Evaluating [limits](../calculus/limits.md).
- Using [matrices and vectors](../linear-algebra/matrices.md)
- Solving [systems of linear equations](../linear-algebra/linear-systems.md) and
  [eigenvalue problems](../linear-algebra/eigenvalue-problem.md).
