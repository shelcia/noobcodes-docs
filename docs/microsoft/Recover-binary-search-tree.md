class Solution:
    def recoverTree(self, root: Treenode) -> None:
        self.temp = []
        def dfs(node):
            if not node: return 
            dfs(node.left)
            self.temp.append(node)
            dfs(node.right)
        dfs(root)
        srt = sorted(n.val for n in self.temp)

        for i in range(len(srt)):
            self.temp[i].val = srt[i]