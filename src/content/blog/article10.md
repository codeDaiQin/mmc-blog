---
title: 考研笔记-数列极限
author: caterpillar
pubDatetime: 2024-04-22T00:00:00Z
featured: false
draft: false
tags:
  - 考研笔记 高数
description: 高等数学 数列极限
---

# 考研笔记-数列极限

## 通项已知（和式）不易连续化

### 夹逼准则

例: 设$X_n = (1 + \tfrac{1}{n^2})(1 + \tfrac{2}{n^2})...(1 + \tfrac{n}{n^2})$, 则 $\displaystyle\lim_{n->\infty}X_n = e^{\tfrac{1}{2}}$

解: 等式两边取对数 $\ln{X_n} = Sigma_{i=1}^{n}\ln(1+ \tfrac{i}{n^2})$
根据不等式 $\tfrac{x}{1+x} < \ln(1+x) < x (x>0)$ 有
$\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{\tfrac{i}{n^2}}{1+\tfrac{i}{n^2}} < \displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\ln(1 + \tfrac{i}{n^2}) < \displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2}$

上式右端 $\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2} = \displaystyle\lim_{n ->\infty}\tfrac{1}{n^2}  \tfrac{n(n+1)}{2} = \tfrac{1}{2}$

上式左端 $\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{\tfrac{i}{n^2}}{1+\tfrac{i}{n^2}} = \displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2 + i}$
由夹逼准则, $\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2 + n} < \displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2 + i} < \displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2 + 1}$
解得 $\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\tfrac{i}{n^2 + i} = \tfrac{1}{2}$

故$\displaystyle\lim_{n ->\infty}\Sigma_{i=1}^{n}\ln(1 + \tfrac{i}{n^2}) = \tfrac{1}{2}$
即 $\ln{X_n} = \tfrac{1}{2}, X_n = e^{\tfrac{1}{2}}$

> 总结: 若干项相乘可等式两边取对数转为相加

### 定积分的应用

## 递推公式 `单调有界准则`

1. 先单调有界准则证明极限存在

单调性

1. $X_n - X_{n - 1}$ 后项 - 前项 和 0 比较
2. $\tfrac{X_n}{X_{n-1}}$ 后项 比 前项 和 1比较
3. 递推函数求导 > 0 -> `单调`， 再看 $X_1$ 和 $X_2$的关系 后项>前项 单调增，后向<前项 单调减。

例: 设$X_1 = \sqrt{a}, X_{n+1} = \sqrt{a + X_n} $, 证明 $\displaystyle\lim_{n->\infty} X_n$ 存在，并求值
解: 令 $f(x) = \sqrt{a + x}, f'(x) = \tfrac{1}{2\sqrt{a + x}} > 0$，且$X_2 > X_1， 即 X_n$ 单调增

设 $\displaystyle\lim_{n->\infty} X_n = A$ 则 $X_{n+1} = \sqrt{a + X_n} = A = \sqrt{a + A}$
解得 $A_1 = \tfrac{1 + \sqrt{1 + 4a}}{2}, A_2 = \tfrac{1 - \sqrt{1 + 4a}}{2} (要求>0 舍) $ 即 $\tfrac{1 + \sqrt{1 + 4a}}{2} 为上界$ ？？这里怎么证明出来的上界
由单调有界准则可知，$\displaystyle\lim_{n->\infty} X_n = \tfrac{1 + \sqrt{1 + 4a}}{2}$

## 已知通项

- 裂项相消法

todo https://www.bilibili.com/video/BV1K14y1d79p?p=3&vd_source=76b751c6c2314509a3c85f4650ebe175
