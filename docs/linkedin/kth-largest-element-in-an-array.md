---
sidebar_position: 37
tags: [LinkedIn]
---

# Kth Largest Element in an Array

### Problem Statement

Given an integer array `nums` and an integer `k`, return the k<sup>th</sup> largest element in the array.

Note that it is the k<sup>th</sup> largest element in the sorted order, not the k<sup>th</sup> distinct element.

You must solve it in O(n) time complexity.

[Leetcode Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

#### Example 1:

```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

#### Example 2:

```
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

#### Constraints:

- 1 <= k <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>

### Code

```jsx title="Python"
from collections import Counter

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        def counting_sort(nums):
            min_val = min(nums)
            delta = abs(min_val)
            for i, num in enumerate(nums):
                nums[i] += delta
            max_val = max(nums)
            counter = Counter(nums)
            sorted_nums = []
            for i in range(max_val+1):
                if i in counter:
                    sorted_nums += [i-delta] * counter[i]
            return sorted_nums
        nums = counting_sort(nums)
        return nums[-k]

```
