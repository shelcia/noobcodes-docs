---
sidebar_position: 17
tags: [microsoft]
---

# Word Search

### Problem Statement

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

#### Example 1:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

#### Example 2:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

#### Example 3:

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

### Code

```jsx title="Java Code"

public class Solution {

    public boolean exist(char[][] board, String word) {
        if (board == null || board.length == 0 || board[0].length == 0 || word == null || word.equals("")) {
            return false;
        }
        for (int i = 0; i < board.length; i ++) {
            for (int j = 0; j < board[0].length; j ++) {
                if (search(board, word, i, j, 0) == true) {
                    return true;
                }
            }
        }
        return false;
    }
    private boolean search(char[][] board, String word, int i, int j, int matched) {
        if (matched == word.length()) {
            return true;
        }
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] != word.charAt(matched)) {
            return false;
        }
        board[i][j] = '#';
        boolean result = search(board, word, i - 1, j, matched + 1) || search(board, word, i, j - 1, matched + 1) || search(board, word, i + 1, j, matched + 1) ||  search(board, word, i, j + 1, matched + 1);
        board[i][j] = word.charAt(matched);
        return result;

    }

}
```

<!-- ### Open Source Contributions are Welcome ✨ 🎉

[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

![noobcodes-docs](https://socialify.git.ci/shelcia/noobcodes-docs/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fik.imagekit.io%2Fshelcia%2Flogos%2Fnoobcodes-logo.png%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1670310608135&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark)

:::tip

**Question list from Leetcode Company wise**

[LeetCode-Questions-CompanyWise-master.zip](https://github.com/shelcia/noobcodes-docs/files/10148119/LeetCode-Questions-CompanyWise-master.zip)

Source: [xizhengszhang/Leetcode_company_frequency](https://github.com/xizhengszhang/Leetcode_company_frequency)

::: -->
