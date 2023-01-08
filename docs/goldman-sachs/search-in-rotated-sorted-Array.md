---
sidebar_position: 827
tags: [Goldman Sachs]
---

# Search in Rotated Sorted Array

### Problem Statement

There is an integer array `nums` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, `nums` is **possibly rotated** at an unknown pivot index `k` `(1 <= k < nums.length)` such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

Given the array `nums` **after** the possible rotation and an integer `target`, return _the index of `target` if it is in `nums`, or `-1` if it is not in `nums`_.

You must write an algorithm with `O(log n)` runtime complexity.

Notice that the solution set must not contain duplicate triplets.

[Leetcode Link](https://leetcode.com/problems/search-in-rotated-sorted-array/)

#### Example 1:

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

#### Example 2:

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

#### Example 3:

```
Input: nums = [1], target = 0
Output: -1
```

#### Constraints:

- `1 <= nums.length <= 5000`
- `-104 <= nums[i] <= 104`
- All values of `nums` are unique.
- `nums` is an ascending array that is possibly rotated.
- `-104 <= target <= 104`

### Code

```java title="java Code"

public int search(int[] A, int target) {
    int lo = 0;
    int hi = A.length - 1;
    while (lo < hi) {
        int mid = (lo + hi) / 2;
        if (A[mid] == target) return mid;

        if (A[lo] <= A[mid]) {
            if (target >= A[lo] && target < A[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else {
            if (target > A[mid] && target <= A[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }
    return A[lo] == target ? lo : -1;
}
```
