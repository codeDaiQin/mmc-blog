---
title: 考研笔记-6.图
author: caterpillar
pubDatetime: 2024-04-16T00:00:00Z
featured: false
draft: false
tags:
  - 考研笔记 408
  - 数据结构
description: 数据结构 图
---

# 考研笔记-图

## 图的定义

图G 由 顶点集V （vertex） 和 边集E （edge）组成 记为 $G = (V, E)$
用 `|V|` 表示图G中 边的个数 用`|E|` 表示图G中顶点的个数
用 V(G) 表示 图G中的 顶点集合 ...

## 图的基本概念

> #易错 连通分量（极大连通子图） 与 生成树 （极小连通子图）

1. 有向图: 弧(有向图的边$<v, w>$ 称为v到w的弧) 弧 != 路径
2. 无向图: `无向图的度之和 = 边数 * 2`
3. 简单图: 不存在重复边，不存在顶点到自身的边
4. 完全图（简单完全图）:
   - 对于无向图`(任意两点之间都存在边)`，|E| 的范围为 $[0, \tfrac{n(n-1)}{2}]$, 若有最大值条边的无向图称为完全图
   - 对于有向图`(任意两点之间都存在两条相反方向的弧度)`，|E| 的范围为 $[0, n(n-1)]$, 若有最大值条弧的有向图称为有向完全图
5. 子图:
   - 两个图 A = (V1, E1)、B = (V2, E2)，若 V2是V1的子集，E2是E1的子集，则称B是A的子图。
   - 若 V2 = V1，则称B是A的生成子图 （顶点相同）
6. 连通、连通图、连通分量 (无向图)
   - 若顶点v到顶点w之间有路径存在，则v和w是连通的
   - 若图G中任意两个顶点都是连通的，则图G称为连通图
   - `无向图`中的`极大连通子图`称为`连通分量`
7. 强连通图、强连通分量 (有向图):
   - 若顶点v到顶点w之间，顶点w到顶点v之间均有路径存在，则v和w是强连通的
   - `有向图`中的`极大强连图子图`称为有向图的强联通分量
8. 生成树、生成森林:
   - 连通图的生成树是包含全部顶点的`极小连通子图`，若有|V|个顶点，则有|E| = |V| - 1条边
   - 非连通图中 连通分量的生成树构成了非连通图的 生成森林
9. 顶点的度、入度和出度: 度 = 入度 + 出度
10. 边的权、网: 边上带权的图成为 带权图，也称网
11. 稠密图、稀疏图
12. 路径、路径长度、回路: 若有n个顶点，有大于n-1条边，此图一定有环
13. 简单路径: 路径序列中，顶点不重复出现的路径。
14. 简单回路: 除第一个和最后一个顶点外 其余顶点不重复出现的回路
15. 距离: 顶点u出发到顶点v的最短路径，若不存在路径则路径长度为$\infty$
16. 有向树: 一个顶点入度为0，其余顶点的入度均为1的有向图

## 图的基本操作

- 邻接矩阵 `Suitable for dense graphs` `表示方式唯一`
  - 结点数为 n 的图G=(V, E), 对应的邻接矩阵A是 $n\times{n}的二维数组$
  - A[i][j] = 1， ($V_i, V_j$)是E(G)中的边
  - A[i][j] = $W_{ij}$ (边对应的权值)， ($V_i, V_j$)是E(G)中的边。 否则为0或$\infty$
  - `无向图`的邻接矩阵是对称矩阵
- 邻接表 `Suitable for sparse graphs` `表示方式不唯一`

  - G 为 `无向图`时， 所需空间为 `O(|V| + 2|E|)`
  - G 为 `有向图`时， 所需空间为 `O(|V| + |E|)` ， 结点v出现的次数 = v的入度
  - 顶底表结点

  | 顶点域 | 边表头指针 |
  | ------ | ---------- |
  | data   | first_arc  |

  - 边表结点

  | 邻接点域 | 指针域   |
  | -------- | -------- |
  | adjvex   | next_arc |

- 十字链表 `针对有向图`

  - 弧结点

  | tail_vex | head_vex | tail_link | head_link | (info) |
  | -------- | -------- | --------- | --------- | ------ |

  - 顶点结点

  | data | first_in | first_out |
  | ---- | -------- | --------- |

- 邻接多重表 `针对无向图`

  - 边结点

  | i_vex | j_vex | i_link | j_link | (info) |
  | ----- | ----- | ------ | ------ | ------ |

  - 顶点结点

  | data | first_edge |
  | ---- | ---------- |

## 图的遍历

### 深度优先遍历 DFS

- 采用`邻接表`时 时间复杂度O(|V| + |E|) 空间复杂度 O(|V|)
- 采用`邻接矩阵`时 时间复杂度O($|V|^2$) 空间复杂度 O(|V|)
- 类似 树的先序遍历
- 针对`有向图` 可以判断是否存在`回路`
- 若一次遍历 访问所有顶点 则图是连通的
- 调用DFS 次数 等于 图的连通分量数

```c
   bool visited[MAX_VERTEX_NUM]; // 访问标记数组
   // 初始化
   for (int v = 0; v < G.vexnum; v++) visited[v] = false;

   void DFS_Traverse(Graph G) {

      for (int v = 0; v < G.vexnum; v++) if (!visited[v]) DFS(G, v);
   }

   void DFS(Graph G, int v) {
      visit(v);
      visited[v] = true;
      for (w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w)) {
         if (visited[w]) return;
         DFS(G, w);
      }
   }
```

- 时间复杂度 O(|V| + |E|)

### 广度优先遍历 BFS (breadth)

- 用辅助队列记忆正在访问节点的下一层
- 类似 树的层序遍历
- 采用`邻接表`时 时间复杂度O(|V| + |E|) 空间复杂度 O(|V|)
- 采用`邻接矩阵`时 时间复杂度O($|V|^2$) 空间复杂度 O(|V|)
- 求最短路径 `非带权或权值相同`

```c
   void BFS_Min_Distance(Graph G, int u) {
      // 初始化
      for (int i = 0; i < G.vexnum; i+=)
        d[i] = $\infty$; // d[i] 表示 u 到 i 的最短路径

      visited[u] = TRUE;
      d[u] = 0;
      EnQueue(Q, u);
      while(!isEmpty(Q)) {
         DeQueue(Q, u);
         // w 为 u 未访问的邻接顶点
         for (int w = FirstNeighbor(G, u); w >= 0; w = NextNeighbor(G, u, w)) {
            if (visited[w]) return;
            visited[w] = TRUE;
            d[w] = d[u] + 1; // 路径长度 + 1
            EnQueue(Q, w);
         }
      }
   }
```

## 图的应用

### 最小生成树

- 最小生成树`不是唯一`的
- 最小生成树的边的权值之和唯一，且最小

#### Prim算法

> 时间复杂度为 O($|V|^2$)，不依赖边，适用于边稠密图

1. 选择初始顶点加入集合T
2. 选择边权值最小的加入集合T
3. 重复第二步 直到全部顶点加入集合T

#### Kruskal算法

> 时间复杂度为 O($|E|\log_{2}{|E|}$), 适用于边稀疏图

1. 选取当前未被选取过且权值最小的边
2. 若该边依附的顶点已经在集合T中，则将此边加入集合T
3. 重复第二步 直到所有结点在一个连通分量上

### 最短路径

#### Dijkstra算法 `不适合负权值`

> 求某一结点 到其他结点的最短路径。 时间复杂度为 O($|V|^2$)

构造过程

- dist[] 数组 记录从源点$v_{0}$到其他各顶点当前最短的路径长度，
  - dist[i] = $v_{0}到v_{i}$ 有弧 ? 弧权值 : $\infty$
- path[] 数组 从源点到顶点i之间最短路径的前驱结点
- final[] 是否已经找到最短路径

- #### Floyd算法
  > 求任意两个结点之间的最短路径。时间复杂度为 O($|V|^3$) 空间复杂度为 O($|V|^2$)
- 写出邻接矩阵
- 依次允许 以$V_{0} \sim V_{k}$顶点作为中转

```c
   for (int k = 0; k < n; k++ { // 允许以Vk作为中转点
      // 遍历邻接矩阵
      for (int i = 0; i < n; i++ {
         for (int j = 0; j < n; j++ {
            // 比较 i直接到达j 和 经过k中转的大小
            if (A[i][j] > A[i][k] + A[k][j]) {
               A[i][j] = A[i][k] + A[k][j];  // 更新最短路径长度
               path[i][j] = k; // 更新前驱为中转点
            }
         }
      }
   }
```

### 有向无换图描述表达式

> 若一个有向图中不存在环。则称为有向无环图，DAG图

可以利用无环图，进行相同子式的共享

### 拓扑排序

> 若用DAG图表示工程，`顶点`表示`活动`, 用有向边表示必须先于的关系，记为AOV网

- 邻接表时 时间复杂度为 O(|V| + |E|) 邻接矩阵时 时间复杂度为 O($|V|^2$)

1. 从AOV网中选取一个没有前驱（入度为0）的顶点输出
2. 删除该顶点 以及 以该顶点为起点的有向边
3. 重复1、2步 直到AOV网为空，否则出现环

逆拓扑排序

1. 从AOV网中选取一个没有后继（出度为0）的顶点输出
2. 删除该顶点 以及 以该顶点为终点的有向边
3. 重复1、2步 直到AOV网为空

### 关键路径