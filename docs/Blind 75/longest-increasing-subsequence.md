---
sidebar_position: 8
tags: [Blind 75, Dynamic Programming, array, binary search]
---

# Longest Increasing Subsequence

### Problem Statement

Given an integer array nums, return the length of the longest strictly increasing subsequence.

### Examples

```
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

### Constraints

```
1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4
```

### Code

```jsx title="Python3 Code"

class Solution:
    def lengthOfLIS(self, A):
        tail = []
        for i in A:
            j = bisect.bisect_left(tail,i)
            if j == len(tail): tail.append(i)
            else: tail[j] = i
        return len(tail)
```
