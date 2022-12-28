---
sidebar_position: 63
tags: [amazon]
---

# Largest Rectangle in Histogram

### Problem Statement

Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return _the area of the largest rectangle in the histogram_.

[Leetcode link](https://leetcode.com/problems/largest-rectangle-in-histogram)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg)

```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg)

```
Input: heights = [2,4]
Output: 4
```

#### Constraints:

- 1 <= heights.length <= 10<sup>5</sup>
- 0 <= heights[i] <= 10<sup>4</sup>

### Code

```python title="Python"
def largestRectangleArea(self, height):
    height.append(0)
    stack = [-1]
    ans = 0
    for i in xrange(len(height)):
        while height[i] < height[stack[-1]]:
            h = height[stack.pop()]
            w = i - stack[-1] - 1
            ans = max(ans, h * w)
        stack.append(i)
    height.pop()
    return ans

```

```cpp title="C++"
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        heights.push_back(0);

        stack <int>st;
        int area=0;

        for(int i=0;i<heights.size();i++){
            while(!st.empty() && heights[st.top()]>heights[i]){
                int h=heights[st.top()];
                st.pop();

                if(st.empty()){
                    area=max(area,h*i);
                }
                else{
                    int l=i-st.top()-1;
                    area=max(area,h*l);
                }
            }
            st.push(i);
        }
        return area;
    }
};
```
