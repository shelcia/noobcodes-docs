---
sidebar_position: 5
tags: [LinkedIn]
---

# Can Place Flowers

### Problem Statement

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

[Leetcode Link](https://leetcode.com/problems/can-place-flowers/)

#### Example 1:

```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

#### Example 2:

```
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```

#### Constraints:

- 1 <= flowerbed.length <= 2 * 10<sup>4</sup>
- flowerbed[i] is 0 or 1.
- There are no two adjacent flowers in flowerbed.
- 0 <= n <= flowerbed.length

### Code 

```jsx title="Python"
class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        zeros, ans = 1, 0  # Easier handling of prefixes, just initialize zeros to 1
        for f in flowerbed:
            if f == 0: 
                zeros += 1
            else:
                ans += (zeros - 1) // 2
                zeros = 0
        return ans + zeros // 2 >= n  # Note that suffix zeros need not -1
```

