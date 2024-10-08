---
title: 计算机网络
author: caterpillar
pubDatetime: 2024-05-24T00:00:00
featured: false
draft: false
tags:
  - 考研
  - 计算机网络
description: 计算机网络
---

ISO/OSI 模型

| -          | 传输单位 | 功能                                       | -   |
| ---------- | -------- | ------------------------------------------ | --- |
| 应用层     | -        | 用户界面                                   | -   |
| 表示层     | -        | 数据格式转换                               | -   |
| 会话层     | -        | 会话管理和同步                             | -   |
| 传输层     | TCP、UDP | 端到端、可靠传输、流量控制、差错控制       | -   |
| 网络层     | 数据报   | 流量控制、拥塞控制、差错控制、支持UDP、TCP | -   |
| 数据链路层 | 帧       | 点到点、成帧、差错控制、流量控制、传输管理 | -   |
| 物理层     | 比特     | 透明传输比特流                             | -   |

TCP/IP 模型

| -          | 主要协议        | 功能                                       | -   |
| ---------- | --------------- | ------------------------------------------ | --- |
| 应用层     | HTTP、DNS、SMTP | -                                          | -   |
| 传输层     | TCP、UDP        | 端到端、可靠传输、流量控制、差错控制       | -   |
| 网际层     | IP              | 流量控制、拥塞控制、差错控制、支持UDP、TCP | -   |
| 网络接口层 | 帧              | 点到点、成帧、差错控制、流量控制、传输管理 | -   |

## 1 概述

### 冲突域、广播域

1. 集线器hub 同一冲突域
2. 交换机Switch 同一广播域 隔离冲突域
3. 路由器router 隔离广播域

## 3 数据链路层

### GBN 后退N帧协议

1. 累计确认: 对某帧确认，表明此前所有的帧已正确无误收到.$R_3表示0 \sim 2 准确收到$
2. 发送窗口大小: 采用n位比特对帧编号，发送窗口尺寸为：$1 \sim 2^n - 1$

### 介质访问控制 MAC

- 静态划分信道

  1. 频分多路复用
  2. 时分
  3. 波分
  4. $码分^*$

- 动态分配信道
  1. 轮询 - 令牌传递协议 `无冲突`
  2. 随机访问介质访问控制 `会冲突`

#### 随机访问介质访问控制

1. ALOHA
2. CSMA
3. CSMA/CA `无线` `确认/重传 ARQ 确认后才发送下一帧`
4. CSMA/CD `有线`
   - 先听后发，边听边发，冲突停发，随机重发
   - 最大重传`16`次
   - 最短帧长 `64B`

## 4. 网络层

网络层: `数据平面`（转发）、`控制平面`（路由选择）

### 网络层协议

### SDN 软件定义网络

集中式控制，如果崩溃 整个网络受到影响

1. 可编程接口 `北向接口`
2. 控制、数据平面双向会话(Openflow协议)接口 `南向接口`
3. 内部控制器之间接口 `东西向接口`

### 拥塞控制

拥塞：通信子网中，分组过多，引起网络性能下降。

控制方法：

1. 开环: 尽量避免拥塞产生
2. 闭环: 发生拥塞时转移

### 路由算法: 静态(非自适应）、动态路由(自适应)

| -        | RIP        | OSPF         | BGP                                  |
| -------- | ---------- | ------------ | ------------------------------------ |
| 类型     | 内部       | 内部         | 外部                                 |
| 路由算法 | 距离-向量  | 链路状态     | 路径-向量                            |
| 传递协议 | UDP        | IP           | TCP                                  |
| 路径选择 | 最少跳数   | 代价最低     | 较好，非最佳                         |
| 交换结点 | 相邻       | 全部         | 相邻                                 |
| 交换内容 | 当前路由表 | 相邻链路状态 | 首次: 整个路由表，非首次: 变化的部分 |

#### 距离-向量路由算法 `与相邻结点通信` RIP

1. 应用层协议，基于UDP
2. 路径的代价（距离: 最多15跳）
3. 可能导致回路（慢收敛
4. 每30s广播一次 更新路由信息
5. 超过180s 未收到相邻路由器的信息 距离设置为16 （不可达

#### 链路状态路由算法 `与其他所有结点通信` OSPF

1. 采用dijkstra求最短路径
2. 路由信息变化时，泛洪 （广播）更新信息
3. 网络层协议
4. 每10s 相邻路由器hello 分组问候

### IPv4

IPv4分组的格式:

1.  固定部分 `20B`
2.  分片固定`8B倍数`
3.  `MUT` 最大传送单元

#### NAT 网络地址转换

私有IP网段

1. A: 10.0.0.0 ~ 10.255.255.255
2. B: 172.16.0.0 ~ 172.31.255.255
3. C: 192.168.0.0 ~ 192.168.255.255

目的地（处于内网时）路由器需要配置nat

#### CIDR 无分类编址

1. `全1 广播地址` `全0 网络地址`
2. {网络前缀，主机号}, 子网数 = $2^{子网数}$, 主机数 = $2^{主机号} - 2$

#### ARP 地址解析协议 [IP -> MAC]

若ARP缓存`没有`目标的IP地址，广播目的MAC地址为`全F的帧`, 对应主机收到后`单播`发送响应分组, 然后加入ARP缓存中。

#### DHCP 动态主机配置协议

1. `应用层`协议 基于`UDP`
2. C/S模式，回答报文: `提供报文`
3. DHCP动态获取ip时, 客户机发送 `DHCP发现`报文 `源地址0.0.0.0`, `目的地址255.255.255.255`

#### ICMP 网际控制报文协议

`差错控制`

1. 终点不可达
2. 源点抑制 `拥塞`
3. 时间超过
4. 参数问题 `首部字段不正确`
5. 改变路由 `重定向`

`询问报文`

#### 默认网关

1. 是IP地址
2. 与主机直接相连的路由器端口
3. 可能配置错误❎

### IPv6

1. 不允许分片
2. 首部必须8B整数倍
3. 目的地址: 单播、多播、广播
4. 连续0时，可以使用:: 缩写 （一个地址仅能一次）

### IP组播

1. 基于UDP
2. 使用`D类地址`
3. MAC地址中高 3位是厂商编号

## 5. 传输层

TCP 首部最短`20B`（`必须4B整数倍`），UDP首部`8B`（计算校验和增加12B伪首部)

### TCP

1. 连接点对点
2. 全双工通信

#### 连接管理

##### 3次握手

1. SYN = 1, seq = x
2. SYN = 1, ACK = 1, seq = y, ack = x+1
3. ACK = 1, seq = x+1, ack = y+1

##### 4次挥手

1. FIN = 1, seq = u
2. ACK = 1, seq = v, ack = u+1
3. FIN = 1, ACK = 1, seq = w, ack = u+1
4. ACK = 1, seq = u+1, ack = w+1（存活2MSL(最长报文寿命)后客户机才进入CLOSED状态）

#### 可靠传输

1. 保证有序
2. 默认`累计确认`
3. 重传: 连续收到3个1号冗余ACK，立即重传2号、超时

#### 流量控制

发送窗口大小 = min{接收窗口，拥塞窗口}

## 6. 应用层
