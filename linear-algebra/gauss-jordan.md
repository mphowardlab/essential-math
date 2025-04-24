# Gauss–Jordan elimination

Gauss(-Jordan) Elimination with Back Substitution
Solve 2x<sub>1 + 5x_2 = 2 --> x_1 = 1/2(2-5x_2) = 6 
                13x_2 = -26 --> x_2 = -2   <ins>Back Substitution</ins>

<ins>Idea</ins>: If we can bring systems so that one variable is isolated, we 
      can work backwards to solve the others! How do we do this?

Elementary operations: *Swap equations order
                       *Multiply one equation by a nonzero constant
                       *Add one equation to another

Two linear systems are <ins>row-equivalent</ins> if one can be obtained from 
   another by elementary operations.
   *Row-equivalent linear systems have the <ins>same</ins> set of solutions

Solve 2x_1 + 5x_2 = 2 --> 2x_1 + 5x_2 = 2
   -4x_1 + 3x_2 = -30 --> -4x_1 + 3x_2 = -30 
                                +2(2x_1 + 5x_2 = 2) --> 13x_2 = -26 
