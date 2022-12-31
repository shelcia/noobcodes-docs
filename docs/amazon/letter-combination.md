---
sidebar_position: 64
tags: [amazon]
---

# Letter Combinations of a Phone Number

### Problem Statement

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

[LeetCode link](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

![alt text](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

#### Example 1:

```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

#### Example 2:

```
Input: digits = ""
Output: []
```

#### Example 3:

```
Input: digits = "2"
Output: ["a","b","c"]
```

#### Constraints:

- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

### Implementation

At first, We will create a table of number mapping to characters possible on the mobile.
We will be running a depth first function recursively. For every iteration, when the concated string length reaches the length of the input string we append it to the answer.

### Code

#### Python

```python title="Python Code"
# lookup table
table = {'2': "abc", '3': "def", '4': "ghi", '5': "jkl",
     '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"}

ans = []

class Solution:
    def letterCombinations(self, string: str):
        length, ans = len(string), []
        # empty string return empty array
        if string == "":
            return []

        # implement depth-first search on lookup table
        def dfs(pos: int, st: str):
            if pos == length:
                ans.append(st)
            else:
                letters = table[string[pos]]
                for letter in letters:
                    dfs(pos + 1, st + letter)
        dfs(0, "")
        return ans


if __name__ == "__main__":
    node = Solution()
    print(node.letterCombinations("23"))
```

```log title="Output"
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
```

#### C++

```cpp title="C++"
unordered_map<char, string> L({{'2',"abc"},{'3',"def"},{'4',"ghi"},
    {'5',"jkl"},{'6',"mno"},{'7',"pqrs"},{'8',"tuv"},{'9',"wxyz"}});

class Solution {
public:
    vector<string> letterCombinations(string D) {
        int len = D.size();
        vector<string> ans;
        if (!len) return ans;
        bfs(0, len, "", ans, D);
        return ans;
    }

    void bfs(int pos, int &len, string str, vector<string> &ans, string &D) {
        if (pos == len) ans.push_back(str);
        else {
            string letters = L[D[pos]];
            for (int i = 0; i < letters.size(); i++)
                bfs(pos+1, len, str+letters[i], ans, D);
        }
    }
};

```
