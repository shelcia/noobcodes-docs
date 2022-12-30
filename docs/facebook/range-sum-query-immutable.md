---
sidebar_position: 98
tags: [facebook]
---

# Range Sum Query - Immutable

### Problem Statement

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

- NumArray(int[] nums) Initializes the object with the integer array nums.
- int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

[Leetcode Link](https://leetcode.com/problems/range-sum-query-immutable)

#### Example 1:

```
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
```

#### Constraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>
- 0 <= left <= right < nums.length
- At most 10<sup>4</sup> calls will be made to sumRange.

### Code

```python title="Python Code"
import random
class NumArray:

    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.nums = nums
        for a in range(0, len(self.nums)):
            final_sum = 0
            for b in range(a, len(self.nums)):
                if a == b:
                    final_sum = self.nums[a]
                else:
                    final_sum += self.nums[b]
                list_nums.append((a, b, final_sum))

    def sumRange(self, i, j):

        if i > j:
            temp = i
            i = j
            j = temp

        for item in list_nums:
            if item[0] == i and item[1] == j:
                final_sum = item[2]
                break

        return final_sum
```
