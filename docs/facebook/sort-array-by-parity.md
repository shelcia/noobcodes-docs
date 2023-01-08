---
sidebar_position: 160
tags: [facebook]
---

# Sort Array By Parity

### Problem Statement

Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.

Return **_any array_** that satisfies this condition.

[Leetcode Link](https://leetcode.com/problems/sort-array-by-parity)

#### Example 1:

```
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
```

#### Example 2:

```
Input: nums = [0]
Output: [0]
```

#### Constraints:

- `1 <= nums.length <= 5000`
- `0 <= nums[i] <= 5000`

### Code

```python title="Python"
class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        a=[]
        for i in nums:
            if i%2==0:
                a.insert(0,i)
            else:
                a.append(i)
        return a

```
