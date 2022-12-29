---
sidebar_position: 10
tags: [facebook]
---

# Bulb Switcher

### Problem Statement

There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.

[Leetcode link](https://leetcode.com/problems/bulb-switcher/)

### Example 1:

```
Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off].
So you should return 1 because there is only one bulb is on.
```

### Example 2:

```
Input: n = 0
Output: 0
```

### Example 3:

```
Input: n = 1
Output: 1
```

### Constraints

- 1 <= n <= 10<sup>9</sup>

### Code

```python title="Python3 Code"

class Solution(object):
    def bulbSwitch(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = 0
        i = 1

        while i < n + 1:
            if i ** 2 <= n:
                count += 1
            else:
                break

            i += 1
        return count
```
