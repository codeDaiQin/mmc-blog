---
title: 线性代数
author: caterpillar
pubDatetime: 2024-04-15T84:84:24
featured: false
draft: false
tags:
  - 考研
  - 线性代数
description: 线性代数
---

# 线性代数

## 矩阵

### 基本运算

1. $A^{-1} = A 元素取倒数$
2. A != |A|
3. 主对角$\begin{bmatrix} A & O \\ O & B \end{bmatrix}^{n} = \begin{bmatrix} A^n & O \\ O & B^n \end{bmatrix}$
4. 副对角\*(对调)$\begin{bmatrix} O & A \\ B & O \end{bmatrix}^{n} = \begin{bmatrix} O & B^n  \\ A^n & O \end{bmatrix}$
5. 求$A^n = PB(对角矩阵) P^{-1} = PB^{n} P^{-1}$

### 矩阵的逆

1. $|A^{-1}| = |A|^{-1}$

### 矩阵的秩

0. 三秩相同 $r(A) = r(A行) = r(A列)$
1. $r(A^{*}) = n, r(A) = 1$
2. $r(A^{\*}) = 1, r(A) = n -1 $
3. $r(A^*) = 0, r(A) < n - 1$
4. $r(A + B) \leq r(A) + r(B)$
5. $r(AB) \leq min(r(A), r(B))$

### 伴随矩阵

1. $AA^* = A^*A = |A|E$
2. $|A^*| = |A|^{n-1}$
3. $A^* = |A|A^{-1}$
4. 二阶矩阵求伴随 = `主对角线对调 副对角线变号`

### 初等变换和初等矩阵

#### 初等变换

1. 数乘（非0） 行/列
2. 交换某两行/列
3. 某行/列 k倍 加到 另一行/列

#### 性质和公式

1. $E^T = E$
2. $E^{-1} = E$
3. $E_{倍乘k}^{-1} = E_{倍乘\tfrac{1}{k}} (取倒数)$
4. $E_{倍加k}^{-1} = E_{倍加 -k} (取相反数)$

### 等价矩阵

1. 同形 r(A) = r(B)
2.

## 线性方程组

齐次 有解的条件
$r(A) = n,（向量组线性无关） 方程组有唯一0解$
$r(A) < n,（向量组线性相关） 方程组有n-r个线性无关解$

非齐次 有解的条件
$r(A) != r([A, b]),（b不能由线性相关的向量组线性表出）， 则无解$
$r(A) = r([A, b]) = n,（向量组线性无关，增广线性相关），有唯一解$
$r(A) = r([A, b]) = r < n, 有无穷多解$
