---
sidebar_position: 13
tags: [LinkedIn]
---

# Delete Node in a BST

### Problem Statement

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the **_root node reference_** (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

1. Search for a node to remove.
2. If the node is found, delete the node.

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/09/04/del_node_1.jpg)

```
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
```

![alt text](https://assets.leetcode.com/uploads/2020/09/04/del_node_supp.jpg)

#### Example 2:

```
Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
```

#### Example 3:

```
Input: root = [], key = 0
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>
- Each node has a **unique** value.
- `root` is a valid binary search tree.
- -10<sup>5</sup> <= key <= 10<sup>5</sup>

[Leetcode Link](https://leetcode.com/problems/delete-node-in-a-bst/)

### Code

```python title="Python Code"
class Solution(object):
    def deleteNode(self, root, key):
        if not root: return None

        if root.val == key:
            if not root.right: return root.left

            if not root.left: return root.right

            if root.left and root.right:
                temp = root.right
                while temp.left: temp = temp.left
                root.val = temp.val
                root.right = self.deleteNode(root.right, root.val)

        elif root.val > key:
            root.left = self.deleteNode(root.left, key)
        else:
            root.right = self.deleteNode(root.right, key)

        return root

```

```cpp title="C++ Code"
class Solution {
public:
    TreeNode* deleteNode(TreeNode* root, int key) {
        if(root)
            if(key < root->val) root->left = deleteNode(root->left, key);
            else if(key > root->val) root->right = deleteNode(root->right, key);
            else{
                if(!root->left && !root->right) return NULL;
                if (!root->left || !root->right)
                    return root->left ? root->left : root->right;

                TreeNode* temp = root->left;
                while(temp->right ! = NULL) temp = temp->right;
                root->val = temp->val;
                root->left = deleteNode(root->left, temp->val);
            }
        return root;
    }
};
```
