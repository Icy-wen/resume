export type SocialIcon = "github" | "mail" | "linkedin" | "twitter" | "wechat" | "website";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export type ProjectCategory = "全栈" | "AI" | "前端" | "小程序" | "工具";

export interface ProjectItem {
  title: string;
  description: string;
  detail: string[];
  summary?: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
  sourceLink?: string;
  stars: number;
  role: string;
  period: string;
  images?: string[];
  qrCode?: string;
  featured: boolean;
  gradient: string;
}

export interface SkillGroup {
  category: string;
  tone: "pink" | "blue" | "green" | "yellow";
  items: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  slogan: string;
  tagline: string;
  about: string;
  skills: SkillGroup[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
  projects: ProjectItem[];
  contacts: SocialLink[];
  email: string;
  phone: string;
}

export const resume: ResumeData = {
  name: "I'm wen bing",
  title: "软件工程师 · Software Engineer",
  slogan: "AI-driven Developer",
  tagline: "以 AI 为翼 ✦",
  about:
    "江西财经大学软件工程专业（2022-2026），专业排名前10%，持有软件设计师证书及CET-6。以 AI 为主要生产力，熟练运用 Claude Code、Codex、Code Buddy等工具辅助完成需求拆解、代码开发与文档整理。有全栈项目开发经验，探索 Agent 搭建、RAG 等大模型技术在真实业务场景中的应用，并融入进自己的实际项目。",
  skills: [
    {
      category: "全栈技术",
      tone: "blue",
      items: [
        "熟悉微信小程序开发流程,有已上线项目",
        "熟悉 HTML、CSS、JavaScript等前端基础技术 ，了解 TypeScript",
        "熟练掌握 React 前端框架及其生态，能够独立完成基础页面和后台管理开发功能,有相关项目实战经历",
        "有全栈项目开发经验，了解 Node.js 开发 RESTful API 的流程",
        "熟悉MySQL基本操作，能编写常用SQL，了解Redis基本使用场景",
        "掌握Java基础，了解面向对象编程思想，使用过Spring Boot进行Web项目开发"
      ],
    },
    {
      category: "AI 工具链 & 辅助开发",
      tone: "pink",
      items: [
        "熟练运用 Claude Code、Codex、codebuddy 等 AI 工具辅助完成需求拆解与代码开发",
        "掌握 prompt engineering 与 vibe coding 技巧，善于用自然语言驱动 AI 高效产出",
        "能对 AI 生成的方案、代码和文档进行校验、修正和优化，确保结果准确可用",
      ],
    },
    {
      category: "工程化与部署",
      tone: "green",
      items: [
        "熟悉 Vite + TypeScript 前端工程化体系，能独立完成项目构建、打包与产物部署",
        "了解 Docker 容器化和Linux基本操作",
        "有 Web 应用部署上线经验，熟悉静态托管与云服务器（Nginx）交付流程",
      ],
    },
    {
      category: "大模型应用 & 智能化",
      tone: "yellow",
      items: [
        "了解大模型应用开发，拥有使用 Coze 打造工作流并集成到实际项目中的经验",
        "探索 Agent 搭建、RAG 等技术在真实业务场景中的应用，推动流程智能化",
        "在开发全过程中打磨交互细节，追求代码质量与用户体验的高标准",
      ],
    },
  ],
  experiences: [
    {
      role: "AI全栈开发工程师",
      company: "六角星科技",
      period: "2026.06",
      location: "江西",
      highlights: [
        "通过自然语言描述需求，驱动 AI (Claude Code、codex 、trae、Code Buddy)完成项目开发",
        "对 AI 生成的方案和代码进行校验、修正和优化，确保结果准确、可用且符合业务规范",
        "通过优化提示词测试不同AI工具结合skills、MCP探索AI高效高质量开发，深入理解项目开发全过程"
      ],
    },
  ],
  educations: [
    {
      school: "江西财经大学（Jiangxi University of Finance and Economics）",
      degree: "软件工程 · 本科",
      period: "2022.09 — 2026.06",
      detail: "学习了软件工程、数据库、计算机网络、操作系统、计算机组成原理、机器学习、人工智能基础等专业课程，专业排名前10%，持有软件设计师证书及CET-6；",
    },
  ],
  projects: [
    {
      title: "Planify · AI 智能日程规划",
      description: "基于 LLM Agent 的日程规划助手，自然语言对话驱动 AI 规划、拆分阶段、生成可执行日程，三层记忆系统越用越懂用户。",
      summary: "一款融合 LLM Agent 的智能日程规划应用。通过自然语言对话让 AI 理解用户习惯与偏好，自动拆解目标、生成可执行日程，并借助三层记忆系统和混合 RAG 检索持续优化规划质量，越用越懂用户。",
      detail: [
        "设计 LLM Agent 编排管线：记忆检索→RAG→LLM Function Calling 多轮循环→工具执行→记忆持久化，实现完整的感知-决策-执行闭环",
        "构建三层记忆系统：工作记忆、短期记忆、长期记忆，基于 LLM 聚合生成用户画像",
        "实现 RAG 混合检索：Milvus 向量检索 + MySQL 全文检索 + RRF 融合排序 + 重要性boost + 时间衰减，含三级降级（Milvus→内存向量→纯关键词）",
        "开发科学规划优化器：精力曲线匹配（16小时10级）、番茄钟拆分、艾宾浩斯间隔重复、认知负载评估、日负载均衡五级预警",
        "封装 22 个 Function Calling 工具（规划/日程/统计/记忆/网络搜索），搭配多级优雅降级确保服务稳定",
      ],
      tags: ["DeepSeek", "LLM Agent", "Milvus", "RAG", "Function Calling", "Koa2"],
      category: "AI",
      link: "https://planify-backend-302068-11-1327883604.sh.run.tcloudbase.com/",
      sourceLink: "https://github.com/Icy-wen/ai_plan",
      stars: 0,
      role: "独立全栈开发 & Agent 设计",
      period: "",
      featured: true,
      gradient: "from-[#C5B4FC] via-[#DDD6FE] to-[#EDE9FE]",
    },
    
    {
      title: "抗炎Life · 抗炎习惯养成",
      description: "微信小程序 AI 抗炎打卡，双引擎评分驱动四维习惯养成与跨设备同步。",
      summary: "基于《抗炎生活》理念的微信原生小程序。通过 AI 双引擎评分系统驱动饮食、运动、睡眠、情绪四维习惯打卡，结合个性化体质测评与健康报告，帮助用户科学建立抗炎生活方式。",
      detail: [
        "独立全栈开发微信原生小程序，完成多页面与云函数",
        "自研 AI 双引擎评分：本地公式即时算分 + 云端混元/OpenAI 双通道，AI 独立判断并在弱网降级，驱动四维打卡",
        "设计跨设备同步的智能合并规则，解决微信运动会话密钥的时序同步难点",
        "基于 DII 膳食炎症指数设计体质测评与 AI 个性化报告",
      ],
      tags: ["微信小程序", "CloudBase", "AI 评分引擎", "跨设备同步"],
      category: "小程序",
      qrCode: "kangyan-qrcode.png",
      sourceLink: "https://github.com/wen/kangyan-life",
      stars: 0,
      role: "独立全栈开发",
      period: "",
      featured: true,
      gradient: "from-[#afe4c3] via-[#A8C4A1] to-[#ffffff]",
    },
 
    
    {
      title: "宠物领养平台 PetAdopt",
      description: "React + Supabase 全栈宠物领养平台，双端独立部署，四套审核流程覆盖全业务闭环。",
      summary: "面向宠物领养送养的全栈 Web 平台，包含 C 端移动应用与管理后台双端。支持宠物浏览搜索、发布送养、领养申请、机构认证、申诉处理等完整业务闭环，基于 Supabase BaaS 实现零后端服务器部署。",
      detail: [
        "独立全栈搭建 9 表 PostgreSQL 数据模型，为每表设计 RLS 行级安全策略，精确控制 C 端用户与管理员的增删改查权限",
        "用 4 个数据库触发器和函数实现业务流程自动化：注册自动建 Profile、更新时间戳、领养申请自动生成记录、审批后自动写入领养时间",
        "C 端（TDesign Mobile + React Vant）17 页移动应用，含图片轮播、收藏分页加载、软删除等交互细节；管理后台（Ant Design）6 页含仪表盘、多维筛选审核与 4 套审核工作流",
        "Supabase Storage 管理头像/宠物图片/机构资质三桶分存，Auth 实现邮箱注册与密码重置",
      ],
      tags: ["React", "Supabase", "PostgreSQL", "RLS", "Ant Design", "Vite"],
      category: "全栈",
      sourceLink: "https://github.com/Icy-wen/PetAdopt",
      stars: 0,
      role: "独立全栈开发",
      period: "",
      featured: true,
      gradient: "from-[#FFD6A5] via-[#FDFFB6] to-[#ffffff",
    },
    
    {
      title: "低代码可视化搭建平台",
      description: "React 19 + TypeScript 低代码平台，拖拽组件快速搭建页面，物料区/画布区/属性配置区三大模块，非开发人员也能直接上手构建应用。",
      summary: "面向非开发人员的低代码可视化搭建平台。支持通过拖拽组件快速生成页面，包含物料区、画布区、属性配置区三大核心模块，实现组件拖拽、属性编辑、页面预览与结构可视化等完整能力。",
      detail: [
        "设计组件 JSON 数据模型，基于 Zustand 维护组件树，封装组件添加/删除/属性更新等核心方法，保证画布与数据的一致性",
        "基于 React-DnD 实现跨组件拖拽，封装 useMaterialDrop 钩子处理放置逻辑，支持嵌套容器拖拽",
        "封装递归渲染模块，用 React.createElement 动态生成页面结构，区分编辑/预览两种模式下的组件行为",
        "通过事件冒泡捕获组件点击，结合 Ant Design 表单开发属性编辑面板，支持样式与属性实时更新",
        "集成 Monaco Editor 实现源码预览，以树状图展示组件层级结构；用 Allotment 实现面板拖拽 resize",
      ],
      tags: ["React 19", "TypeScript", "Zustand", "React-DnD", "Ant Design", "Monaco Editor", "TailwindCSS"],
      category: "前端",
      sourceLink: "https://github.com/Icy-wen/Sugo-project",
      stars: 0,
      role: "前端开发",
      period: "",
      featured: true,
      gradient: "from-[#95e8f9] via-[#6baffd] to-[#ffffff]",
    },
    
  ],
  contacts: [
    { label: "GitHub", href: "https://github.com/Icy-wen", icon: "github" },
   
  ],
  email: "wenb19593@gmail.com",
  phone: "13576484183",
};
