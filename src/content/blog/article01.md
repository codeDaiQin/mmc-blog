---
title: 考研笔记-KMP算法
author: caterpillar
pubDatetime: 2024-03-30T18:10:51Z
featured: false
draft: false
tags:
  - 408
description: 数据结构 串的模式匹配
---

# 考研笔记-KMP算法

## 手动求next数组

> 例：模式串 google

| next[0] | next[1]  | next[2]  | next[3] | next[4] | next[5] | next[6] |
| ------- | -------- | -------- | ------- | ------- | ------- | ------- |
| -       | 0 (固定) | 1 (固定) |

next[3]: 此时第三位 o 匹配失败
| 主串 | ？ | g | o | ? |
| - | - | - | - | - |
| 模式串 | - | g | o | o |
| 下标 | 0 | 1 | 2 | 3 |

在o左侧画一条竖线 将线左侧的 模式串逐步右移， 直到线左侧的子串和模式串对应位置匹配。

| 主串   | ？  | g   | o   | ?   |
| ------ | --- | --- | --- | --- |
| 模式串 | -   | -   | -   | g   |
| 下标   | -   | -   | 0   | 1   |

即 next[3] = 1

## 优化 求nextval数组

例： 模式串 abaabc, next[] = [0, 1, 1, 2, 2, 3]

当 第三个字符a匹配失败时， next[3] = 1 对应 next[1] = 0 并且 j = 1时 和 j = 3 时 字符相等， 故可直接将 next[3] = next[1] = 0

```c
nextval[0] = 1
for (int j = 2; j <= T.length; j++) {
  if (T[next[j]] == T[j])
    nextval[j] = nextval[next[j]];
  else
    nextval[j] = next[j];
}
```

## 代码

求next数组时间复杂度 O(m)
模式匹配时间复杂度 O(n)
时间复杂度 O(m + n)

主串S 模式串T 模式串T对应的next数组

```C
int KMP (SString S, SString T, int next[]) {
  int i = 1, j = 1;
  while (S.length >= i && T.length >= j) {
    // 第一个元素匹配失败 或 匹配成功时
    if (j == 0 || S[i] == T[j]) {
      i++;
      j++;
      // 不匹配时
    } else j = next[j];
  }

  // 匹配成功
  if (j > T.length) return i - T.length;

  return 0;
}
```
