// 详情内容数据
const detailContent = {
    // 作品集详情
    portfolio: {
        1: {
            title: "企业官网设计",
            category: "网页制作",
            date: "2026-01-15",
            client: "某科技有限公司",
            description: "为客户打造的现代化企业官网，包含产品展示、新闻动态、关于我们等核心功能模块。网站采用响应式设计，确保在各种设备上都能获得良好的浏览体验。",
            features: [
                "响应式设计，适配各种设备",
                "现代化UI界面，符合企业品牌形象",
                "产品展示模块，支持多维度筛选",
                "新闻动态系统，支持内容管理",
                "联系表单，支持在线咨询",
                "SEO优化，提升搜索引擎排名"
            ],
            technology: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
            process: "项目采用敏捷开发方法，分为需求分析、设计、开发、测试、上线五个阶段。在设计阶段，我们与客户多次沟通，确保设计风格符合企业品牌形象；在开发阶段，我们注重代码质量和性能优化；在测试阶段，我们进行了全面的功能测试和兼容性测试，确保网站稳定运行。",
            result: "网站上线后，客户反馈良好，访问量和咨询量都有显著提升。网站的现代化设计和良好的用户体验得到了客户的高度认可。"
        },
        2: {
            title: "医疗健康App",
            category: "App开发",
            date: "2026-01-10",
            client: "某医疗科技公司",
            description: "一款专注于健康监测和医疗咨询的移动应用，支持iOS和Android平台。用户可以通过App记录健康数据、预约医生、在线咨询等。",
            features: [
                "健康数据监测（心率、血压、步数等）",
                "医生预约系统，支持在线挂号",
                "在线咨询功能，支持图文和语音",
                "健康报告生成，数据可视化展示",
                "用药提醒，定时通知",
                "医疗知识科普，定期更新"
            ],
            technology: ["React Native", "Redux", "Node.js", "MongoDB", "Express"],
            process: "项目采用跨平台开发方案，使用React Native框架确保在iOS和Android平台上都能获得原生应用体验。开发过程中，我们与医疗专家密切合作，确保功能设计符合医疗行业规范和用户需求。",
            result: "App上线后，下载量突破10万，用户评分4.8分（满分5分）。App的便捷功能和良好的用户体验得到了用户的广泛好评。"
        },
        3: {
            title: "电商平台开发",
            category: "网页制作",
            date: "2025-12-20",
            client: "某电商公司",
            description: "为客户开发的全功能电商平台，包含商品展示、购物车、支付、订单管理等核心功能。网站采用现代化设计，注重用户体验和转化率优化。",
            features: [
                "商品展示系统，支持多维度筛选",
                "购物车功能，支持商品管理",
                "多种支付方式集成",
                "订单管理系统，支持状态跟踪",
                "用户中心，支持个人信息管理",
                "评论系统，支持用户反馈"
            ],
            technology: ["Vue.js", "Vuex", "Vue Router", "Axios", "Element UI"],
            process: "项目采用前后端分离架构，前端使用Vue.js框架，后端使用Node.js和Express框架。开发过程中，我们注重性能优化和安全防护，确保网站在高并发情况下也能稳定运行。",
            result: "网站上线后，交易量稳步增长，用户满意度高。网站的流畅体验和便捷功能为客户带来了显著的商业价值。"
        },
        4: {
            title: "个人博客系统",
            category: "网页制作",
            date: "2025-12-10",
            client: "个人客户",
            description: "为客户开发的功能完善的个人博客系统，支持文章管理、评论、分类、标签等功能。博客采用现代化设计，注重内容展示和阅读体验。",
            features: [
                "文章管理系统，支持富文本编辑",
                "评论功能，支持用户互动",
                "分类和标签系统，便于内容组织",
                "搜索功能，支持关键词查找",
                "响应式设计，适配各种设备",
                "文章统计，查看阅读量"
            ],
            technology: ["React", "Redux", "React Router", "Firebase", "Material UI"],
            process: "项目采用React框架开发前端，使用Firebase作为后端服务。开发过程中，我们注重用户体验和性能优化，确保博客加载速度快、操作流畅。",
            result: "博客上线后，客户非常满意，认为功能完善、界面美观。博客的良好体验吸引了大量读者，文章阅读量持续增长。"
        },
        5: {
            title: "任务管理App",
            category: "App开发",
            date: "2025-11-25",
            client: "某科技公司",
            description: "一款帮助用户高效管理日常任务和项目的移动应用，支持任务创建、分配、跟踪等功能。App采用简洁直观的设计，注重用户体验。",
            features: [
                "任务创建和管理",
                "项目分组，便于组织",
                "任务分配，支持团队协作",
                "进度跟踪，实时更新",
                "提醒功能，避免遗漏",
                "数据统计，查看工作效率"
            ],
            technology: ["Flutter", "Dart", "Firebase", "Provider"],
            process: "项目采用Flutter框架开发，确保在iOS和Android平台上都能获得一致的用户体验。开发过程中，我们与目标用户密切沟通，不断优化功能设计和界面交互。",
            result: "App上线后，获得了用户的广泛好评，下载量快速增长。App的便捷功能帮助用户显著提高了工作效率。"
        },
        6: {
            title: "企业内部系统",
            category: "项目实施",
            date: "2025-11-10",
            client: "某大型企业",
            description: "为企业开发的内部管理系统，包含员工管理、考勤、审批、项目管理等功能。系统采用模块化设计，便于后续扩展和维护。",
            features: [
                "员工信息管理，支持增删改查",
                "考勤系统，支持打卡和请假",
                "审批流程，支持多级审批",
                "项目管理，支持进度跟踪",
                "数据统计，生成报表",
                "权限管理，确保数据安全"
            ],
            technology: ["Angular", "TypeScript", "Spring Boot", "MySQL", "Bootstrap"],
            process: "项目采用前后端分离架构，前端使用Angular框架，后端使用Spring Boot框架。开发过程中，我们与企业各部门密切合作，确保功能设计符合企业管理需求。",
            result: "系统上线后，企业管理效率显著提升，人工操作减少60%，审批流程时间缩短70%。系统的稳定运行和便捷功能得到了企业管理层的高度认可。"
        }
    },
    // 博客详情
    blog: {
        1: {
            title: "2026年前端开发趋势分析",
            date: "2026-02-15",
            category: "前端开发",
            content: [
                "随着技术的不断发展，前端开发领域也在持续演进。本文基于我5年的前端开发经验，分析2026年前端开发的主要趋势，包括新框架、新技术和最佳实践。",
                "## 1. 人工智能在前端的应用",
                "人工智能技术正在逐渐渗透到前端开发领域。未来，我们将看到更多的AI工具和库被用于前端开发，例如：",
                "- 智能代码生成：通过AI辅助编写代码，提高开发效率",
                "- 智能UI设计：AI根据用户需求自动生成UI设计方案",
                "- 智能测试：AI自动生成测试用例，提高代码质量",
                "- 智能性能优化：AI分析代码并提供优化建议",
                "## 2. 跨平台开发的进一步发展",
                "跨平台开发已经成为前端开发的重要趋势，2026年这一趋势将进一步加强：",
                "- React Native和Flutter等框架的成熟度不断提高",
                "- WebAssembly的广泛应用，提高Web应用性能",
                "- 统一的设计系统和组件库，减少平台差异",
                "- 更好的开发工具和调试体验",
                "## 3. 前端架构的演变",
                "前端架构也在不断演变，以适应日益复杂的应用需求：",
                "- 微前端架构的广泛应用，提高大型应用的可维护性",
                "- Server Components的普及，改善首屏加载性能",
                "- 边缘计算在前端的应用，减少延迟",
                "- 更注重可访问性和国际化",
                "## 4. 性能优化的重要性",
                "随着用户对体验要求的提高，性能优化将成为前端开发的核心竞争力：",
                "- 更先进的代码分割和懒加载技术",
                "- 更好的缓存策略和资源优化",
                "- 实时性能监控和分析工具",
                "- 对Core Web Vitals的持续关注",
                "## 5. 前端开发者的技能要求",
                "未来前端开发者需要掌握更多技能：",
                "- 全栈开发能力，了解前后端技术",
                "- 设计思维，注重用户体验",
                "-  DevOps技能，了解部署和运维",
                "- 持续学习能力，跟上技术发展步伐",
                "## 结论",
                "2026年前端开发将继续快速发展，新技术和新趋势不断涌现。作为前端开发者，我们需要保持学习的热情，不断提升自己的技能，以适应未来的挑战。"
            ]
        },
        2: {
            title: "移动应用开发最佳实践",
            date: "2026-02-10",
            category: "移动开发",
            content: [
                "基于我开发医疗健康App的实际经验，本文分享移动应用开发的最佳实践，包括性能优化、用户体验设计和应用发布策略。",
                "## 1. 性能优化",
                "移动设备的资源有限，性能优化是移动应用开发的关键：",
                "- 减少应用体积，优化包大小",
                "- 使用懒加载和代码分割，减少初始加载时间",
                "- 优化图片和资源，使用适当的格式和尺寸",
                "- 避免内存泄漏，及时释放资源",
                "- 使用缓存策略，减少网络请求",
                "## 2. 用户体验设计",
                "良好的用户体验是应用成功的关键：",
                "- 简洁直观的界面设计，减少学习成本",
                "- 响应迅速的交互，避免卡顿",
                "- 合理的导航结构，便于用户操作",
                "- 一致的设计语言，提高品牌认知",
                "- 适配不同屏幕尺寸，确保在各种设备上都有良好体验",
                "## 3. 应用架构",
                "良好的架构设计有助于提高代码质量和可维护性：",
                "- 采用模块化设计，便于代码组织",
                "- 使用状态管理库，管理应用状态",
                "- 实现清晰的代码分层，分离关注点",
                "- 编写可测试的代码，提高代码质量",
                "- 遵循设计模式，提高代码复用性",
                "## 4. 测试策略",
                "全面的测试有助于确保应用质量：",
                "- 单元测试，测试 individual components",
                "- 集成测试，测试组件间的交互",
                "- UI测试，测试用户界面",
                "- 性能测试，测试应用性能",
                "- 兼容性测试，确保在不同设备上正常运行",
                "## 5. 应用发布和维护",
                "成功的应用发布和维护策略：",
                "- 制定详细的发布计划，包括测试和推广",
                "- 收集用户反馈，持续改进应用",
                "- 定期更新应用，修复bug和添加新功能",
                "- 监控应用性能和崩溃情况",
                "- 制定应急响应计划，处理突发问题",
                "## 结论",
                "开发高质量的移动应用需要综合考虑多个因素，包括性能优化、用户体验设计、应用架构、测试策略和发布维护。通过遵循这些最佳实践，我们可以开发出更成功的移动应用。"
            ]
        },
        3: {
            title: "软件项目管理技巧分享",
            date: "2026-02-05",
            category: "项目管理",
            content: [
                "作为前端技术负责人，我参与了多个大型项目的管理工作。本文分享软件项目管理的实用技巧，帮助你更好地规划和执行项目。",
                "## 1. 项目规划",
                "良好的项目规划是成功的开始：",
                "- 明确项目目标和范围，避免范围蔓延",
                "- 制定详细的项目计划，包括里程碑和交付物",
                "- 识别项目风险，制定风险应对策略",
                "- 合理分配资源，确保项目顺利进行",
                "- 建立明确的沟通计划，确保信息畅通",
                "## 2. 团队管理",
                "高效的团队管理是项目成功的关键：",
                "- 建立清晰的团队结构和角色分工",
                "- 培养团队协作精神，促进知识共享",
                "- 定期举行团队会议，保持团队凝聚力",
                "- 提供必要的培训和支持，帮助团队成长",
                "- 建立积极的团队文化，提高团队士气",
                "## 3. 进度跟踪",
                "有效的进度跟踪有助于及时发现和解决问题：",
                "- 使用项目管理工具，如Jira、Trello等",
                "- 定期更新项目进度，确保信息及时准确",
                "- 举行每日站会，了解团队工作情况",
                "- 及时识别和解决项目瓶颈",
                "- 调整项目计划，适应变化的需求",
                "## 4. 质量管理",
                "高质量的产品是项目成功的标志：",
                "- 建立明确的质量标准和验收 criteria",
                "- 实施代码审查，提高代码质量",
                "- 进行全面的测试，确保产品质量",
                "- 收集用户反馈，持续改进产品",
                "- 建立质量保证流程，确保质量可控",
                "## 5. 沟通技巧",
                "有效的沟通是项目成功的基础：",
                "- 建立清晰的沟通渠道和机制",
                "- 保持透明的项目信息，及时共享进展",
                "- 倾听团队成员和 stakeholders 的意见",
                "- 采用简洁明了的沟通方式，避免误解",
                "- 定期向 stakeholders 汇报项目进展",
                "## 6. 变更管理",
                "有效的变更管理有助于应对项目变化：",
                "- 建立变更请求流程，规范变更管理",
                "- 评估变更对项目的影响，包括时间和成本",
                "- 获得必要的批准，确保变更合理",
                "- 调整项目计划，适应变更需求",
                "- 记录变更历史，便于追溯",
                "## 结论",
                "有效的软件项目管理需要综合运用多种技巧，包括项目规划、团队管理、进度跟踪、质量管理、沟通技巧和变更管理。通过不断学习和实践这些技巧，我们可以成为更优秀的项目管理者，提高项目成功率。"
            ]
        },
        4: {
            title: "网站性能优化实战",
            date: "2026-01-28",
            category: "前端开发",
            content: [
                "基于我优化企业官网的实际经验，本文分享网站性能优化的实战技巧，包括图片优化、代码分割、缓存策略、资源压缩等方面的具体实现方法和效果对比。",
                "## 1. 图片优化",
                "图片是网站加载速度的主要瓶颈之一：",
                "- 使用适当的图片格式：WebP格式比JPG小30%左右",
                "- 图片压缩：使用工具如TinyPNG压缩图片大小",
                "- 响应式图片：根据设备尺寸提供不同大小的图片",
                "- 懒加载：只加载可视区域内的图片",
                "- 使用CDN：加速图片加载速度",
                "## 2. 代码优化",
                "优化代码结构和体积：",
                "- 代码分割：将代码拆分为多个小块，按需加载",
                "- 树摇：移除未使用的代码",
                "- 压缩：使用UglifyJS等工具压缩代码",
                "- 模块化：使用ES6模块系统，提高代码可维护性",
                "- 减少第三方库：只引入必要的库，避免冗余",
                "## 3. 缓存策略",
                "合理使用缓存，减少重复请求：",
                "- 浏览器缓存：设置适当的Cache-Control和ETag头",
                "- Service Worker：实现离线缓存和资源预缓存",
                "- 本地存储：使用localStorage和sessionStorage缓存数据",
                "- 数据库缓存：使用IndexedDB存储大量数据",
                "- 服务器缓存：使用Redis等工具缓存API响应",
                "## 4. 网络优化",
                "改善网络请求和响应：",
                "- 使用HTTP/2：支持多路复用，减少连接数",
                "- 减少HTTP请求：合并文件，使用CSS sprites",
                "- 资源预加载：使用preload和prefetch预加载资源",
                "- 避免重定向：减少不必要的URL跳转",
                "- 使用CDN：分发静态资源，减少延迟",
                "## 5. 渲染优化",
                "提高页面渲染速度：",
                "- 减少DOM节点：简化HTML结构",
                "- 避免重排和重绘：优化CSS和JavaScript",
                "- 使用CSS animations：比JavaScript动画性能更好",
                "- 虚拟列表：处理长列表时使用虚拟滚动",
                "- Web Workers：将复杂计算移到后台线程",
                "## 性能测试和监控",
                "持续监控和改进网站性能：",
                "- 使用Lighthouse：评估网站性能、可访问性等",
                "- Web Vitals：关注核心性能指标",
                "- 实时监控：使用New Relic等工具监控网站性能",
                "- A/B测试：比较不同优化方案的效果",
                "- 用户体验监控：收集真实用户的性能数据",
                "## 结论",
                "网站性能优化是一个持续的过程，需要从多个方面入手。通过本文分享的实战技巧，你可以显著提高网站的加载速度和用户体验，从而提升网站的转化率和用户满意度。"
            ]
        },
        5: {
            title: "现代UI/UX设计原则",
            date: "2026-01-20",
            category: "设计",
            content: [
                "结合我多年的前端开发和设计经验，本文分享现代UI/UX设计的核心原则，包括简洁性、一致性、反馈机制、用户控制、可访问性等方面的设计理念和实践方法。",
                "## 1. 简洁性原则",
                "简洁的设计更易于理解和使用：",
                "- 减少视觉噪音：移除不必要的元素",
                "- 留白：使用适当的空白空间，提高可读性",
                "- 层次结构：建立清晰的视觉层次",
                "- 聚焦核心功能：突出最重要的内容和操作",
                "- 简化导航：减少导航层级，提高可发现性",
                "## 2. 一致性原则",
                "一致的设计提供可预测的用户体验：",
                "- 视觉一致性：使用统一的色彩、字体和图标",
                "- 交互一致性：相同的操作应有相同的反馈",
                "- 术语一致性：使用统一的术语和标签",
                "- 布局一致性：保持页面布局的一致性",
                "- 品牌一致性：符合品牌的视觉识别系统",
                "## 3. 反馈机制",
                "及时的反馈让用户知道操作的结果：",
                "- 操作反馈：按钮点击、表单提交等有明确反馈",
                "- 加载状态：显示加载动画，避免用户困惑",
                "- 错误提示：清晰的错误信息和解决建议",
                "- 成功提示：确认操作成功完成",
                "- 进度指示：显示任务完成的进度",
                "## 4. 用户控制",
                "让用户感觉能够控制界面：",
                "- 撤销/重做：允许用户纠正错误",
                "- 自由导航：用户可以自由浏览和返回",
                "- 个性化设置：允许用户自定义界面",
                "- 清晰的退出路径：用户可以轻松退出当前操作",
                "- 权限控制：用户了解并控制数据使用",
                "## 5. 可访问性",
                "设计应面向所有用户，包括残障人士：",
                "- 语义化HTML：使用正确的HTML标签",
                "- 键盘导航：支持完全通过键盘操作",
                "- 屏幕阅读器：兼容屏幕阅读器软件",
                "- 色彩对比度：确保文本和背景有足够对比度",
                "- 文本大小：允许用户调整文本大小",
                "## 6. 响应式设计",
                "适应不同设备和屏幕尺寸：",
                "- 流动布局：使用相对单位，适应不同宽度",
                "- 媒体查询：根据屏幕尺寸应用不同样式",
                "- 弹性图片：图片适应容器大小",
                "- 触摸友好：为触摸设备优化界面元素大小",
                "- 内容优先级：在小屏幕上优先显示重要内容",
                "## 7. 用户研究",
                "基于用户需求和行为设计：",
                "- 用户访谈：了解用户的需求和痛点",
                "- 可用性测试：观察用户使用产品的过程",
                "- 数据分析：分析用户行为数据",
                "- 竞品分析：了解行业最佳实践",
                "- 用户反馈：持续收集和分析用户反馈",
                "## 结论",
                "现代UI/UX设计不仅仅是关于美观，更是关于如何创建直观、高效、愉悦的用户体验。通过遵循这些核心原则，你可以设计出更符合用户需求的产品，提高用户满意度和产品价值。"
            ]
        },
        6: {
            title: "前端工程师的自我提升之路",
            date: "2026-01-15",
            category: "职业发展",
            content: [
                "基于我从初级前端到技术负责人的职业发展经验，本文分享前端工程师的自我提升之路，包括技术学习、项目经验积累、软技能培养、职业规划等方面的建议和方法。",
                "## 1. 技术学习",
                "持续学习是前端工程师的核心竞争力：",
                "- 基础理论：深入理解JavaScript、CSS、HTML等基础知识",
                "- 框架学习：掌握主流前端框架如React、Vue等",
                "- 工具链：熟悉构建工具、包管理器等开发工具",
                "- 性能优化：学习网站性能优化的方法和技巧",
                "- 安全知识：了解前端安全的常见问题和解决方案",
                "## 2. 项目经验",
                "通过实际项目积累经验和技能：",
                "- 参与大型项目：了解复杂系统的设计和开发",
                "- 独立负责模块：培养独立解决问题的能力",
                "- 重构代码：提高代码质量和可维护性",
                "- 技术选型：根据项目需求选择合适的技术栈",
                "- 解决技术难题：挑战自己，突破技术瓶颈",
                "## 3. 软技能培养",
                "软技能对职业发展同样重要：",
                "- 沟通能力：清晰表达技术想法和解决方案",
                "- 团队协作：与设计师、后端工程师等良好合作",
                "- 问题解决：分析问题，提出有效解决方案",
                "- 时间管理：合理安排工作时间，提高效率",
                "- 学习能力：快速适应新技术和新环境",
                "## 4. 知识分享",
                "分享知识不仅帮助他人，也提升自己：",
                "- 写技术博客：总结学习心得和项目经验",
                "- 开源贡献：参与开源项目，回馈社区",
                "- 技术演讲：在会议或公司内部分享技术",
                "-  mentoring：指导新人，巩固自己的知识",
                "- 技术社区：参与技术社区讨论，拓展人脉",
                "## 5. 职业规划",
                "明确职业目标，制定发展计划：",
                "- 技术专家：专注于技术深度，成为领域专家",
                "- 技术管理：转向管理岗位，领导技术团队",
                "- 全栈开发：拓展后端技能，成为全栈工程师",
                "- 技术创业：利用技术能力创办自己的事业",
                "- 技术教育：从事技术培训和教育工作",
                "## 6. 持续成长",
                "保持好奇心和学习动力：",
                "- 关注技术趋势：了解前端领域的最新发展",
                "- 参加技术会议：了解行业动态和最佳实践",
                "- 阅读技术书籍：系统学习技术知识",
                "- 在线课程：通过MOOC等平台学习新技术",
                "- 实践项目：通过个人项目实践新技术",
                "## 7. 工作态度",
                "专业的工作态度是成功的基础：",
                "- 责任心：对自己的代码和项目负责",
                "- 精益求精：追求代码质量和用户体验",
                "- 团队精神：重视团队目标，乐于助人",
                "- 积极主动：主动解决问题，提出改进建议",
                "- 抗压能力：在压力下保持冷静和高效",
                "## 结论",
                "前端工程师的自我提升是一个持续的过程，需要技术能力、项目经验、软技能和职业规划的全面发展。通过制定明确的目标，保持学习的热情，积极参与项目和社区，你可以在前端领域不断成长，实现自己的职业目标。"
            ]
        }
    }
};

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 移动端菜单切换
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // 关闭移动端菜单
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenu.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // 详情模态框功能
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.querySelector('.close-modal');
    
    // 为作品集项目的查看详情链接添加点击事件
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach((link, index) => {
        link.setAttribute('data-type', 'portfolio');
        link.setAttribute('data-id', index + 1);
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            showDetail(type, id);
        });
    });
    
    // 为博客文章的阅读更多链接添加点击事件
    const blogLinks = document.querySelectorAll('.blog-link');
    blogLinks.forEach((link, index) => {
        link.setAttribute('data-type', 'blog');
        link.setAttribute('data-id', index + 1);
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.getAttribute('data-type');
            const id = this.getAttribute('data-id');
            showDetail(type, id);
        });
    });
    
    // 显示详情
    function showDetail(type, id) {
        const content = detailContent[type][id];
        if (!content) return;
        
        let html = '';
        
        if (type === 'portfolio') {
            html = `
                <h2>${content.title}</h2>
                <div class="project-info">
                    <div class="info-item">
                        <span class="info-label">项目类别</span>
                        <span class="info-value">${content.category}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">完成日期</span>
                        <span class="info-value">${content.date}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">客户</span>
                        <span class="info-value">${content.client}</span>
                    </div>
                </div>
                <h3>项目描述</h3>
                <p>${content.description}</p>
                <h3>功能特性</h3>
                <ul>
                    ${content.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <h3>技术栈</h3>
                <ul>
                    ${content.technology.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
                <h3>开发过程</h3>
                <p>${content.process}</p>
                <h3>项目成果</h3>
                <p>${content.result}</p>
            `;
        } else if (type === 'blog') {
            html = `
                <h2>${content.title}</h2>
                <div class="project-info">
                    <div class="info-item">
                        <span class="info-label">发布日期</span>
                        <span class="info-value">${content.date}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">分类</span>
                        <span class="info-value">${content.category}</span>
                    </div>
                </div>
                ${content.content.map(paragraph => {
                    if (paragraph.startsWith('## ')) {
                        return `<h3>${paragraph.substring(3)}</h3>`;
                    } else if (paragraph.startsWith('- ')) {
                        return `<ul><li>${paragraph.substring(2)}</li></ul>`;
                    } else {
                        return `<p>${paragraph}</p>`;
                    }
                }).join('')}
            `;
        }
        
        modalBody.innerHTML = html;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // 关闭模态框
    function closeModalFunc() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunc();
        }
    });

    // 返回顶部按钮
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 技能条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.about-skills');
    
    function checkSkillsVisibility() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(skill => {
                        const width = skill.style.width;
                        skill.style.width = '0';
                        setTimeout(() => {
                            skill.style.width = width;
                        }, 300);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }
    
    checkSkillsVisibility();

    // 滚动动画
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .blog-post');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    }
    
    animateOnScroll();

    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // 模拟表单提交
            console.log('Form submitted:', formData);
            
            // 显示成功消息
            alert('消息已发送，我会尽快回复您！');
            
            // 重置表单
            contactForm.reset();
        });
    }

    // 鼠标悬停效果
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 服务卡片悬停效果
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.service-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // 博客文章悬停效果
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        post.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 联系项悬停效果
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // 平滑滚动到锚点
    function smoothScrollToAnchor() {
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                setTimeout(() => {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }, 300);
            }
        }
    }
    
    smoothScrollToAnchor();

    // 加载动画
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);
    
    // 页面加载完成后隐藏加载动画
    window.addEventListener('load', function() {
        setTimeout(() => {
            loading.classList.add('hidden');
            setTimeout(() => {
                loading.remove();
            }, 500);
        }, 800);
    });

    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // ESC键关闭移动端菜单
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // T键滚动到顶部
        if (e.key === 't' || e.key === 'T') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // 动态更新当前年份
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© ${currentYear} 李超个人博客. 保留所有权利.`;
    }
});

// 页面可见性API，优化性能
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // 页面可见时执行操作
        console.log('Page is now visible');
    } else {
        // 页面不可见时暂停动画等
        console.log('Page is now hidden');
    }
});

// 图片懒加载
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// 调用图片懒加载
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

// 错误处理
try {
    // 可能出错的代码
} catch (error) {
    console.error('Error:', error);
}

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('页面加载时间:', perfData.loadEventEnd - perfData.navigationStart, 'ms');
    });
}