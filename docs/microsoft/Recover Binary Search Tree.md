---
sidebar_position: 5
tags: [microsoft]
---

#Recover Binary Search Tree

###Problem Statement
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.

 

###Example 1:
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.



###Example 2:
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 


###Constraints:
The number of nodes in the tree is in the range [2, 1000].
-2^31 <= Node.val <= 2^31 - 1

###code:
class Solution:
  def recoverTree(self, root: Optional[TreeNode]) -> None:
    def swap(x: Optional[TreeNode], y: Optional[TreeNode]) -> None:
      temp = x.val
      x.val = y.val
      y.val = temp

    def inorder(root: Optional[TreeNode]) -> None:
      if not root:
        return

      inorder(root.left)

      if self.pred and root.val < self.pred.val:
        self.y = root
        if not self.x:
          self.x = self.pred
        else:
          return
      self.pred = root

      inorder(root.right)

    inorder(root)
    swap(self.x, self.y)

  pred = None
  x = None  # 1st wrong node
  y = None  # 2nd wrong node
