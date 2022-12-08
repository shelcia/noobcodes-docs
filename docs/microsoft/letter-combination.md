---
sidebar_position: 9
tags: [microsoft]
---

# Letter Combinations of a Phone Number

### Problem Statement
Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

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

### Code
```jsx title="Python Code"
class Solution(object):
    def subsetsWithDup(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        res = []
        nums.sort()
        self.dfs(nums, [], res)
        return res
    
    def dfs(self, nums, path, res):
        res.append(path)
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            self.dfs(nums[i+1:], path + [nums[i]], res)

```

```jsx title="C++"
class Solution {
public:
    string curr;
    vector<string> ans;
    unordered_map<int,string> mp;
    void helper(string& digits, int index){
        if(index == digits.length()) {ans.push_back(curr); return;}
        string chrs = mp[digits[index]-48];
        for(char c : chrs){
            curr.push_back(c);
            helper(digits, index+1);
            curr.pop_back();
        }
    }
    vector<string> letterCombinations(string digits) {
        if(digits.length() == 0) return ans;
        mp[2] = "abc"; mp[3] = "def"; mp[4] = "ghi"; mp[5] = "jkl";
        mp[6] = "mno"; mp[7] = "pqrs"; mp[8] = "tuv"; mp[9] = "wxyz";
        helper(digits, 0);
        return ans;
    }
};

```