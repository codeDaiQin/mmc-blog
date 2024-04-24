---
title: 考研笔记-数据结构-5.树与二叉树
author: caterpillar
pubDatetime: 2024-04-13T18:10:51Z
featured: false
draft: false
tags:
  - 考研笔记 408
  - 数据结构
description: 数据结构 树与二叉树
---

# 考研笔记-树与二叉树

## 树的性质

- 树的路径长度 = 根到每个结点的路径长度总和
- 树的结点数 = 所有结点的度之和 + 1
- 度为m的树第i层至多有 $m^{i-1}$个结点
- 高度为 h 的m叉树 最多有 $\tfrac{m^h-1}{m-1}$个结点，最少 h 个结点
- 有n个结点的m叉树 最小高度为$ ⌈\log\_{m}{(n(m-1) + 1)}⌉$

例: 【2010真题】在一棵度为4的树T中，若有20个度为4的结点，10个度为3的结点，1个度为2的结点，10个度为1的结点，则树T的叶结点个数
解:
$
树的结点数 = 所有结点的度之和 + 1 = 1 + 20 \times 4 + 10 \times 3 + 1 \times 2 + 10 \times 1 = 123 (总结点数)
$
$
叶结点 = 度为0 的结点 = 123 - 20 - 10 - 1 - 10 = 82
$

## 二叉树

### 二叉树的定义

- 二叉树结点的深度（所在层数）：指从根结点到该结点的最长简单路径边的条数。（最小1）
- 二叉树结点的高度：指从该结点到叶子结点的最长简单路径边的条数。（最小1）

### 特殊的二叉树

- 满二叉树: 高为 h 有 $2^h - 1$个结点
- 完全二叉树: 高为 h 有 n个结点 且 每个结点都与高度为h的满二叉树编号 1~n 的结点一一对应， 若 n 为奇数 每个分支结点都有左右孩子，若 n 为偶数 则编号最大的分支结点（n/2） 只有左孩子 （高度相同的慢二叉树 缺失最下层 最右边的一些连续叶结点）
- 二叉排序树: 左子树上的结点小于根结点 右子树上的结点大于根结点
- 平衡二叉树: 左子树和右子树深度之差不超过1

### 二叉树的性质

- 子树有左右之分, 次序不能任意颠倒
- n0 = n2 + 1 叶子结点个数等于度为2结点个数 + 1
- `结点数为 n, 则边数为 n - 1`
- 非空二叉树的第k层最多有 $2^{k-1}$个结点
- 高度为h 最多有 $2^h-1$个结点
- n个结点的`完全二叉树`高度为 $⌈\log_{2}{(n+1)}⌉$ 或 $⌊\log_{2}{n}⌋ +1$
- 确定双亲结点的编号 (从1开始)
  - i > 1时，结点i的双亲编号为⌊i/2⌋
  - $2i \leq n $时，i的左孩子编号为2i
  - $2i + 1 \leq n $时，i的右孩子编号为2i + 1
  - 结点i的深度为 $⌊\log_{2}{i}⌋ + 1$
- 链式存储时，含有n个结点，有n+1个空链域

## 二叉树的遍历和线索二叉树

### 二叉树的遍历 #`背诵`

- 先序: 根左右
- 中序: 左根右
- 后序: 左右根
- 层序: 从上到下 从左到右

**二叉树层序**

```c
  void levelOrder(BiTree T) {
    InitQueue(Q); // 初始化
    BiTree p;
    EnQueue(T); // 根结点入队列
    while(!IsEmpty(Q)) {
      p = DeQueue(Q);
      visit(p);
      if (p->left != NULL) EnQueue(Q, p->left);
      if (p->right != NULL) EnQueue(Q, p->right);
    }
  }
```

由 先/后/层 + 中序遍历可以确定唯一二叉树

**二叉树递归遍历**

```c
  void Traverse(BiTree *T) {
    if (T == NULL) return;
    // 先序 visit(T)
    Traverse(T->lchild);
    // 中序 visit(T)
    Traverse(T->rchild);
    // 后序 visit(T)
  }
```

### 线索二叉树

```c
typedef struct ThreadNode {
  struct ThreadNode *lchild, *rchild; // 左右孩子指针
  ElementType data; // 数据元素
  int ltag // 0 -> lchild 表示左子树 1 -> lchild 表示前驱
  int rtag // 0 -> rchild 表示右子树 1 -> rchild 表示后继
  // p->rtag == 0 判断是否有右孩子
}ThreadNode, *ThreadNode;
```

#### 二叉树的线索化

中序线索二叉树的构造

```c
  // 递归算法
  // pre 指针指向刚访问过的结点 p指针指向当前访问的结点
  void InThread(ThreadTree &p, ThreadTree &pre) {
    if (p == NULL) return;

    InThread(p->lchild, pre); // 递归 线索化左子树
    // 检查 p 左指针是否为空
    if (p->lchild == NULL) {
      p->lchild = pre;
      p->ltag = 1;
    }

    // 检查 pre 右指针是否为空
    if (pre != NULL && pre->rchild == NULL) {
      pre->rchild = p;
      pre.rtag = 1;
    }
    pre = p; // 更新上一次访问的结点
    InThread(p->rchild, pre); // 递归 线索化右子树
  }

  void createInThread(ThreadTree T) {
    if (T == NULL) return;

    ThreadTree pre = NULL;
    InThread(T, pre);
    pre.rchild = NULL; // 处理遍历的最后一个结点
    pre->rtag = 1;
  }
```

后序线索树的缺陷

- 需要 栈的支持
- 无法解决后序线索树中求后序后继 （最后访问根结点，由于右孩子的右节点不一定为空， 所以右指针无法指向后继）

## 树、森林

### 树的存储结构

- 双亲表示法
  | index | data | parent |
  | - | -| - |
  | 0 | root | -1 |
  | 1 | A | 0 |
  | 2 | B | 0 |
  | 3 | C | 0 |
  | 4 | D | 1 |
- 孩子表示法: 每个结点的孩子都用单链表链接起来
- 孩子兄弟表示法: (类似react fiber)

```c
typedef struct CSNode {
  ElementType data;
  struct CSNode *firstNode, *nextNode; // 第一个孩子和右兄弟结点
}CSNode, *CSTree;
```

### 树、森林、二叉树的转换

树 -> 二叉树 `左孩子 右兄弟`

### 树、森林、二叉树的遍历

| 树       | 森林    | 二叉树 |
| -------- | ------- | ------ |
| 先根     | 先序/根 | 先序   |
| **后根** | 中序/根 | 中序   |

## 哈夫曼树与哈夫曼编码 （0 左 1右)

- WPL(带全路径长度) = $\displaystyle\sum_{i=1}^n w_i(权值)l_i(路径长度，即经过的边数)$
- n个结点，构造哈夫曼树过程中 新建了 `n-1`个结点，哈夫曼树的总结点数为`2n-1`

### 定长编码

- 所有字符一定在相同的层，且都是叶结点 即(完全二叉树)

## 并查集

- 用 `双亲表示法`存储的树（森林）
- 每个子集以一棵树表示
- 用于实现克鲁斯卡尔算法
- 判断无向图的连通性
- Union 时间复杂度 O(n) 优化后 O($\log_{2}n$)
