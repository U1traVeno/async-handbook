import { defineConfig } from 'vitepress'

const sidebar = [
  {
    text: '开始阅读',
    items: [
      { text: 'Handbook', link: '/' },
      { text: '关于异步协作', link: '/00-about-async-work' },
      { text: '异步协作原则', link: '/01-async-principles' },
      { text: 'Handbook 编写规范', link: '/02-handbook-writing-guide' },
      { text: 'Agent 如何使用 Handbook', link: '/03-agent-indexing' }
    ]
  },
  {
    text: '知识与执行',
    items: [
      { text: '信息源与知识库架构', link: '/04-knowledge-base-architecture' },
      { text: '协作文档', link: '/05-documentation-standards' },
      { text: '任务发布与进度追踪', link: '/06-task-management' },
      { text: '沟通渠道', link: '/07-communication-channels' },
      { text: '项目计划与里程碑', link: '/08-project-milestones' }
    ]
  },
  {
    text: '团队协作',
    items: [
      { text: '会议', link: '/09-meetings' },
      { text: '决策记录与责任归属', link: '/10-decision-records' },
      { text: '组织运行节奏', link: '/11-operating-cadence' },
      { text: '入职、交接与知识传承', link: '/12-onboarding-handoffs' },
      { text: '术语表', link: '/13-glossary' }
    ]
  },
  {
    text: '项目资料',
    items: [
      { text: '研究材料', link: '/research/' },
      {
        text: 'GitLab Handbook 导览',
        link: '/research/gitlab-handbook-outline'
      }
    ]
  }
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'Async Handbook',
  description: '面向 IT 团队与 AI Agent 的异步协作规范',
  srcDir: 'handbook',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://handbook.v3n0.top'
  },
  rewrites: {
    'README.md': 'index.md',
    'research/README.md': 'research/index.md'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#176b55' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Handbook', link: '/' },
      { text: '原则', link: '/01-async-principles' },
      { text: '编写规范', link: '/02-handbook-writing-guide' },
      { text: '研究材料', link: '/research/' }
    ],
    sidebar,
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/U1traVeno/async-handbook/edit/main/handbook/:path',
      text: '在 GitHub 上编辑此页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/U1traVeno/async-handbook' }
    ],
    footer: {
      message: 'Handbook 的所有内容始终处于草稿状态并可以被修改。',
      copyright: 'Released under the MIT License.'
    }
  }
})
