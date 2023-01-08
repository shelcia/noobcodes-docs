---
sidebar_position: 152
tags: [facebook]
---

# Single Number II

### Problem Statement

Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. _Find the single element and return it._

You must implement a solution with a linear runtime complexity and use only constant extra space.

[Leetcode Link](https://leetcode.com/problems/single-number-ii)

#### Example 1:

```
Input: nums = [2,2,3,2]
Output: 3
```

#### Example 2:

```
Input: nums = [0,1,0,1,0,1,99]
Output: 99
```

#### Constraints:

- `1` `<=` `nums.length` `<=` `3` \* `10`<sup>4</sup>
- `-2`<sup>31</sup> `<=` `nums[i]` `<=` `2`<sup>31</sup> `-1`
- Each element in `nums` appears exactly **three times** except for one element which appears once.

### Code

```python title="Python"
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        di={}
        for i in nums:
            if i in di:
                di[i]+=1
            else:
                di[i]=1
        for i,j in enumerate(di):
            if di[j]==1:
                return j

```
