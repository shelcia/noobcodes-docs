---
sidebar_position: 38
tags: [amazon]
---

# Daily Temperatures

### Problem Statement

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the `ith` day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

[Leetcode Link](https://leetcode.com/problems/daily-temperatures)

#### Example 1:

```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
```

#### Example 2:

```
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```

#### Example 3:

```
Input: temperatures = [30,60,90]
Output: [1,1,0]
```

#### Constraints:

- `1 <= temperatures.length <= 105`
- `30 <= temperatures[i] <= 100`

### Code

```python title="Python Code"

class Solution:
    def dailyTemperatures(self, T):
    #initialize the result array with all '0's considering when there is no bigger temperature
        ans = [0]*len(T)
        stack = []

        for i,v in enumerate(T):
            #check whether current val is greater than the last appended stack value.  We will pop all the elements which is lesser than the current temp
            while stack and stack[-1][1] < v:
                index,value = stack.pop()
                ans[index] = i - index # we are checking how many indices we have crossed since we last have a lesser temperature
            #Remember since we are comparing all the stack elements before inserting,all the stack elements will have temperatures greater than the current value
            stack.append([i,v])

        return ans
```

```jsx title="Java Code"
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        final int m = temperatures.length;
        final Map<Integer, Integer> next = new HashMap<>();
        final Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < m; i++) {
            while (!stack.empty() && temperatures[stack.peek()] < temperatures[i]) {
                next.put(stack.peek(), i - stack.pop());
            }
            stack.push(i);
        }
        final int[] ans = new int[m];
        for (int i = 0; i < m; i++) {
            ans[i] = next.getOrDefault(i, 0);
        }
        return ans;
    }
}
```
