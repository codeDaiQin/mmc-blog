---
title: 高等数学
author: caterpillar
pubDatetime: 2024-04-18T00:00:00
featured: false
draft: false
tags:
  - 考研
  - 高等数学
description: 高数知识点梳理
---

## 极限

- 数列极限
  - 递推式 函数求导
  - 裂项相消：分母为相邻或相隔项的乘积

### 通项已知（和式）不易连续化

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

### 递推公式 `单调有界准则`

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

### 已知通项

- 裂项相消法

todo https://www.bilibili.com/video/BV1K14y1d79p?p=3&vd_source=76b751c6c2314509a3c85f4650ebe175

## 导数

- 常见反例掌握 $sin{x^2}、|x|$
- 连续、有界、连续
  - $f(x)在[a, b]连续 -> 在[a, b]有界$
  - $f(x)在(a, b)连续 且 \displaystyle\lim_{x->b-} \displaystyle\lim_{x->a+}存在 -> 在(a, b)有界$
  - $f'(x)在有限开区间有界 —> f(x)在区间有界$

### 高阶导数

#### 奇偶性

- 奇次导 奇偶性发生变化
- 偶次导 奇偶性不变

#### 公式

##### $\tfrac{1}{ax + b}^{(n)} = \tfrac{{(-1)^n}n! a^n}{{ax+b}^{n+1}}$

##### $(vn)^{(n)} = \displaystyle\Sigma_{k=0}^nC_n^ku^{(k)}v^{(n-k)}$

##### Taylor(在0点处！)

$f(x) = f(0) + f'(0)x + \tfrac{f^{(n)}(0) x^n}{n!}$ 即 $f^{(n)}(0) = x^n的系数 * n!$

例: $设f(x) = x^{100}e^{x^2} 求 f^{(200)}(0)$
解: $f(x) = f(0) + f'(0)x + \tfrac{f^{(200)}(0)x^{200}}{200!}$
$f(x) = x^{100}[... + \tfrac{f^{(50)}(0) x^{100}}{50!} + ...](e^{x^2}的展开式)$
$f(x) = [... + \tfrac{x^{200}}{50!} + ...]$
找到对应系数相同的 $\tfrac{f^{(200)}(0)x^{200}}{200!} = \tfrac{x^{200}}{50!}$ 即 $f^{(200)}(0) = \tfrac{200!}{50!}$

## 不定积分

- 原函数存在定理: 区间内连续 在区间一定存在原函数

## 定积分

- 存在充分条件

  1. 函数在闭区间连续 -> 定积分必存在
  2. 函数在闭区间有界 且间断点有限 -> 定积分必存在
  3. 函数在闭区间有有限个第一类间断点 -> 定积分必存在

- 变限积分

  1. $f(x)可积 -> F(x)连续$
  2. $f(x)连续 -> F(x)可导$

- 周期函数的积分性质， 以T为周期的连续函数
  - $\int_0^{nT} f(x) = n\int_0^T f(x)$
  - $\int_a^{a+T} f(x) = n\int_0^T f(x)$
- $\int_0^\pi xf(\sin{x}) = \tfrac{\pi}{2}\int_0^\pi f(\sin{x})$
- 对称区间 奇0 偶2

- 几何意义

  - 圆 方程 = 对应面积

- 反常积分敛散判别](https://www.bilibili.com/video/BV18J4119729/?spm_id_from=333.337.search-card.all.click&vd_source=76b751c6c2314509a3c85f4650ebe175)

## 定积分的应用

- 绕x轴y轴 任意直线旋转体体积
- 参数方程 摆线等
- 曲线弧长

## 微分方程

### 常系数非齐次微分方程

一般形: $y'' + py' + qy = f(x)$

1. $f(x)  = P_m(x)e^{\lambda{x}}, y^* = x^kQ_m(x)e^{\lambda{x}}, 其中k是特征根含\lambda的次数$
2. $f(x) = e^{ax}[P_l^{(1)}\cos{\beta{x}} + P_n^{(2)}\sin{\beta{x}}], y^* = x^ke^{\alpha{x}}[P_m^{(1)}\cos{\beta{x}} + P_m^{(2)}\sin{\beta{x}}], 其中m = max(l, n), k= \alpha+ i\beta 是特征方程根时 : 1 ? 0$

### 解的结构

- [x] 齐次两个线性无关的解之和/差 = 齐次的解
- [x] 非齐次解的差 = 齐次的解
- [x] 非齐次 + 齐次 = 非齐次的解
- [x] 齐次的两个线性无关的解 + 非齐次特解 = $C_1y_1(x) + C_2y_2(x) + y^*(x)$

## 二重积分

- 中值定理 $\iint f(x,y) dm= m f(u,v)$ m为区域的面积
-
