---
sidebar_position: 14
tags: [airbnb]
---

# Consecutive Numbers Sum

### Problem Statement

Given an integer `n`, return the number of ways you can write n as the sum of consecutive positive integers.

[Leetcode Link](https://leetcode.com/problems/consecutive-numbers-sum/)

#### Example 1:

```
Input: n = 5
Output: 2
Explanation: 5 = 2 + 3
```

#### Example 2:

```
Input: n = 9
Output: 3
Explanation: 9 = 4 + 5 = 2 + 3 + 4
```

#### Example 3:

```
Input: n = 15
Output: 4
Explanation: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
```

#### Constraints:

- 1 <= n <= 10<sup>9</sup>

### Code

```python title="Python"
   def consecutiveNumbersSum(self, N):
        res = 1
        i = 3
        while N % 2 == 0:
            N /= 2
        while i * i <= N:
            count = 0
            while N % i == 0:
                N /= i
                count += 1
            res *= count + 1
            i += 2
        return res if N == 1 else res * 2
```

```jsx title="Java"
    public int consecutiveNumbersSum(int N) {
        int res = 1, count;
        while (N % 2 == 0) N /= 2;
        for (int i = 3; i * i <= N; i += 2) {
            count = 0;
            while (N % i == 0) {
                N /= i;
                count++;
            }
            res *= count + 1;
        }
        return N == 1 ? res : res * 2;
    }
```
