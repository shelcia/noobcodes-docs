---
sidebar_position: 153
tags: [facebook]
---

# Single Number III

### Problem Statement

Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

[Leetcode Link](https://leetcode.com/problems/single-number-iii)

#### Example 1:

```
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
```

#### Example 2:

```
Input: nums = [-1,0]
Output: [-1,0]
```

#### Example 3:

```
Input: nums = [0,1]
Output: [1,0]
```

#### Constraints:

- 2 <= nums.length <= 3 \* 10<sup>4</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1
- Each integer in nums will appear twice, only two integers will appear once.

### Code

```python title="Python"
class Solution:
   def singleNumber(self, nums: List[int]) -> List[int]:
       ans = []
       for i, n1 in enumerate(nums):
           for j, n2 in enumerate(nums):
               if i != j and n1 == n2: break
               elif j == len(nums)-1:
                   ans.append(n1)
       return ans

```
