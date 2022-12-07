---
sidebar_position: 10
tags: [amazon, contiguous]
---

# Contiguous Product Subarray (Maximum)

### Problem Statement

Given an integer array nums, find a contiguous non-empty subarray within the array that
has the largest product, and return the product.
[LeetCode link](https://leetcode.com/problems/maximum-product-subarray/)

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

##### Example:

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
```

### Code

```jsx title="Python Code"
def contiguousProductArray(nums):

    max_so_far = max(nums)
    max_current = 1
    min_in_arr = min(nums)

    product = 1

    for n in nums:
        if n == 0:
            product = 1
        else:
            product = product * n
    print(product)

    if product > max_so_far:
        max_so_far = product

    for n in nums:
        max_current = max_current * n

        if(max_current < min_in_arr):
            max_current = 1

        if(max_so_far < max_current):
            max_so_far = max_current

    print(max_so_far)


def leetcodeMethod(nums):
    curr_max = global_max = curr_min = nums[0]

    for i in range(1, len(nums)):
        curr_max, curr_min = max(nums[i], nums[i] * curr_max, nums[i] * curr_min), min(
            nums[i], nums[i] * curr_max, nums[i] * curr_min)
        global_max = max(global_max, curr_max)

    return global_max

contiguousProductArray([1, 0, -1, 2, 3, -5, -2])  # 60
```
