---
title: Advanced Mathematics Notes
author: caterpillar
pubDatetime: 2023-12-27T14:10:51Z
featured: false
draft: false
tags:
  - Math
description: Derive and summarize common formulas to reduce the burden of memorizing formulas.
---

## 泰勒公式

### 展开法

1. 通过**极限/等价无穷小** 确定 **首项**
2. 函数**奇偶性** 确定 **余项** （奇函数只有奇次项，偶函数只有偶次项，非奇非偶次数递增）
3. 与**首项**比大小定 **符号**
4. $\ln (x+1) 、  \tan x、 \arctan x$ 分母无阶乘

### 具体使用

$\sin x$

1. 首项 $\lim_{x\rightarrow 0} \sin x = x$，从 x 开始
2. $\sin x$ 为奇函数， 余项只有奇次项
3. $\sin x < x$，正负交替 注：这里 x 定义域为（0,1）

| 泰勒公式                                                | 1.通过极限/等价无穷小确定第一项 | 2.观函数走势确定第二项符号   | 3.奇偶性          |
| ------------------------------------------------------- | ------------------------------- | ---------------------------- | ----------------- |
| $e^x=1+x + \frac{x^2}{2!}+\cdots$                       | $e^x-1 \sim x$                  | 单调增                       | 非奇非偶次数递增  |
| $\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!}+\cdots $  | $\sin x \sim x$                 | $\cos x < 1$ 震荡 正负交替   | 奇函数只有奇次项  |
| $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} +\cdots$  | $1 - \cos x \sim \frac{x^2}{2}$ | 震荡 正负交替                | 偶函数只有偶次项  |
| $\ln(x + 1) = x - \frac{x^2}{2} + \frac{x^3}{3} \cdots$ | $\ln(x+1) \sim x$               | $\ln(x+1) < x$ 震荡 正负交替 | 非奇非偶次数递增  |
| $\tan x = x + \frac{x^3}{3} + \frac{x^5}{5} + \cdots$   | $\tan x \sim x$                 | $\tan x > x$ 全正            | 奇函数 只有奇次项 |
