---
sidebar_position: 1
tags: [paypal, array, string]
---

# Text Justification

### Problem Statement

Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

#### Examples:

```
Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth

```

### Code

```jsx title="Python Code"
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res = []

        i = 0
        while i < len(words):
            j = i + 1
            l = len(words[i])
            # put as many as possible words on any line
            while j < len(words) and l + 1 + len(words[j]) <= maxWidth:
                l += 1 + len(words[j])
                j += 1

            line = ''
            # left justification
            if j == len(words) or i + 1 == j:
                line += words[i]
                k = i + 1
                while k < j:
                    line += ' ' + words[k]
                    k += 1
                while len(line) < maxWidth:
                    line += ' '
            else:
                count = j - i - 1
                remain = maxWidth - l + count
                line += words[i]
                k = 0
                while k < remain % count:
                    line += ' ' * (remain // count + 1) + words[i + k + 1]
                    k += 1
                while k < count:
                    line += ' ' * (remain // count) + words[i + k + 1]
                    k += 1
            res.append(line)
            i = j
        return res
```
