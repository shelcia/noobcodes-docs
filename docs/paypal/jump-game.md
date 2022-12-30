---
sidebar_position: 23
tags: [paypal]
---

# Jump Game

### Problem Statement

You are given an integer array nums. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` if you can reach the last index, or `false` otherwise.

[LeetCode link](https://leetcode.com/problems/jump-game/)

#### Example 1:

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

#### Example 2:

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

#### Constraints:

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

### Code

```jsx title="Java Code"
public boolean canJump(int[] A) {
    if(A.length <= 1)
        return true;

    int max = A[0]; //max stands for the largest index that can be reached.

    for(int i=0; i<A.length; i++){
        //if not enough to go to next
        if(max <= i && A[i] == 0)
            return false;

        //update max
        if(i + A[i] > max){
            max = i + A[i];
        }

        //max is enough to reach the end
        if(max >= A.length-1)
            return true;
    }

    return false;
}
```
