---
sidebar_position: 2
tags: [microsoft]
---

# Recover Binary Search Tree


### Problem Statement

You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.


Example 1:

```

Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
```

Example 2:

```

Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid
```
[Leetcode link](https://leetcode.com/problems/recover-binary-search-tree/description/)


### Code

```jsx title="Java Code"

class Solution {
        public void recoverTree(TreeNode root) {
    Deque<TreeNode> stack = new LinkedList<>();
    boolean firstTime = true;
    TreeNode m = null, n = null, pre = null;
    while (true) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        if (stack.isEmpty()) {
            break;
        }
        TreeNode node = stack.pop();
        if (pre != null && pre.val > node.val) {
            if (firstTime) {
                m = pre;
                firstTime = false;
            }
            n = node;
        }
        pre = node;
        root = node.right;
    }
    int tmp = m.val;
    m.val = n.val;
    n.val = tmp;
}
}
```
