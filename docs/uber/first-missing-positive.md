---
sidebar_position: 2
tags: [uber]
---

# First Missing Positive

### Problem Statement

Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

[Leetcode link](https://leetcode.com/problems/first-missing-positive/)

#### Example 1:

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
```

#### Example 2:

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
```

#### Example 3:

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
```

#### Constraints:

- 1 <= nums.length <= 10<sup>5</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1

### Code

```python title="Python Code"

class Solution(object):
        def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(len(nums)):
            tmp, nums[i] = nums[i], None
            while tmp is not None and 0 <= tmp-1 < len(nums) and tmp != nums[tmp-1]:
                nums[tmp-1], tmp = tmp, nums[tmp-1]

        for i in range(len(nums)):
            if nums[i] is None:
                return i+1
        return len(nums) + 1

```
