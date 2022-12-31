---
sidebar_position: 120
tags: [facebook]
---

# Restore IP Addresses

### Problem Statement

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

- For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

[Leetcode link](https://leetcode.com/problems/restore-ip-addresses/)

#### Example 1:

```
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
```

#### Example 2:

```
Input: s = "0000"
Output: ["0.0.0.0"]
```

#### Example 3:

```
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

#### Constraints:

- 1 <= s.length <= 20
- s consists of digits only.

### Code

```python title="Python Code"
class Solution:
    def restoreIpAddresses(self,s):
        retval = list()
        if len(s)>12:
            return retval
        else:
            for pos1 in self.helper(s):
            for pos2 in self.helper(s[len(pos1):]):
            if pos2 == []:
                continue
            for pos3 in self.helper(s[len(pos1+pos2):]):
            if pos3 == []:
                continue
            for pos4 in self.helper(s[len(pos1+pos2+pos3):]):
            if pos4 == []:
                continue
            possible =pos1 + "." + pos2 + "." + pos3 + "." + pos4
            print(possible)
            if len(possible) == len(s) + 3:
                retval.append(possible)
            return retval

        def helper(self,s):
            if s == "":
                return []
            if s[:1] == "0":
                return ["0"]
            pos = set()
            for i in range(1,4):
                if self.isValid((s[:i])):
                    pos.add((s[:i]))
            return pos

        def isValid(self,i):
            return 0<=int(i)<=255

```
