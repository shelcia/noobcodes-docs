---
sidebar_position: 144
tags: [facebook]
---

# Shortest Subarray with Sum at Least K

### Problem Statement

Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return `-1`.

A subarray is a contiguous part of an array.

[Leetcode Link](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k)

#### Example 1:

```
Input: nums = [1], k = 1
Output: 1
```

#### Example 2:

```
Input: nums = [1,2], k = 4
Output: -1
```

#### Example 3:

```
Input: nums = [2,-1,2], k = 3
Output: 3
```

#### Constraints:

- `1` `<=` `nums.length` `<=` `10`<sup>5</sup>
- `-10`<sup>5</sup> `<=` `nums[i]` `<=` `10`<sup>5</sup>
- `1` `<=` `k` `<=` `10`<sup>9</sup>

### Code

```python title="Python"
class Solution:
    def shortestSubarray(self, A, K):
        d = collections.deque([[0, 0]])
        res, cur = float('inf'), 0
        for i, a in enumerate(A):
            cur += a
            while d and cur - d[0][1] >= K:
                res = min(res, i + 1 - d.popleft()[0])
            while d and cur <= d[-1][1]:
                d.pop()
            d.append([i + 1, cur])
        return res if res < float('inf') else -1
```
