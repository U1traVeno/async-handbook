# GitLab Handbook 相关内容导览

本文是研究材料，不是 Async Collaboration Handbook 的规范正文。GitLab 的做法只有在被写入具体 Handbook 页面后，才成为本项目当前做法。

本文是为 Async Collaboration Handbook 制作的筛选式目录。它回答两个问题：GitLab Handbook 中哪些内容与本项目有关，以及每一篇主要解决什么问题。调查于 2026-07-11 进行，核对的官方源码提交为 `9a74de2ef0b8eac0c5348f6120d91d8de487746a`。

这不是 GitLab Handbook 的完整目录，也不代表其中做法已经被本项目采纳。GitLab 官方源码快照包含约 4,100 个 Handbook 页面；本文按本项目边界筛出 70 余个高相关页面，并区分可直接借鉴的原则、需要改造的组织实践和仅供参考的平台案例。

## 主题目录

1. [Handbook 定位、编写与治理](#一handbook-定位编写与治理)
2. [人文关怀与协作价值](#二人文关怀与协作价值)
3. [远程优先与异步协作](#三远程优先与异步协作)
4. [沟通渠道、会议与信息边界](#四沟通渠道会议与信息边界)
5. [责任、决策与跨团队协作](#五责任决策与跨团队协作)
6. [Issue、任务与项目管理](#六issue任务与项目管理)
7. [Merge Request、Code Review 与 AI 协作](#七merge-requestcode-review-与-ai-协作)
8. [文档与知识管理](#八文档与知识管理)
9. [对本项目目录的启发](#对本项目目录的启发)

## 调查方法

本次调查同时使用了三类证据：

1. GitLab Handbook 官方源码仓库，用于核对真实目录、页面标题、正文和最近版本。
2. GitLab Handbook 官方站点映射与定向抓取，用于发现跨目录链接和已发布页面。
3. GitLab 官方开发文档，用于补足 Handbook 只引用而不重复说明的 Issue、Merge Request、Commit 和文档规范。

筛选标准是内容能否为平台无关的 IT 团队协作规范提供可迁移经验。薪资、法务、财务、招聘、销售、福利和 GitLab 产品内部运营默认排除；但与尊重、反馈、包容、心理安全和可持续工作有关的价值内容保留，因为它们直接影响协作质量。

借鉴等级：

- **A 直接借鉴**：核心原则与本项目目标基本一致，仍需用自己的语言重新论证。
- **B 改造后借鉴**：包含可迁移模式，但混有 GitLab 组织结构、价值体系或流程假设。
- **C 实现案例**：主要展示 GitLab、Slack、Zoom 等平台中的具体实现，不应上升为通用协议。

## GitLab Handbook 全站骨架

与本项目直接相关、已深入调查的区域：

- `about/`：Handbook 的定位、使用、贡献、编辑和维护。
- `values/`：协作、效率、包容、迭代和透明等行为原则。
- `company/culture/all-remote/`：远程优先、异步沟通、会议和文档优先。
- `communication/`：沟通渠道、写作、会议、聊天和信息保密等级。
- `leadership/` 与 `people-group/` 的少量页面：决策、DRI、冲突和心理安全。
- `engineering/workflow/`、`architecture/` 与 `ai/`：Issue、评审、迭代、决策文档和 AI 辅助开发。
- `product-development/how-we-work/` 与 `product/product-processes/`：工作项分流、职责和规划。
- `marketing/project-management-guidelines/`：Issue、Epic、看板、里程碑和承诺管理的完整案例。
- `support/knowledge-base/` 与 `support/workflows/`：知识生命周期和流程文档写法。

本轮排除的主要区域包括 `finance/`、`legal/`、`hiring/`、`people-policies/`、`sales/`、`customer-success/`、`resellers/`、大部分 `marketing/` 和具体产品团队页面。排除原因不是这些内容质量低，而是其规范对象属于公司经营或 GitLab 特有业务，超出本项目范围。

## 一、Handbook 定位、编写与治理

- **A · [About the Handbook](https://handbook.gitlab.com/handbook/about/)**：解释手册如何从十人团队起步，列出异步阅读、入职、跨团队理解、diff 传播和人人可贡献等优势，并强调所有内容始终是草稿。
- **A · [GitLab Handbook Usage](https://handbook.gitlab.com/handbook/about/handbook-usage/)**：系统说明 handbook-first、信息架构、流程变更、合并权限、内外部手册分界及日常使用方式。
- **A · [Contributing to the Handbook](https://handbook.gitlab.com/handbook/about/contributing/)**：给贡献者提供最短入口，说明小改动、网页编辑、完整开发流程及遇到问题时如何求助。
- **B · [Editing the Handbook](https://handbook.gitlab.com/handbook/about/editing-handbook/)**：覆盖 Markdown 编辑、创建 MR、预览、命名目录、移动页面、维护者和常见构建故障，工具细节较多。
- **C · [Practical Handbook Editing Tips](https://handbook.gitlab.com/handbook/about/editing-handbook/practical-handbook-edits/)**：介绍命令行搜索、批量替换和清理空白等维护技巧，可作为大型 Markdown 仓库操作案例。
- **A · [Handbook Style Guide](https://handbook.gitlab.com/handbook/about/style-guide/)**：把 Handbook 写作统一指向 GitLab 文档风格指南，体现“一处维护、其他位置引用”的做法。
- **A · [Handbook-first](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/)**：解释单一事实源、聊天内容过期、先写后传播以及从小范围开始建立 Handbook 的原因和方法。
- **A · [Shared Reality](https://handbook.gitlab.com/teamops/shared-reality/)**：用“共享现实”解释书面优先、单一事实源和决策不被最响亮声音主导；属于 GitLab TeamOps 官方资料。
- **B · [Contributing Guidelines](https://handbook.gitlab.com/docs/)**：Handbook 站点的开发贡献入口，说明目录、技术栈、测试与贡献路径，适合作为仓库治理参考。
- **C · [Handbook Development](https://handbook.gitlab.com/docs/development/)**：描述 Hugo、CI、lint、Review App、重定向和部署流程，是自动化质量保障的实现案例。
- **C · [Handbook Maintenance](https://handbook.gitlab.com/docs/development/maintenance/)**：说明 GitLab 如何用 CODEOWNERS、机器人和周期任务维护内容；本项目只借鉴自动化技巧，不采用逐页维护者制度。
- **B · [Handbook frontmatter](https://handbook.gitlab.com/docs/frontmatter/)**：列出标题、受控文档等页面元数据要求，可参考但不应在技术方案确定前照搬字段。

## 二、人文关怀与协作价值

- **B · [GitLab Values](https://handbook.gitlab.com/handbook/values/)**：用大量行为例子解释协作、结果、效率、包容、迭代和透明；品牌框架不必照搬，行为原则值得拆解。
  - [Collaboration](https://handbook.gitlab.com/handbook/values/#collaboration)：强调善意、友善、及时反馈、批评工作而非人、无责复盘、允许求助，以及协作不等于全员共识。
  - [Results for Customers](https://handbook.gitlab.com/handbook/values/#results)：强调以明确结果衡量工作而非在线时长，并用书面目标让优先级和责任可讨论。
  - [Efficiency](https://handbook.gitlab.com/handbook/values/#efficiency)：关注尊重他人时间、异步准备、避免不必要等待和采用简单方案，但需防止效率压过人的感受。
  - [Diversity, Inclusion & Belonging](https://handbook.gitlab.com/handbook/values/#diversity-inclusion)：要求包容表达、主动听取不同背景的声音，并为时区、语言和认知差异设计协作方式。
  - [Iteration](https://handbook.gitlab.com/handbook/values/#iteration)：倡导小步发布、具体提案和可逆决策，同时明确迭代不是降低质量、跳过文档或强迫加班。
  - [Transparency](https://handbook.gitlab.com/handbook/values/#transparency)：主张让工作和理由可见、承认错误并共享学习，但其公网优先边界需要按权限与隐私改造。
- **A · [Being Inclusive](https://handbook.gitlab.com/handbook/company/culture/inclusion/being-inclusive/)**：把包容落到积极倾听、复述确认、询问假设、及时解决误解和确保不同声音能够参与等行为。
- **B · [NeuroInclusion in Practice](https://handbook.gitlab.com/handbook/company/culture/inclusion/neurodiversity-and-neuroinclusion/neuroinclusion-in-practice/)**：提出障碍存在于系统而非个人，并用清晰加灵活的方式支持不同认知与沟通偏好。
- **A · [Psychological Safety](https://handbook.gitlab.com/handbook/leadership/emotional-intelligence/psychological-safety/)**：解释成员敢于提问、承认错误、表达异议和承担人际风险的条件，以及管理者如何营造安全环境。
- **B · [Managing Conflict](https://handbook.gitlab.com/handbook/leadership/managing-conflict/)**：比较竞争、回避、迁就、妥协和协作等冲突处理方式，并提供识别和缓和冲突的实践建议。
- **B · [Mental health in remote work](https://handbook.gitlab.com/handbook/company/culture/all-remote/mental-health/)**：讨论倦怠、孤立和焦虑，反对赞美长时间工作，要求表达容量、边界和现实预期。
- **B · [Identifying & Addressing Burnout](https://handbook.gitlab.com/handbook/leadership/managing-burnout/)**：帮助管理者识别倦怠信号、讨论工作边界和支持休息；健康信息与个体判断必须保持私密。

这些价值不适合被 Agent 转换成“善意分数”或“同理心评分”。Agent 可以指出人身标签、公开负面反馈、排他性语言或持续超负荷信号，但最终判断需要上下文和人类负责。

## 三、远程优先与异步协作

- **B · [All Remote](https://handbook.gitlab.com/handbook/company/culture/all-remote/)**：远程工作总入口，覆盖组织设计、文档、异步、会议、管理与风险，适合用作主题地图而非单篇规范。
- **A · [Asynchronous communication for remote work](https://handbook.gitlab.com/handbook/company/culture/all-remote/asynchronous/)**：定义异步工作、解释其收益，并讨论何时优先异步、何时同步交流更有效。
- **A · [All-Remote Meetings](https://handbook.gitlab.com/handbook/company/culture/all-remote/meetings/)**：把会议视为需要证明必要性的同步例外，要求议程、预读、记录、参与规则和会后沉淀。
- **A · [Live Doc Meetings](https://handbook.gitlab.com/handbook/company/culture/all-remote/live-doc-meetings/)**：用共享文档承载议程、预工作、同步记录和结论，使会议前后都能异步参与。
- **B · [Remote collaboration and whiteboarding](https://handbook.gitlab.com/handbook/company/culture/all-remote/collaboration-and-whiteboarding/)**：讨论远程高带宽协作和白板活动的准备、主持及产物保存，适合作为同步协作实现参考。
- **A · [What not to do when implementing remote](https://handbook.gitlab.com/handbook/company/culture/all-remote/what-not-to-do/)**：警告不要把办公室会议原样搬到线上，也不要假设所有人都有相同环境和远程经验。
- **B · [Scaling an all-remote team](https://handbook.gitlab.com/handbook/company/culture/all-remote/scaling/)**：从时区、知识传播和组织增长讨论远程规模化，值得提取“减少隐性上下文”的设计要求。
- **B · [Informal Communication](https://handbook.gitlab.com/handbook/company/culture/all-remote/informal-communication/)**：说明远程团队需要主动创造非工作交流和偶遇空间，但大量具体活动只适合作为可选案例。
- **B · [Being a great remote manager](https://handbook.gitlab.com/handbook/company/culture/all-remote/being-a-great-remote-manager/)**：强调管理者的可接近性、同理心、授权、记录方案和识别孤立或过劳，需去除岗位制度内容。
- **B · [Non-linear workday](https://handbook.gitlab.com/handbook/company/culture/all-remote/non-linear-workday/)**：讨论工作时间不必连续同步，启发团队明确响应预期而非默认成员随时在线。
- **B · [Remote Onboarding](https://handbook.gitlab.com/handbook/company/culture/all-remote/onboarding/)**：强调用文档、自助学习、入职伙伴和明确预期降低远程新人获取隐性信息的门槛。

## 四、沟通渠道、会议与信息边界

- **A · [GitLab Communication](https://handbook.gitlab.com/handbook/communication/)**：超长总纲，覆盖低上下文写作、渠道选择、MR/Issue、会议记录、简单语言、聊天和文档类型。
- **C · [GitLab Communication Chat](https://handbook.gitlab.com/handbook/communication/chat/)**：介绍 Slack 搜索、频道分类和团队频道组织，适合作为飞书等即时通讯平台的对照案例。
- **A · [Confidentiality levels](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/)**：在公开优先之外区分 public、internal 和 limited access，为信息可发现性设置清晰边界。
- **B · [Transparency by Default](https://handbook.gitlab.com/handbook/security/transparency-by-default/)**：展示安全团队如何在默认透明与法律、隐私、漏洞风险之间划界，可借鉴其“明确例外”结构。
- **B · [Deep Dives](https://handbook.gitlab.com/handbook/communication/deep-dives/)**：定义面向已有基础受众的深度知识分享，并规定准备材料、主持、录制和后续发布方式。
- **C · [Ask Me Anything](https://handbook.gitlab.com/handbook/communication/ask-me-anything/)**：提供开放问答与反向问答的议程、角色和异步收集问题方法，可作为透明沟通形式参考。
- **C · [GitLab Communication — Zoom](https://handbook.gitlab.com/handbook/communication/zoom/)**：集中描述视频会议工具规范，主要价值是展示平台落地应与通用会议协议分离。

## 五、责任、决策与跨团队协作

- **A · [Directly Responsible Individuals](https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/)**：定义 DRI 的决策责任、授权、反馈关系，并比较 DRI、RACI 和 DACI 的适用方式。
- **A · [Making Decisions](https://handbook.gitlab.com/handbook/leadership/making-decisions/)**：说明 DRI 如何收集意见后作出决定、贡献者如何参与，以及如何用书面提案协作和传播决定。
- **B · [Working Groups](https://handbook.gitlab.com/handbook/company/working-groups/)**：规定临时跨团队小组的角色、章程、协作规范、状态沟通、Issue/Epic 和解散条件。
- **B · [Product Development Roles and Responsibilities](https://handbook.gitlab.com/handbook/product-development/how-we-work/roles-and-responsibilities/)**：区分角色与责任，并用 who、what、why、how、when 组织跨职能活动的责任映射。
- **C · [Create decision-making process](https://handbook.gitlab.com/handbook/engineering/devops/create/decision-making-process/)**：展示具体工程团队如何把 DRI、数据、Issue 和 MR 组合成日常决策流程。
- **B · [Architecture Design Documents](https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/)**：以设计文档和决策记录保存技术背景、方案、影响与决定，可用于本项目的 Decision Record 设计。
- **A · [Root Cause Analysis](https://handbook.gitlab.com/handbook/engineering/workflow/root-cause-analysis/)**：说明无责根因分析如何收集事实、追溯机制、形成改进项并向相关成员传播结论。

## 六、Issue、任务与项目管理

- **B · [Engineering Workflow](https://handbook.gitlab.com/handbook/engineering/workflow/)**：大型工程工作流总页，涵盖 Issue、标签、排期、回退和跨团队工作；应拆取模式而非整体照搬。
- **B · [Issue Triage](https://handbook.gitlab.com/handbook/product-development/how-we-work/issue-triage/)**：定义部分与完整分流、优先级、严重度、重复项、过期项和发起者责任，产品标签需重新抽象。
- **C · [Using GitLab to plan work](https://handbook.gitlab.com/handbook/product/product-processes/planning-with-gitlab/)**：展示如何组合 Issue、Epic、Roadmap 和 Board 规划工作，是 Git 平台落地的完整案例。
- **B · [Project Management Guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/)**：把项目对象和层级关系集中成导航，虽源于营销团队，但结构可迁移到一般 IT 项目。
- **A · [Issues project management guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/issues/)**：要求使用模板、单一 DRI、持续更新描述和描述性标题，并讨论何时拆分任务。
- **B · [Epics project management guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/epics/)**：说明如何组织跨周期工作、父子关系、日期、健康状态和子 Issue 工作量。
- **B · [Issue and Kanban boards guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/boards/)**：区分工作流看板与迭代看板，讨论看板层级、范围和状态可视化。
- **B · [Milestones project management guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/milestones/)**：说明里程碑、迭代和 Backlog 的边界，以及名称、描述、负责人和历史记录。
- **B · [Labels project management guidelines](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/labels/)**：强调标签作用域、描述、命名分组、自动清理，以及废弃而非直接删除旧标签。
- **B · [Managing Commitment](https://handbook.gitlab.com/handbook/marketing/project-management-guidelines/commitment/)**：用明确响应、Issue 模板和状态标签管理请求承诺，减少“收到请求即等于承诺”的误解。
- **A · [Iteration](https://handbook.gitlab.com/handbook/engineering/workflow/iteration/)**：具体讲解如何通过水平或垂直切片缩小 MR，便于快速评审、反馈和回退。
- **B · [Measurement Clarity](https://handbook.gitlab.com/teamops/measurement-clarity/)**：强调指标定义、数据来源、更新节奏和解释责任，提醒团队不要用缺少上下文的数字评价协作。

## 七、Merge Request、Code Review 与 AI 协作

- **B · [Code Review Guidelines](https://handbook.gitlab.com/handbook/engineering/workflow/code-review/)**：定义 reviewer、maintainer、domain expert、Code Owner、周转时间和请假交接，角色细节需简化。
- **A · [Code Review Values](https://handbook.gitlab.com/handbook/engineering/workflow/reviewer-values/)**：讨论评审中的风险、速度、诚实、最坏情况分析、留出他人空间和如何处理 nitpick。
- **B · [AI-Assisted Development Playbook](https://handbook.gitlab.com/handbook/engineering/workflow/ai-assisted-development/)**：提出 AI 自主等级、约束与上下文分层、仓库事实源、自动维护和上下文控制等实践。
- **C · [AI Coding Code Review](https://handbook.gitlab.com/handbook/engineering/ai/ai-coding/code-review/)**：描述 GitLab 内部 AI 代码评审试点、参与方式和限制，可作为 Agent Review 实现案例。
- **B · [AI Catalog Group](https://handbook.gitlab.com/handbook/engineering/ai/ai-catalog/)**：团队页面明确优先异步、仅在异步低效时开会且记录会议，可作为 AI 团队工作约定案例。
- **C · [Distribution Team Merge Request Handling](https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/merge_requests/)**：展示团队如何规定 MR 负责人、标签、评审分配和响应 SLO，具体数值不宜通用化。

Handbook 在这些页面中经常把细节链接到 GitLab 官方开发文档。与本项目最相关的补充页面是：

- **B · [Issue workflow](https://docs.gitlab.com/development/contributing/issue_workflow/)**：说明何时建 Issue、如何描述问题、加标签、交叉链接和推动工作项生命周期。
- **B · [Merge request workflow](https://docs.gitlab.com/development/contributing/merge_request_workflow/)**：覆盖分支、Commit、MR 描述、Draft、评审、合并和后续处理，是完整工程实现参考。
- **A · [Code review guidelines](https://docs.gitlab.com/development/code_review/)**：从作者、reviewer 和 maintainer 三方说明评审准备、反馈表达、解决讨论和批准责任。
- **A · [Documentation](https://docs.gitlab.com/development/documentation/)**：定义文档作为单一事实源、文档随代码变更、目录结构、审阅和风格要求。

## 八、文档与知识管理

- **B · [Technical Writing](https://handbook.gitlab.com/handbook/product/ux/technical-writing/)**：描述技术写作团队的职责、协作流程和内容治理，团队结构特有但文档所有权模式可借鉴。
- **A · [Docs vs. Knowledge Articles](https://handbook.gitlab.com/handbook/support/knowledge-base/docs-vs-kb/)**：区分正式产品文档和问题导向知识文章，帮助判断一个答案应更新权威文档还是另建知识条目。
- **B · [Knowledge Base Workflow](https://handbook.gitlab.com/handbook/support/knowledge-base/knowledge-workflow/)**：定义知识文章创建、修改、批准和发布的生命周期，具体工具权限需要替换。
- **A · [Knowledge Article Review Process](https://handbook.gitlab.com/handbook/support/knowledge-base/article-review/)**：说明技术评审如何检查准确性、复现性和可读性，并把反馈返回作者。
- **B · [Knowledge Roles, Permissions, and Responsibilities](https://handbook.gitlab.com/handbook/support/knowledge-base/knowledge-roles/)**：区分贡献者、技术审阅者和知识负责人，为文档责任分层提供参考。
- **B · [Knowledge Base Style Guide](https://handbook.gitlab.com/handbook/support/knowledge-base/kb-style-guide/)**：规定标题、环境、现象、原因、解决方案和相关链接，适合问题解决型文档模板。
- **B · [Linking Knowledge to Support Tickets](https://handbook.gitlab.com/handbook/support/knowledge-base/knowledge-linking/)**：通过双向链接连接即时问题与长期知识，可迁移为消息、任务、Issue 和文档之间的溯源规则。
- **A · [Writing Workflows](https://handbook.gitlab.com/handbook/support/workflows/writing_workflows/)**：解释为什么流程文档需要背景、受众、步骤和示例，并提供从含糊表述改成可执行表述的案例。

## 对本项目目录的启发

GitLab 的相关内容并不是按“协作协议”组织，而是分散在文化、沟通、工程、产品、支持和领导力目录中。直接照搬会导致同一主题跨多个章节重复。因此，本项目更适合按协作对象重新组织：

1. 协作基础：共同上下文、信息边界、人文原则和 Agent 边界。
2. 沟通协议：消息、行动请求、反馈、分歧和同步升级。
3. 工作协议：Task、Issue、项目状态、责任和承诺。
4. 变更协议：Commit、PR/MR、Code Review 和发布前检查。
5. 决策协议：提案、DRI、决策记录、会议结论和无责复盘。
6. 知识协议：文档创建、权威来源、链接、审阅、维护和废弃。
7. 平台落地：在 Handbook 内隔离说明飞书、GitHub、GitLab、Gitea、Slack 等平台如何映射协议。
8. AI 使用：Skill 只规定 AI 如何查阅和引用 Handbook，具体分析与执行由 Agent 自身能力完成。

其中“人文原则”不应独立成为口号章节后便与流程脱离。反馈协议应体现批评工作而非人，会议协议应体现包容和时区公平，项目协议应避免用在线时长衡量贡献，Handbook 也应直接规定 Agent 不得进行人格判断和文化打分。

## 后续调查空白

- GitLab Handbook 的信息架构非常庞大，页面间存在历史累积和重复，本导览还未评估每一处冲突。
- GitLab 的 Commit 细则主要位于官方开发文档而非 Handbook，需要在设计 Commit Protocol 时单独深入调查。
- 当前 AI 页面集中在代码开发，对 Agent 如何审阅消息、任务、决策和文档的成熟经验较少，本项目需要自行设计。
- 飞书、中国团队的信息权限、即时沟通习惯和管理语境不能从 GitLab 样本直接推导，需要用本地案例验证。
