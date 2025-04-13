# Separable Differential Equations
## 1. Definition and Motivation

An **ordinary differential equation (ODE)** contains one or more derivatives of an unknown function of one variable.

**Examples:**
- \( y' = \cos x \)
- \( y'' + 9y = 0 \)
- \( x^2 y''' + 2x^5 y^4 = (x^2 + 2)y^2 \)

The **order** of an ODE is its highest derivative. First-order ODEs typically look like:
- \( F(x, y, y') = 0 \) &nbsp; *(implicit form)*
- \( y' = f(x, y) \) &nbsp; *(explicit form)*

### When do we see first-order ODEs in Chemical Engineering?
- Unsteady mass/energy balances
- Chemical kinetics

---

## 2. Direction Fields and Initial Value Problems

ODEs have **families of solutions** due to integration constants. A **direction field** (or slope field) is obtained by plotting the slope at \( (x, y) \) from \( y' = f(x, y) \), showing how a point evolves.

**Example:**
Given \( y' = xy \) and initial condition \( y(0) = 1 \), a solution curve can be drawn through the slope field.

**Direction Field Diagram**

To fully specify a problem, an **initial value** \( y(x_0) = y_(0) \) is required.

**Verification**
Verify that \( y = e^{x^2 / 2} \) is a solution for \( y' = xy \):
- \( y' = x e^{x^2 / 2} \) ✓

Given /( y(0) = 1\), we find that \(c = 1\) and the particular solution is:
\[ y = e^{x^2 / 2} \]

___

## 3. Solving ODEs: Separation of Variables

If an ODE can be separated so that \( y \) and \( x \) are on each side, it can be integrated:

\[ g(y) \fac{dy}{dx} = f(x) \]

\[ \int g(y) \, dy = \int f(x) \, dx + C \]

**Example:**
Given \( y' = xy \), separate variables:
\[ /fac{dy}{y} = x \, dx \]

Integrating:

\[ \ln y = \fac{x^2}{2} + c_0 \Rightarrow y = e^{x^2 / 2 + c_0} = C e^{x^2 / 2}, \quad \text{where } C = e^{c_0} \]