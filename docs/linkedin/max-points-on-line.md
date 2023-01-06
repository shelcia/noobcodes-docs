---
sidebar_position: 48
tags: [LinkedIn]
---

# Max Points on a Line

### Problem Statement

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane, return *the maximum number of points that lie on the same straight line*.

[Leetcode Link](https://leetcode.com/problems/max-points-on-a-line/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg)

```
Input: points = [[1,1],[2,2],[3,3]]
Output: 3
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg)

```
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
```

#### Constraints:

- 1 <= points.length <= 300
- points[i].length == 2
- -10<sup>4</sup> <= xi, yi <= 10<sup>4</sup>
- All the points are unique.

### Code

```jsx title="Python"
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        #if two pairs of points are on the same line they must have the same slope and intercept
        #we can calculate the slope and intercept for all pairs of points 
        #we can keep track of points who belong to the same line (slope and intercept keys in dictionary)
        
        def calc_slope_interc(p1,p2): #return slope and intercept
            x1,y1 = p1
            x2,y2 = p2
            
            #edge cases for horizontal and vertical lines
            
            if y1==y2: #horizontal
                return 0,y1
            if x1==x2: #vertical
                return None,x1 #slope not defined 
            
            slope = (y2-y1)/(x2-x1)
            intercept = y2-slope*x2
            
            return (slope,intercept)
          
        #edge case one point
        if len(points)==1:
            return 1
        
        #dictionary that will keep track of the number of points that belong to the same line
        from collections import defaultdict
        tracker = defaultdict(lambda:set())#set of points (since same point can appear twice for different pairs)
                
        for i in range(len(points)-1):#calculate all pairs
            for j in range(i+1,len(points)):
                p1 = points[i]
                p2 = points[j]
                
                sl_int = calc_slope_interc(p1,p2)#slope and intercept for the line of the two points
                
                #add points to the set corresponding to line found
                #we add the index location of each datapoint
                tracker[sl_int].add(i)
                tracker[sl_int].add(j)
                
                
        #calculate no points per line
        #print(dict(tracker))
        no_points = [len(v) for k,v in tracker.items()] #len(v) give us the number of points for each line
        return max(no_points)
```

