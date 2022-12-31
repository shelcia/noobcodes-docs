---
sidebar_position: 61
tags: [amazon]
---

# Inorder Successor in BST

### Problem Statement

Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

If the given node has no in-order successor in the tree, return `null`.

**Note** : It's guaranteed p is one node in the given tree. (You can directly compare the memory address to find p)

[Leetcode link](https://leetcode.com/problems/inorder-successor-in-bst)

#### Example 1:

```
Input: {1,#,2}, node with value 1
Output: 2
Explanation:
  1
   \
    2
```

#### Example 2:

```
Input: {2,1,3}, node with value 1
Output: 2
Explanation:
    2
   / \
  1   3
```

#### Challenge

`O(h)`, where h is the height of the BST.

### Code

```python title="Python"
def inorderSuccessor(self, root, p):
    # write your code here
    if not root:
        return None
    if root.val > p.val:
        return self.inorderSuccessor(root.left, p) or root
    if root.val <= p.val:
        return self.inorderSuccessor(root.right, p)

```

```cpp title="C++"
class Solution {
public:

    TreeNode* succ = NULL;

    void find_succ(TreeNode* root, TreeNode* target)
    {
        // base case

        if(root == NULL)
        {
            return;
        }

        // if we get value greater than target then update the succ and move to left

        if(root -> val > target -> val)
        {
            succ = root;

            find_succ(root -> left, target);
        }

        // if we get a value less than or equal to target then move to right

        else
        {
            find_succ(root -> right, target);
        }
    }

    TreeNode * inorderSuccessor(TreeNode * root, TreeNode * target) {

        find_succ(root, target);

        return succ;
    }
};

```
