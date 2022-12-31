---
sidebar_position: 10
tags: [adobe]
---

# Largest Divisible Subset

### Problem Statement

Given a set of distinct positive integers nums, return the largest subset answer such that every pair (`answer[i]`, `answer[j]`) of elements in this subset satisfies:

- `answer[i] % answer[j] == 0`, or
- `answer[j] % answer[i] == 0`
  If there are multiple solutions, return any of them..

[LeetCode link](https://leetcode.com/problems/largest-divisible-subset/)

#### Example 1:

```
Input: nums = [1,2,3]
Output: [1,2]
```

##### Explanation:

`[1,3]` is also accepted.

#### Example 2:

```
Input: nums = [1,2,4,8]
Output: [1,2,4,8]
```

#### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 \* 109`
- All the integers in **nums are unique**

### Code

```jsx title="Java Code"
public class Solution {
    List<Integer> answer;
    public List<Integer> largestDivisibleSubset(int[] nums) {
        if(nums==null || nums.length==0)
            return new ArrayList<Integer>();

        Arrays.sort(nums);

        int[] max = new int[1];
        List<Integer> result = new ArrayList<Integer>();
        helper(nums, 0, result, max);
        return answer;
    }

    public void helper(int[] nums, int start, List<Integer> result, int[] max){
        if(result.size()>max[0]){
            max[0]=result.size();
            answer=new ArrayList<Integer>(result);
        }

        if(start==nums.length)
            return;

        for(int i=start; i<nums.length; i++){
            if(result.size()==0){
                result.add(nums[i]);
                helper(nums, i+1, result, max);
                result.remove(result.size()-1);

            }else{

                int top = result.get(result.size()-1);
                if(nums[i]%top==0){
                    result.add(nums[i]);
                    helper(nums, i+1, result, max);
                    result.remove(result.size()-1);
                }
            }
        }
    }
}
```
