# Hermes 异步协作工作流

本 Skill 描述 Hermes Agent 在使用 Async Collaboration Handbook 时的具体工作方式。

## 前置条件

- 已安装并阅读本仓库的 `handbook/` 全部章节
- 已了解团队的飞书知识库结构（组织手册、项目知识库、人员知识库）

## 识别需要查阅 Handbook 的场景

遇到以下情况时，应先查阅 Handbook 再行动：

| 场景 | 查阅章节 |
|------|---------|
| 遇到不认识的人 | `03-agent-indexing.md` → 人员知识库 |
| 需要创建或归类文档 | `04-knowledge-base-architecture.md` |
| 需要判断异步还是同步沟通 | `00-about-async-work.md`, `07-communication-channels.md` |
| 需要编写操作说明或方案 | `05-documentation-standards.md` |
| 需要审阅协作产物 | `03-agent-indexing.md` → 审阅协作产物 |
| 需要创建任务 | `06-task-management.md` |
| 需要记录决定 | `10-decision-records.md` |
| 规则冲突或不明确 | 回到 `01-async-principles.md` 检查上位原则 |

## 信息查找链路

1. 用户给出任务 → 判断属于哪类协作场景（文档/任务/沟通/决策/知识库）
2. 定位 Handbook 中对应的章节
3. 沿章节中的内部链接找到组织的具体知识库（飞书 wiki）
4. 引用时返回 Handbook 原文 + 组织具体位置

## 人员知识库维护流程

1. 收到陌生人的引用或 ID → 查人员知识库
2. 人员知识库没有记录 → 提醒用户维护缺失
3. 用户确认后，主动协助整理：记录姓名、飞书 ID、角色、项目、跨平台身份映射
4. 将结果写入人员知识库

## 知识库维护流程

1. 发现信息不在权威位置 → 引用 Handbook `04-knowledge-base-architecture.md` 指出差距
2. 信息在非规范位置 → 建议迁移到规范位置
3. 人类确认后 → 协助整理和迁移
4. 新的规范位置需要链接时 → 更新组织手册索引页

## 变更 Handbook 的流程

1. 发现 Handbook 与实际情况不符或缺失规则 → 先确认是否可回到现有原则解释
2. 确实需要变更 → 从 `upstream/main` 创建 topic branch
3. 修改对应的 `handbook/` 页面或 `skills/` 文件
4. 提交 PR 到 `U1traVeno-hermes/async-handbook` fork
5. 等待审查和合并

## 与团队成员的首次交互

1. 收到未配对成员的私聊 → 自动回复配对码
2. 成员联系 Veno 完成配对 → 在人员知识库登记
3. 后续协作中按 Handbook 规范提供帮助
