# Total differential

The total differential of f is the sum of partial derivatives:

\begin{equation}
\td{}{f}{x}{y} \partial x + \td{}{f}{y}{x} \partial y
\end{equation}

```{example} ,
\begin{equation}
\partial f = 2x \cos y \partial x - x^2 \sin y \partial y
\end{equation}
```

 The total differental can be used to form other derivatives, based on the dependencies of x and y.

```{example} ,
\begin{equation}
x(t) and y(t) \rightarrow \pp{}{f}{t} = 2x \cos y \pp{}{x}{t} - x^2 \sin y \pp{}{y}{t}
\end{equation}
```

```{example} ,
\begin{equation}
x(t,s) and y(t,s) \rightarrow \td{}{f}{t}{s} = 2x \cos y \td{}{x}{t}{s} - x^2 \sin y \td{}{y}{t}{s}
\end{equation}
```