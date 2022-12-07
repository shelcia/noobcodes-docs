class BSTIterator:

    def __init__(self, root: TreeNode):
        self.stack = []
        self.push_left(root)
        

    def next(self) -> int:
        """
        @return the next smallest number
        """
        node = self.stack.pop()
        self.push_left(node.right)
        return node.val

    def hasNext(self) -> bool:
        """
        @return whether we have a next smallest number
        """
        return self.stack
        
    def push_left(self, root):
        while root:
            self.stack.append(root)
            root = root.left