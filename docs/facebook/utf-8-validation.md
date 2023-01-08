---
sidebar_position: 217
tags: [facebook]
---

# UTF-8 Validation

### Problem Statement

Given an integer array `data` representing the data, return whether it is a valid **UTF-8** encoding (i.e. it translates to a sequence of valid UTF-8 encoded characters).

A character in **UTF8** can be from **1 to 4** bytes long, subjected to the following rules:

For a **1-byte** character, the first bit is a `0`, followed by its Unicode code.

For an **n-bytes** character, the first `n` bits are all one's, the `n + 1` bit is `0`, followed by `n - 1` bytes with the most significant `2` bits being `10`.

This is how the UTF-8 encoding would work:

| Number of Bytes | UTF-8 Octet Sequence (binary)       |
| --------------- | ----------------------------------- |
| 1               | 0xxxxxxx                            |
| 2               | 110xxxxx 10xxxxxx                   |
| 3               | 1110xxxx 10xxxxxx 10xxxxxx          |
| 4               | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

`x` denotes a bit in the binary form of a byte that may be either `0` or `1`.

**Note**: The input is an array of integers. Only the **least significant 8 bits** of each integer is used to store the data. This means each integer represents only 1 byte of data.

[Leetcode Link](https://leetcode.com/problems/utf-8-validation)

#### Example 1:

```
Input: data = [197,130,1]
Output: true

Explanation: data represents the octet sequence: 11000101 10000010 00000001.
It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.
```

#### Example 2:

```
Input: data = [235,140,4]
Output: false

Explanation: data represented the octet sequence: 11101011 10001100 00000100.
The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.
The next byte is a continuation byte which starts with 10 and that's correct.
But the second continuation byte does not start with 10, so it is invalid.
```

### Constraints:

- `1` `<=` `data.length` `<=` `2` `*` 10<sup>4</sup>
- `0 <= data[i] <= 255`

### Code

```python title="Python Code"
class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        n = len(data)
        i = 0

        while i < n:
            valid_encoding = False
            if self.one_byte_encoding(data[i]):
                i += 1
                valid_encoding = True

            for byte_len in range(2, 4 + 1):
                if self.byte_encoding(byte_len, data, i):
                    i += byte_len
                    valid_encoding = True
                    break

            if not valid_encoding:
                return False
        return True

    def one_byte_encoding(self, number: int):
		# check if 8th bit is set
        if number & 1 << 7 == 0:
            return True
        return False

    def byte_encoding(self, byte_len, data, i):
        # out of bound check
        if i + byte_len > len(data):
            return False

        # first byte should be byte_len 1's followed by 0
        first_byte = data[i]
        for j in range(byte_len):
            if first_byte & 1<<(7-j) == 0:
                return False

        # check n+1 bit to be 0
        if first_byte & 1 << 7 - byte_len != 0:
            return False

		# the rest n-1 bytes should be 10xxxxxx
        for j in range(i+1, i + 1 + (byte_len - 1)):
            # check 10xxxxxx
            if data[j] & 1<<7 == 0:
                return False
            if data[j] & 1<< 6 != 0:
                return False
        return True
```
