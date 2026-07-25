---
name: async-handbook-entry
description: "所有使用 Async Collaboration Handbook 的 Agent 的入口 Skill。描述如何定位、查阅、理解和引用 Handbook 章节。不保存正文规则，不替代 03-agent-indexing 中的通用边界。"
---

# Async Handbook Entry

本 Skill 是 Agent 使用 Async Collaboration Handbook 的工作入口。它不保存或改写章节内容，只说明查阅路径。

## 定位章节

1. 先阅读 [handbook/README.md](../handbook/README.md) 了解各章节的覆盖范围
2. 根据当前任务判断属于哪一类协作问题
3. 选择对应的章节阅读
4. 沿章节中的内部链接补齐上下文

## 理解规范

- 阅读整节内容后再引用，不要只匹配关键词
- 遇到不熟悉的术语，查阅 [13-glossary.md](../handbook/13-glossary.md)
- 规则冲突时回到 [01-async-principles.md](../handbook/01-async-principles.md) 检查上位原则
- 区分规范正文（协作要求和预期结果）与平台落地（具体工具操作）

## 引用方式

- 指向具体页面和标题，用自己的话说明为什么相关
- 引用的内容是基于某个历史版本时，说明版本或时间
- 不要因为结构信息（有/无某字段）就断言内容合规或不合规

## Handbook 未覆盖时

- 可以结合事实提出一般性建议，但必须与 Handbook 要求区分
- 不得借"最佳实践"之名创造组织尚未采用的义务
- 发现 Handbook 缺口时，按 [02-handbook-writing-guide.md](../handbook/02-handbook-writing-guide.md) 提交变更

## Skill 维护

- Handbook 结构变化（章节增删、路径变更）→ 更新本 Skill 中的查阅路径
- 规范含义变化 → 先修改 Handbook，再让 Agent 使用新版本
- 不把本 Skill 变成第二套规则

通用引用和判断边界见 [03-agent-indexing.md](../handbook/03-agent-indexing.md)，本 Skill 不重复。
