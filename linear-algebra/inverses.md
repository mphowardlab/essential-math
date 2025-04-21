# Matrix inversion
## SkillBuilder
Solve the following using matrix inversion:

(a) 

$$
5x_1 - 2x_2 = 20.9
$$  

$$
-x_1 + 4x_2 = -19.3
$$



$$
A= \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$


we know that 

$A =b \x = A^{-1}b$
<ins>A</ins> <ins>x</ins>=<ins>b</ins>
<ins>x</ins>=<sup><ins>A</ins></sup><ins>b</ins> 

$$
det <ins>A</ins> = 5*4-(-1)(-2) = 18
$$

<sup><ins><A</ins></sup> = 1/18 _     _
                                         |  4 2  |
                                         |_ 1 5 _|
<ins>x</ins> = 1/18  _     _   _     _ = 1/18 _                _ = _    _ --> ___________________
                    |  4 2  | |  20.9 |      | 4*20.9 + 2*-19.3 | |  2.5 |   |x<sub>1</sub>=2.5  |
                    |_ 1 5 _| |_-19.3_|      |_1*20.9 + 5*-19.3_| |_-4.2_|   |x<sub>2</sub>=-4.2 | 
                                                                             |___________________|
(b)

$$
x_1 + 4x_2 = 8
$$

$$
2x_1 + 8x_2 = 17 
$$

<ins>A</ins> =  _     _
               |  1 4  | 
               |_ 2 8 _|
<ins>b</ins> =  _    _
               |  8   |
               |_ 17 _|

det <ins>A</ins> = 1*8 - 2*4 = 0      <ins>A</ins> is singular because det <ins><ins>A</ins></ins> = 0, so it <ins>**cannot be inverted.**</ins>

(c) 

$$
x_2 + x_3 = -2
$$

$$
4x_2 + 6x_3 = -12
$$

$$
x_1 + x_2 + x_3 = 2
$$



                _        _
               |   0 1 1  | 
<ins>A</ins> = |   0 4 6  |
               |_  1 1 1 _|
                _   _ 
               | -2  |
<ins>b</ins> = | -12 |
               |_ 2 _|
det <ins><ins>A</ins></ins> = 0* | 4 6 | - 1* | 0 6 | + 1* | 0 4 | = -1(0-6) + 1(0-4) = 2
                                 | 1 1 |      | 1 1 |      | 1 1 |
Since det <ins><ins>A</ins></ins> ~=~ 0, <ins><ins>A</ins></ins> is invertible. Use Guass-Jordan elimination.
 _             _       _             _           _               _                _               _
| 0 1 1 | 1 0 0 |     | 1 1 1 | 0 0 1 | reorder | 1 1 1 |  0 0 1  |              | 1 1 1 | 0 0   1 |
| 0 1 1 | 1 0 0 | --> | 0 1 1 | 1 0 0 |   -->   | 0 1 1 |  1 0 0  |          --> | 0 1 1 | 1 0   0 |
|_0 4 6 | 0 1 0_|     |_0 4 6 | 0 1 0_|         |_0 0 2 | -4 1 0 _| -4 Row 2     |_0 0 1 |-2 0.5 0_| divide by 2
     _                _              _                 _                                               
    | 1 1 0 | 2 -0.5 1 | -Row 3     | 1 0 0 | -1    0 1 | -Row2                                       
--> | 0 1 0 | 3 -0.5 0 | -Row 3 --> | 0 1 0 |  3 -0.5 0 |        
    |_0 0 1 | -2 0.5 0_|            |_0 0 1 | -2  0.5 0_|      

                                          _         _
                                         | -1    0 1 |
    <sup><ins><ins>A</ins></ins></sup> = |  3 -0.5 0 |
                                         |_-2  0.5 0_|

                                                                _         _   _   _   
                                                               | -1    0 1 | | -2  |   
 <ins>x</ins>=<sup><ins><ins>A</ins></ins></sup><ins>b</ins> = |  3 -0.5 0 | | -12 | =                  
                                                               |_-2  0.5 0_| |_ 2 _|   
 _                 _     _  _     ___________________
| -1*-2 +     1*  2 |   |  4 |   | x<sub>1</sub> = 4 |
| 3 *-2  + -0.5*-12 | = |  0 |   | x<sub>2</sub> = 0 |
|_-2*-2 +   0.5*-12_|   |_-2_|   | x<sub>3</sub> = -2|
                                 |___________________|

(d)
 4x<sub>2</sub> + 4x<sub>3</sub> = 24
3x<sub>1</sub> - 11x<sub>2</sub> - 2x<sub>3</sub> = -6
6x<sub>1</sub> - 17x<sub>2</sub> + x<sub>3</sub> = 18
                           _          _
                          |   0   4  4 | 
<ins><ins>A</ins></ins> = |   3 -11 -2 |
                          |_  6 -17  1_|
                _   _ 
               | 24  |
<ins>b</ins> = | -6  |
               |_18 _|

det <ins><ins>A</ins></ins> = 0* | -11 -2 | - 4* | 3 -2 | + 4* | 3 -11 | = 
                                 | -17 1  |      | 6  1 |      | 6 -17 |
= -4(3*1 - 6*-2) + 4(3*-17 - 6*-11)  = -4*15 + 4*15  = 0
                                                                   ________________
Since det <ins><ins>A</ins></ins> = 0, <ins><ins>A</ins></ins> is | not invertible.|
                                                                  |________________|

(e)
2x<sub>1</sub> - x<sub>2</sub> - 3x<sub>3</sub> = -1
-4x<sub>1</sub> + 2x<sub>2</sub> - 6x<sub>3</sub> = 2

<ins><ins>A</ins></ins> =  _         _
                          |   2 -1 3  | 
                          |_ -4  2 -6_|
<ins>b</ins> =  _   _
               |  -1 |
               |_  2_|
                                                                         ________________
Since <ins><ins>A</ins></ins> is not square, <ins><ins>A</ins></ins> is | not invertible.|
                                                                        |________________|
