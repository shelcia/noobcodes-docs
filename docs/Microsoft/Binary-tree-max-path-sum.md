---
sidebar_position: 3
tags: [microsoft]
---

# Binary Tree Maximum Path Sum

### Problem Statement

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.



#### Examples: 
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.



### Code

```jsx title="Java Code"


public class Solution 
{
    int maxVal;
    public int maxPathSum(TreeNode root) 
    {
        maxVal = Integer.MIN_VALUE;
        return Math.max(recMeth(root), maxVal);
    }
    public int recMeth(TreeNode root)
    {
        if(root == null)
            return Integer.MIN_VALUE/4; //hack, will update the logic next
        int l = recMeth(root.left);
        int r = recMeth(root.right);
        maxVal = Math.max(Math.max(Math.max(l , r), l + r + root.val), maxVal);
        return Math.max(root.val + Math.max(l, r), root.val);
    }
}
```
