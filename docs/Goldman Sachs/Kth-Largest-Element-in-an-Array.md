---
sidebar_position: 820
tags: [Goldman Sachs]
---

# Kth Largest Element in an Array

### Problem Statement

Given an integer array nums and an integer `k`, return the `kth` largest element in the array.

Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

You must solve it in` O(n)` time complexity.

[Leetcode Link](https://leetcode.com/problems/kth-largest-element-in-an-array/)

#### Example 1:

```

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
```

#### Example 2:
```
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

#### Constraints:
```
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
```

### Code

```java title="java Code"


public class Solution {
    public int findKthLargest(int[] nums, int k) {
        int start = 0, end = nums.length - 1, index = nums.length - k;
        while (start < end) {
            int pivot = partion(nums, start, end);
            if (pivot < index) start = pivot + 1; 
            else if (pivot > index) end = pivot - 1;
            else return nums[pivot];
        }
        return nums[start];
    }
    
    private int partion(int[] nums, int start, int end) {
        int pivot = start, temp;
        while (start <= end) {
            while (start <= end && nums[start] <= nums[pivot]) start++;
            while (start <= end && nums[end] > nums[pivot]) end--;
            if (start > end) break;
            temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
        }
        temp = nums[end];
        nums[end] = nums[pivot];
        nums[pivot] = temp;
        return end;
    }
}
```

