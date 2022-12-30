---
sidebar_position: 12
tags: [paypal]
---

# K-diff Pairs in an Array

### Problem Statement

Given an array of integers `nums` and an integer `k`, return *the number of **unique** k-diff pairs in the array*.

A **k-diff** pair is an integer pair `(nums[i], nums[j])`, where the following are true:

- 0 <= i, j < nums.length
- i != j
- nums[i] - nums[j] == k
**Notice** that `|val|` denotes the absolute value of `val`.

#### Example 1:
```
Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

#### Example 2:

```
Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

#### Example 3:

```
Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```

#### Contraints:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>7</sup> <= nums[i] <= 10<sup>7</sup>
- 0 <= k <= 10<sup>7</sup>

[Leetcode Link](https://leetcode.com/problems/k-diff-pairs-in-an-array/)

### Code

```jsx title="Python"
class Solution:
    def findPairs(self, nums: List[int], k: int) -> int:
        cnt=0
        c=Counter(nums)
        
        if k==0:
            for key,v in c.items():
                if v>1:
                    cnt+=1
        else:
            for key,v in c.items():
                if key+k in c:
                    cnt+=1
        return cnt

```