---
sidebar_position: 55
tags: [amazon, binarytree]
---

# Binary Search Tree Iterator

### Problem Statement

Implement the `BSTIterator` class that represents an iterator over the **in-order traversal** of a binary search tree (BST):

- `BSTIterator(TreeNode root) `Initializes an object of the `BSTIterator` class. The root of the **BST** is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
- `boolean hasNext()` Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
- `int next()` Moves the pointer to the right, then returns the number at the pointer.

**Notice** that by initializing the pointer to a non-existent smallest number, the first call to `next()` will return the smallest element in the BST.

You may assume that `next()` calls will always be valid. That is, there will be at least a next number in the in-order traversal when `next()` is called.

#### Example 1:

![image](https://user-images.githubusercontent.com/77881638/206434590-6dd22667-0237-4c2f-bc7a-336c3343a4fb.png)

![image](https://user-images.githubusercontent.com/77881638/206435367-4e5a0e7d-d6ee-49f4-a6c1-4bb935ffd122.png)

#### Constraints:

- The number of nodes in the tree is in the range `[1, 105]`.
- `0 <= Node.val <= 106`
- At most `105` calls will be made to hasNext, and next.

### Code

```jsx title="JAVA Code"
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class BSTIterator {
    private Stack<TreeNode> st = new Stack<TreeNode>();
    public BSTIterator(TreeNode root) {
        pushAll(root);
    }

    public int next() {
        TreeNode tempNode = st.pop();
        pushAll(tempNode.right);
        return tempNode.val;
    }

    public boolean hasNext() {
        return !st.isEmpty();
    }

    private void pushAll(TreeNode node){
        for(; node != null; st.push(node), node= node.left);
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.next();
 * boolean param_2 = obj.hasNext();
 */
```
