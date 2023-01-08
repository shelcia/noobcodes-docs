---
sidebar_position: 6
tags: [airbnb]
---

# IP To CIDR

### Problem Statement

Given a string containing only digits, restore it by returning all possible valid IP address combinations.

(Your task is to add three dots to this string to make it a valid IP address. Return all possible IP address.)

#### Example 1:

```
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
Explanation: ["255.255.111.35", "255.255.11.135"] will be accepted as well.
```

#### Example 2:

```
Input: "1116512311"
Output: ["11.165.123.11","111.65.123.11"]
```

### Code

```python title="Python"
class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        SEG_COUNT = 4
        ans = list()
        segments = [0] * SEG_COUNT

        def dfs(segId: int, segStart: int):
            # 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
            if segId == SEG_COUNT:
                if segStart == len(s):
                    ipAddr = ".".join(str(seg) for seg in segments)
                    ans.append(ipAddr)
                return

            # 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
            if segStart == len(s):
                return

            # 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
            if s[segStart] == "0":
                segments[segId] = 0
                dfs(segId + 1, segStart + 1)

            # 一般情况，枚举每一种可能性并递归
            addr = 0
            for segEnd in range(segStart, len(s)):
                addr = addr * 10 + (ord(s[segEnd]) - ord("0"))
                if 0 < addr <= 0xFF:
                    segments[segId] = addr
                    dfs(segId + 1, segEnd + 1)
                else:
                    break


        dfs(0, 0)
        return ans
```
