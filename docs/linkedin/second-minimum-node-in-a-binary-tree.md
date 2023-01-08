---
sidebar_position: 74
tags: [linkedin]
---

# Second Minimum Node In a Binary Tree

### Problem Statement

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property `root.val = min(root.left.val, root.right.val)` always holds.

Given such a binary tree, you need to output the **second minimum** value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

[Leetcode Link](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/)

#### Example 1:

![alt text](https://assets.leetcode.com/uploads/2020/10/15/smbt1.jpg)

```
Input: root = [2,2,5,null,null,5,7]
Output: 5
Explanation: The smallest value is 2, the second smallest value is 5.
```

#### Example 2:

![alt text](https://assets.leetcode.com/uploads/2020/10/15/smbt2.jpg)

```
Input: root = [2,2,2]
Output: -1
Explanation: The smallest value is 2, but there isn't any second smallest value.
```

### Code

```python title="Python"
def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
	arr = sorted(set(self.treeToList(root)))
	if len(arr) < 2:
		return -1
	else:
		return arr[1]

def treeToList(self, root):
	if root is None:
		return []
	return self.treeToList(root.left) + [root.val] + self.treeToList(root.right)
```
