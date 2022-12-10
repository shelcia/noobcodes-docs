---
sidebar_position: 10
tags: [paypal, array]
---

# Shortest Word Distance

### Problem Statement

Given a list of `words` and two words `word1` and `word2`, return the *shortest distance between these two words in the list*.

**Note**: You may assume that `word1` does not equal to `word2`, and `word1` and `word2` are both in the list.

#### Example 1:
```
Input：["practice", "makes", "perfect", "coding", "makes"],"coding","practice"
Output：3
Explanation：index("coding") - index("practice") = 3
```

#### Example 2:
```
Input：["practice", "makes", "perfect", "coding", "makes"],"makes","coding"
Output：1
Explanation：index("makes") - index("coding") = 1
```

### Code

```python title="Python3 Code"
from typing import (
    List,
)

class Solution:
    def shortest_distance(self, words: List[str], word1: str, word2: str) -> int:
        size = len(words)
        index1, index2 = size, size
        ans = size
        
        for i in range(size):
            if words[i] == word1:
                index1 = i
                ans = min(ans, abs(index1-index2))
            elif words[i] == word2:
                index2 = i
                ans = min(ans, abs(index1-index2))
        return ans

```

```cpp title="C++"
class Solution {
public:
    int shortestDistance(vector<string> &words, string &word1, string &word2) {
        int i1 = -1, i2 = -1;
        int minDistance = words.size();
        int currentDistance;
        for (int i = 0; i < words.size(); i++) {
            if (words[i] == word1) {
                i1 = i;
            } else if (words[i] == word2) {
                i2 = i;
            }

            if (i1 != -1 && i2 != -1) {
                minDistance = min(minDistance, abs(i1 - i2));
            }
        }
        return minDistance;
    }
};
```
