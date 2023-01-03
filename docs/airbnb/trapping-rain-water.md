---
sidebar_position: 15
tags: [airbnb]
---

# Trapping Rain Water

### Problem Statement

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

[Leetcode Link](https://leetcode.com/problems/trapping-rain-water/)

#### Example 1:

![](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
```

#### Example 2:

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

#### Constraints:

- `n == height.length`
- `1 <= n <= 2 * 104`
- `0 <= height[i] <= 105`

### Code

```python title="Python Code"

class Solution:
    def trap(self, height):
        waterLevel = []
        left = 0
        for h in height:
            left = max(left, h)
            waterLevel += [left] # over-fill it to left max height
        right = 0
        for i, h in reversed(list(enumerate(height))):
            right = max(right, h)
            waterLevel[i] = min(waterLevel[i], right) - h # drain to the right height
        return sum(waterLevel)
```
