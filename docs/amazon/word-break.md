---

sidebar_position: 118
tags:
[
Blind 75,
Hash Table,
String,
Dynamic Programming,
Trie,
Memoization,
paypal,
amazon,
]

---

# Word Break

### Problem Statement

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

:::note
Note that the same word in the dictionary may be reused multiple times in the segmentation.
:::

[Leetcode Link](https://leetcode.com/problems/word-break/)

#### Example 1:

```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

#### Example 2:

```
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
```

#### Example 3:

```
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
```

### Constraints

- `1 <= s.length <= 300`
- `1 <= wordDict.length <= 1000`
- `1 <= wordDict[i].length <= 20`
- `s` and `wordDict[i]` consist of only lowercase English letters.
- All the strings of `wordDict` are **unique**.

### Code

```python title="Python3 Code"

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        word_dict=set(wordDict)
        flag=None
        word=''
        cache=[0]
        for i in range(len(s)):
            word+=s[i]
            for j in cache:
                flag=False
                if word[j:] in word_dict:
                    flag=True
                    cache.append(i+1)
                    break
        return flag

```
