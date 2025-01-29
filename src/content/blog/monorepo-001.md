---
title: 使用pnpm-workspace搭建monorepo项目
author: caterpillar
pubDatetime: 2024-04-29T00:00:00
featured: false
draft: false
tags:
  - pnpm
  - monorepo
description: monorepo初体验
---

## 声明

对 monorepo 和 pnpm 不做过多解释
仅做 demo 项目的搭建，如有问题欢迎指出

## 初始化项目

### 搭建基本框架

```bash
$ pnpm init
```

创建 `pnpm-workspace.yaml`文件

定义 工作空间 的根目录，并能够使您从工作空间中包含 / 排除目录 。 默认情况下，包含所有子目录

```yaml
# pnpm-workspace.yaml
packages:
  # all packages in direct subdirs of packages/
  - "packages/*"
  # all packages in subdirs of components/
  - "components/**"
  # exclude packages that are inside test directories
  - "!**/test/**"
```

目录结构

```code
├── ...
├── package.json
├── pnpm-workspace.yaml
├── packages // 存放子项目
│   ├── foo
│   │   ├── package.json
│   │   └── ...
│   ├── bar
│   │   ├── package.json
│   │   └── ...
```

### 脚本设置

当您在项目中使用 pnpm 时，您不希望被其他人意外运行 npm install 或 yarn。
为了防止开发人员使用其他的包管理器，您可以将下面的这个 preinstall 脚本添加到您的 package.json：

```json
{
  "scripts": {
    ...省略
    "preinstall": "npx -y only-allow pnpm"
  }
}
```

现在，只要有人运行 npm install 或 yarn，就会发生错误并且不会继续安装。

如果您使用 npm v7，请改用 npx -y

## 安装依赖

> 使用工作空间搭建的项目，可以将公共依赖安装在根目录下，子项目中存放各自需要的依赖

### 公共依赖全局安装

```bash
  $ pnpm install @types/node -wD
```

在子项目 `package.json`文件中 声明使用公共依赖

```json
  "peerDependencies": {
    "@types/node": "*",
  }
```

### 指定 package 依赖安装

使用 `--filter`参数，对指定的`package`进行操作

[filter 参数文档](https://pnpm.io/zh/filtering)

```bash
  $ pnpm install echarts -D --filter foo
```

## 子项目之间互相引用

`foo 的 package.json`

```json
{
  ...省略,
  "name": "@foo/utils",
  "main": "index.js",
}
```

```js
// bar 中
import { add } from "@foo/utils";
```

`bar 的 package.json`

```json
  "dependencies": {
    "@foo/utils": "workspace:*"
  }
```

## 发布

[pnpm-changesets]!(https://pnpm.io/zh/using-changesets)

### 配置

要在 pnpm 工作空间上配置 changesets，将 changesets 作为开发依赖项安装在工作空间的根目录中：

```bash
$ pnpm add -Dw @changesets/cli

$ pnpm changeset init
```

### 添加新的 changesets

要生成新的 changesets，请在仓库的根目录中执行 `pnpm changeset`。 `.changeset` 目录中生成的 markdown 文件需要被提交到到仓库。

### 发布变更

- 1. 运行 `pnpm changeset version`。 这将提高先前使用 `pnpm changeset` （以及它们的任何依赖项）的版本，并更新变更日志文件。
- 2. 运行 `pnpm install`。 这将更新锁文件并重新构建包。
- 3. 提交更改。
- 4. 运行 `pnpm publish -r`。 此命令将发布所有包含被更新版本且尚未出现在包注册源中的包。

## 相关链接

[pnpm](https://pnpm.io/zh/workspaces)
[pnpm-changesets](https://pnpm.io/zh/using-changesets)
