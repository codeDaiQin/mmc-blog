---
title: 考研笔记-高阶导数
author: caterpillar
pubDatetime: 2024-04-22T00:00:00Z
featured: false
draft: false
tags:
  - 考研笔记 高数
description: 高等数学 高阶导数
---

# 考研笔记-高阶导数

## 奇偶性

- 奇次导 奇偶性发生变化
- 偶次导 奇偶性不变

## 公式

### $\tfrac{1}{ax + b}^{(n)} = \tfrac{{(-1)^n}n! a^n}{{ax+b}^{n+1}}$

### $(vn)^{(n)} = \displaystyle\Sigma_{k=0}^nC_n^ku^{(k)}v^{(n-k)}$

### Taylor(在0点处！)

$f(x) = f(0) + f'(0)x + \tfrac{f^{(n)}(0) x^n}{n!}$ 即 $f^{(n)}(0) = x^n的系数 * n!$

例: $设f(x) = x^{100}e^{x^2} 求 f^{(200)}(0)$
解: $f(x) = f(0) + f'(0)x + \tfrac{f^{(200)}(0)x^{200}}{200!}$
$f(x) = x^{100}[... + \tfrac{f^{(50)}(0) x^{100}}{50!} + ...](e^{x^2}的展开式)$
$f(x) = [... + \tfrac{x^{200}}{50!} + ...]$
找到对应系数相同的 $\tfrac{f^{(200)}(0)x^{200}}{200!} = \tfrac{x^{200}}{50!}$ 即 $f^{(200)}(0) = \tfrac{200!}{50!}$
