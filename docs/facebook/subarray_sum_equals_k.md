---
sidebar_position: 174
tags: [facebook]
---

# Subarray Sum Equals K

### Problem Statement

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

A subarray is a contiguous non-empty sequence of elements within an array.

[Leetcode Link](https://leetcode.com/problems/subarray-sum-equals-k/)

#### Example 1:

```
Input: nums = [1,1,1], k = 2
Output: 2
```

#### Example 2:

```
Input: nums = [1,2,3], k = 3
Output: 2
```

#### Constraints:

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`

### Code

```python title="Python Code"

class Solution:
	def subarraySum(self, nums: List[int], k: int) -> int:

		ans=0
		prefsum=0
		d={0:1}

		for num in nums:
			prefsum = prefsum + num

			if prefsum-k in d:
				ans = ans + d[prefsum-k]

			if prefsum not in d:
				d[prefsum] = 1
			else:
				d[prefsum] = d[prefsum]+1

		return ans
```
