---
sidebar_position: 5
tags: [microsoft]
---

# Regular Expression Matching

### Problem Statement

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` Matches any single character.​​​​
- `'*'` Matches zero or more of the preceding element.
  The matching should cover the **entire** input string (not partial).

#### Example 1:

```
 Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

#### Example 2:

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

#### Example 3:

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

#### Constraints:

- 1 <= s.length <= 20
- 1 <= p.length <= 30
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'.'`, and `'*'`.
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

### Code

```jsx title="Python Code"
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        memory = {}

        def explore_state(s_index, p_index):
            if (s_index, p_index) in memory:
                return memory[(s_index, p_index)]

            s_index_out_of_border = s_index >= len(s)
            p_index_out_of_border = p_index >= len(p)
            next_char_is_a_star = p_index+1 < len(p) and p[p_index+1] == "*"

            if s_index_out_of_border is True:
                if p_index_out_of_border is True:
                    return True
                elif next_char_is_a_star is True:
                    memory[(s_index, p_index)] = explore_state(s_index, p_index+2)
                    return memory[(s_index, p_index)]
                else:
                    memory[(s_index, p_index)] = False
                    return memory[(s_index, p_index)]

            if p_index_out_of_border:
                return False

            match = s[s_index] == p[p_index] or p[p_index] == "."

            if next_char_is_a_star is True and match is True:
                memory[(s_index, p_index)] = explore_state(s_index, p_index+2) or explore_state(s_index+1, p_index)
            elif next_char_is_a_star is True and match is False:
                memory[(s_index, p_index)] = explore_state(s_index, p_index+2)
            elif next_char_is_a_star is False and match is True:
                memory[(s_index, p_index)] = explore_state(s_index+1, p_index+1)
            elif next_char_is_a_star is False and match is False:
                memory[(s_index, p_index)] = False

            return memory[(s_index, p_index)]

        return explore_state(0, 0)

```

```jsx title="C++"
class Solution {
public:
    bool isMatch(string str, string pat) {

        int n = str.size();

        int m = pat.size();

        // '.' can be any character

        // "s*" can be replace with "", "s", "ss", "sss", "ssss" and so on .....

        // above possibility can be replaced with "", "ss*"

        // str in on i direction and pat is on j direction

        // for the 0th row if we encounter '*' then we look for dp[0][j - 2]

        vector<vector<bool>> dp(n + 1, vector<bool> (m + 1, false));

        for(int i = 0; i <= n; i++)
        {
            for(int j = 0; j <= m ; j++)
            {
                if(i == 0 && j == 0)
                {
                    dp[i][j] = true;
                }
                else if(j == 0)
                {
                    dp[i][j] = false;
                }
                else if(i == 0)
                {
                    if(pat[j - 1] == '*')
                    {
                        dp[i][j] = dp[i][j - 2];
                    }
                    else
                    {
                        dp[i][j] = false;
                    }
                }
                else
                {
                    if(str[i - 1] == pat[j - 1] || pat[j - 1] == '.')
                    {
                        dp[i][j] = dp[i - 1][j - 1];
                    }
                    else if(pat[j - 1] == '*')
                    {
                        // eg. replace "mis*" with "mi"

                        dp[i][j] = dp[i][j - 2];

                        // eg. replace "mis*" with "miss*"

                        if(dp[i][j] == false && (str[i - 1] == pat[j - 2] || pat[j - 2] == '.'))
                        {
                            dp[i][j] = dp[i - 1][j];
                        }
                    }
                }
            }
        }

        return dp[n][m];
    }
};
```
