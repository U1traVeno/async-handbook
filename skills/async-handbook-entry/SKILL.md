---
name: async-handbook-entry
description: Use when working on any team collaboration task — writing or reviewing documents, managing tasks, choosing communication channels, planning milestones, organizing meetings, recording decisions, onboarding or handing off work, structuring knowledge, proposing process changes, or reviewing PRs and issues. Consult the handbook before making collaboration decisions.
---

# Async Handbook Entry

在涉及团队协作的任务中，先查手册再行动。无论是写文档、发任务、选沟通渠道、安排会议、记录决定、做入职交接、整理知识库、提议流程变更，还是评审 PR 和 Issue——手册都有对应的规范可以告诉你团队当前采用的做法。

本 Skill 描述操作流程，不保存或改写章节内容。

## 操作流程

1. 先阅读 [目录](https://handbook.v3n0.top/raw/handbook/index.md) 了解各章节覆盖范围
2. 根据当前情况判断属于哪一类协作问题，选择对应章节
3. 阅读目标章节的完整内容，沿内部链接补齐相关上下文

遇到不熟悉的术语，查阅 [术语表](https://handbook.v3n0.top/raw/handbook/13-glossary.md)。

## 阅读手册的最佳方式

所有 Handbook 页面在 `https://handbook.v3n0.top/raw/` 下提供原始 Markdown 正文。Agent 应始终通过此路由访问手册。

### 始终从网络获取最新版本

Handbook 是一份持续修改的活文档，合并到主分支后立即生效。不要克隆仓库在本地阅读——本地副本会在下一次更新后过时。不要依赖训练数据或之前会话中读到的内容——手册随时可能被修改，你记忆中（或训练数据中）的版本可能已经不是当前规范。

每次引用手册时，都从网络获取对应页面，以获取时看到的正文为准。

### 链接补全

手册正文中的内部链接是 VitePress 格式的相对路径（如 `[术语表](13-glossary.md)`），不含 `/raw/` 前缀和 `.md` 扩展名。跟进这些链接时自行补全：将相对路径加上 `/raw/` 前缀和 `.md` 扩展名。例如正文中的 `[术语表](13-glossary.md)` 应解析为 `https://handbook.v3n0.top/raw/handbook/13-glossary.md`。

不要直接访问不带 `/raw/` 前缀的 VitePress 路由——那些页面包含 HTML 和导航结构，不适合直接消费。

## 查阅与引用

如何阅读规范、如何引用、Handbook 未覆盖时如何处理、Agent 的行动边界，见 [Agent 如何使用 Handbook](https://handbook.v3n0.top/raw/handbook/03-agent-indexing.md)。

## 维护

- Handbook 结构变化（章节增删、路径变更）时，更新本 Skill 中的路径引用
- 不把本 Skill 变成第二套规则
