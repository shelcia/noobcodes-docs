---
sidebar_position: 205
tags: [facebook]
---

# Wiggle Sort II

### Problem Statement

Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

You may assume the input array always has a valid answer.

[Leetcode Link](https://leetcode.com/problems/wiggle-sort-ii/)

#### Example 1:

```
Input: nums = [1,5,1,1,6,4]
Output: [1,6,1,5,1,4]
Explanation: [1,4,1,5,1,6] is also accepted.
```

#### Example 2:

```
Input: nums = [1,3,2,2,3,1]
Output: [2,3,1,3,1,2]
```

#### Constraints:

- 1 <= nums.length <= 5 \* 10<sup>4</sup>
- 0 <= nums[i] <= 5000
- It is guaranteed that there will be an answer for the given input nums.

### Code

```jsx title="Python"
def wiggleSort(self, nums):
    nums.sort()
    half = len(nums[::2])
    nums[::2], nums[1::2] = nums[:half][::-1], nums[half:][::-1]
```

```jsx title="C++"
class Solution {
public:
    void wiggleSort(vector<int>& nums) {
        int n= nums.size();
        priority_queue<int> q(nums.begin(), nums.end());
        for(int i=1; i<n; i += 2){
            nums[i] = q.top();
            q.pop();
        }
        for(int i=0; i<n; i += 2){
            nums[i] = q.top();
            q.pop();
        }
    }
};
```
