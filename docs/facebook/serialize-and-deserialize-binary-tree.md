---
sidebar_position: 138
tags: [facebook]
---

# Serialize and Deserialize Binary Tree

### Problem Statement

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Clarification**: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

[Leetcode Link](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

#### Example 1:

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```

#### Example 2:

```
Input: root = []
Output: []
```

#### Constraints:

- The number of nodes in the tree is in the range [0, 10<sup>4</sup>].
- -1000 <= Node.val <= 1000

### Code

```python title="Python"
class Codec:
    def serialize(self, root):
        ans=[]
        stc=[root]
        while(len(stc)>0):
            tstc=[]
            for a in stc:
                if(a==None):
                    ans.append("N")
                else:
                    ans.append(str(a.val))
                if(a!=None):
                    tstc.append(a.left)
                    tstc.append(a.right)
            stc=tstc
        ans="x".join(ans)
        return ans
    def deserialize(self, data):
        data=data.split("x")
        if(data[0]=="N"):
            return None
        root=TreeNode(data[0])
        stc=[root]
        i=1
        while(len(stc)>0):
            if(data[i]!="N"):
                stc[0].left=TreeNode(int(data[i]))
                i+=1
                stc.append(stc[0].left)
            else:
                stc[0].left=None
                i+=1
            if(data[i]!="N"):
                stc[0].right=TreeNode(int(data[i]))
                i+=1
                stc.append(stc[0].right)
            else:
                stc[0].right=None
                i+=1
            stc.pop(0)
        return root
```
