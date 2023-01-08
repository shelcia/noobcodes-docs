---
sidebar_position: 198
tags: [facebook]
---

# Total Hamming Distance

### Problem Statement

The Hamming distance between two integers is the number of positions at which the corresponding `bits` are different.

Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in `nums`.

[Leetcode Link](https://leetcode.com/problems/total-hamming-distance)

#### Example 1:

```
Input: nums = [4,14,2]
Output: 6
Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case).
The answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
```

#### Example 2:

```
Input: nums = [4,14,4]
Output: 4
```

#### Constraints:

- `1` `<=` `nums.length` <= 10<sup>4</sup>
- `0` `<=` `nums[i]` `<=` 10<sup>9</sup>
- The answer for the given input will fit in a **32-bit** integer.

### Code

```python title="Python Code"

import heapq
class Solution:
    def totalHammingDistance(self, nums):
        return sum(b.count('0') * b.count('1') for b in zip(*map('{:032b}'.format, nums)))
```
