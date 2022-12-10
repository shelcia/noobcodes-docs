---
sidebar_position: 4
tags: [adobe]
---

# Merge Two Binary Trees

### Problem Statement

You are given two binary trees `root1` and `root2`.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

**Note**: The merging process must start from the root nodes of both trees.

#### Example 1:

```
Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]
```

#### Example 2:

```
Input: root1 = [1], root2 = [1,2]
Output: [2,2]
```

#### Constraints:

- The number of nodes in both trees is in the range [0, 2000].
- -1e4 <= Node.val <= 1e4

### Code

```python title="Python Code"
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:

        def dfs(node1, node2):
            if node1 and node2:
                # If both node exists, combine their values to form a new super node
                root = TreeNode(node1.val + node2.val)
                # And add its children by joining the children from both nodes
                root.left = dfs(node1.left, node2.left)
                root.right = dfs(node1.right, node2.right)
                # Finally return this super node
                return root
            else:
                # Otherwise return either that exists or None if neither exists
                return node1 or node2

        # Start the search in the head or roots of both trees
        return dfs(root1, root2)

```

```cpp title="C++"
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {
        if(root1==NULL)
            return root2;
        if(root2==NULL)
            return root1;
        TreeNode *temp=new TreeNode(root1->val+root2->val);

      if(root1->left !=NULL || root2->left!=NULL)
      {
          temp->left=mergeTrees(root1->left,root2->left);
      }
         if(root1->right !=NULL || root2->right!=NULL)
      {
          temp->right=mergeTrees(root1->right,root2->right);
      }
      return temp;
    }
};

```
