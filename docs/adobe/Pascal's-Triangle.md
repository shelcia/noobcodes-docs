---
sidebar_position: 2
tags: [Adobe]
---

# Pascal's Triangle

### Problem Statement

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

```
                                          1

                                        1    1

                                     1    2    1

                                  1    3      3   1

                              1     4     6     4   1 


















```

#### Examples:
```

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Input: numRows = 1
Output: [[1]]


```
### Code

```jsx title="Java Code"
class Solution {
    public List<List<Integer>> generate(int numRows) {
        
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> pre= null;
        List<Integer> row= null;
        
        for(int i=0;i<numRows;i++){

        row = new ArrayList<Integer>();
            
            for(int j=0;j<=i;j++){

            if(j==0 || j==i) row.add(1);
                
                else{
                    row.add(pre.get(j-1) + pre.get(j));
                    
                }
            }
                pre=row;
                res.add(row);
            }
        
        return res;
    }
}
```
