---
sidebar_position: 826
tags: [Goldman Sachs]
---

# Roman to Integer

### Problem Statement

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number 2`7 is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

`I` can be placed before` V (5)` and`X (10)`to make `4` and `9`.
`X` can be placed before `L (50)` and` C (100)` to make `40` and `90`.
`C` can be placed before `D (500)` and `M (1000)` to make `400` and `900`.
Given a roman numeral, convert it to an integer.

[Leetcode Link](https://leetcode.com/problems/roman-to-integer/)

#### Example 1:

```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

#### Example 2:

```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

#### Constraints:

- `1 <= s.length <= 15`
- `s` contains only the characters (`'I'`, `'V'`, `'X'`, `'L'`, `'C'`, `'D'`, `'M'`).
- It is guaranteed that s is a valid roman numeral in the range `[1, 3999]`.

### Code

```java title="java Code"

 public int romanToInt(String s) {
    int nums[]=new int[s.length()];
    for(int i=0;i<s.length();i++){
        switch (s.charAt(i)){
            case 'M':
                nums[i]=1000;
                break;
            case 'D':
                nums[i]=500;
                break;
            case 'C':
                nums[i]=100;
                break;
            case 'L':
                nums[i]=50;
                break;
            case 'X' :
                nums[i]=10;
                break;
            case 'V':
                nums[i]=5;
                break;
            case 'I':
                nums[i]=1;
                break;
        }
    }
    int sum=0;
    for(int i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1])
            sum-=nums[i];
        else
            sum+=nums[i];
    }
    return sum+nums[nums.length-1];
}

```
