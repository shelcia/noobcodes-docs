---
sidebar_position: 7
tags: [adobe]
---

# Strong Password Checker

### Problem Statement

A password is considered strong if the below conditions are all met:

- It has at least 6 characters and at most 20 characters.
- It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
- It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).

Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.

In one step, you can:

- Insert one character to password,
- Delete one character from password, or
- Replace one character of password with another character.

[LeetCode link](https://leetcode.com/problems/strong-password-checker/)

#### Example 1:

```
Input: password = "a"
Output: 5
```

#### Example 2:

```
Input: password = "aA1"
Output: 3
```

#### Example 3:

```
Input: password = "1337C0d3"
Output: 0
```

#### Constraints:

- 1 <= password.length <= 50
- password consists of letters, digits, dot '.' or exclamation mark '!'.

### Code

```python title="Java Code"
class Solution {
  public int strongPasswordChecker(String s) {
    final int n = s.length();
    final char[] chars = s.toCharArray();
    final int missing = getMissing(chars);
    int replaces = 0;
    int oneSeq = 0;
    int twoSeq = 0;

    for (int i = 2; i < n;)
      if (chars[i] == chars[i - 1] && chars[i - 1] == chars[i - 2]) {
        int length = 2; // Length of repeating chars
        while (i < n && chars[i] == chars[i - 1]) {
          ++length;
          ++i;
        }
        replaces += length / 3; // 'aaaaaaa' -> 'aaxaaxa'
        if (length % 3 == 0)
          ++oneSeq;
        if (length % 3 == 1)
          ++twoSeq;
      } else {
        ++i;
      }

    if (n < 6)
      return Math.max(6 - n, missing);
    if (n <= 20)
      return Math.max(replaces, missing);

    final int deletes = n - 20;
    // Each replacement in (3k)-seqs can be substituted with 1 deletions
    replaces -= Math.min(oneSeq, deletes);
    // Each replacement in (3k + 1)-seqs can be substituted with 2 deletions
    replaces -= Math.min(Math.max(deletes - oneSeq, 0), twoSeq * 2) / 2;
    // Each replacement in other seqs can be substituted with 3 deletions
    replaces -= Math.max(deletes - oneSeq - twoSeq * 2, 0) / 3;
    return deletes + Math.max(replaces, missing);
  }

  private int getMissing(final char[] chars) {
    int missing = 3;

    for (final char c : chars)
      if (Character.isUpperCase(c)) {
        --missing;
        break;
      }

    for (final char c : chars)
      if (Character.isLowerCase(c)) {
        --missing;
        break;
      }

    for (final char c : chars)
      if (Character.isDigit(c)) {
        --missing;
        break;
      }

    return missing;
  }
}
```
