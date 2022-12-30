---
sidebar_position: 99
tags: [facebook]
---

# Range Sum Query - Mutable

### Problem Statement

Given an integer array nums, handle multiple queries of the following types:

Update the value of an element in nums.
Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

- NumArray(int[] nums) Initializes the object with the integer array nums.
- void update(int index, int val) Updates the value of nums[index] to be val.
- int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

[Leetcode Link](https://leetcode.com/problems/range-sum-query-mutable)

#### Example 1:

```
Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]

Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8
```

#### Constraints:

- 1 <= nums.length <= 3 \* 10<sup>4</sup>
- -100 <= nums[i] <= 100
- 0 <= index < nums.length
- -100 <= val <= 100
- 0 <= left <= right < nums.length
- At most 3 \* 10<sup>4</sup> calls will be made to update and sumRange.

### Code

```python title="Python Code"
class NumArray(object):
    def __init__(self, nums):
        self.size = len(nums)
        self.tree = [0] * (self.size + 1)
        self.array = [0] * len(nums)

        for i, num in enumerate(nums):
            self.update(i, num)

    def update(self, i, val):
        diff, index = val - self.array[i], i + 1
        self.array[i] = val
        while index <= self.size:
            self.tree[index] += diff
            index += index & (-index)

    def get_sum(self, i):
        index, result = i + 1, 0
        while index > 0:
            result += self.tree[index]
            index -= index & (-index)
        return result

    def sumRange(self, i, j):
        return self.get_sum(j) - (self.get_sum(i - 1) if i > 0 else 0)
```
