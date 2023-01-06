---
sidebar_position: 812
tags: [Goldman Sachs]
---

#  Pow(x, n)

### Problem Statement

Implement `pow(x, n)`, which calculates `x` raised to the power `n (i.e., xn)`.



[Leetcode Link](https://leetcode.com/problems/powx-n/)

#### Example 1:

```

Input: x = 2.00000, n = 10
Output: 1024.00000
```

#### Example 2:
```
Input: x = 2.10000, n = 3
Output: 9.26100
```

#### Constraints:
```
-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
-104 <= xn <= 104
```

### Code

```java title="java Code"


// This is an O(logN) solution.
// The approach is 2^n = 2^(n/2)*2^(n/2). So we will calculate one time 2^(n/2) and then we will store it in the temp var, and we will do (temp *  temp)
// For the negative power we have stored the int n in a long a and then we will change the sign and proceed the calculation divided by 1 i.e, 1/func(x, y).
class Solution {
    public static double myPow(double x, int n) {
        if(n==0){
            return 1;
        }
        // for handling the -ve powers
        if(n<0){
            // stored in a bigger data type 
            long a = n;
            long y = -a;
            return 1/func(x, y);
        }
        // for +ve powers
        return func(x, n);
    }

    public static double func(double x, long n){
        if(n==0){
            return 1;
        }
        if(n%2==0){
            double temp = func(x, n/2);
            return (temp * temp);
        }
        return (x*func(x, n-1));
    }
}
```

