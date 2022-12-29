---
sidebar_position: 26
tags: [facebook]
---

# Minimum Depth of Binary Tree

### Problem Statement

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

[Leetcode link](https://leetcode.com/problems/minimum-depth-of-binary-tree)

#### Example 1:

```
Input: root = [3,9,20,null,null,15,7]
Output: 2
```

#### Example 2:

```
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>5</sup>].
- -1000 <= Node.val <= 1000

### Code

````python title="Python Code"

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        if root == None:
            return 0
        queue = deque()

        #store nodes together with the depth at which they occurred.
        #The queue will remain ordered by levels

        queue.append((root,0))

        minDepth = None
        # Loop invariant: Nodes that occur later in the queue cannot have lower level in the tree than those that occur earlier
        while len(queue) > 0:
            firstNode, firstDepth = queue.popleft()
            # we have found a leaf, and we know that no leaf occurs at a lower level
            if firstNode.left == None and firstNode.right == None:
                return firstDepth+1

            # append the children at the end of the queue.
            # It is easy to see that the loop invariant is preserved.
            if firstNode.left != None:
                queue.append((firstNode.left, firstDepth+1))
            if firstNode.right != None:
                queue.append((firstNode.right, firstDepth+1))```

````
