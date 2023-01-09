---
sidebar_position: 1
tags: [basic]
---

# Convert Decimal To Binary

### Problem Statement

Given an integer n, return a binary string representing its decimal representation, i.e., its representation in base 2.

Note that the returned string should not have leading zeros unless the string is "0".

### Example 1

```
Input: n = 2

Output: "10"

Explantion: 1x2¹ + 0x2⁰ = 2
```

### Example 2

```
Input: n = 3

Output: "11"

Explantion: 1x2¹ + 1x2⁰ = 3
```

### Example 3

```
Input: n = 44

Output: "101100"

Explantion: 1x2⁵ + 0x2⁴ + 1x2³ + 1x2² + 0x2¹ + 0x2⁰ = 44
```

### Constraints

- `0 <= n <= 10⁹`

### Code

```python title="Python Code"

n = int(input())
s = ''
# 'temporary string which we will later reverse'
while n:
    if n%2==0:
        s+='0'
    else:
        s+='1'
    n//=2
ans=''
l=len(s)
ans=''
for i in range(0,l):
    ans+=s[l-i-1]
    # 'reversing the string as the remainder priority is from bottom to top'
print(ans)


```
