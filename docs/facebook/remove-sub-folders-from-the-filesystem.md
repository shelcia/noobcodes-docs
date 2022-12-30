---
sidebar_position: 116
tags: [facebook]
---

# Remove Sub-Folders from the Filesystem

### Problem Statement

Given a list of folders folder, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

If a folder[i] is located within another folder[j], it is called a sub-folder of it.

The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

[Leetcode link](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/)

#### Example 1:

```
Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
Output: ["/a","/c/d","/c/f"]
Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
```

#### Example 2:

```
Input: folder = ["/a","/a/b/c","/a/b/d"]
Output: ["/a"]
Explanation: Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".
```

#### Example 3:

```
Input: folder = ["/a/b/c","/a/b/ca","/a/b/d"]
Output: ["/a/b/c","/a/b/ca","/a/b/d"]
```

#### Constraints:

- 1 <= s.length <= 10<sup>5</sup>
- s[i] is either '(' or ')'.
- s is a valid parentheses string.

### Code

```python title="Python Code"
class Solution(object):
    def removeSubfolders(self, folder):
        folder.sort()
        cleaned = [folder[0]]  # first folder is shortest or unique
        prev, prev_n = folder[0]+"/", len(folder[0])+1
        for each in folder[1:]:
            if each[:prev_n] != prev:
                cleaned.append(each)
                prev, prev_n = each + "/", len(each)+1
        return cleaned

```
